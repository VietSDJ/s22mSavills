import { action, observable } from 'mobx'
import { PagedResultDto } from '@services/dto/pagedResultDto'
import entityService from '@services/entity/entityService'

class EntityStore {
  @observable isLoading!: boolean
  @observable entities!: PagedResultDto<any>
  @observable editAEntity: any = {}
  constructor() {
    this.entities = { items: [], totalCount: 0 }
  }
  @action
  async getAll(params: any) {
    this.isLoading = true
    let result = await entityService
      .getAll(params)
      .finally(() => (this.isLoading = false))
    this.entities = result
  }
  @action
  async get(id: number) {
    let result = await entityService.get(id)
    this.editAEntity = Object.assign(result)
  }
  @action
  async create(body: any) {
    this.isLoading = true
    this.editAEntity = await entityService
      .create(body)
      .finally(() => (this.isLoading = false))
  }
  @action
  async update(body: any) {
    this.isLoading = true
    await entityService.update(body).finally(() => (this.isLoading = false))
  }
  @action
  async activateOrDeactivate(id: number, isActive) {
    await entityService.activateOrDeactivate(id, isActive)
  }
}

export default EntityStore
