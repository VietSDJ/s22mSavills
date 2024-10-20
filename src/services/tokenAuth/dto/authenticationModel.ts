
export interface AuthenticationModel {
  userNameOrEmailAddress: string
  password: string
  rememberClient: boolean
}

export interface ISwitchProjectModel {
  isFirstLogin: boolean,
  accessToken: string,
  encryptedAccessToken: string,
  expireInSeconds: number,
  projectId: number,
  userId: number
}

export class SwitchProjectModel implements ISwitchProjectModel{
  isFirstLogin: boolean
  accessToken: string
  encryptedAccessToken: string
  expireInSeconds: number
  projectId: number
  userId: number

  constructor() {
    this.isFirstLogin = false
    this.accessToken = ''
    this.encryptedAccessToken = ''
    this.expireInSeconds = 0
    this.projectId = 0
    this.userId = 0
  }

  public static assign(obj) {
    if (!obj) return undefined

    return Object.assign(new SwitchProjectModel(), obj)
  }

  public static assigns<T>(items): SwitchProjectModel[] {
    return items.map((item) => SwitchProjectModel.assign(item))
  }
}
