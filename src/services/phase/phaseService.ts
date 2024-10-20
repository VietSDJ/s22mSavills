import { L } from '@lib/abpUtility'
import { notifyError } from '@lib/helper'
import { PagedResultDto } from '@services/dto/pagedResultDto'
import http from '@services/httpService'

class PhaseService {
  public async get(id: number): Promise<any> {
    if (!id) {
      notifyError(L('ERROR'), L('ENTITY_NOT_FOUND'))
    }

    let res = await http.get('api/services/app/Phase/Get', {
      params: { id }
    })

    return res.data.result
  }

  public async activateOrDeactivate(id: number, isActive) {
    const res = await http.post(
      'api/services/app/Phase/Active',

      { id, isActive }
    )
    return res.data
  }

  public async update(body): Promise<any> {
    const res = await http.put('api/services/app/Phase/Update', body)
    return res.data.result
  }
  public async create(body): Promise<any> {
    const res = await http.post('api/services/app/Phase/Create', body)
    return res.data.result
  }
  //   public async getListProjectCategory(keyword: string): Promise<any> {
  //     let res = await http.get(
  //       'api/services/app/Locations/GetListProjectCategory',
  //       {
  //         params: { keyword }
  //       }
  //     )
  //     return res.data.result
  //   }

  public async getAll(params: any): Promise<PagedResultDto<any>> {
    let res = await http.get('api/services/app/Phase/GetAll', {
      params
    })
    return res.data.result
  }
}

export default new PhaseService()
