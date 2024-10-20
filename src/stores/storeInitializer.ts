import RoleStore from './administrator/roleStore'
import TenantStore from './administrator/tenantStore'
import UserStore from './administrator/userStore'
import SessionStore from './sessionStore'
import AuthenticationStore from './authenticationStore'
import AccountStore from './accountStore'
import LanguageStore from './administrator/languageStore'

import StaffStore from './member/staff/staffStore'
import NewsStore from './communication/newsStore'
import FeedbackStore from './communication/feedbackStore'
import NewsCategoryStore from './communication/newsCategoryStore'
import AnnouncementStore from './communication/announcementStore'

import FileStore from './common/fileStore'
import AuditLogStore from './common/auditLogStore'
import CommentStore from './common/commentStore'

import NotificationTemplateStore from './notificationTemplate/notificationTemplateStore'
import TermConditionStore from './administrator/termConditionStore'
import ReminderStore from '@stores/common/reminderStore'

import PartnerStore from './member/partner/partnerStore'
import CustomerStore from './member/customer/customerStore'
import AppDataStore from './appDataStore'

import CampaignStore from './campaign/campaignStore'
import TargetStore from './campaign/targetStore'
import ProjectStore from './projects/projectStore'
import CompanyStore from './company/companyStore'
import RequirementStore from './projects/requirementStore'
import UnitStore from './projects/unitStore'
import ListingStore from './projects/listingStore'

import InquiryStore from './communication/inquiryStore'

import IndustrialStore from './industrail/industralStore'
import PeriodStore from './period/periodStore'
import LegalStore from './legal/legalStore'
import AmfmStore from './amfm/amfmStore'
import ConstructionStore from './construction/constructionStore'
import PhaseStore from './phase/phaseStore'
import IndustrialParkStore from './industrialPark/industialParkStore'
import EntityStore from './entity/entityStore'
import CapitalMarketStore from './capitalMarket/capitalMarketStore'

import ReportStore from './report/reportStore'

export default function initializeStores() {
  return {
    authenticationStore: new AuthenticationStore(),
    roleStore: new RoleStore(),
    tenantStore: new TenantStore(),
    userStore: new UserStore(),
    sessionStore: new SessionStore(),
    accountStore: new AccountStore(),
    languageStore: new LanguageStore(),
    appDataStore: new AppDataStore(),

    // masterDataStore: new MasterDataStore(),
    staffStore: new StaffStore(),
    partnerStore: new PartnerStore(),
    customerStore: new CustomerStore(),

    // News & Event
    newsStore: new NewsStore(),
    newsCategoryStore: new NewsCategoryStore(),
    feedbackStore: new FeedbackStore(),
    announcementStore: new AnnouncementStore(),

    auditLogStore: new AuditLogStore(),
    fileStore: new FileStore(),
    commentStore: new CommentStore(),
    notificationTemplateStore: new NotificationTemplateStore(),
    termConditionStore: new TermConditionStore(),
    reminderStore: new ReminderStore(),

    targetStore: new TargetStore(),
    campaignStore: new CampaignStore(),

    projectStore: new ProjectStore(),
    companyStore: new CompanyStore(),

    requirementStore: new RequirementStore(),
    unitStore: new UnitStore(),
    listingStore: new ListingStore(),
    inquiryStore: new InquiryStore(),

    industrialStore: new IndustrialStore(),

    periodStore: new PeriodStore(),

    legalStore: new LegalStore(),

    amfmStore: new AmfmStore(),
    capitalMarketStore: new CapitalMarketStore(),
    entityStore: new EntityStore(),
    constructionStore: new ConstructionStore(),
    phaseStore: new PhaseStore(),
    industrialParkStore: new IndustrialParkStore(),
    // Sector

    // ReportStore
    reportStore: new ReportStore()
  }
}
