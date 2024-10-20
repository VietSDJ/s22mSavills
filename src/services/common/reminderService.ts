import http from '../httpService'

import { ReminderModel } from '@models/common/reminderModel'

class ReminderService {
  public async getReminder(params, timeUnit: string): Promise<any> {
    let res = await http.get('/api/services/app/Reminder/GetReminder', { params })

    return ReminderModel.assign(res.data.result || {}, timeUnit)
  }

  public async updateReminder(body): Promise<any> {
    let res = await http.put('/api/services/app/Reminder/UpdateReminder', body)

    return res.data.result
  }
}

export default new ReminderService()
