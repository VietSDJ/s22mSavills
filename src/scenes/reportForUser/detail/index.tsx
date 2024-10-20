import React from 'react'

import { Col, Form, Row, Switch, Modal, Button } from 'antd'
// import * as pbi from 'powerbi-client'

import { inject, observer } from 'mobx-react'
import { withRouter } from '@components/Layout/Router/withRouter'
import { BarChartOutlined } from '@ant-design/icons'
import { AppComponentListBase } from '@components/AppComponentBase'
import Stores from '@stores/storeIdentifier'
import { L, LNotification } from '@lib/abpUtility'
import { validateMessages } from '@lib/validation'
import WrapPageScroll from '@components/WrapPageScroll'
import ReportStore from '@stores/report/reportStore'
import _ from 'lodash'
import PowerBIEmbed from '@components/PowerBiEmbed'

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
    await this.getDetail(this.props?.params?.id)
  }

  componentWillUnmount() {
    this.props.reportStore.createNew()
  }

  getDetail = async (id?) => {
    if (!id) {
      await this.props.reportStore.createNew()
    } else {
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
          </span>
        </Col>
      </Row>
    )
  }

  render() {
    const {
      reportStore: { isLoading, editReport }
    } = this.props
    const { embedData } = this.state
    console.log(embedData)
    return (
      <WrapPageScroll renderActions={() => this.renderActions(isLoading)}>
        <Form
          ref={this.formRef}
          // layout={'vertical'}
          onAbort={this.onCancel}
          onValuesChange={() => this.setState({ isDirty: true })}
          validateMessages={validateMessages}
          className=" p-3"
          size="large">
          <Row gutter={[8, 8]}>
            <Col sm={{ span: 24, offset: 0 }}>
              <BarChartOutlined />{' '}
              {editReport?.id ? L('EDIT_REPORT') : L('NEW_REPORT')}
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
