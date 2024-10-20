import { action, observable } from 'mobx'
import firebase from 'firebase'
import { GetCurrentLoginInformations } from '../services/session/dto/getCurrentLoginInformations'
import sessionService from '../services/session/sessionService'
import userService from '../services/administrator/user/userService'
import { compressImage } from '../lib/helper'
import AppConsts, { firebaseConfig } from '@lib/appconst'
import tokenAuthService from '../services/tokenAuth/tokenAuthService'
import {
  AppSettingConfiguration,
  HostSettingConfiguration
} from '@models/global'
import { userLayout } from '@components/Layout/Router/router.config'
const { authorization } = AppConsts

const defaultAvatar = '/assets/images/logo.svg'
class SessionStore {
  @observable currentLogin: GetCurrentLoginInformations =
    new GetCurrentLoginInformations()
  @observable profilePicture!: string
  @observable appSettingConfiguration!: AppSettingConfiguration
  @observable ownProjects: any = []
  @observable project: any = {}
  @observable hostSetting!: HostSettingConfiguration

  constructor() {
    this.project = {}
    this.appSettingConfiguration = new AppSettingConfiguration()
  }

  get projectId() {
    return parseInt(
      (localStorage.getItem(authorization.projectId) || 0).toString()
    )
  }

  @action async updateUsername(body) {
    await sessionService.updateUsername(body)
    await this.getCurrentLoginInformations()
  }
  @action async getHostSetting() {
    const res = await sessionService.getHostSetting()
    this.hostSetting = res
    return res
  }
  @action async changeHostSetting(body) {
    const res = await sessionService.changeHostSetting(body)
    this.hostSetting = res
    return res
  }

  @action
  async getCurrentLoginInformations() {
    let result = await sessionService.getCurrentLoginInformations()
    this.currentLogin = result
  }

  @action
  async getWebConfiguration() {
    let result = await sessionService.getWebConfiguration()
    this.appSettingConfiguration = result
  }

  @action
  async getMyProfilePicture() {
    let result = await userService.getMyProfilePicture()
    this.profilePicture = result || defaultAvatar
  }

  @action
  async uploadMyProfilePicture(file) {
    let compressedImage = await compressImage(file, 1024)
    let result = await userService.uploadProfilePicture(compressedImage)
    return result
  }

  @action
  async updateMyProfilePicture(data) {
    await userService.updateMyProfilePicture(data)
    await this.getMyProfilePicture()
  }

  @action
  async updateMyProfile(data) {
    await userService.updateMyProfile(data)
    // if ((this.currentLogin.user.phoneNumber !== data.phoneNumber) || (this.currentLogin.user.emailAddress !== data.emailAddress)) {
    //   await staffService.sendActiveEmail(this.currentLogin.user.id)
    // }
    this.currentLogin.user = { ...this.currentLogin.user, ...data }
  }

  @action
  async logout() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error)
      })
    abp.utils.deleteCookie(
      AppConsts.authorization.encrptedAuthTokenName,
      abp.appPath
    )
    abp.utils.deleteCookie(AppConsts.authorization.projectId, abp.appPath)

    localStorage.clear()
    sessionStorage.clear()
    abp.auth.clearToken()

    window.location.href = '/account' + userLayout.accountLogin.path
  }

  @action
  async getOwnProjects(params: any) {
    params.maxResultCount = 1000
    params.isActive = true
    params.sorting = 'Name ASC'
    // this.ownProjects = await projectService.filterOptions(params)
    this.project = (this.ownProjects || []).find(
      (item) => item.id === this.projectId
    )
  }

  @action
  async changeProject(project) {
    if (!project) {
      return
    }
    let result = await tokenAuthService
      .switchProject(project.id)
      .finally(() => (this.project = project))
    let tokenExpireDate = new Date(
      new Date().getTime() + 1000 * result.expireInSeconds
    )
    abp.auth.setToken(result.accessToken, tokenExpireDate)
    abp.utils.setCookieValue(
      AppConsts.authorization.encrptedAuthTokenName,
      result.encryptedAccessToken,
      tokenExpireDate,
      abp.appPath,
      undefined,
      { Secure: true }
    )

    localStorage.setItem(authorization.projectId, project.id)
  }
}

export default SessionStore
