import { PagedResultDto } from '@services/dto/pagedResultDto'
import legalService from '@services/legal/legalService'
import { action, observable } from 'mobx'

class LegalStore {
  @observable isLoading!: boolean
  @observable legals!: PagedResultDto<any>
  @observable editlegal: any = {}
  @observable PeriodLegalRoles: any = []
  @observable warnings: any = []

  constructor() {
    this.legals = { items: [], totalCount: 0 }
  }

  @action
  async create(body: any) {
    this.isLoading = true
    this.editlegal = await legalService
      .create(body)
      .finally(() => (this.isLoading = false))
  }

  @action
  async update(body: any) {
    this.isLoading = true
    await legalService
      .update(body)
      .finally(() => (this.isLoading = false))
  }

  @action
  async delete(id: number) {
    // await staffService.delete(id)
    // this.staffs.items = this.staffs.items.filter((x) => x.id !== id)
  }

  @action
  async activateOrDeactivate(id: number, isActive) {
    await legalService.activateOrDeactivate(id, isActive)
  }

  @action
  async get(id: number) {
    let result = await legalService.get(id)
    // let resultStatic = await periodService
    //   .getStaticInformation()
    //   .finally(() => (this.isLoading = false));
    this.editlegal = Object.assign(result)
  }

  @action
  async getAll(params: any) {
    this.isLoading = true
    let result = await legalService
      .getAll(params)
      .finally(() => (this.isLoading = false))
    this.legals = result
  }

}

export default LegalStore
