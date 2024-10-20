import AppConsts, { AppConfiguration } from './../lib/appconst'
import { LError } from '@lib/abpUtility'
import { notifyError } from '@lib/helper'
import axios from 'axios'
const { authorization } = AppConsts
const qs = require('qs')

declare var abp: any

const http = axios.create({
  baseURL: AppConfiguration.remoteServiceBaseUrl,
  timeout: 30000,
  paramsSerializer: function (params) {
    return qs.stringify(params, {
      encode: false
    })
  }
})

http.interceptors.request.use(
  function (config) {
    if (!!abp.auth.getToken()) {
      config.headers.common['Authorization'] = 'Bearer ' + abp.auth.getToken()
    }

    config.headers.common['.AspNetCore.Culture'] = abp.utils.getCookieValue(
      'Abp.Localization.CultureName'
    )
    config.headers.common['Abp.TenantId'] = abp.multiTenancy.getTenantIdCookie()
    config.headers.common['TargetApplication'] =
      authorization.targetApplication || 1
    config.params = {
      ...(config.params || {}),
      culture: abp.utils.getCookieValue('Abp.Localization.CultureName') || 'vi'
    }
    //

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    return response
  },
  (res) => {
    if (res?.response?.status === 401) {
      abp.utils.deleteCookie(
        AppConsts.authorization.encrptedAuthTokenName,
        abp.appPath
      )
      abp.utils.deleteCookie(AppConsts.authorization.projectId, abp.appPath)

      localStorage.clear()
      sessionStorage.clear()
      abp.auth.clearToken()
      window.location.href = '/account/login'
    }
    const { error } = res?.response?.data || {}
    if (!error) {
      notifyError(LError('UNKNOW_ERROR'), '')
      return Promise.reject(error)
    }

    if (!!error.message && error.details) {
      notifyError(error.message, error.details)
    } else if (error.message) {
      notifyError(LError('REQUEST_ERROR'), error.message)
    }

    return Promise.reject(error)
  }
)

export default http
