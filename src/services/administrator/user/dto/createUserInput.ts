export interface CreateUserInput {
  userName: string
  name: string
  surname: string
  emailAddress: string

  roleNames: string[]
  password: string
}
