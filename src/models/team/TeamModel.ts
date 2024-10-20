export class TeamModel {
  id: number
  code: string
  nameId: string
  name: string
  isActive: boolean

  constructor() {
    this.id = 0
    this.code = ''
    this.nameId = ''
    this.name = ''
    this.isActive = false
  }

  public static assign(obj) {
    if (!obj) return undefined

    let newObj = Object.assign(new TeamModel(), obj)
    return newObj
  }

  public static assigns<T>(objs) {
    return objs.map((item: any) => this.assign(item))
  }
}
