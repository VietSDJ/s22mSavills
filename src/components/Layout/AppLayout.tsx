import './AppLayout.less'

import * as React from 'react'

// import DocumentTitle from 'react-document-title'
import Header from './Header'
import { Layout } from 'antd'
import ProtectedRoute from './Router/ProtectedRoute'
import SiderMenu from './SiderMenu'
import { accountMenuGroups, portalLayouts } from './Router/router.config'
import utils from '../.././utils/utils'
import { inject, observer } from 'mobx-react'
import Stores from '@stores/storeIdentifier'
import Appbar from './Appbar/Appbar'
import { sidebarStatus } from '@lib/appconst'
import AccountSider from './SiderMenu/accountSider'
import NoSider from './SiderMenu/noSider'
import FooterAppbar from './Footer/FooterAppbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { withRouter } from './Router/withRouter'

const { Content } = Layout

@inject(Stores.SessionStore)
@observer
class AppLayout extends React.Component<any> {
  state = {
    collapsed: false,
    sideBarState: sidebarStatus.menu
  }

  componentDidMount = async () => {
    if (
      this.props.sessionStore!.appSettingConfiguration
        ?.isReminderCreateFeePackage
    ) {
      const { navigate } = this.props
      navigate(portalLayouts.feePackage.path)
    }
    accountMenuGroups.map((key) => {
      if (key.path === this.props.location.pathname) {
        this.setState({ sideBarState: sidebarStatus.account })
      }
    })
    if (this.props.location.pathname === '/app-setting') {
      this.setState({ sideBarState: sidebarStatus.setting })
    }
  }

  onCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  onChangeMenu = (value) => {
    this.setState({ sideBarState: value, collapsed: false })
  }
  componentDidUpdate() {
    document.title = utils.getPageTitle(this.props.location.pathname)
  }
  render() {
    const { history } = this.props
    const { pathname } = location || {}

    const { collapsed, sideBarState } = this.state
    const { sessionStore } = this.props
    const layout = (
      <Layout className="h-100">
        <div className="left-menu-style">
          <Appbar sessionStore={sessionStore} changeMenu={this.onChangeMenu} />
        </div>
        <div className="footer-menu-style">
          <FooterAppbar
            sessionStore={sessionStore}
            changeMenu={this.onChangeMenu}
          />
        </div>
        {sideBarState === sidebarStatus.menu && (
          <SiderMenu
            onCollapse={() =>
              this.setState({ collapsed: !this.state.collapsed })
            }
            history={history}
            collapsed={collapsed}
          />
        )}
        {sideBarState === sidebarStatus.account && (
          <AccountSider
            onCollapse={() =>
              this.setState({ collapsed: !this.state.collapsed })
            }
            history={history}
            collapsed={collapsed}
          />
        )}
        {sideBarState === sidebarStatus.setting && <NoSider />}
        <Layout
          className="site-layout"
          style={
            this.state.sideBarState !== 2
              ? {
                  marginLeft: collapsed
                    ? 0
                    : window.innerWidth < 600
                    ? window.innerWidth
                    : 256
                }
              : { marginLeft: 0 }
          }>
          <Layout.Header
            style={{
              background: 'transparent',
              minHeight: 48,
              padding: 0,
              position: 'fixed',
              left: window.innerWidth < 600 ? 0 : 64,
              zIndex: 1,
              width: '100%'
            }}>
            <Header
              onCollapse={() =>
                this.setState({
                  collapsed:
                    this.state.sideBarState !== 2 ? !this.state.collapsed : true
                })
              }
              sideBarState={this.state.sideBarState}
              collapsed={
                this.state.sideBarState !== 2 ? this.state.collapsed : true
              }
              history={history}
            />
          </Layout.Header>
          <Content className="h-100">
            <Routes>
              {Object.keys(portalLayouts).map((key: any, index: any) => {
                const route = portalLayouts[key]
                const ItemComponent = route.component
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={<ProtectedRoute component={<ItemComponent />} />}
                  />
                )
              })}
              {pathname !== '/' && (
                <Route
                  element={
                    <Navigate
                      to={{
                        pathname: '/exception?type=404'
                      }}
                    />
                  }
                />
              )}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    )

    return layout
  }
}

export default withRouter(AppLayout)
