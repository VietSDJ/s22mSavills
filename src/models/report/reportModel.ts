import dayjs from 'dayjs'

export class ReportModel {
  id: any

  constructor() {
    this.id = undefined
  }

  public static assign(obj) {
    if (!obj) return undefined

    let newObj = Object.assign(new ReportModel(), obj)
    newObj.startDate = obj.startDate ? dayjs(obj.startDate) : undefined
    newObj.expiredDate = obj.expiredDate ? dayjs(obj.expiredDate) : undefined
    return newObj
  }
}
