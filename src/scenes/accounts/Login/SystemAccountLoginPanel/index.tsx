import './index.less'

import * as React from 'react'

import { Button, Col, Row, Form } from 'antd'
import AccountStore from '../../../../stores/accountStore'
import AuthenticationStore from '../../../../stores/authenticationStore'
import { L } from '../../../../lib/abpUtility'
import SessionStore from '../../../../stores/sessionStore'
import rules from './index.validation'
import { validateMessages } from '../../../../lib/validation'
import FormInput from '@components/FormItem/FormInput'
import FormInputPassword from '@components/FormItem/FormInput/FormInputPassword'
import { LockOutlined } from '@ant-design/icons'

export interface ILoginProps {
  authenticationStore?: AuthenticationStore
  sessionStore?: SessionStore
  accountStore?: AccountStore
  history: any
  location: any
  handleFogotPassword: () => void
}

function SystemAccountLoginPanel(props: ILoginProps) {
  const formRef: any = React.createRef()
  const handleSubmit = async (values: any) => {
    console.log(props.location)
    const { loginModel } = props.authenticationStore!
    if (values) {
      await props.authenticationStore!.login(values)
      sessionStorage.setItem('rememberMe', loginModel.rememberMe ? '1' : '0')

      const { state } = props.location
      if (state?.from?.pathname === '/logout') {
        return (window.location.href = '/')
      }
      return (window.location =
        state && state.from.pathname !== '/' ? state.from.pathname : '/')
    }
  }

  return (
    <Form
      ref={formRef}
      onFinish={handleSubmit}
      validateMessages={validateMessages}
      layout={'vertical'}>
      <Row style={{ marginTop: '20px' }} gutter={[16, 8]}>
        <Col span={20}>
          <div className="w-100 text-left ml-1">
            <h2 style={{ marginBottom: 0 }} className="ml-1">
              {L('LOGIN_WITH_ACCOUNT')}
            </h2>
            <label className="ml-1">{L('SIGN_IN_TO_YOUR_ACCOUNT')}</label>
          </div>
        </Col>
        <Col span={24} offset={0}>
          <FormInput
            prefix={'@'}
            name="userNameOrEmailAddress"
            rule={rules.userNameOrEmailAddress}
            placeholder={L('USERNAME_OR_EMAIL')}
          />
        </Col>
        <Col span={24} offset={0}>
          <FormInputPassword
            name="password"
            rule={rules.password}
            placeholder={L('PASSWORD')}
            prefix={<LockOutlined />}
          />
          {/* <Form.Item
            name="password"
            rules={rules.password}
            label={L("PASSWORD")}
          >
            <Input.Password placeholder={L("PASSWORD")} size="large" />
          </Form.Item> */}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="flex mt-2 space-between center-items">
            <Button
              htmlType={'submit'}
              size="middle"
              type="primary"
              loading={props.authenticationStore?.isLoading || false}>
              {L('BTN_LOGIN')}
            </Button>
            {/* <Link
              // to={{ pathname: '/account' + userLayout.forgotPassword.path }}
              style={{ fontWeight: 600 }}> */}
            <a onClick={props.handleFogotPassword}>{L('FORGOT_PASSWORD')}</a>
            {/* </Link> */}
          </div>
        </Col>
        {/* <Col span={24} style={{ marginTop: '20px', textAlign: 'center' }}>
          <Link
            to={{ pathname: '/account' + userLayout.register.path }}
            style={{ fontWeight: 600 }}>
            {L('REGISTER')}
          </Link>
        </Col> */}
      </Row>
    </Form>
  )
}

export default SystemAccountLoginPanel
