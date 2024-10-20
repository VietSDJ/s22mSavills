import { L } from '@lib/abpUtility'
import { notifySuccess } from '@lib/helper'
import type { PagedResultDto } from '@services/dto/pagedResultDto'
import periodService from '@services/period/periodService'
import { action, observable } from 'mobx'

class PeriodStore {
  @observable isLoading!: boolean
  @observable itemPeriod: any = []
  @observable periods!: PagedResultDto<any>
  @observable editPeriod: any = {}
  @observable PeriodProjectRoles: any = []
  @observable warnings: any = []
  @observable currentPeriod: any = {}
  @observable dataExcel!: []

  constructor() {
    this.periods = { items: [], totalCount: 0 }
  }

  @action
  async create(body: any) {
    this.isLoading = true
    this.editPeriod = await periodService
      .create(body)
      .finally(() => (this.isLoading = false))
  }

  @action
  async update(body: any) {
    this.isLoading = true
    await periodService.update(body).finally(() => (this.isLoading = false))
  }

  @action
  async delete(id: number) {
    await periodService.delete(id)
    await notifySuccess(L('SUCCESSFULLY'), L('DELETE_SUCCESSFULLY'))
  }

  @action
  async activateOrDeactivate(id: number, isActive) {
    await periodService.activateOrDeactivate(id, isActive)
    await notifySuccess(L('SUCCESSFULLY'), L('UPDATE_STATUS_SUCCESSFULLY'))
  }

  @action
  async get(id: number) {
    let result = await periodService.get(id)
    // let resultStatic = await periodService
    //   .getStaticInformation()
    //   .finally(() => (this.isLoading = false));
    this.editPeriod = result
  }
  @action
  async GetListPeriod(params: any) {
    this.isLoading = true
    let result = await periodService
      .GetListPeriod(params)
      .finally(() => (this.isLoading = false))
    this.dataExcel = result
  }
  @action
  async getAll(params: any) {
    this.isLoading = true
    let result = await periodService
      .getAll(params)
      .finally(() => (this.isLoading = false))
    this.periods = result
    this.itemPeriod = result.items
  }

  @action
  async getCurrentPeriod() {
    let result = await periodService.GetCurrentPeriod()
    // let resultStatic = await periodService
    //   .getStaticInformation()
    //   .finally(() => (this.isLoading = false));
    this.currentPeriod = result
  }
  @action public bulkCreateOrUpdate = async (body) => {
    this.isLoading = true
    await periodService
      .bulkCreateOrUpdate([...body])
      .finally(() => (this.isLoading = false))

    return notifySuccess(L('SUCCESSFULLY'), L('UPDATE_SUCCESSFULLY'))
  }
}

export default PeriodStore
