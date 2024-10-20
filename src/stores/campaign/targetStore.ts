import { action, observable } from 'mobx'

import type { PagedResultDto } from '@services/dto/pagedResultDto'
import campaignService from '../../services/campaign/campaignService'

class TargetStore {
  @observable isLoading!: boolean
  @observable tableData!: PagedResultDto<any>
  @observable editTarget!: any

  constructor() {
    this.tableData = { items: [], totalCount: 0 }
  }

  @action
  async create(body: any) {
    let result = await campaignService.create(body)
    this.editTarget = result
    this.tableData.items.push(result)
  }

  @action
  async createTarget() {
    this.editTarget = {
      userName: '',
      name: '',
      surname: '',
      displayName: '',
      emailAddress: '',

      roleNames: [],
      password: '',
      id: 0
    }
  }

  @action
  async update(updateStaffInput: any) {
    let result = await campaignService.update(updateStaffInput)
    this.tableData.items = this.tableData.items.map((x) => {
      if (x.id === updateStaffInput.id) x = result
      return x
    })
  }

  @action
  async delete(id: number) {
    await campaignService.delete(id)
    this.tableData.items = this.tableData.items.filter((x) => x.id !== id)
  }

  @action
  async activateOrDeactivate(id: number, isActive) {
    await campaignService.activateOrDeactivate(id, isActive)
  }

  @action
  async get(id: number) {
    let result = await campaignService.get(id)
    this.editTarget = result
  }

  @action
  async getAll(params: any) {
    this.isLoading = true
    let result = await campaignService
      .getAll(params)
      .finally(() => (this.isLoading = false))
    this.tableData = result
  }
}

export default TargetStore
