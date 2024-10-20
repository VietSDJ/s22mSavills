import { L } from '@lib/abpUtility'
import { notifySuccess } from '@lib/helper'
import type { PagedResultDto } from '@services/dto/pagedResultDto'

import projectService from '@services/projects/projectService'
import { action, observable } from 'mobx'

class ProjectStore {
  @observable isLoading!: boolean
  @observable itemProject: any = []
  @observable itemSubProject: any = []
  @observable projects!: PagedResultDto<any>
  @observable subProjects!: PagedResultDto<any>
  @observable subProjectDetail: any = {}
  @observable editProject: any = {}
  @observable projectProjectRoles: any = []
  @observable warnings: any = []
  @observable ProjectCategory: any = []
  @observable ProjectTypes: any = []
  @observable subProjectTypes: any = []
  @observable subProjectStatus: any = []
  @observable dataSubProjectExcel!: []
  @observable dataExcel!: []

  constructor() {
    this.projects = { items: [], totalCount: 0 }
    this.subProjects = { items: [], totalCount: 0 }
  }
  @action
  async delete(id: number) {
    await projectService.delete(id)
    await notifySuccess(L('SUCCESSFULLY'), L('DELETE_SUCCESSFULLY'))
  }
  @action
  async bulkDelete(params) {
    this.isLoading = true
    await projectService
      .bulkDelete(params)
      .finally(() => (this.isLoading = false))
    await notifySuccess(L('SUCCESSFULLY'), L('DELETE_SUCCESSFULLY'))
  }
  @action
  async deleteSubProject(id: number) {
    await projectService.deleteSubproject(id)
    await notifySuccess(L('SUCCESSFULLY'), L('DELETE_SUCCESSFULLY'))
  }
  @action
  async activateOrDeactivate(id: number, isActive) {
    await projectService.activateOrDeactivate(id, isActive)
    await notifySuccess(L('SUCCESSFULLY'), L('UPDATE_STATUS_SUCCESSFULLY'))
  }
  @action
  async activateOrDeactivateSubProject(id: number, isActive) {
    await projectService.activateOrDeactivateSubproject(id, isActive)
    await notifySuccess(L('SUCCESSFULLY'), L('UPDATE_STATUS_SUCCESSFULLY'))
  }
  @action public createProject = async (body) => {
    this.isLoading = true
    await projectService
      .create({ ...body })
      .finally(() => (this.isLoading = false))

    return notifySuccess(L('SUCCESSFULLY'), L('CREATE_SUCCESSFULLY'))
  }

  @action public updateProject = async (body) => {
    this.isLoading = true
    await projectService
      .update({ ...body })
      .finally(() => (this.isLoading = false))

    return notifySuccess(L('SUCCESSFULLY'), L('UPDATE_SUCCESSFULLY'))
  }

  @action public createSubProject = async (body) => {
    this.isLoading = true
    await projectService
      .createSubProject({ ...body })
      .finally(() => (this.isLoading = false))

    return notifySuccess(L('SUCCESSFULLY'), L('CREATE_SUCCESSFULLY'))
  }

  @action public updateSubProject = async (body) => {
    this.isLoading = true
    await projectService
      .updateSubProject({ ...body })
      .finally(() => (this.isLoading = false))

    return notifySuccess(L('SUCCESSFULLY'), L('UPDATE_SUCCESSFULLY'))
  }

  @action
  async get(id: number) {
    let result = await projectService.get(id)
    this.editProject = result
  }

  @action
  async getAll(params: any) {
    this.isLoading = true
    let result = await projectService
      .getAll(params)
      .finally(() => (this.isLoading = false))
    this.projects = result
    this.itemProject = result.items
  }
  @action
  async GetListProject(params?: any) {
    this.isLoading = true
    let result = await projectService
      .GetListProject(params)
      .finally(() => (this.isLoading = false))
    this.dataExcel = result
  }
  @action public bulkCreateOrUpdate = async (body) => {
    this.isLoading = true
    await projectService
      .bulkCreateOrUpdate({ data: JSON.stringify([...body]) })
      .finally(() => (this.isLoading = false))

    return notifySuccess(L('SUCCESSFULLY'), L('UPDATE_SUCCESSFULLY'))
  }
  @action
  async getAllSubProject(params: any) {
    this.isLoading = true
    let result = await projectService
      .getAllSubProject(params)
      .finally(() => (this.isLoading = false))
    this.subProjects = result
    this.itemSubProject = result.items
  }
  @action
  async bulkDeleteSubproject(params) {
    this.isLoading = true
    await projectService
      .bulkDeleteSubproject(params)
      .finally(() => (this.isLoading = false))
    await notifySuccess(L('SUCCESSFULLY'), L('DELETE_SUCCESSFULLY'))
  }
  @action public bulkCreateOrUpdateSubProject = async (body) => {
    this.isLoading = true
    await projectService
      .bulkCreateOrUpdateSubProject({ data: JSON.stringify([...body]) })
      .finally(() => (this.isLoading = false))

    return notifySuccess(L('SUCCESSFULLY'), L('UPDATE_SUCCESSFULLY'))
  }
  @action
  async getSubProject(params: any) {
    this.isLoading = true
    let result = await projectService
      .getSubProject(params)
      .finally(() => (this.isLoading = false))
    this.subProjectDetail = result
  }
  @action
  async getListProjectCategory(params: any) {
    this.isLoading = true
    let result = await projectService.getListProjectCategory(params)
    this.ProjectCategory = result
  }

  @action
  async getListProjectType() {
    this.isLoading = true
    let result = await projectService.getListProjectType()
    this.ProjectTypes = result
  }

  @action
  async getListSubProjectType() {
    this.isLoading = true
    let result = await projectService.getListSubProjectType()
    this.subProjectTypes = result
  }
  @action
  async getListSubProjectStatus() {
    this.isLoading = true
    let result = await projectService.getListSubProjectStatus()
    this.subProjectStatus = result
  }
  @action
  async GetExportSubProject(params: any) {
    this.isLoading = true
    let result = await projectService
      .GetExportSubProject(params)
      .finally(() => (this.isLoading = false))
    this.dataSubProjectExcel = result
  }
}

export default ProjectStore
