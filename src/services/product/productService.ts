// import { RowApartmentModal } from '@models/sector/ApartmentModel'
import { OptionModel } from '@models/global'
import { PagedResultDto } from '@services/dto/pagedResultDto'
import http from '@services/httpService'

class ProductService {
  public async activateOrDeactivate(id: number, isActive) {
    const res = await http.post(
      'api/services/app/Product/Active',

      { id, isActive }
    )
    return res.data
  }

  public async delete(id: number) {
    let result = await http.delete('api/services/app/Product/Delete', {
      params: { id }
    })
    return result.data
  }
  public async bulkDelete(params) {
    let result = await http.post('api/services/app/Product/BulkDelete', {
      ...params
    })
    return result.data
  }
  public async update(body): Promise<any> {
    const res = await http.put('api/services/app/Product/Update', body)
    return res.data.result
  }
  public async create(body): Promise<any> {
    const res = await http.post('api/services/app/Product/Create', body)
    return res.data.result
  }
  public async bulkCreateOrUpdate(body): Promise<any> {
    const res = await http.post(
      'api/services/app/Product/BulkCreateOrUpdate',
      body
    )
    return res.data.result
  }
  public async getAll(params: any): Promise<PagedResultDto<any>> {
    let res = await http.get('api/services/app/Product/GetAll', {
      params
    })
    let { result } = res.data

    // result.items = RowApartmentModal.assigns(result.items)
    return result
  }
  public async GetListProduct(params?): Promise<any> {
    let res = await http.get('api/services/app/Product/GetListProduct', {
      params
    })
    let { result } = res.data

    return result
  }

  public async getListProductType(): Promise<any> {
    let res = await http.get('api/services/app/Category/GetListProductType')
    const result = res.data.result
    return OptionModel.assigns(result || [])
  }

  public async getListProductView(): Promise<any> {
    let res = await http.get('api/services/app/Category/GetListView')
    const result = res.data.result
    return OptionModel.assigns(result || [])
  }

  public async getListProductFacing(): Promise<any> {
    let res = await http.get('api/services/app/Category/GetListFacing')
    const result = res.data.result
    return OptionModel.assigns(result || [])
  }

  public async getListProductHOCondition(): Promise<any> {
    let res = await http.get('api/services/app/Category/GetListHOCondition')
    const result = res.data.result
    return OptionModel.assigns(result || [])
  }

  public async getListProductApartmentUnitType(): Promise<any> {
    let res = await http.get(
      'api/services/app/Category/GetListApartmentUnitType'
    )
    const result = res.data.result
    return OptionModel.assigns(result || [])
  }
}

export default new ProductService()
