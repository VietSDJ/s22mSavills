import amfmService from '@services/amfm/amfmService'
import { PagedResultDto } from '@services/dto/pagedResultDto'
import { action, observable } from 'mobx'

class AmfmStore {
  @observable isLoading!: boolean
  @observable Amfms!: PagedResultDto<any>
  @observable editAmfm: any = {}
  @observable PeriodAmfmRoles: any = []
  @observable warnings: any = []

  constructor() {
    this.Amfms = { items: [], totalCount: 0 }
  }

  @action
  async create(body: any) {
    this.isLoading = true
    this.editAmfm = await amfmService
      .create(body)
      .finally(() => (this.isLoading = false))
  }

  @action
  async update(body: any) {
    this.isLoading = true
    await amfmService
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
    await amfmService.activateOrDeactivate(id, isActive)
  }

  @action
  async get(id: number) {
    let result = await amfmService.get(id)
    // let resultStatic = await periodService
    //   .getStaticInformation()
    //   .finally(() => (this.isLoading = false));
    this.editAmfm = Object.assign(result)
  }

  @action
  async getAll(params: any) {
    this.isLoading = true
    let result = await amfmService
      .getAll(params)
      .finally(() => (this.isLoading = false))
    this.Amfms = result
  }

}

export default AmfmStore
