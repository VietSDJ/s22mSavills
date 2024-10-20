import { L, LNotification } from '@lib/abpUtility'
import { notifyError, notifySuccess } from '@lib/helper'
import { PagedResultDto } from '@services/dto/pagedResultDto'
import http from '@services/httpService'

class InvestmentService {
  public async create(body: any) {
    let res = await http.post('api/services/app/Investment/Create', body)
    notifySuccess(
      LNotification('SUCCESS'),
      LNotification('SAVING_SUCCESSFULLY')
    )

    return res.data.result
  }

  public async update(body: any) {
    let res = await http.put('api/services/app/Investment/Update', body)
    notifySuccess(
      LNotification('SUCCESS'),
      LNotification('SAVING_SUCCESSFULLY')
    )
    return res.data.result
  }

  public async delete(id: number) {
    let res = await http.delete('api/services/app/Investment/Delete', {
      params: { id }
    })
    return res.data
  }

  public async activateOrDeactivate(id: number, isActive) {
    let res = await http.post('api/services/app/Investment/Active', {
      id,
      isActive
    })
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

    let res = await http.get('api/services/app/Investment/Get', {
      params: { id }
    })

    return res.data.result
  }

  public async getAll(params: any): Promise<PagedResultDto<any>> {
    let res = await http.get('api/services/app/Investment/GetAll', { params })
    return res.data.result
  }

  public async getInvestmentCate(keyWord: any): Promise<any> {
    let res = await http.get(
      'api/services/app/Investment/GetListInvestmentCategory',
      {
        params: { keyWord }
      }
    )
    return res.data.result
  }
}

export default new InvestmentService()
