export interface UpdateUserInput {
  userName: string
  name: string
  surname: string
  emailAddress: string

  fullName: string
  lastLoginTime: Date
  creationTime: Date
  roleNames: string[]
  id: number
}
