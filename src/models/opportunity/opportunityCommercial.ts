import { RowData } from '@models/DataTable'
import moment from 'moment-timezone'

export interface IRowOpportunityCommercial {
  businessName: string
  legalName: string
  companyId: number
  contactName: string
  contactId: number
  amount: number
  allDepartment: string
  allService: string
  statusName: string
  stageName: string
  probability: string
  contract: string
  expectedCloseDate: Date
  sourceName: string
  clientTypeName: string
  primaryAssetClassName: string
  primaryInstructionName: string
  description?: string
  phone?: string
  emailAddress?: string
  website?: string
  vatCode?: string
  parentId?: number
  parentBusinessName?: string
  parentLegalName?: string
  leadSourceName?: string
}

export class RowOpportunityCommercialModel
  extends RowData
  implements IRowOpportunityCommercial
{
  id?: number
  name?: string
  businessName: string
  legalName: string
  companyId: number
  contactName: string
  contactId: number
  amount: number
  projects: any[]
  allDepartment: string
  allService: string
  statusName: string
  stageName: string
  probability: string
  contract: string
  expectedCloseDate: Date
  sourceName: string
  clientTypeName: string
  primaryAssetClassName: string
  primaryInstructionName: string
  isActive?: boolean
  lastModificationTime?: string
  lastModifierUserId?: number
  creationTime?: Date
  creatorUserName?: string
  constructor() {
    super()
    this.businessName = ''
    this.legalName = ''
    this.companyId = 0
    this.contactName = ''
    this.contactId = 0
    this.amount = 0
    this.projects = []
    this.allDepartment = ''
    this.allService = ''
    this.statusName = ''
    this.stageName = ''
    this.probability = ''
    this.contract = ''
    this.expectedCloseDate = new Date()
    this.sourceName = ''
    this.clientTypeName = ''
    this.primaryAssetClassName = ''
    this.primaryInstructionName = ''
  }

  public static assign(obj) {
    if (!obj) return undefined

    let newObj = Object.assign(new RowOpportunityCommercialModel(), obj)
    const primaryContact = (obj.opportunityContact || []).find(
      (p) => p.isActive && p.isPrimary
    )
    newObj.name = obj.opportunityName
    newObj.contactId = primaryContact?.contactId
    newObj.contactName = primaryContact?.contactName
    newObj.department = obj.organizationUnitName
    newObj.projects = obj.project
    newObj.allDepartment = (obj.opportunityOrganizationUnit || []).map(
      (p) => p.organizationUnitName
    )
    newObj.allService = (obj.opportunityOrganizationUnit || []).map(
      (p) => p.instructionName
    )
    newObj.probability = `${obj.probability} %`
    newObj.percentCompleted = `${obj.percentCompleted} %`
    newObj.contract = obj.contractNumber
    newObj.expectedCloseDate = obj.expectedCloseDate
      ? moment(obj.expectedCloseDate)
      : null
    return newObj
  }

  public static assigns<T>(objs) {
    let results: any[] = []
    objs.forEach((item) => results.push(this.assign(item)))
    return results
  }
}

export class OpportunityCommercialDetailModel extends RowData {
  opportunityContact: any[]
  opportunityLeadIds?: any[]
  opportunityUserIds?: any[]
  company: any
  projectIds?: any[]
  assetClassIds?: any[]
  expectedCloseDate?: Date
  constructor() {
    super()
    this.opportunityContact = []
  }

  public static assign(obj) {
    if (!obj) return undefined

    let newObj = Object.assign(new OpportunityCommercialDetailModel(), obj)
    newObj.opportunityLeadIds = (obj.opportunityLead || []).map(
      (item) => item.userId
    )
    newObj.opportunityUserIds = (obj.opportunityUser || []).map(
      (item) => item.userId
    )
    newObj.company = { id: obj.companyId, businessName: obj.companyName }
    newObj.projectIds = (obj.project || []).map((item) => item.projectId)
    newObj.assetClassIds = (obj.assetClass || []).map(
      (item) => item.assetClassId
    )
    newObj.expectedCloseDate = obj.expectedCloseDate
      ? moment(obj.expectedCloseDate)
      : undefined

    return newObj
  }

  public static assigns<T>(objs) {
    let results: any[] = []
    objs.forEach((item) => results.push(this.assign(item)))
    return results
  }
}

export interface IDepartmentServiceFee {
  id?: number
  opportunityId?: number
  organizationUnitId?: number
  instructionId?: number
  isActive: boolean
  isPrimary: boolean
  feeAmount?: number
}

export class DepartmentServiceFee implements IDepartmentServiceFee {
  id?: number
  opportunityId?: number
  organizationUnitId?: number
  instructionId?: number
  isActive: boolean
  isPrimary: boolean
  feeAmount?: number

  constructor(isPrimary?) {
    this.opportunityId = undefined
    this.organizationUnitId = undefined
    this.instructionId = undefined
    this.isActive = false
    this.isPrimary = !!isPrimary
    this.feeAmount = undefined
  }
}
