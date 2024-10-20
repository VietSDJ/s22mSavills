import { PagedResultDto } from '@services/dto/pagedResultDto'
import http from '@services/httpService'

class CompanyService {
  public async activateOrDeactivate(id: number, isActive) {
    const res = await http.post(
      'api/services/app/Company/Active',

      { id, isActive }
    )
    return res.data
  }
  public async delete(id): Promise<any> {
    const res = await http.delete('api/services/app/Company/Delete', {
      params: { id }
    })
    return res.data.result
  }
  public async bulkDelete(params) {
    let result = await http.post('api/services/app/Company/BulkDelete', {
      ...params
    })
    return result.data
  }
  public async update(body): Promise<any> {
    const res = await http.put('api/services/app/Company/Update', body)
    return res.data.result
  }
  public async create(body): Promise<any> {
    const res = await http.post('api/services/app/Company/Create', body)
    return res.data.result
  }

  public async getAll(params: any): Promise<PagedResultDto<any>> {
    let res = await http.get('api/services/app/Company/GetAll', {
      params
    })
    return res.data.result
  }
  public async GetListCompany(params?): Promise<any> {
    let res = await http.get('api/services/app/Company/GetListCompany', {
      params
    })
    let { result } = res.data

    return result
  }
  public async bulkCreateOrUpdate(body): Promise<any> {
    const res = await http.post(
      'api/services/app/Company/BulkCreateOrUpdate',
      body
    )
    return res.data.result
  }
}

export default new CompanyService()
