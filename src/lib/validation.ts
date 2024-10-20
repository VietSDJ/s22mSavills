import { L, LError } from './abpUtility'
import { emailRegex, phoneRegex } from './appconst'
import { isNullOrEmpty } from './helper'

export const validateMessages = {
  get required() {
    return LError('REQUIRED_FIELD_{0}', '${label}')
  },
  types: {
    get email() {
      return LError('INVALID_FORMAT_{0}', '${label}')
    },
    get number() {
      return LError('{0}_INVALID_TYPE_{1}', '${label}', '${type}')
    },
    get float() {
      return LError('{0}_INVALID_TYPE_{1}', '${label}', '${type}')
    },
    get regex() {
      return LError('INVALID_FORMAT_{0}', '${label}')
    },
    get date() {
      return LError('INVALID_FORMAT_{0}', '${label}')
    },
    get url() {
      return LError('{0}_INVALID_TYPE_{1}', '${label}', '${type}')
    }
  },
  string: {
    get min() {
      return LError('MIN_FIELD_LENGTH_{0}', '${min}')
    },
    get max() {
      return LError('MAX_FIELD_LENGTH_{0}', '${max}')
    },
    get range() {
      return LError('{0}_FIELD_LENGTH_BETWEEN_{1}_AND_{2}', '${label}', '${min}', '${max}')
    } //'${label} must be between ${min} and ${max}',
  },
  number: {
    get min() {
      return LError('MIN_FIELD_LENGTH_{0}', '${min}')
    },
    get max() {
      return LError('MAX_FIELD_LENGTH_{0}', '${max}')
    },
    get range() {
      return LError('{0}_FIELD_LENGTH_BETWEEN_{1}_AND_{2}', '${label}', '${min}', '${max}')
    } //'${label} must be between ${min} and ${max}',
  },
  date: {
    get format() {
      return LError('INVALID_FORMAT_{0}', '${label}')
    },
    get parse() {
      return LError('INVALID_FORMAT_{0}', '${label}')
    },
    get invalid() {
      return LError('INVALID_FORMAT_{0}', '${label}')
    }
  },
  pattern: {
    get mismatch() {
      return LError('INVALID_FORMAT_{0}', '${label}')
    }
  }
}

export function checkMultiLanguageRequired(rule, value, label) {
  if (
    !value ||
    value.length < abp.localization.languages.length ||
    value.findIndex((language) => isNullOrEmpty(language.value)) !== -1
  ) {
    return Promise.reject(LError('REQUIRED_FIELD_{0}', L(label)))
  }
  return Promise.resolve()
}

export function checkMultiLanguageMaxLength(rule, value, label) {
  if (
    !value ||
    value.length < abp.localization.languages.length ||
    value.findIndex((language) => (language.value || '').length > rule.max) !== -1
  ) {
    return Promise.reject(LError('MAX_FIELD_LENGTH_{0}', rule.max))
  }
  return Promise.resolve()
}

export const checkPasswordRetype = ({ getFieldValue }) => ({
  validator(rule, value) {
    if (!value || getFieldValue('password') === value) {
      return Promise.resolve()
    }
    return Promise.reject(LError('PASSWORD_RETYPE_DO_NOT_MATCH')) // The two passwords that you entered do not match!'
  }
})

export function checkArrayRequired(rule, value, label) {
  if (!value || !value.length) {
    return Promise.reject(LError('REQUIRED_FIELD_{0}',  L(label)))
  }

  return Promise.resolve()
}

export function checkArrayPhone(rule, value, label) {
  if (!value || !value.length) {
    return Promise.resolve()
  }
  if (value.findIndex((phone) => isNullOrEmpty(phone.phone) || !phoneRegex.test(phone.phone)) !== -1) {
    return Promise.reject(LError('INVALID_FORMAT_{0}',  L(label)))
  }
  return Promise.resolve()
}

export function checkArrayEmail(rule, value, label) {
  if (!value || !value.length) {
    return Promise.resolve()
  }
  if (value.findIndex((email) => isNullOrEmpty(email.email) || !emailRegex.test(email.email)) !== -1) {
    return Promise.reject(LError('INVALID_FORMAT_{0}',  L(label)))
  }
  return Promise.resolve()
}

export function checkArrayCompany(rule, value, label) {
  if (!value || !value.length) {
    return Promise.resolve()
  }
  if (value.findIndex((company) => !company.companyId) !== -1) {
    return Promise.reject(LError('PLEASE_SELECT_{0}',  L(label)))
  }
  return Promise.resolve()
}

export function checkArrayOpportunityDepartment(rule, value, label) {
  if (!value || !value.length) {
    return Promise.resolve()
  }
  if (value.findIndex((company) => !company.organizationUnitId || !company.instructionId
    || (company.feeAmount < 0)) !== -1) {
    return Promise.reject(LError('PLEASE_SELECT_{0}',  L(label)))
  }
  return Promise.resolve()
}

export function checkArrayCommercialOpportunityDepartment(rule, value, label) {
  if (!value || !value.length) {
    return Promise.resolve()
  }
  if (value.findIndex((company) => !company.organizationUnitId
    || (company.feeAmount < 0)) !== -1) {
    return Promise.reject(LError('PLEASE_SELECT_{0}',  L(label)))
  }
  return Promise.resolve()
}
