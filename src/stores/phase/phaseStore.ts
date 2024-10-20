import { L } from '@lib/abpUtility'
import { notifySuccess } from '@lib/helper'
import { PagedResultDto } from '@services/dto/pagedResultDto'
import phaseService from '@services/phase/phaseService'

import { action, observable } from 'mobx'

class PhaseStore {
  @observable isLoading!: boolean
  @observable itemPhase: any = []
  @observable phases!: PagedResultDto<any>
  @observable editPhase: any = {}
  @observable warnings: any = []
  @observable ProjectTypes: any = []
  constructor() {
    this.phases = { items: [], totalCount: 0 }
  }

  @action
  async activateOrDeactivate(id: number, isActive) {
    await phaseService.activateOrDeactivate(id, isActive)
  }

  @action public createPhase = async (body) => {
    this.isLoading = true
    await phaseService
      .create({ ...body })
      .finally(() => (this.isLoading = false))

    return notifySuccess(L('SUCCESSFULLY'), L('CREATE_SUCCESSFULLY'))
  }

  @action public updatePhase = async (body) => {
    this.isLoading = true
    await phaseService
      .update({ ...this.editPhase, ...body })
      .finally(() => (this.isLoading = false))

    return notifySuccess(L('SUCCESSFULLY'), L('UPDATE_SUCCESSFULLY'))
  }

  @action
  async get(id: number) {
    let result = await phaseService.get(id)
    this.editPhase = result
  }

  @action
  async getAll(params: any) {
    this.isLoading = true
    let result = await phaseService
      .getAll(params)
      .finally(() => (this.isLoading = false))
    this.phases = result
    this.itemPhase = result.items
  }
  //   @action
  //   async getListProjectCategory(params: any) {
  //     this.isLoading = true
  //     let result = await phaseService.getListProjectCategory(params)
  //     this.ProjectTypes = result
  //   }
}

export default PhaseStore
