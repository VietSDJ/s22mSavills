import { L, LNotification } from '@lib/abpUtility'
import { notifyError, notifySuccess } from '@lib/helper'
import { PagedResultDto } from '@services/dto/pagedResultDto'
import http from '@services/httpService'

class CapitalMarketService {
  public async create(body: any) {
    // if (body.birthDate) {
    //   body.birthDate = moment(body.birthDate).toISOString();
    // }
    let res = await http.post('api/services/app/CapitalMarket/Create', body)
    notifySuccess(
      LNotification('SUCCESS'),
      LNotification('SAVING_SUCCESSFULLY')
    )
    // if (res.data.result && res.data.result.birthDate) {
    //   res.data.result.birthDate = moment(res.data.result.birthDate);
    // }
    return res.data.result
  }

  public async update(body: any) {
    let res = await http.put('api/services/app/CapitalMarket/Update', body)
    notifySuccess(
      LNotification('SUCCESS'),
      LNotification('SAVING_SUCCESSFULLY')
    )
    return res.data.result
  }

  public async delete(id: number) {
    let res = await http.delete('api/services/app/CapitalMarket/Delete', {
      params: { id }
    })
    return res.data
  }

  public async activateOrDeactivate(id: number, isActive) {
    let res = await http.post('api/services/app/CapitalMarket/Active', {
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

    let res = await http.get('api/services/app/CapitalMarket/Get', {
      params: { id }
    })

    return res.data.result
  }
  public async getListCapitalCategory(keyword: string): Promise<any> {
    let res = await http.get(
      'api/services/app/CapitalMarket/GetListCapitalMarketCategory',
      {
        params: { keyword }
      }
    )
    return res.data.result
  }

  public async getAll(params: any): Promise<PagedResultDto<any>> {
    let res = await http.get('api/services/app/CapitalMarket/GetAll', {
      params
    })
    // const result = res.data.result;
    // if (result.items) {
    //   (result.items || []).forEach((item) => {
    //     item.profilePictureUrl = item.profilePictureId
    //       ? `${AppConfiguration.remoteServiceBaseUrl}api/services/app/Profile/GetProfilePictureById?profilePictureId=${item.profilePictureId}`
    //       : null;
    //   });
    // }

    return res.data.result
  }
}

export default new CapitalMarketService()
