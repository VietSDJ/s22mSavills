import { userLayout } from '@components/Layout/Router/router.config'
import { L } from '@lib/abpUtility'
import userService from '@services/administrator/user/userService'
import Button from 'antd/lib/button'
import Result from 'antd/lib/result'
import Spin from 'antd/lib/spin'
import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

type Props = {}
const ActiveEmail = (props: Props) => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const params = {
    userId: searchParams.get('emailaddress'),
    confirmationCode: searchParams.get('code'),
    type: searchParams.get('type'),
    tenantId: 1
  }
  const [isLoading, setIsLoading] = React.useState(true)
  const [activateStatus, setActivateStatus] = React.useState<any>()
  React.useEffect(() => {
    userService.activateEmail(params).then((res) => {
      setIsLoading(false)
      setActivateStatus(res)
      console.log(activateStatus)
    })
  }, [])

  return isLoading ? (
    <div className="w-100 text-center p-5">
      <Spin spinning={true} />{' '}
    </div>
  ) : (
    <div className="w-100 text-center p-5">
      <Result
        status="success"
        title={L('SUCCESSFULL_ACTIVATED_EMAIL')}
        subTitle={
          <div>
            <div>
              {params.type === 'employee' && L('EMPLOYEE_ACTIVATED_CONTENT')}
            </div>
          </div>
        }
        extra={[
          params.type === 'employee' && (
            <Button
              type="primary"
              key="login"
              onClick={() => {
                navigate('/account' + userLayout.accountLogin.path)
              }}>
              {L('GO_TO_LOGIN')}
            </Button>
          )
        ]}
      />
    </div>
  )
}

export default ActiveEmail
