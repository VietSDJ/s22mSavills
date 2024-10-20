// import { L, LNotification } from '@lib/abpUtility'
// import { notifyError, notifySuccess } from '@lib/helper'
import { L } from '@lib/abpUtility'
import { notifyError } from '@lib/helper'
import { PagedResultDto } from '@services/dto/pagedResultDto'
import http from '@services/httpService'

class IndustrialService {
  //   public async create(body: any) {
  //     // if (body.birthDate) {
  //     //   body.birthDate = moment(body.birthDate).toISOString();
  //     // }
  //     let res = await http.post('api/services/app/Investment/Create', body)
  //     notifySuccess(
  //       LNotification('SUCCESS'),
  //       LNotification('SAVING_SUCCESSFULLY')
  //     )
  //     // if (res.data.result && res.data.result.birthDate) {
  //     //   res.data.result.birthDate = moment(res.data.result.birthDate);
  //     // }
  //     return res.data.result
  //   }

  // public async update(body: any) {
  //   let res = await http.put('', body)
  //   notifySuccess(
  //     LNotification('SUCCESS'),
  //     LNotification('SAVING_SUCCESSFULLY')
  //   )
  //   return res.data.result
  // }

  // public async delete(id: number) {
  //   let res = await http.delete('', {
  //     params: { id }
  //   })
  //   return res.data
  // }

  //   public async activateOrDeactivate(id: number, isActive) {
  //     let res = await http.post(
  //       'api/services/app/Investment/Active',
  //       { id },
  //       { params: { isActive } }
  //     )
  //     notifySuccess(
  //       LNotification('SUCCESS'),
  //       LNotification('UPDATE_SUCCESSFULLY')
  //     )
  //     return res.data
  //   }

  public async get(id: number): Promise<any> {
    if (!id) {
      notifyError(L('ERROR'), L('ENTITY_NOT_FOUND'))
    }

    let res = await http.get('api/services/app/IndustrialPark/Get', {
      params: { id }
    })

    return res.data.result
  }

  public async activateOrDeactivate(id: number, isActive): Promise<any> {
    console.log(isActive)
    const res = await http.post('api/services/app/IndustrialPark/Active', {
      id,
      isActive
    })
    return res.data
  }

  public async update(body): Promise<any> {
    const res = await http.put('api/services/app/IndustrialPark/Update', body)
    return res.data.result
  }
  public async create(body): Promise<any> {
    const res = await http.post('api/services/app/IndustrialPark/Create', body)
    return res.data.result
  }
  public async getListRegion(): Promise<any> {
    let res = await http.get('api/services/app/Locations/GetListRegion')
    return res.data.result
  }
  public async getListProvince(params: any): Promise<any> {
    let res = await http.get('api/services/app/Locations/GetListProvince', {
      params
    })
    return res.data.result
  }

  public async GetListDistrict(params: any): Promise<any> {
    let res = await http.get('api/services/app/Locations/GetListDistrict', {
      params
    })
    return res.data.result
  }
  public async getListCategory(params: any): Promise<any> {
    let res = await http.get(
      'api/services/app/Locations/GetListProjectCategory',
      {
        params
      }
    )
    return res.data.result
  }
  public async getAll(params: any): Promise<PagedResultDto<any>> {
    let res = await http.get('api/services/app/IndustrialPark/GetAll', {
      params
    })
    return res.data.result
  }
}

export default new IndustrialService()
