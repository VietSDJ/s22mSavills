import { action, observable } from 'mobx'
import { PagedResultDto } from '@services/dto/pagedResultDto'
import industrialParkService from '@services/indusPark/industrialParkService'

class IndustrialParkStore {
  @observable isLoading!: boolean
  @observable industrialParks!: PagedResultDto<any>
  @observable editIndustrialPark: any = {}
  constructor() {
    this.industrialParks = { items: [], totalCount: 0 }
  }
  @action
  async getAll(params: any) {
    this.isLoading = true
    let result = await industrialParkService
      .getAll(params)
      .finally(() => (this.isLoading = false))
    this.industrialParks = result
  }
  @action
  async get(id: number) {
    let result = await industrialParkService.get(id)
    this.editIndustrialPark = Object.assign(result)
  }
  @action
  async create(body: any) {
    this.isLoading = true
    this.editIndustrialPark = await industrialParkService
      .create(body)
      .finally(() => (this.isLoading = false))
  }
  @action
  async update(body: any) {
    this.isLoading = true
    await industrialParkService
      .update(body)
      .finally(() => (this.isLoading = false))
  }
  @action
  async activateOrDeactivate(id: number, isActive) {
    await industrialParkService.activateOrDeactivate(id, isActive)
  }
}

export default IndustrialParkStore
