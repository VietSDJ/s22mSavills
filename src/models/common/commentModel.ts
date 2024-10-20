import { buildFileUrlWithEncToken } from '../../lib/helper'
import { FileModel } from '@models/File'
import { defaultAvatar } from '@lib/appconst'

export class CommentModel {
  id?: number
  author: string
  avatar: string
  children: string
  content: string
  isPrivate: boolean
  isActive: boolean
  user: any
  files: FileModel[]

  constructor() {
    this.id = undefined
    this.author = ''
    this.avatar = ''
    this.children = ''
    this.content = ''
    this.isPrivate = false
    this.isActive = true
    this.user = {}
    this.files = []
  }

  public static assign(obj) {
    if (!obj) return undefined

    let newObj = Object.assign(new CommentModel(), obj)
    newObj.author = obj.user?.displayName
    newObj.avatar = obj.user?.avatarUrl
      ? buildFileUrlWithEncToken(obj.user?.avatarUrl)
      : defaultAvatar
    newObj.files =
      obj.files && obj.files.length ? FileModel.assigns(obj.files) : ''

    return newObj
  }

  public static assigns<T>(objs) {
    let results: CommentModel[] = []
    objs.forEach((item) => results.push(this.assign(item)))
    return results
  }
}
