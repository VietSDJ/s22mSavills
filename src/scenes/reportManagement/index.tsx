import * as React from 'react'

import { Button, Col, Input, Modal, Row, Select, Table } from 'antd'

import { inject, observer } from 'mobx-react'
// import Filter from '../../../components/Filter'
import debounce from 'lodash/debounce'
import getColumns from './columns'
import moment from 'moment'
import { withRouter } from '@components/Layout/Router/withRouter'
import AppConsts, { appPermissions } from '@lib/appconst'
import Stores from '@stores/storeIdentifier'
import { AppComponentListBase } from '@components/AppComponentBase'
import { isGrantedAny, L, LNotification } from '@lib/abpUtility'
import DataTable from '@components/DataTable'
import { portalLayouts } from '@components/Layout/Router/router.config'
import ReportStore from '@stores/report/reportStore'
import { renderOptions } from '@lib/helper'

const { align, activeStatus } = AppConsts

export interface IStaffsProps {
  navigate: any
  reportStore: ReportStore
}

export interface IStaffsState {
  modalResetPasswordVisible: boolean
  modalVisible: boolean
  maxResultCount: number
  skipCount: number
  staffId?: number
  filters: any
}

const confirm = Modal.confirm

@inject(Stores.ReportStore)
@observer
class Staffs extends AppComponentListBase<IStaffsProps, IStaffsState> {
  formRef: any = React.createRef()

  state = {
    modalResetPasswordVisible: false,
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
    await this.props.reportStore.getAll({
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
      await this.props.reportStore.createNew()
    } else {
      await this.props.reportStore.get(id)
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
        await self.props.reportStore.activateOrDeactivate(id, isActive)
        self.handleTableChange({ current: 1 })
      },
      onCancel() {}
    })
  }

  gotoDetail = (id) => {
    const { navigate } = this.props
    id
      ? navigate(portalLayouts.reportDetail.path.replace(':id', id))
      : navigate(portalLayouts.reportCreate.path)
  }

  handleCreate = () => {
    const form = this.formRef.current

    form.validateFields().then(async (values: any) => {
      if (this.state.staffId === 0) {
        await this.props.reportStore.create(values)
      } else {
        await this.props.reportStore.update({
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

  showChangePasswordModal = (id) => {
    this.setState({ staffId: id, modalResetPasswordVisible: true })
  }

  renderFilterComponent = () => {
    return (
      <>
        <Col sm={{ span: 6, offset: 0 }}>
          <Input.Search
            allowClear
            placeholder={L('FILTER_REPORT_KEYWORD')}
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
      reportStore: { reports, isLoading }
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
                disabled={!isGrantedAny(appPermissions.report.detail)}
                onClick={() => this.gotoDetail(item.id)}>
                {L('BTN_EDIT')}
              </Button>
            </Col>{' '}
            <Col sm={{ span: 24, offset: 0 }}>
              <Button
                danger
                className="mr-1 w-100"
                disabled={!isGrantedAny(appPermissions.report.delete)}
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

    return (
      <>
        <DataTable
          title={this.L('STAFF_LIST')}
          onCreate={() => this.gotoDetail(null)}
          pagination={{
            pageSize: this.state.maxResultCount,
            current: this.currentPage,
            total: reports === undefined ? 0 : reports.totalCount,
            onChange: this.handleTableChange
          }}
          createPermission={appPermissions.report.create}
          filterComponent={this.renderFilterComponent()}>
          <Table
            size="middle"
            className="custom-ant-table"
            rowKey={(record) => record.id}
            columns={columns}
            pagination={false}
            loading={isLoading}
            dataSource={reports === undefined ? [] : reports.items}
            scroll={{ x: 1024, scrollToFirstRowOnChange: true }}
          />
        </DataTable>
      </>
    )
  }
}

export default withRouter(Staffs)
