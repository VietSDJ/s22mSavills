import React from 'react'

import {
  Col,
  Form,
  Input,
  Row,
  Select,
  Switch,
  Modal,
  Button,
  DatePicker
} from 'antd'
import rules from './validation'
// import * as pbi from 'powerbi-client'

import { inject, observer } from 'mobx-react'
import { withRouter } from '@components/Layout/Router/withRouter'
import AppConsts, { appPermissions, dateFormat } from '@lib/appconst'
import { AppComponentListBase } from '@components/AppComponentBase'
import Stores from '@stores/storeIdentifier'
import { isGrantedAny, L, LNotification } from '@lib/abpUtility'
import { validateMessages } from '@lib/validation'
import WrapPageScroll from '@components/WrapPageScroll'
import ReportStore from '@stores/report/reportStore'
import staffService from '@services/member/staff/staffService'
import _ from 'lodash'
import { filterOptions } from '@lib/helper'
import PowerBIEmbed from '@components/PowerBiEmbed'

const { formVerticalLayout } = AppConsts
const { confirm } = Modal

export interface IProps {
  params: any
  navigate: any
  reportStore: ReportStore
}
export interface IState {
  isDirty: any
  listUser: any
  embedData: any
}
@inject(Stores.ReportStore)
@observer
class ReportDetail extends AppComponentListBase<IProps, IState> {
  state = {
    isDirty: false,
    listUser: [] as any,
    embedData: undefined as any
  }
  formRef: any = React.createRef()

  async componentDidMount() {
    // Need to wait to get all role first. If not -> the logic will be wrong
    this.getListUser()
    await this.getDetail(this.props?.params?.id)
  }

  componentWillUnmount() {
    this.props.reportStore.createNew()
  }

  getDetail = async (id?) => {
    if (!id) {
      await this.props.reportStore.createNew()
    } else {
      // Need to wait to get all role first. If not -> the logic will be wrong
      // await this.props.staffStore.getProjectRoles({ id: this.props.match?.params?.id }, this.props.roleStore.allRoles)
      await this.props.reportStore.get(id)
    }
    this.formRef.current?.setFieldsValue({
      ...this.props.reportStore.editReport
    })
    if (this.props.reportStore.editReport?.pbi) {
      await this.props.reportStore.getEmbedInfo(
        this.props.reportStore.editReport?.pbi
      )
      this.setState({
        embedData: JSON.parse(this.props.reportStore.embedInfo)
      })
    }
  }
  getListUser = async (keyword?) => {
    const res = await staffService.getAll({ keyword })
    const listOption = res.items.map((item) => {
      return { value: item.id, name: item.userName }
    })
    this.setState({ listUser: listOption })
  }
  onSave = () => {
    const form = this.formRef.current

    form.validateFields().then(async (values: any) => {
      if (this.props.reportStore.editReport?.id) {
        await this.props.reportStore.update({
          ...this.props.reportStore.editReport,
          ...values
        })
      } else {
        await this.props.reportStore.create({
          ...values
        })
      }

      this.props.navigate(-1)
    })
  }

  onCancel = () => {
    if (this.state.isDirty) {
      confirm({
        title: LNotification('ARE_YOU_SURE'),
        okText: L('BTN_YES'),
        cancelText: L('BTN_NO'),
        onOk: () => {
          this.props.navigate(-1)
        }
      })
      return
    }
    this.props.navigate(-1)
  }

  renderActions = (isLoading?) => {
    return (
      <Row>
        <Col
          sm={{ span: 24, offset: 0 }}
          className="d-flex justify-content-between">
          <span className="d-flex align-items-center">
            {/* <span className="mr-2 text-muted">{L('IS_ACTIVATED')}</span> */}
            <span>
              <Form.Item
                name="isActive"
                valuePropName="checked"
                className="mb-0">
                <Switch defaultChecked />
                <span className="mx-2">{L('STAFF_ACTIVE_STATUS')}</span>
              </Form.Item>
            </span>
          </span>
          <span>
            <Button className="mr-1" onClick={this.onCancel} shape="round">
              {L('BTN_CANCEL')}
            </Button>

            {isGrantedAny(
              appPermissions.report.create,
              appPermissions.report.update
            ) && (
              <Button
                type="primary"
                onClick={this.onSave}
                loading={isLoading}
                shape="round">
                {L('BTN_SAVE')}
              </Button>
            )}
          </span>
        </Col>
      </Row>
    )
  }

  render() {
    const {
      reportStore: { isLoading }
    } = this.props
    const { listUser, embedData } = this.state
    console.log(embedData)
    return (
      <WrapPageScroll renderActions={() => this.renderActions(isLoading)}>
        <Form
          ref={this.formRef}
          // layout={'vertical'}
          onFinish={this.onSave}
          onAbort={this.onCancel}
          onValuesChange={() => this.setState({ isDirty: true })}
          validateMessages={validateMessages}
          className=" p-3"
          size="large">
          <Row gutter={[8, 8]}>
            <Col sm={{ span: 12, offset: 0 }}>
              <Form.Item
                label={L('TITLE')}
                {...formVerticalLayout}
                name="title"
                rules={rules.title}>
                <Input />
              </Form.Item>
            </Col>
            <Col sm={{ span: 12, offset: 0 }}>
              <Form.Item
                label={L('USER')}
                {...formVerticalLayout}
                rules={rules.required}
                name="userId">
                <Select
                  style={{ width: '100%' }}
                  showSearch
                  filterOption={filterOptions}
                  onSearch={_.debounce(
                    (value) => this.getListUser(value),
                    100
                  )}>
                  {listUser.map((item: any, index) => (
                    <Select.Option key={index} value={item.value}>
                      {L(item.name)}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col sm={{ span: 12, offset: 0 }}>
              <Form.Item
                label={L('START_DATE')}
                {...formVerticalLayout}
                rules={rules.required}
                name="startDate">
                <DatePicker
                  className="full-width"
                  format={dateFormat}
                  // placeholder={L('SELECT_DATE')}
                />
              </Form.Item>
            </Col>
            <Col sm={{ span: 12, offset: 0 }}>
              <Form.Item
                label={L('EXPRIED_DATE')}
                {...formVerticalLayout}
                rules={rules.required}
                name="expiredDate">
                <DatePicker
                  className="full-width"
                  format={dateFormat}
                  // placeholder={L('SELECT_DATE')}
                />
              </Form.Item>
            </Col>
            <Col sm={{ span: 12, offset: 0 }}>
              <Form.Item
                label={L('PBI_REPORT')}
                {...formVerticalLayout}
                name="pbi"
                rules={rules.uuid}>
                <Input />
              </Form.Item>
            </Col>
            {embedData?.TokenId && (
              <Col sm={{ span: 24, offset: 0 }}>
                <PowerBIEmbed
                  tokenId={embedData?.TokenId}
                  accessToken={embedData?.AccessToken}
                  reportId={embedData?.ReportConfig?.ReportId}
                  embedUrl={embedData?.ReportConfig?.EmbedUrl}
                />
              </Col>
            )}
          </Row>
        </Form>
      </WrapPageScroll>
    )
  }
}

export default withRouter(ReportDetail)
