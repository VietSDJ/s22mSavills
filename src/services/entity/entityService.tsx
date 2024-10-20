import { L } from '@lib/abpUtility'
import { notifyError } from '@lib/helper'
import { PagedResultDto } from '@services/dto/pagedResultDto'
import http from '@services/httpService'

class EntityService {
  public async get(id: number): Promise<any> {
    if (!id) {
      notifyError(L('ERROR'), L('ENTITY_NOT-FOUND'))
    }
    let res = await http.get('api/services/app/Entity/Get', { params: { id } })
    return res.data.result
  }
  public async getAll(params: any): Promise<PagedResultDto<any>> {
    let res = await http.get('api/services/app/Entity/GetAll', { params })
    return res.data.result
  }
  public async create(body): Promise<any> {
    const res = await http.post('api/services/app/Entity/Create', body)
    return res.data.result
  }
  public async activateOrDeactivate(id: number, isActive) {
    const res = await http.post(
      'api/services/app/Entity/Active',

      { id, isActive }
    )
    return res.data
  }
  public async update(body): Promise<any> {
    const res = await http.put('api/services/app/Entity/Update', body)
    return res.data.result
  }
}

export default new EntityService()
