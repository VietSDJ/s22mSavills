import http from '../httpService'
import { OptionModel } from '@models/global'
import { notifySuccess } from '@lib/helper'
import { LNotification } from '@lib/abpUtility'

class CustomFieldService {
  public async getListCustomField(params: any) {
    let res = await http.get(
      'api/services/app/CustomField/GetListCustomField',
      {
        params
      }
    )
    const result = res.data.result
    return result
  }
  public async getAll(params: any) {
    let res = await http.get('api/services/app/CustomField/GetAll', {
      params
    })
    const result = res.data.result
    return result
  }
  public async createCustomField(params: any) {
    let res = await http.post(
      'api/services/app/CustomField/CreateCustomField',
      {
        ...params
      }
    )
    notifySuccess(
      LNotification('SUCCESS'),
      LNotification('CREATE_SUCCESSFULLY')
    )
    const result = res.data.result
    return result
  }

  public async updateCustomField(params: any) {
    let res = await http.put('api/services/app/CustomField/UpdateCustomField', {
      ...params
    })
    notifySuccess(
      LNotification('SUCCESS'),
      LNotification('UPDATE_SUCCESSFULLY')
    )
    const result = res.data.result
    return result
  }
  public async getSectorModules() {
    let res = await http.get('api/services/app/CustomField/GetListSectorModule')

    const result = res.data.result
    return OptionModel.assigns(result || [])
  }
  public async getFieldTypes() {
    let res = await http.get('api/services/app/CustomField/GetListFieldType')

    const result = res.data.result
    return OptionModel.assigns(result || [])
  }
  public async delete(id): Promise<any> {
    const res = await http.delete('api/services/app/CustomField/Delete', {
      params: { id }
    })
    return res.data.result
  }
  public async bulkDelete(params) {
    let result = await http.post('api/services/app/CustomField/BulkDelete', {
      ...params
    })
    return result.data
  }
  public async activateOrDeactivate(id: number, isActive) {
    const res = await http.post(
      'api/services/app/CustomField/Active',

      { id, isActive }
    )
    return res.data
  }
  public async bulkCreateOrUpdate(body): Promise<any> {
    const res = await http.post(
      'api/services/app/CustomField/BulkCreateOrUpdate',
      body
    )
    return res.data.result
  }
}

export default new CustomFieldService()
