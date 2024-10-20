import { L, LNotification } from '@lib/abpUtility'
import { notifyError, notifySuccess } from '@lib/helper'
import { RowPeriodModal } from '@models/period/PeriodModal'
import { PagedResultDto } from '@services/dto/pagedResultDto'
import http from '@services/httpService'

class PeriodService {
  public async create(body: any) {
    let res = await http.post('api/services/app/Period/Create', body)
    notifySuccess(
      LNotification('SUCCESS'),
      LNotification('SAVING_SUCCESSFULLY')
    )
    return res.data.result
  }

  // public async getListProjectCategory(keyword: string): Promise<any> {
  //   let res = await http.get(
  //     'api/services/app/Locations/GetListProjectCategory',
  //     {
  //       params: { keyword }
  //     }
  //   )
  //   return res.data.result
  // }

  public async OverwritePeriod(
    currentPeriodId: any,
    nextPeriodId: any,
    body: any
  ) {
    let res = await http.post(
      '/api/services/app/Period/OverwritePeriod',
      body,
      {
        params: { currentPeriodId, nextPeriodId }
        //nextPeriodId:nextPeriodId
      }
    )
    notifySuccess(
      LNotification('SUCCESS'),
      LNotification('UPDATE_SUCCESSFULLY')
    )
    return res.data.result
  }

  public async update(body: any) {
    let res = await http.put('api/services/app/Period/Update', body)
    notifySuccess(
      LNotification('SUCCESS'),
      LNotification('SAVING_SUCCESSFULLY')
    )
    return res.data.result
  }

  public async delete(id: number) {
    let res = await http.delete('api/services/app/Period/Delete', {
      params: { id }
    })
    return res.data
  }

  public async activateOrDeactivate(id: number, isActive) {
    let res = await http.post(
      'api/services/app/Period/Active',

      { id, isActive }
    )

    return res.data
  }

  public async getListPeriodType(): Promise<any> {
    let res = await http.get('')
    return res.data.result
  }
  public async get(id: number): Promise<any> {
    if (!id) {
      notifyError(L('ERROR'), L('ENTITY_NOT_FOUND'))
    }

    let res = await http.get('api/services/app/Period/Get', {
      params: { id }
    })

    return res.data.result
  }
  public async getListPeriod(): Promise<any> {
    let res = await http.get('api/services/app/Period/GetAll')
    return res.data.result
  }

  public async getAll(params: any): Promise<PagedResultDto<any>> {
    let res = await http.get('api/services/app/Period/GetAll', { params })
    let { result } = res.data
    result.items = RowPeriodModal.assigns(result.items)
    return result
  }
  public async GetListPeriod(params?): Promise<any> {
    let res = await http.get('api/services/app/Period/GetListPeriod', {
      params
    })
    let { result } = res.data
    result = RowPeriodModal.assigns(result)
    return result
  }
  public async GetCurrentPeriod(): Promise<any> {
    let res = await http.get('api/services/app/Period/GetCurrentPeriod')

    return res.data.result
  }
  public async bulkCreateOrUpdate(body): Promise<any> {
    const res = await http.post(
      'api/services/app/Period/BulkCreateOrUpdate',
      body
    )
    return res.data.result
  }
}

export default new PeriodService()
