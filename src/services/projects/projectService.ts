import { L } from '@lib/abpUtility'
import { notifyError } from '@lib/helper'
import { OptionModel } from '@models/global'
import { PagedResultDto } from '@services/dto/pagedResultDto'
import http from '@services/httpService'

class ProjectService {
  public async get(id: number): Promise<any> {
    if (!id) {
      notifyError(L('ERROR'), L('ENTITY_NOT_FOUND'))
    }

    let res = await http.get('api/services/app/Project/Get', {
      params: { id }
    })

    return res.data.result
  }

  public async activateOrDeactivate(id: number, isActive) {
    const res = await http.post(
      'api/services/app/Project/Active',

      { id, isActive }
    )
    return res.data
  }
  public async delete(id): Promise<any> {
    const res = await http.delete('api/services/app/Project/Delete', {
      params: { id }
    })
    return res.data.result
  }
  public async bulkDelete(params) {
    let result = await http.post('api/services/app/Project/BulkDelete', {
      ...params
    })
    return result.data
  }
  public async deleteSubproject(id): Promise<any> {
    const res = await http.delete('api/services/app/SubProject/Delete', {
      params: { id }
    })
    return res.data.result
  }
  public async update(body): Promise<any> {
    const res = await http.put('api/services/app/Project/Update', body)
    return res.data.result
  }
  public async create(body): Promise<any> {
    const res = await http.post('api/services/app/Project/Create', body)
    return res.data.result
  }

  public async updateSubProject(body): Promise<any> {
    const res = await http.put('api/services/app/SubProject/Update', body)
    return res.data.result
  }
  public async createSubProject(body): Promise<any> {
    const res = await http.post('api/services/app/SubProject/Create', body)
    return res.data.result
  }

  public async getListProjectCategory(keyword: string): Promise<any> {
    let res = await http.get(
      'api/services/app/Locations/GetListProjectCategory',
      {
        params: { keyword }
      }
    )
    return res.data.result
  }

  public async getListProjectType(): Promise<any> {
    let res = await http.get('api/services/app/Category/GetListProjectType')
    const result = res.data.result
    return OptionModel.assigns(result || [])
  }

  // public async getListProvince(): Promise<any> {
  //   let res = await http.get('api/services/app/Locations/GetListProvince')
  //   return res.data.result
  // }

  public async getAll(params: any): Promise<PagedResultDto<any>> {
    let res = await http.get('api/services/app/Project/GetAll', {
      params
    })
    return res.data.result
  }
  public async GetListProject(params?): Promise<any> {
    let res = await http.get('api/services/app/Project/GetListProject', {
      params
    })
    return res.data.result
  }
  public async bulkCreateOrUpdate(body): Promise<any> {
    const res = await http.post(
      'api/services/app/Project/BulkCreateOrUpdate',
      body
    )
    return res.data.result
  }
  public async getAllSubProject(params: any): Promise<PagedResultDto<any>> {
    let res = await http.get('api/services/app/SubProject/GetAll', {
      params
    })
    return res.data.result
  }
  public async GetListSubProject(params?): Promise<any> {
    let res = await http.get('api/services/app/SubProject/GetListSubProject', {
      params
    })
    return res.data.result
  }
  public async bulkDeleteSubproject(params) {
    let result = await http.post('api/services/app/SubProject/BulkDelete', {
      ...params
    })
    return result.data
  }
  public async GetExportSubProject(params: any): Promise<any> {
    let res = await http.get('api/services/app/SubProject/GetExport', {
      params
    })
    return res.data.result
  }
  public async bulkCreateOrUpdateSubProject(body): Promise<any> {
    const res = await http.post(
      'api/services/app/SubProject/BulkCreateOrUpdate',
      body
    )
    return res.data.result
  }
  public async getSubProject(id: number): Promise<any> {
    if (!id) {
      notifyError(L('ERROR'), L('ENTITY_NOT_FOUND'))
    }

    let res = await http.get('api/services/app/SubProject/Get', {
      params: { id }
    })

    return res.data.result
  }
  public async activateOrDeactivateSubproject(id: number, isActive) {
    const res = await http.post(
      'api/services/app/SubProject/Active',

      { id, isActive }
    )
    return res.data
  }
  public async getListSubProjectType(): Promise<any> {
    let res = await http.get('api/services/app/Category/GetListSubProjectType')
    const result = res.data.result
    return OptionModel.assigns(result || [])
  }
  public async getListSubProjectStatus(): Promise<any> {
    let res = await http.get(
      'api/services/app/Category/GetListSubProjectStatus'
    )
    const result = res.data.result
    return OptionModel.assigns(result || [])
  }
}

export default new ProjectService()
