import { L } from '@lib/abpUtility'
import { notifySuccess } from '@lib/helper'
import { PagedResultDto } from '@services/dto/pagedResultDto'
import industrialService from '@services/industrial/industrialService'
import { action, observable } from 'mobx'

class IndustrialStore {
  @observable isLoading!: boolean
  @observable industrials!: PagedResultDto<any>
  @observable editIndustrial: any = {}
  @observable listProvince: any = {}
  @observable industrialProjectRoles: any = []
  @observable warnings: any = []

  constructor() {
    this.industrials = { items: [], totalCount: 0 }
  }

  @action
  async activateOrDeactivate(id: number, isActive) {
    await industrialService.activateOrDeactivate(id, isActive)
  }

  @action public createIndustrial = async (body) => {
    this.isLoading = true
    await industrialService
      .create({ ...body })
      .finally(() => (this.isLoading = false))

    return notifySuccess(L('SUCCESSFULLY'), L('CREATE_SUCCESSFULLY'))
  }

  @action public updateIndustrial = async (body) => {
    this.isLoading = true
    await industrialService
      .update({ ...this.editIndustrial, ...body })
      .finally(() => (this.isLoading = false))

    return notifySuccess(L('SUCCESSFULLY'), L('UPDATE_SUCCESSFULLY'))
  }
  // @action
  // async update(updateStaffInput: any) {
  //   this.isLoading = true;
  //   await customerService
  //     .update(updateStaffInput)
  //     .finally(() => (this.isLoading = false));
  // }

  // @action
  // async delete(id: number) {
  //   // await staffService.delete(id)
  //   // this.staffs.items = this.staffs.items.filter((x) => x.id !== id)
  // }

  @action
  async get(id: number) {
    let result = await industrialService.get(id)
    console.log(result)
    this.editIndustrial = result
  }

  @action
  async getAll(params: any) {
    this.isLoading = true
    let result = await industrialService
      .getAll(params)
      .finally(() => (this.isLoading = false))
    this.industrials = result
  }
  @action
  async getListProvince(params: any) {
    this.isLoading = true
    let result = await industrialService
      .getListProvince(params)
      .finally(() => (this.isLoading = false))
    this.listProvince = result
  }
}

export default IndustrialStore
