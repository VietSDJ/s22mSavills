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
  Divider
} from 'antd'
import { L, LNotification, isGrantedAny } from '../../../../lib/abpUtility'
import rules from './validation'
import AppConsts, {
  appPermissions,
  defaultAvatar
} from '../../../../lib/appconst'
import { inject, observer } from 'mobx-react'
import Stores from '../../../../stores/storeIdentifier'
import StaffStore from '../../../../stores/member/staff/staffStore'
import RoleStore from '../../../../stores/administrator/roleStore'
import WrapPageScroll from '../../../../components/WrapPageScroll'
import AppComponentBase from '../../../../components/AppComponentBase'
import UserStore from '../../../../stores/administrator/userStore'
import { validateMessages } from '../../../../lib/validation'
import { withRouter } from '@components/Layout/Router/withRouter'
import { UserOutlined } from '@ant-design/icons'
import ResetPasswordFormModal from '@components/Modals/ResetPassword'

const { formVerticalLayout, listGroupUser } = AppConsts
const { confirm } = Modal

export interface IStaffFormProps {
  params: any
  navigate: any
  staffStore: StaffStore
  roleStore: RoleStore
  userStore: UserStore
}

@inject(Stores.StaffStore, Stores.UserStore, Stores.RoleStore)
@observer
class StaffDetail extends AppComponentBase<IStaffFormProps> {
  state = {
    isDirty: false,
    modalResetPasswordVisible: false,
    staffId: undefined as any
  }
  formRef: any = React.createRef()

  async componentDidMount() {
    // Need to wait to get all role first. If not -> the logic will be wrong
    await this.getDetail(this.props?.params?.id)
  }

  componentWillUnmount() {
    this.props.userStore.editUserProfilePicture = defaultAvatar
    this.props.staffStore.createStaff()
  }

  getDetail = async (id?) => {
    if (!id) {
      await this.props.staffStore.createStaff()
    } else {
      // Need to wait to get all role first. If not -> the logic will be wrong
      // await this.props.staffStore.getProjectRoles({ id: this.props.match?.params?.id }, this.props.roleStore.allRoles)
      await this.props.staffStore.get(id)
    }
    this.formRef.current.setFieldsValue({ ...this.props.staffStore.editStaff })
  }
  showChangePasswordModal = (id) => {
    this.setState({ staffId: id, modalResetPasswordVisible: true })
  }
  onSave = () => {
    const form = this.formRef.current

    form.validateFields().then(async (values: any) => {
      if (this.props.staffStore.editStaff?.id) {
        await this.props.staffStore.update({
          ...this.props.staffStore.editStaff,
          ...values
        })
      } else {
        await this.props.staffStore.create({
          ...values,
          setRandomPassword: true
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
              appPermissions.staff.create,
              appPermissions.staff.update
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
      staffStore: { isLoading, editStaff }
    } = this.props
    // const profilePictureUrl = this.props.userStore.editUserProfilePicture;
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
            {editStaff?.id && (
              <>
                <Col sm={{ span: 21, offset: 0 }}>
                  <UserOutlined /> {L('MANAGEMENT_OF_ACCOUNT')}:{' '}
                  {editStaff?.userName}
                </Col>
                {isGrantedAny(appPermissions.staff.update) && (
                  <Col sm={{ span: 3, offset: 0 }}>
                    <Button
                      danger
                      className="mr-1 w-100"
                      onClick={() =>
                        this.showChangePasswordModal(this.props?.params?.id)
                      }>
                      {L('RESET_PASSWORD')}
                    </Button>
                  </Col>
                )}
              </>
            )}
            <Divider />
            <Col sm={{ span: 12, offset: 0 }}>
              <Form.Item
                label={L('NAME')}
                {...formVerticalLayout}
                name="userName"
                rules={rules.displayName}>
                <Input />
              </Form.Item>
            </Col>
            <Col sm={{ span: 12, offset: 0 }}>
              <Form.Item
                label={L('COMPANY')}
                {...formVerticalLayout}
                name="company"
                rules={rules.displayName}>
                <Input />
              </Form.Item>
            </Col>
            <Col sm={{ span: 12, offset: 0 }}>
              <Form.Item
                label={L('STAFF_EMAIL')}
                {...formVerticalLayout}
                name="emailAddress"
                rules={rules.emailAddress}>
                <Input />
              </Form.Item>
            </Col>
            <Col sm={{ span: 12, offset: 0 }}>
              <Form.Item
                label={L('STAFF_PHONE')}
                {...formVerticalLayout}
                name="phoneNumber"
                rules={rules.phoneNumber}>
                <Input />
              </Form.Item>
            </Col>
            {!editStaff?.id && (
              <Col sm={{ span: 12, offset: 0 }}>
                <Form.Item
                  label={L('PASSWORD')}
                  {...formVerticalLayout}
                  name="password"
                  rules={rules.password}>
                  <Input.Password />
                </Form.Item>
              </Col>
            )}
            <Col sm={{ span: 12, offset: 0 }}>
              <Form.Item
                label={L('ROLE')}
                {...formVerticalLayout}
                rules={rules.required}
                name="groupId">
                <Select style={{ width: '100%' }}>
                  {listGroupUser.map((item: any, index) => (
                    <Select.Option key={index} value={item.value}>
                      {L(item.name)}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <ResetPasswordFormModal
          visible={this.state.modalResetPasswordVisible}
          userId={this.state.staffId}
          onCancel={() =>
            this.setState({
              modalResetPasswordVisible: false,
              staffId: 0
            })
          }
        />
      </WrapPageScroll>
    )
  }
}

export default withRouter(StaffDetail)
