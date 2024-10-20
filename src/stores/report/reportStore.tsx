import { L } from '@lib/abpUtility'
import { notifySuccess } from '@lib/helper'
import type { PagedResultDto } from '@services/dto/pagedResultDto'
import reportService from '@services/report/reportService'
import { action, observable } from 'mobx'

class ReportStore {
  @observable isLoading!: boolean
  @observable reports!: PagedResultDto<any>
  @observable editReport: any = {}
  @observable embedInfo: any = {}

  constructor() {
    this.reports = { items: [], totalCount: 0 }
  }
  @action
  async createNew() {
    this.editReport = {}
  }
  @action
  async create(body: any) {
    this.isLoading = true
    this.editReport = await reportService
      .create(body)
      .finally(() => (this.isLoading = false))
  }

  @action
  async update(body: any) {
    this.isLoading = true
    await reportService.update(body).finally(() => (this.isLoading = false))
  }

  @action
  async delete(id: number) {
    await reportService.delete(id)
    await notifySuccess(L('SUCCESSFULLY'), L('DELETE_SUCCESSFULLY'))
  }

  @action
  async activateOrDeactivate(id: number, isActive) {
    await reportService.activateOrDeactivate(id, isActive)
  }

  @action
  async get(id: number) {
    this.isLoading = true
    let result = await reportService
      .get(id)
      .finally(() => (this.isLoading = false))
    this.editReport = result
  }
  @action
  async getEmbedInfo(id: number) {
    this.isLoading = true
    let result = await reportService
      .getEmbedInfo(id)
      .finally(() => (this.isLoading = false))
    this.embedInfo = result
  }
  @action
  async getAll(params: any) {
    this.isLoading = true
    let result = await reportService
      .getAll(params)
      .finally(() => (this.isLoading = false))
    this.reports = result
  }
}

export default ReportStore
