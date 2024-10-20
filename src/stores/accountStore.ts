import { action, observable } from 'mobx'

import IsTenantAvaibleOutput from '../services/account/dto/isTenantAvailableOutput'
import accountService from '../services/account/accountService'
import ForgotPasswordModel, {ResetPasswordModel} from '@models/account/ForgotPassword/forgotPasswordModel'
import tokenAuthService from '@services/tokenAuth/tokenAuthService'
import AppConsts from '@lib/appconst'

class AccountStore {
  @observable isLoading!: boolean
  @observable tenant: IsTenantAvaibleOutput = new IsTenantAvaibleOutput()
  @observable forgotPasswordModel: ForgotPasswordModel = new ForgotPasswordModel()
  @observable ownProjects: any = []
  @observable project: any = {}

  get projectId() {
    return this.project?.id || 0
  }
  @action
  public isTenantAvailable = async (tenancyName: string) => {
    this.tenant = await accountService.isTenantAvailable({ tenancyName: tenancyName })
  }

  @action
  public async requestForgotPassword(model: ForgotPasswordModel) {
    let result = true
    this.isLoading = true
    await accountService.forgotPassword(model).catch((err) => {
      result = false
    }).finally(() => this.isLoading = false)

    return result
  }

  @action
  public async resetPassword(model: ResetPasswordModel) {
    let result = true
    this.isLoading = true
    await accountService.resetPasswordUser(model).catch((err) => {
      result = false
    }).finally(() => this.isLoading = false)

    return result
  }

  @action
  async getOwnProjects(params: any) {
    params.maxResultCount = 1000
    params.isActive = true
    params.sorting = 'Name ASC'
  }

  @action
  async changeProject(project) {
    let result = await tokenAuthService.switchProject(project.id).finally(() => this.project = project)
    let tokenExpireDate = new Date(new Date().getTime() + 1000 * result.expireInSeconds)
    abp.auth.setToken(result.accessToken, tokenExpireDate)
    abp.utils.setCookieValue(
      AppConsts.authorization.encrptedAuthTokenName,
      result.encryptedAccessToken,
      tokenExpireDate,
      abp.appPath,
      undefined,
      {Secure: true}
    )
  }
}

export default AccountStore
