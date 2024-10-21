import './index.less'
import * as React from 'react'
import { Button, Col, Row, Form } from 'antd'
import AccountStore from '../../../../stores/accountStore'
import AuthenticationStore from '../../../../stores/authenticationStore'
import { L } from '../../../../lib/abpUtility'
import SessionStore from '../../../../stores/sessionStore'
import { validateMessages } from '../../../../lib/validation'
import FormInput from '@components/FormItem/FormInput'
import accountService from '@services/account/accountService'
import rules from './index.validation'

export interface ILoginProps {
  authenticationStore?: AuthenticationStore
  sessionStore?: SessionStore
  accountStore?: AccountStore
  history: any
  location: any
  backToLogin: () => void
}

function SystemForgetPassword(props: ILoginProps) {
  const formRef: any = React.createRef()

  const handleSubmit = async (values: any) => {
    console.log(values)
    if (values) {
      await accountService.resetPasswordViaEmail({
        ...values
      })
      props.backToLogin()
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
              {L('PASSWORD_RECOVERY')}
            </h2>
            <label className="ml-1">
              {L('INPUT_EMAIL_TO_RECOVER_YOUR_ACCOUNT')}
            </label>
          </div>
        </Col>
        <Col span={24} offset={0}>
          <FormInput
            prefix={'@'}
            name="email"
            rule={rules.userNameOrEmailAddress}
            placeholder={L('EMAIL')}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="flex mt-2 space-between center-items">
            <a onClick={props.backToLogin}>{L('BACK')}</a>
            <Button
              htmlType={'submit'}
              size="middle"
              type="primary"
              loading={props.authenticationStore?.isLoading || false}>
              {L('BTN_SEND')}
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  )
}

export default SystemForgetPassword
