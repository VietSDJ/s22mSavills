import { PagedResultDto } from '@services/dto/pagedResultDto'
import { action, observable } from 'mobx'
import capitalMarketService from '@services/capitalmarket/capitalMarketService'

class CapitalMarketStore {
  @observable isLoading!: boolean
  @observable capitals!: PagedResultDto<any>
  @observable editCapital: any = {}
  @observable PeriodAmfmRoles: any = []
  @observable warnings: any = []
  @observable itemsCate: any = []
  constructor() {
    this.capitals = { items: [], totalCount: 0 }
  }

  @action
  async create(body: any) {
    this.isLoading = true
    this.editCapital = await capitalMarketService
      .create(body)
      .finally(() => (this.isLoading = false))
  }

  @action
  async update(body: any) {
    this.isLoading = true
    await capitalMarketService
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
    await capitalMarketService.activateOrDeactivate(id, isActive)
  }

  @action
  async get(id: number) {
    let result = await capitalMarketService.get(id)
    // let resultStatic = await periodService
    //   .getStaticInformation()
    //   .finally(() => (this.isLoading = false));
    this.editCapital = Object.assign(result)
  }

  @action
  async getAll(params: any) {
    this.isLoading = true
    let result = await capitalMarketService
      .getAll(params)
      .finally(() => (this.isLoading = false))
    this.capitals = result
  }
  @action
  async getListCapitalCate(params: any) {
    this.isLoading = true
    let result = await capitalMarketService.getListCapitalCategory(params)

    this.itemsCate = result
  }
}

export default CapitalMarketStore
