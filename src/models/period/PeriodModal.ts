import { RowData } from '@models/DataTable'
// import moment from 'moment'

export interface IRowPeriodModal {
  startDate?: any
  endDate?: any
}

export class RowPeriodModal extends RowData implements IRowPeriodModal {
  startDate: any
  endDate: any
  constructor() {
    super()
  }

  public static assign(obj) {
    if (!obj) return undefined

    const newObj = Object.assign(new RowPeriodModal(), obj)
    newObj.startDate = obj.startDate ? new Date(obj.startDate) : undefined
    newObj.endDate = obj.endDate ? new Date(obj.endDate) : undefined

    return newObj
  }

  public static assigns<T>(objs) {
    const results: any[] = []
    objs.forEach((item) => results.push(this.assign(item)))
    return results
  }
}
