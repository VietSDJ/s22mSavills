import { L } from '@lib/abpUtility'
import { customFieldType, wjDateFormat } from '@lib/appconst'
import { notifySuccess } from '@lib/helper'
import { WijimoColumn } from '@models/wijimo'
import customFieldService from '@services/customField/customFieldService'
import customfieldService from '@services/customField/customFieldService'
import type { PagedResultDto } from '@services/dto/pagedResultDto'

import { action, observable } from 'mobx'

class CustomFieldStore {
  @observable isLoading!: boolean

  @observable dataTable!: PagedResultDto<any>
  @observable customFields!: any[]
  @observable customFieldDetail: any = {}

  @observable sectorModules: any = []
  @observable FieldTypes: any = []
  @observable sectorCustomFields: any = []
  @observable sectorCustomFieldsSubprojectDetail: any = []
  @observable dataExcel!: []

  constructor() {
    this.customFields = []
    this.dataTable = { items: [], totalCount: 0 }
  }

  @action
  async activateOrDeactivate(id: number, isActive) {
    await customfieldService.activateOrDeactivate(id, isActive)
    await notifySuccess(L('SUCCESSFULLY'), L('UPDATE_STATUS_SUCCESSFULLY'))
  }
  @action
  async delete(id: number) {
    await customfieldService.delete(id)
    await notifySuccess(L('SUCCESSFULLY'), L('DELETE_SUCCESSFULLY'))
  }
  @action
  async bulkDelete(params) {
    this.isLoading = true
    await customFieldService
      .bulkDelete(params)
      .finally(() => (this.isLoading = false))
    await notifySuccess(L('SUCCESSFULLY'), L('DELETE_SUCCESSFULLY'))
  }
  @action public create = async (body) => {
    this.isLoading = true
    await customfieldService
      .createCustomField({ ...body })
      .finally(() => (this.isLoading = false))
  }

  @action public update = async (body) => {
    this.isLoading = true
    await customfieldService
      .updateCustomField({ ...body })
      .finally(() => (this.isLoading = false))
  }

  @action
  async getAll(params: any) {
    this.isLoading = true
    let result = await customfieldService
      .getAll(params)
      .finally(() => (this.isLoading = false))
    this.dataTable = result
  }

  @action
  async getListCustomField(params: any) {
    this.isLoading = true
    let result = await customfieldService
      .getListCustomField(params)
      .finally(() => (this.isLoading = false))
    this.dataExcel = result
  }

  @action
  async getSectorModules() {
    this.isLoading = true
    let result = await customfieldService
      .getSectorModules()
      .finally(() => (this.isLoading = false))
    this.sectorModules = result
  }

  @action
  async getFieldTypes() {
    this.isLoading = true
    let result = await customfieldService
      .getFieldTypes()
      .finally(() => (this.isLoading = false))
    this.FieldTypes = result
  }

  @action public bulkCreateOrUpdate = async (body) => {
    this.isLoading = true
    await customFieldService
      .bulkCreateOrUpdate([...body])
      .finally(() => (this.isLoading = false))

    return notifySuccess(L('SUCCESSFULLY'), L('UPDATE_SUCCESSFULLY'))
  }
  @action
  async getSectorCustomfield(moduleId) {
    this.isLoading = true
    const res = await customFieldService
      .getListCustomField({
        moduleId: moduleId,
        IsActive: true
      })
      .finally(() => (this.isLoading = false))
    const listCF = res.map((resItem, index) => {
      let newCF = new WijimoColumn()
      let format: any
      switch (resItem.fieldTypeId) {
        case customFieldType.number: {
          format = 'n'
          break
        }
        case customFieldType.date: {
          format = wjDateFormat
          break
        }
        default: {
          format = undefined
        }
      }

      newCF = {
        header: resItem.name,
        binding: `customFields[${index}].value`,
        isRequired: resItem.isRequired,
        customFieldId: resItem.customFieldId,
        format: format
      }
      return newCF
    })

    this.sectorCustomFields = listCF
  }

  @action
  async getSectorCustomfieldSubprojectDetail(moduleId) {
    this.isLoading = true
    const res = await customFieldService
      .getListCustomField({
        moduleId: moduleId,
        IsActive: true
      })
      .finally(() => (this.isLoading = false))

    const listCF = res.map((resItem, index) => {
      let newCF = new WijimoColumn()
      let format: any
      switch (resItem.fieldTypeId) {
        case customFieldType.number: {
          format = 'n'
          break
        }
        case customFieldType.date: {
          format = wjDateFormat
          break
        }
        default: {
          format = undefined
        }
      }

      newCF = {
        header: resItem.name,
        binding: `customFields[${index}].value`,
        isRequired: resItem.isRequired,
        customFieldId: resItem.customFieldId,
        format: format
      }
      return newCF
    })
    this.sectorCustomFieldsSubprojectDetail = listCF
  }
}

export default CustomFieldStore
