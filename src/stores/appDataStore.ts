import { action, observable } from 'mobx'
import DEFAULT_CURRENCY from '@lib/appconst'
import groupBy from 'lodash/groupBy'
import appDataService from '@services/appDataService'
import { OtherTypeModel } from '@models/category'

class AppDataStore {
  @observable isLoading!: boolean
  @observable countries!: any
  @observable linkDashboard!: any
  @observable countryFull!: any
  @observable offices!: any
  @observable departments!: any
  @observable leadSources!: any
  @observable industries!: any
  @observable industriesLv1!: any
  @observable industriesLv2!: any
  @observable industriesLv3!: any
  @observable industriesLv4!: any
  @observable industriesLv5!: any
  @observable clientTypes!: any
  @observable otherTypes!: OtherTypeModel
  @observable opportunityCategories!: any
  @observable opportunityStatus!: any
  @observable opportunityStages!: any
  @observable advisoryStages!: any
  @observable commercialStages!: any
  @observable advisoryDealStatus!: any
  @observable commercialDealStatus!: any
  @observable unitCategories!: any
  @observable unitStatus!: any
  @observable unitTypes!: any
  @observable dealStages!: any
  @observable paymentStatus!: any
  @observable requestTypes!: any
  @observable positionLevels!: any
  @observable assetClass!: any
  @observable instructions!: any
  @observable exchangeRates!: any
  @observable facilityRequiredOption!: any
  @observable requiredAreaOption!: any
  @observable expctedLeasingPeriodOption!: any
  @observable requiredWorkerOption!: any
  @observable requiredPowerOption!: any
  @observable wasteOption!: any
  @observable capabilityOption!: any
  @observable utilityOption!: any
  @observable stateOption!: any
  @observable closingOption!: any
  @observable closingReasonOption!: any
  @observable statusOption!: any
  @observable facilityTypeOption!: any

  @observable regions!: any
  // Project
  @observable propertyTypes!: any
  @observable facilities!: any
  @observable grades!: any
  @observable transportations!: any
  @observable clients: any[] = []
  @observable contacts: any[] = []
  @observable inquiryTypes: any[] = []
  @observable inquirySources: any[] = []
  @observable inquiryStatus: any[] = []
  @observable provinceOption: any[] = []
  @observable districtOption: any[] = []
  @observable districtTypeOption: any[] = []
  @observable SubProjectGrades: any = []
  @observable listSectorGrade: any = []

  @observable ipTenantStatusOptions: any = []
  @observable sectors!: any
  @observable projectSubType!: any
  @observable subProjectSubTypeLv1!: any
  @observable subProjectSubTypeLv2!: any

  constructor() {
    this.otherTypes = new OtherTypeModel()
  }
  @action getInquirySourceAndStatus = async () => {
    const res = await appDataService.getInquirySourceAndStatus()
    this.inquirySources = res.filter((item) => item.code === 'InquirySource')
    this.inquiryStatus = res.filter((item) => item.code === 'InquiryStatus')
  }
  @action getInquiryTypes = async (keyword) => {
    const res = await appDataService.getInquiryTypes(keyword)
    this.inquiryTypes = res.filter((item) => item.code === 'ListingType')
  }
  @action getClients = async (keyword) => {
    this.clients = await appDataService.getClients(keyword)
  }
  @action getContacts = async (keyword) => {
    this.contacts = await appDataService.getContacts(keyword)
  }
  // @action getTransportations = async (keyword) => {
  //   this.transportations = (
  //     await projectService.getTransportation(keyword)
  //   ).data.result;
  // };
  @action
  async getLinkDashboard() {
    this.linkDashboard = await appDataService.getLinkDashboard()
  }

  @action
  async getCountries(params) {
    this.countries = await appDataService.getCountries(params)
  }

  @action
  async getRegions(params) {
    this.regions = await appDataService.getRegion(params)
  }
  @action
  async getLeadSources(params) {
    this.leadSources = await appDataService.getLeadSources(params)
  }

  @action
  async getIndustries(params) {
    this.industries = await appDataService.getListIndustry(params)
    this.industriesLv1 = (this.industries || []).filter(
      (item) => item.level === 1
    )
    this.industriesLv2 = (this.industries || []).filter(
      (item) => item.level === 2
    )
    this.industriesLv3 = (this.industries || []).filter(
      (item) => item.level === 3
    )
    this.industriesLv4 = (this.industries || []).filter(
      (item) => item.level === 4
    )
    this.industriesLv5 = (this.industries || []).filter(
      (item) => item.level === 5
    )
  }

  @action
  async getClientTypes(params) {
    this.clientTypes = await appDataService.getClientTypes(params)
  }

  @action
  async getOtherTypes(params) {
    const data = await appDataService.getOtherTypes(params)
    const groupData = groupBy(data, 'typeCode')
    this.otherTypes = OtherTypeModel.assign({
      requestTypes: groupData.RequestType,
      phoneTypes: groupData.PhoneType,
      contactTypes: groupData.ContactType,
      requestStatus: groupData.RequestStatus,
      requestSource: groupData.RequestSource,
      requestGrade: groupData.RequestGrade,
      requirementType: groupData.RequirementType
    })
  }

