export interface UpdateUserOutput {
  userName: string
  name: string
  surname: string
  emailAddress: string

  fullName: string
  lastLoginTime?: any
  creationTime: Date
  roleNames: string[]
  id: number
}
