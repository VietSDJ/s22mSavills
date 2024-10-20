import './index.less'

import * as React from 'react'

import { Button, Col, Row } from 'antd'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import { inject, observer } from 'mobx-react'
import Stores from '../../../stores/storeIdentifier'
import SessionStore from '../../../stores/sessionStore'
import { L, LMainMenu } from '@lib/abpUtility'
import { sidebarStatus } from '@lib/appconst'
import { portalLayouts } from '../Router/router.config'

export interface IHeaderProps {
  history?: any
  sideBarState: any
  sessionStore?: SessionStore
  collapsed?: any
  onCollapse: any
}

@inject(Stores.SessionStore)
@observer
export class Header extends React.Component<IHeaderProps> {
  render() {
    let defaultSelectedKeys = ''
    Object.keys(portalLayouts).find((key) => {
      if (portalLayouts[key].path === window.location.pathname) {
        defaultSelectedKeys = portalLayouts[key].name
      }
      return ''
    })
    return (
      <div className={'header-container'}>
        <div
          className={'wrap-header-logo'}
          style={{ width: this.props.collapsed ? 0 : 256 }}>
          {!this.props.collapsed && (
            <>
              <div className={'wrap-logo'}>
                {/* <Avatar
                  shape="square"
                  style={{ height: "auto", width: 120 }}
                  src="/assets/images/logoSavills.png"
                /> */}
              </div>
            </>
          )}
        </div>
        <div className={'wrap-header'}>
          <Row>
            <Col
              style={{ textAlign: 'left', padding: '0 24px' }}
              span={18}></Col>
            <Col style={{ textAlign: 'right' }} span={6}>
              <div className="wrap-profile">
                {this.props.sideBarState === sidebarStatus.account && (
                  <Button
                    danger
                    className="rounded mr-1"
                    onClick={async () =>
                      await this.props.sessionStore?.logout()
                    }>
                    {L('LOGOUT')}
                  </Button>
                )}
                <div style={{ width: 70 }} />
              </div>
            </Col>
          </Row>
          <span
            style={{
              position: 'absolute',
              top: '4px',
              left: this.props.collapsed
                ? '12px'
                : window.innerWidth < 600
                ? '120px'
                : '-2px'
            }}>
            {this.props.collapsed ? (
              <RightCircleOutlined
                color="#DEB854"
                style={{ fontSize: '1.2rem', color: '#DEB854' }}
                onClick={() => this.props.onCollapse()}
              />
            ) : (
              <LeftCircleOutlined
                style={{ fontSize: '1.2rem', color: '#DEB854' }}
                onClick={() => this.props.onCollapse()}
              />
            )}
            {window.innerWidth > 600 ? (
              <span className="ml-2" style={{ fontWeight: 600, fontSize: 18 }}>
                {LMainMenu(defaultSelectedKeys)}
              </span>
            ) : (
              this.props.collapsed && (
                <span
                  className="ml-2"
                  style={{ fontWeight: 600, fontSize: 18 }}>
                  {LMainMenu(defaultSelectedKeys)}
                </span>
              )
            )}
          </span>
        </div>
      </div>
    )
  }
}

export default Header
