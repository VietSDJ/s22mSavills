import { L, LNotification } from '@lib/abpUtility'
import { notifyError, notifySuccess } from '@lib/helper'
import { ReportModel } from '@models/report/reportModel'
import { PagedResultDto } from '@services/dto/pagedResultDto'
import http from '@services/httpService'

class ReportService {
  public async create(body: any) {
    let res = await http.post('api/services/app/Report/Create', body)
    notifySuccess(
      LNotification('SUCCESS'),
      LNotification('SAVING_SUCCESSFULLY')
    )
    return res.data.result
  }
  public async update(body: any) {
    let res = await http.put('api/services/app/Report/Update', body)
    notifySuccess(
      LNotification('SUCCESS'),
      LNotification('SAVING_SUCCESSFULLY')
    )
    return res.data.result
  }

  public async delete(id: number) {
    let res = await http.delete('api/services/app/Report/Delete', {
      params: { id }
    })
    return res.data
  }

  public async activateOrDeactivate(id: number, isActive) {
    let res = await http.post(
      'api/services/app/Report/Active',
      { id },
      { params: { isActive } }
    )
    notifySuccess(
      LNotification('SUCCESS'),
      LNotification('UPDATE_SUCCESSFULLY')
    )
    return res.data
  }
  public async get(id: number): Promise<any> {
    if (!id) {
      notifyError(L('ERROR'), L('ENTITY_NOT_FOUND'))
    }

    let res = await http.get('api/services/app/Report/Get', {
      params: { id }
    })

    return ReportModel.assign(res.data.result)
  }
  public async getEmbedInfo(id: number): Promise<any> {
    if (!id) {
      notifyError(L('ERROR'), L('ENTITY_NOT_FOUND'))
    }

    let res = await http.get('api/services/app/Report/GetEmbedInfo', {
      params: { reportId: id }
    })

    return res.data.result
  }

  public async getAll(params: any): Promise<PagedResultDto<any>> {
    let res = await http.get('api/services/app/Report/GetAll', { params })
    let { result } = res.data
    result.items = result.items
    return result
  }
}

export default new ReportService()
