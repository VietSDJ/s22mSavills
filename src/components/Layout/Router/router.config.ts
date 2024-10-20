import LoadableComponent from '../../Loadable'

import {
  IdcardOutlined,
  PieChartOutlined,
  ExceptionOutlined,
  LogoutOutlined,
  ProfileOutlined,
  RadarChartOutlined,
  TagsOutlined,
  UserOutlined,
  AppstoreOutlined,
  GoldOutlined
} from '@ant-design/icons'
import { appPermissions } from '@lib/appconst'

export const layouts: any = {
  userLayout: 'userLayout',
  portalLayout: 'appLayout',
  publicLayout: 'publicLayout'
}

export const layoutRouter: any = {
  userLayout: LoadableComponent(() => import('../UserLayout')),
  appLayout: LoadableComponent(() => import('../AppLayout')),
  publicLayout: LoadableComponent(() => import('../PublicLayout'))
}

export const publicLayout: any = {
  activeEmail: {
    path: '/public/active',
    title: 'ACTIVE_EMAIL',
    layout: layouts.userLayout,
    component: LoadableComponent(
      () => import('../../../scenes/public/active-email')
    )
  },
  termAndCondition: {
    path: '/public/terms-and-conditions',
    title: 'TERM_CONDITIONS',
    layout: layouts.userLayout,
    component: LoadableComponent(
      () => import('../../../scenes/public/term-condition')
    )
  }
}

export const userLayout: any = {
  landingPage: {
    path: '/landingpage',
    title: 'LANDING_PAGE',
    layout: layouts.userLayout,
    component: LoadableComponent(
      () => import('../../../scenes/accounts/Login/landing-page')
    )
  },
  accountLogin: {
    path: '/login',
    title: 'LogIn',
    layout: layouts.userLayout,
    component: LoadableComponent(() => import('../../../scenes/accounts/Login'))
  },
  forgotPassword: {
    path: '/account/forgot-password',
    title: 'FORGOT_PASSWORD',
    layout: layouts.userLayout,
    component: LoadableComponent(
      () => import('../../../scenes/accounts/ForgotPassword')
    )
  },
  resetPassword: {
    path: '/account/reset-password',
    title: 'RESET_PASSWORD',
    layout: layouts.userLayout,
    component: LoadableComponent(
      () => import('../../../scenes/accounts/ForgotPassword')
    )
  },
  register: {
    path: '/account/register',
    title: 'REGISTER_ACCOUNT',
    layout: layouts.userLayout,
    component: LoadableComponent(
      () => import('../../../scenes/accounts/Register')
    )
  },
  registerByOTP: {
    path: '/account/register-by-otp',
    title: 'REGISTER_ACCOUNT_BY_OTP',
    layout: layouts.userLayout,
    component: LoadableComponent(
      () => import('../../../scenes/accounts/Register/SMSRegisterAccount')
    )
  },
  registerPhoneForSocial: {
    path: '/account/register-phone-for-social',
    title: 'REGISTER_PHONE',
    layout: layouts.userLayout,
    component: LoadableComponent(
      () => import('../../../scenes/accounts/Register/RegisterPhoneForSocial')
    )
  }
  // resetPasswordEmployee: {
  //   path: '/account/employee/reset-password',
  //   title: 'RESET_PASSWORD',
  //   layout: layouts.userLayout,
  //   component: LoadableComponent(() => import('../../../scenes/accounts/ForgotPassword'))
  // },
  // resetPasswordPartner: {
  //   path: '/account/partner/reset-password',
  //   title: 'RESET_PASSWORD',
  //   layout: layouts.userLayout,
  //   component: LoadableComponent(() => import('../../../scenes/accounts/ForgotPassword'))
  // },

  // resetPasswordCustomer: {
  //   path: '/account/customer/reset-password',
  //   title: 'RESET_PASSWORD',
  //   layout: layouts.userLayout,
  //   component: LoadableComponent(() => import('../../../scenes/accounts/ForgotPassword'))
  // },
}

