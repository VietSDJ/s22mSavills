import { L } from '@lib/abpUtility'
import { notifySuccess } from '@lib/helper'
import companyService from '@services/company/companyService'
import type { PagedResultDto } from '@services/dto/pagedResultDto'

import { action, observable } from 'mobx'

class CompanyStore {
  @observable isLoading!: boolean
  @observable itemCompanys: any = []
  @observable companys!: PagedResultDto<any>
  @observable dataExcel!: []

  constructor() {
    this.companys = { items: [], totalCount: 0 }
  }

  @action
  async activateOrDeactivate(id: number, isActive) {
    await companyService.activateOrDeactivate(id, isActive)
    await notifySuccess(L('SUCCESSFULLY'), L('UPDATE_STATUS_SUCCESSFULLY'))
  }
  @action
  async delete(id: number) {
    await companyService.delete(id)
    await notifySuccess(L('SUCCESSFULLY'), L('DELETE_SUCCESSFULLY'))
  }
  @action
  async bulkDelete(params) {
    this.isLoading = true
    await companyService
      .bulkDelete(params)
      .finally(() => (this.isLoading = false))
    await notifySuccess(L('SUCCESSFULLY'), L('DELETE_SUCCESSFULLY'))
  }

  @action public create = async (body) => {
    this.isLoading = true
    await companyService
      .create({ ...body })
      .finally(() => (this.isLoading = false))

    return notifySuccess(L('SUCCESSFULLY'), L('CREATE_SUCCESSFULLY'))
  }

  @action public update = async (body) => {
    this.isLoading = true
    await companyService
      .update({ ...body })
      .finally(() => (this.isLoading = false))

    return notifySuccess(L('SUCCESSFULLY'), L('UPDATE_SUCCESSFULLY'))
  }

  @action
  async getAll(params: any) {
    this.isLoading = true
    let result = await companyService
      .getAll(params)
      .finally(() => (this.isLoading = false))
    this.companys = result
    this.itemCompanys = result.items
  }

  @action
  async GetListCompany(params?: any) {
    this.isLoading = true
    let result = await companyService
      .GetListCompany(params)
      .finally(() => (this.isLoading = false))
    this.dataExcel = result
  }

  @action public bulkCreateOrUpdate = async (body) => {
    this.isLoading = true
    await companyService
      .bulkCreateOrUpdate({ data: JSON.stringify([...body]) })
      .finally(() => (this.isLoading = false))

    return notifySuccess(L('SUCCESSFULLY'), L('UPDATE_SUCCESSFULLY'))
  }
}

export default CompanyStore
