import * as React from 'react'

import { Navigate } from 'react-router-dom'
import { isGranted } from '@lib/abpUtility'
import { userLayout } from '@components/Layout/Router/router.config'

declare var abp: any

const ProtectedRoute = ({
  path,
  component: Component,
  routedata,
  permission,
  render,
  ...rest
}: any) => {
  if (!abp.session.userId) {
    return (
      <Navigate
        to={{
          pathname: '/account' + userLayout.accountLogin.path
        }}
        state={{ from: location }}
      />
    )
  }

  if (permission && !isGranted(permission)) {
    return (
      <Navigate
        to={{
          pathname: '/exception?type=401'
        }}
        state={{ from: location }}
      />
    )
  }
  return Component || null
}

export default ProtectedRoute