export const portalLayouts: any = {
  // Portal
  appSetting: {
    path: '/app-setting',
    permission: '',
    title: 'App Setting',
    name: 'APP_SETTING',
    layout: layouts.portalLayout,
    icon: LogoutOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/appSetting/AppSetting')
    )
  },
  accountLogout: {
    path: '/logout',
    permission: '',
    title: 'Logout',
    name: 'LOGOUT',
    layout: layouts.portalLayout,
    icon: LogoutOutlined,
    component: LoadableComponent(() => import('../../Logout'))
  },
  accountConfigMyProfile: {
    path: '/account-config/my-profile',
    permission: '',
    title: 'My Profile',
    name: 'MY_PROFILE',
    layout: layouts.portalLayout,
    // icon: LogoutOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/accounts/AccountConfig/MyProfile')
    )
  },
  accountConfigChangePassword: {
    path: '/account-config/change-password',
    permission: '',
    title: 'Change Password',
    name: 'CHANGE_PASSWORD',
    layout: layouts.portalLayout,
    // icon: LogoutOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/accounts/AccountConfig/ChangePassword')
    )
  },
  accountConfigHistory: {
    path: '/account-config/history',
    permission: '',
    title: 'History',
    name: 'HISTORY',
    layout: layouts.portalLayout,
    // icon: LogoutOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/common/Exception')
    )
  },
  accountConfigSavedShortcuts: {
    path: '/account-config/saved-shortcuts',
    permission: '',
    title: 'Saved Shortcuts',
    name: 'SAVED_SHORTCUTS',
    layout: layouts.portalLayout,
    // icon: LogoutOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/common/Exception')
    )
  },
  accountConfigChatWithSupport: {
    path: '/account-config/chat-with-support',
    permission: '',
    title: 'Chat with support',
    name: 'CHAT_WITH_SUPPORT',
    layout: layouts.portalLayout,
    // icon: LogoutOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/common/Exception')
    )
  },
  accountConfigSendFeedback: {
    path: '/account-config/send-feedback',
    permission: '',
    title: 'Send Feedback',
    name: 'SEND_FEEDBACK',
    layout: layouts.portalLayout,
    // icon: LogoutOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/common/Exception')
    )
  },
  accountConfigSetting: {
    path: '/account-config/setting',
    permission: '',
    title: 'Setting',
    name: 'SETTING',
    layout: layouts.portalLayout,
    // icon: LogoutOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/common/Exception')
    )
  },
  exception: {
    path: '/exception',
    permission: '',
    title: 'exception',
    name: 'EXCEPTION',
    layout: layouts.portalLayout,
    icon: ExceptionOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/common/Exception')
    )
  },
  dashboard: {
    path: '/dashboard',
    name: 'DASHBOARD',
    permission: '',
    title: 'Dashboard',
    layout: layouts.portalLayout,
    icon: PieChartOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/common/DashboardBI')
    )
  },

  // reports
  reportAdmin: {
    path: '/reportsManagement',
    name: 'REPORTS',
    permission: appPermissions.report.page,
    title: 'Reports',
    layout: layouts.portalLayout,
    component: LoadableComponent(
      () => import('../../../scenes/reportManagement')
    )
  },
  reportDetail: {
    path: '/reports-detail/:id',
    name: 'REPORT_DETAIL',
    permission: appPermissions.report.detail,
    layout: layouts.portalLayout,
    icon: IdcardOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/reportManagement/detail')
    )
  },
  reportCreate: {
    path: '/reports-create',
    name: 'REPORT_CREATE',
    permission: appPermissions.report.create,
    layout: layouts.portalLayout,
    icon: IdcardOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/reportManagement/detail')
    )
  },

  // report user
  reportUser: {
    path: '/reportsUser',
    name: 'REPORTS_USER',
    permission: appPermissions.report.page,
    // quyền report user riêng
    title: 'Reports',
    layout: layouts.portalLayout,
    component: LoadableComponent(() => import('../../../scenes/reportForUser'))
  },
  reportUserDetail: {
    path: '/report-user-detail/:id',
    name: 'REPORTS_USER_DETAIL',
    permission: appPermissions.report.detail,
    layout: layouts.portalLayout,
    icon: IdcardOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/reportForUser/detail')
    )
  },

  notification: {
    path: '/user-notification',
    name: 'USER_NOTIFICATION',
    permission: '',
    title: 'User Notification',
    layout: layouts.portalLayout,
    icon: RadarChartOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/common/Notification')
    )
  },

  // Staff
  staffManagement: {
    path: '/staffs',
    name: 'STAFF_MANAGEMENT',
    permission: appPermissions.staff.page,
    layout: layouts.portalLayout,
    icon: IdcardOutlined,
    component: LoadableComponent(() => import('../../../scenes/member/staff'))
  },
  staffCreate: {
    path: '/staff-create',
    name: 'STAFF_MANAGEMENT_CREATE',
    permission: appPermissions.staff.create,
    layout: layouts.portalLayout,
    icon: IdcardOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/member/staff/StaffDetail')
    )
  },

  staffDetail: {
    path: '/staff-detail/:id',
    name: 'STAFF_MANAGEMENT_DETAIL',
    permission: appPermissions.staff.detail,
    layout: layouts.portalLayout,
    icon: IdcardOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/member/staff/StaffDetail')
    )
  },

  customerCompanyManagement: {
    path: '/customer-company',
    name: 'INVETMENT_MANAGEMENT',
    title: 'INVETMENT_MANAGEMENT',
    permission: appPermissions.staff.page,
    layout: layouts.portalLayout,
    icon: GoldOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/customer/company')
    )
  },

  customerStaffManagement: {
    path: '/customer-staff',
    name: 'CUSTOMER_STAFF_MANAGEMENT',
    title: 'CUSTOMER_STAFF_MANAGEMENT',
    permission: appPermissions.staff.page,
    layout: layouts.portalLayout,
    icon: IdcardOutlined,
    component: LoadableComponent(() => import('../../../scenes/customer/staff'))
  },

  // Admin
  adminUser: {
    path: '/users',
    permission: appPermissions.adminUser.page,
    title: 'Users',
    name: 'ADMINISTRATION_USER',
    layout: layouts.portalLayout,
    icon: UserOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/administrator/Users')
    )
  },
  adminRole: {
    path: '/roles',
    permission: appPermissions.adminRole.page,
    title: 'Roles',
    name: 'ADMINISTRATION_ROLE',
    layout: layouts.portalLayout,
    icon: TagsOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/administrator/Roles')
    )
  },
  adminTenants: {
    path: '/tenants',
    permission: appPermissions.adminTenant.page,
    title: 'Tenants',
    name: 'ADMINISTRATION_TENANT',
    layout: layouts.portalLayout,
    icon: AppstoreOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/administrator/Tenants')
    )
  },
  adminLanguages: {
    path: '/language',
    permission: appPermissions.adminLanguage.page,
    title: 'Languages',
    name: 'ADMINISTRATION_LANGUAGE',
    layout: layouts.portalLayout,
    icon: AppstoreOutlined,
    component: LoadableComponent(
      () => import('../../../scenes/administrator/Languages')
    )
  },
  adminLanguageTexts: {
    path: '/language-text/:id',
    permission: appPermissions.adminLanguage.changeText,
    title: 'ADMINISTRATION_LANGUAGE_TEXT',
    name: 'ADMINISTRATION_LANGUAGE_TEXT',
    layout: layouts.portalLayout,
    icon: AppstoreOutlined,
    component: LoadableComponent(
      () =>
        import(
          '../../../scenes/administrator/Languages/components/languageTexts'
        )
    )
  },

  //Entity
  entityManagement: {
    path: '/entity',
    name: 'ENTITY',
    permission: appPermissions.entityManagement.page,
    layout: layouts.portalLayout,
    icon: ProfileOutlined,
    component: LoadableComponent(() => import('../../../scenes/entity'))
  }
}

export const routers: any = {
  ...userLayout,
  ...portalLayouts
}

export const appMenuGroups: any = [
  // {
  //   name: 'DASHBOARD_GROUP',
  //   isGroup: true,
  //   children: [routers.dashboard]
  // },
  // {
  //   name: 'USER_MANAGEMENT_GROUP',
  //   isGroup: true,
  //   children: [routers.staffManagement]
  // },
  {
    name: 'REPORT_GROUP',
    isGroup: true,
    permission: '',
    children: [routers.reportAdmin, routers.reportUser]
  },

  {
    name: 'ADMINISTRATION_GROUP',
    isGroup: true,
    children: [
      routers.adminRole,
      // routers.adminLanguages,
      routers.staffManagement
    ]
  }
]

export const accountMenuGroups: any = [
  routers.accountConfigMyProfile,
  routers.accountConfigChangePassword
]
