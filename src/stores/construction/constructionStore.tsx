import constructionService from '@services/construction/constructionService'
import { PagedResultDto } from '@services/dto/pagedResultDto'
import { action, observable } from 'mobx'

class ConstructionStore {
  @observable isLoading!: boolean
  @observable constructions!: PagedResultDto<any>
  @observable editContruction: any = {}
  @observable PeriodConstructionRoles: any = []
  @observable warnings: any = []
  @observable ConstructionType: any = []

  constructor() {
    this.constructions = { items: [], totalCount: 0 }
  }

  @action
  async create(body: any) {
    this.isLoading = true
    this.editContruction = await constructionService
      .create(body)
      .finally(() => (this.isLoading = false))
  }

  @action
  async update(body: any) {
    this.isLoading = true
    await constructionService
      .update(body)
      .finally(() => (this.isLoading = false))
  }

  //   @action
  //   async delete(id: number) {
  //     // await staffService.delete(id)
  //     // this.staffs.items = this.staffs.items.filter((x) => x.id !== id)
  //   }

  @action
  async activateOrDeactivate(id: number, isActive) {
    await constructionService.activateOrDeactivate(id, isActive)
  }

  @action
  async get(id: number) {
    let result = await constructionService.get(id)
    // let resultStatic = await periodService
    //   .getStaticInformation()
    //   .finally(() => (this.isLoading = false));
    this.editContruction = Object.assign(result)
  }

  @action
  async getListConstructionCategory(params: any) {
    this.isLoading = true
    let result = await constructionService.getListConstructionCategory()
    this.ConstructionType = result
  }

  @action
  async getAll(params: any) {
    this.isLoading = true
    let result = await constructionService
      .getAll(params)
      .finally(() => (this.isLoading = false))
    this.constructions = result
  }
}

export default ConstructionStore
