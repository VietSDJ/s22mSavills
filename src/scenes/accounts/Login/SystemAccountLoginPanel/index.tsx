import './index.less'

import * as React from 'react'

import { Button, Col, Row, Form } from 'antd'
import AccountStore from '../../../../stores/accountStore'
import AuthenticationStore from '../../../../stores/authenticationStore'
import { L } from '../../../../lib/abpUtility'
import { Link } from 'react-router-dom'
import SessionStore from '../../../../stores/sessionStore'
import rules from './index.validation'
import { validateMessages } from '../../../../lib/validation'
import { userLayout } from '@components/Layout/Router/router.config'
import FormInput from '@components/FormItem/FormInput'
import FormInputPassword from '@components/FormItem/FormInput/FormInputPassword'

export interface ILoginProps {
  authenticationStore?: AuthenticationStore
  sessionStore?: SessionStore
  accountStore?: AccountStore
  history: any
  location: any
  handleBack: () => void
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
      <Row style={{ marginTop: '20px' }} gutter={[16, 16]}>
        {/*  <Col span={4} className="h-100 text-center">
         <Button
            className="rounded"
            size="large"
            icon={
              <LeftOutlined style={{ fontSize: '16px', color: '#DEB854' }} />
            }
            onClick={() => props.handleBack()}
          /> 
        </Col>*/}
        <Col span={20}>
          <div className="w-100 text-left ml-1">
            <h2 className="ml-1">{L('LOGIN_WITH_ACCOUNT')}</h2>
          </div>
        </Col>
        <Col span={24} offset={0}>
          <FormInput
            name="userNameOrEmailAddress"
            rule={rules.userNameOrEmailAddress}
            label={L('USERNAME_OR_EMAIL')}
          />
        </Col>
        <Col span={24} offset={0}>
          <FormInputPassword
            name="password"
            rule={rules.password}
            label={L('PASSWORD')}
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
          <Button
            style={{ width: '100%', marginTop: '10px' }}
            htmlType={'submit'}
            type="primary"
            loading={props.authenticationStore?.isLoading || false}
            shape="round">
            {L('BTN_LOGIN')}
          </Button>
        </Col>
        {/* <Col span={24} style={{ marginTop: '20px', textAlign: 'center' }}>
          <Link
            to={{ pathname: '/account' + userLayout.register.path }}
            style={{ fontWeight: 600 }}>
            {L('REGISTER')}
          </Link>
        </Col> */}
        <Col span={24} style={{ marginTop: '10px', textAlign: 'center' }}>
          <Link
            to={{ pathname: '/account' + userLayout.forgotPassword.path }}
            style={{ fontWeight: 600 }}>
            {L('FORGOT_PASSWORD')}
          </Link>
        </Col>
      </Row>
    </Form>
  )
}

export default SystemAccountLoginPanel
