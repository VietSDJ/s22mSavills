import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
// import ProtectedRoute from './ProtectedRoute'
import { layoutRouter } from './router.config'

const Router = () => {
  const UserLayout = layoutRouter.userLayout
  const AppLayout = layoutRouter.appLayout
  const PublicLayout = layoutRouter.publicLayout

  return (
    <Routes>
      <Route path="/account/*" element={<UserLayout />} />
      <Route path="/public/*" element={<PublicLayout />} />
      <Route path="*" element={<AppLayout />} />
    </Routes>
  )
}

export default Router
