import * as React from 'react'

import { Button, Col, Input, Modal, Row, Select, Table } from 'antd'

import { AppComponentListBase } from '../../../components/AppComponentBase'
// import Filter from '../../../components/Filter'
import DataTable from '../../../components/DataTable'
import { isGrantedAny, L, LNotification } from '../../../lib/abpUtility'
import StaffStore from '../../../stores/member/staff/staffStore'
import { inject, observer } from 'mobx-react'
import Stores from '../../../stores/storeIdentifier'
import AppConst, { appPermissions } from '../../../lib/appconst'
import { portalLayouts } from '../../../components/Layout/Router/router.config'
import debounce from 'lodash/debounce'
import getColumns from './columns'
import moment from 'moment'
import { withRouter } from '@components/Layout/Router/withRouter'
import { renderOptions } from '@lib/helper'

const { align, activeStatus } = AppConst

export interface IStaffsProps {
  navigate: any
  staffStore: StaffStore
}

export interface IStaffsState {
  modalVisible: boolean
  maxResultCount: number
  skipCount: number
  staffId?: number
  filters: any
}

const confirm = Modal.confirm

@inject(Stores.StaffStore)
@observer
class Staffs extends AppComponentListBase<IStaffsProps, IStaffsState> {
  formRef: any = React.createRef()

  state = {
    modalVisible: false,
    maxResultCount: 50,
    skipCount: 0,
    staffId: 0,
    filters: {}
  }

  get currentPage() {
    return Math.floor(this.state.skipCount / this.state.maxResultCount) + 1
  }

  async componentDidMount() {
    await this.getAll()
  }

  getAll = async () => {
    await this.props.staffStore.getAll({
      maxResultCount: this.state.maxResultCount,
      skipCount: this.state.skipCount,
      ...this.state.filters
    })
  }

  handleTableChange = (pagination: any) => {
    this.setState(
      { skipCount: (pagination.current - 1) * this.state.maxResultCount! },
      async () => await this.getAll()
    )
  }

  Modal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }

  createOrUpdateModalOpen = async (id?: number) => {
    if (!id) {
      await this.props.staffStore.createStaff()
    } else {
      await this.props.staffStore.get(id)
    }

    this.setState({ staffId: id })
    this.Modal()

    this.formRef.current?.setFieldsValue({})
  }

  activateOrDeactivate = async (id: number, isActive) => {
    const self = this
    confirm({
      title: LNotification(
        isActive
          ? 'DO_YOU_WANT_TO_ACTIVATE_THIS_ITEM'
          : 'DO_YOU_WANT_TO_DEACTIVATE_THIS_ITEM'
      ),
      okText: L('BTN_YES'),
      cancelText: L('BTN_NO'),
      onOk: async () => {
        await self.props.staffStore.activateOrDeactivate(id, isActive)
        self.handleTableChange({ current: 1 })
      },
      onCancel() {}
    })
  }

  gotoDetail = (id) => {
    const { navigate } = this.props
    id
      ? navigate(portalLayouts.staffDetail.path.replace(':id', id))
      : navigate(portalLayouts.staffCreate.path)
  }

  handleCreate = () => {
    const form = this.formRef.current

    form.validateFields().then(async (values: any) => {
      if (this.state.staffId === 0) {
        await this.props.staffStore.create(values)
      } else {
        await this.props.staffStore.update({
          id: this.state.staffId,
          ...values
        })
      }

      await this.getAll()
      this.setState({ modalVisible: false })
      form.resetFields()
    })
  }

  updateSearch = debounce((name, value) => {
    const { filters } = this.state
    this.setState({ filters: { ...filters, [name]: value } })
  }, 100)

  handleSearch = (name, value) => {
    const { filters } = this.state
    if (name === '') {
      value
        ? this.setState(
            {
              filters: {
                ...filters,
                fromDate: moment(value[0]).toISOString(),
                toDate: moment(value[1]).toISOString()
              },
              skipCount: 0
            },
            async () => {
              await this.getAll()
            }
          )
        : this.setState(
            {
              filters: {
                ...filters,
                fromDate: undefined,
                toDate: undefined
              },
              skipCount: 0
            },
            async () => {
              await this.getAll()
            }
          )
    } else {
      this.setState(
        { filters: { ...filters, [name]: value }, skipCount: 0 },
        async () => {
          await this.getAll()
        }
      )
    }
  }

  renderFilterComponent = () => {
    return (
      <>
        <Col sm={{ span: 6, offset: 0 }}>
          <Input.Search
            allowClear
            placeholder={L('FILTER_STAFF_KEYWORD')}
            onSearch={(value) => this.handleSearch('keyword', value)}
          />
        </Col>
        <Col sm={{ span: 4, offset: 0 }}>
          <Select
            placeholder={L('STATUS')}
            style={{ width: '100%' }}
            allowClear
            onChange={(value) => this.handleSearch('isActive', value)}>
            {renderOptions(activeStatus)}
          </Select>
        </Col>
      </>
    )
  }

  public render() {
    const {
      staffStore: { staffs, isLoading }
    } = this.props
    // const {filters} = this.state
    const columns = getColumns({
      title: L('OPTIONS'),
      dataIndex: 'operation',
      key: 'operation',
      fixed: align.center,
      align: align.center,
      width: 120,
      render: (text: string, item: any) => (
        <div>
          <Row gutter={[8, 4]}>
            <Col sm={{ span: 24, offset: 0 }}>
              <Button
                className="mr-1 w-100"
                disabled={!isGrantedAny(appPermissions.staff.detail)}
                onClick={() => this.gotoDetail(item.id)}>
                {L('BTN_EDIT')}
              </Button>
            </Col>{' '}
            <Col sm={{ span: 24, offset: 0 }}>
              <Button
                danger
                className="mr-1 w-100"
                disabled={!isGrantedAny(appPermissions.staff.delete)}
                onClick={() =>
                  this.activateOrDeactivate(item.id, !item.isActive)
                }>
                {L(item.isActive ? 'BTN_DEACTIVATE' : 'BTN_ACTIVATE')}
              </Button>
            </Col>
          </Row>
        </div>
      )
    })

    // const keywordPlaceholder = `${this.L('STAFF_FULL_NAME')}, ${this.L('STAFF_EMAIL')}`
    return (
      <>
        <DataTable
          title={this.L('STAFF_LIST')}
          onCreate={() => this.gotoDetail(null)}
          pagination={{
            pageSize: this.state.maxResultCount,
            current: this.currentPage,
            total: staffs === undefined ? 0 : staffs.totalCount,
            onChange: this.handleTableChange
          }}
          createPermission={appPermissions.staff.create}
          filterComponent={this.renderFilterComponent()}>
          <Table
            size="middle"
            className="custom-ant-table"
            rowKey={(record) => record.id}
            columns={columns}
            pagination={false}
            loading={isLoading}
            dataSource={staffs === undefined ? [] : staffs.items}
            scroll={{ x: 1024, scrollToFirstRowOnChange: true }}
          />
        </DataTable>
      </>
    )
  }
}

export default withRouter(Staffs)