  @action
  async getAssetClass(params) {
    this.assetClass = await appDataService.getAssetClass(params)
  }

  @action
  async getInstructions(params) {
    this.instructions = await appDataService.getInstructions(params)
  }

  @action
  async getOpportunityCategories(params) {
    this.opportunityCategories = await appDataService.getOpportunityCategories(
      params
    )
    this.opportunityStages = (this.opportunityCategories || []).filter(
      (item) => item.typeCode === 'OpportunityStage'
    )
    this.opportunityStatus = (this.opportunityCategories || []).filter(
      (item) => item.typeCode === 'OpportunityStatus'
    )
    this.paymentStatus = (this.opportunityCategories || []).filter(
      (item) => item.typeCode === 'PaymentStatus'
    )
    this.dealStages = (this.opportunityCategories || []).filter(
      (item) => item.typeCode === 'DealStage'
    )
  }

  @action
  async getAdvisoryStage(params) {
    this.advisoryStages = await appDataService.getAdvisoryStage(params)
  }

  @action
  async getCommercialStage(params) {
    this.commercialStages = await appDataService.getCommercialStage(params)
  }

  @action
  async getAdvisoryDealStatus(params) {
    this.advisoryDealStatus = await appDataService.getAdvisoryDealStatus(params)
  }

  @action
  async getCommercialDealStatus(params) {
    this.commercialDealStatus = await appDataService.getCommercialDealStatus(
      params
    )
  }

  @action
  async getUnitCategories(params) {
    this.unitCategories = await appDataService.getUnitCategories(params)
    this.unitTypes = (this.unitCategories || []).filter(
      (item) => item.code === 'UnitType'
    )
    this.unitStatus = (this.unitCategories || []).filter(
      (item) => item.code === 'UnitStatus'
    )
  }

  @action
  async getPositionLevels(params) {
    this.positionLevels = await appDataService.getPositionLevels(params)
  }

  @action
  async getExchangeRate() {
    this.exchangeRates = await appDataService.getExchangeRates({
      basic: DEFAULT_CURRENCY
    })
  }

  @action
  async getCountryFull() {
    this.countryFull = await appDataService.getCountryFull({})
  }

  // Project
  @action
  async getPropertyTypes() {
    const res = await appDataService.getPropertyTypes({})
    this.propertyTypes = res
  }

  @action
  async getFacilities() {
    this.facilities = await appDataService.getFacilities({})
  }

  @action
  async getGrades() {
    this.grades = await appDataService.getGrades()
  }
  @action
  async getSelectOption(params) {
    const res = await appDataService.getRequiredAreaOption(params)
    this.facilityRequiredOption = res
    this.requiredAreaOption = res.filter(
      (item) => item.typeCode === 'RequiredArea'
    )
    this.expctedLeasingPeriodOption = res.filter(
      (item) => item.typeCode === 'ExpectedLeasingPeriod'
    )
    this.requiredWorkerOption = res.filter(
      (item) => item.typeCode === 'RequiredWorker'
    )
    this.requiredPowerOption = res.filter(
      (item) => item.typeCode === 'RequiredPower'
    )
    this.wasteOption = res.filter((item) => item.typeCode === 'Waste')
    this.capabilityOption = res.filter((item) => item.typeCode === 'Capability')
    this.utilityOption = res.filter((item) => item.typeCode === 'Utilities')
    this.stateOption = res.filter((item) => item.typeCode === 'Stage')
    this.closingOption = res.filter((item) => item.typeCode === 'Closing')
    this.closingReasonOption = res.filter(
      (item) => item.typeCode === 'ClosingReason'
    )
    this.statusOption = res.filter(
      (item) => item.typeCode === 'OpportunityStatus'
    )
    this.facilityTypeOption = res.filter(
      (item) => item.typeCode === 'FacilityType'
    )
  }

  @action async getProvince(keyword) {
    this.provinceOption = await appDataService.getProvinces(keyword)
  }
  @action async getDistrict(keyword) {
    this.districtOption = await appDataService.getDistricts(keyword)
  }
  @action async getDistrictType() {
    this.districtTypeOption = await appDataService.getDistrictTypes()
  }
  @action
  async getListSubProjectSubType() {
    this.projectSubType = await appDataService.getListSubProjectSubType()
    this.subProjectSubTypeLv1 = (this.projectSubType || []).filter(
      (item) => item.level === 1
    )
    this.subProjectSubTypeLv2 = (this.projectSubType || []).filter(
      (item) => item.level === 2
    )
  }
  @action getListSector = async () => {
    const res = await appDataService.getListSector()
    this.sectors = res
  }
  @action
  async getListSubProjectGrade() {
    this.isLoading = true
    let result = await appDataService.getListSubProjectGrade()
    this.SubProjectGrades = result
  }
  @action
  async getListSectorGrade(input) {
    this.isLoading = true
    let result = await appDataService.getListSectorGrade(input)
    this.listSectorGrade = result
  }
  @action async getListIPTenantStatus() {
    this.ipTenantStatusOptions = await appDataService.getListIPTenantStatus()
  }
}

export default AppDataStore
