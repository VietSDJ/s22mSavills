import { L } from '@lib/abpUtility'
import { notifySuccess } from '@lib/helper'
import type { PagedResultDto } from '@services/dto/pagedResultDto'
import ProductService from '@services/product/productService'

import { action, observable } from 'mobx'

class ProductStore {
  @observable isLoading!: boolean
  @observable products!: PagedResultDto<any>
  @observable productTypes: any = []
  @observable productFacing: any = []

  @observable productView: any = []
  @observable productHOCondition: any = []

  @observable productApartmentUnitType: any = []
  @observable dataExcel!: []

  constructor() {
    this.products = { items: [], totalCount: 0 }
  }

  @action
  async activateOrDeactivate(id: number, isActive) {
    this.isLoading = true
    await ProductService.activateOrDeactivate(id, isActive).finally(
      () => (this.isLoading = false)
    )
    await notifySuccess(L('SUCCESSFULLY'), L('UPDATE_SUCCESSFULLY'))
  }

  @action
  async delete(id: number) {
    this.isLoading = true
    await ProductService.delete(id).finally(() => (this.isLoading = false))
    await notifySuccess(L('SUCCESSFULLY'), L('DELETE_SUCCESSFULLY'))
  }
  @action
  async bulkDelete(params) {
    this.isLoading = true
    await ProductService.bulkDelete(params).finally(
      () => (this.isLoading = false)
    )
    await notifySuccess(L('SUCCESSFULLY'), L('DELETE_SUCCESSFULLY'))
  }

  @action public create = async (body) => {
    this.isLoading = true
    await ProductService.create({ ...body }).finally(
      () => (this.isLoading = false)
    )

    return notifySuccess(L('SUCCESSFULLY'), L('CREATE_SUCCESSFULLY'))
  }

  @action public update = async (body) => {
    this.isLoading = true
    await ProductService.update({ ...body }).finally(
      () => (this.isLoading = false)
    )

    return notifySuccess(L('SUCCESSFULLY'), L('UPDATE_SUCCESSFULLY'))
  }

  @action
  async getAll(params: any) {
    this.isLoading = true
    let result = await ProductService.getAll(params).finally(
      () => (this.isLoading = false)
    )
    this.products = result
  }
  @action
  async GetListProduct(params?: any) {
    this.isLoading = true
    let result = await ProductService.GetListProduct(params).finally(
      () => (this.isLoading = false)
    )
    this.dataExcel = result
  }
  @action
  async getListProductType() {
    this.isLoading = true
    let result = await ProductService.getListProductType()
    this.productTypes = result
  }

  @action
  async getListProductFacing() {
    this.isLoading = true
    let result = await ProductService.getListProductFacing()
    this.productFacing = result
  }
  @action
  async getListProductView() {
    this.isLoading = true
    let result = await ProductService.getListProductView()
    this.productView = result
  }

  @action
  async getListProductHOCondition() {
    this.isLoading = true
    let result = await ProductService.getListProductHOCondition()
    this.productHOCondition = result
  }

  @action
  async getListProductApartmentUnitType() {
    this.isLoading = true
    let result = await ProductService.getListProductApartmentUnitType()
    this.productApartmentUnitType = result
  }
  @action public bulkCreateOrUpdate = async (body) => {
    this.isLoading = true
    await ProductService.bulkCreateOrUpdate({
      data: JSON.stringify([...body])
    }).finally(() => (this.isLoading = false))

    return notifySuccess(L('SUCCESSFULLY'), L('UPDATE_SUCCESSFULLY'))
  }
}

export default ProductStore
