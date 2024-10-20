import * as abpTypings from '../lib/abp'

import { L } from '../lib/abpUtility'
import { routers } from '../components/Layout/Router/router.config'
import { Language } from '../services/administrator/language/dto/language'
import { ASPECT_RATIO_16_10, ASPECT_RATIO_16_9, ASPECT_RATIO_4_3, DESKTOP_DEVICES } from 'src/constant'

declare var abp: any

class Utils {
  loadScript(url: string) {
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    document.body.appendChild(script)
  }

  extend(...args: any[]) {
    let options,
      name,
      src,
      srcType,
      copy,
      copyIsArray,
      clone,
      target = args[0] || {},
      i = 1,
      length = args.length,
      deep = false
    if (typeof target === 'boolean') {
      deep = target
      target = args[i] || {}
      i++
    }
    if (typeof target !== 'object' && typeof target !== 'function') {
      target = {}
    }
    if (i === length) {
      target = this
      i--
    }
    for (; i < length; i++) {
      if ((options = args[i]) !== null) {
        for (name in options) {
          src = target[name]
          copy = options[name]
          if (target === copy) {
            continue
          }
          srcType = Array.isArray(src) ? 'array' : typeof src
          if (
            deep &&
            copy &&
            ((copyIsArray = Array.isArray(copy)) || typeof copy === 'object')
          ) {
            if (copyIsArray) {
              copyIsArray = false
              clone = src && srcType === 'array' ? src : []
            } else {
              clone = src && srcType === 'object' ? src : {}
            }
            target[name] = this.extend(deep, clone, copy)
          } else if (copy !== undefined) {
            target[name] = copy
          }
        }
      }
    }

    return target
  }

  getPageTitle = (pathname: string) => {
    const route = Object.keys(routers).find(
      (route: any) => route.path === pathname
    )
    const localizedAppName = 'DASHBOARD'
    if (!route || route.length === 0) {
      return localizedAppName
    }
    return L(routers[route].title) + ' | ' + localizedAppName
  }

  getRoute = (path: string): any => {
    return routers[path]
  }

  setLocalization() {
    if (!abp.utils.getCookieValue('Abp.Localization.CultureName')) {
      let language = navigator.language
      abp.utils.setCookieValue(
        'Abp.Localization.CultureName',
        language,
        new Date(new Date().getTime() + 5 * 365 * 86400000),
        abp.appPath
      )
    }
  }

  getCurrentClockProvider(
    currentProviderName: string
  ): abpTypings.timing.IClockProvider {
    if (currentProviderName === 'unspecifiedClockProvider') {
      return abp.timing.unspecifiedClockProvider
    }

    if (currentProviderName === 'utcClockProvider') {
      return abp.timing.utcClockProvider
    }

    return abp.timing.localClockProvider
  }

  getLanguages(): Array<Language> {
    return abp.localization.languages.filter((val: any) => {
      return !val.isDisabled
    })
  }

  getCurrentDevice(width: any, height: any) {
    if (width <= 480) return "tablet";
    else if (width <= 1024) return "tablet";
    else {
      const aspectRatio = width / height;
      return DESKTOP_DEVICES[this.detectAspectRatio(aspectRatio)];
    }
  }

  detectAspectRatio(aspectRatio) {
    if (aspectRatio <= ASPECT_RATIO_4_3) return ASPECT_RATIO_4_3;
    else if (aspectRatio <= ASPECT_RATIO_16_10) return ASPECT_RATIO_16_10;
    else return ASPECT_RATIO_16_9;
  }
}

export default new Utils()
