import './PublicLayout.less'

import * as React from 'react'

import { Route, Routes } from 'react-router-dom'

import { Layout } from 'antd'
// import DocumentTitle from 'react-document-title'
import { publicLayout } from './Router/router.config'
import utils from '../../utils/utils'
const { Content } = Layout

class PublicLayout extends React.Component<any> {
  componentDidUpdate() {
    document.title = utils.getPageTitle(this.props.location.pathname)
  }
  render() {
    return (
      <Content className="container">
        <Routes>
          {Object.keys(publicLayout).map((key: any, index: number) => {
            const route = publicLayout[key]
            const ItemComponent = route.component
            if (!ItemComponent) {
              return null
            }
            return (
              <Route
                key={index}
                path={route.path.slice(8)}
                element={
                  <>
                    <ItemComponent />
                  </>
                }
              />
            )
          })}
        </Routes>
      </Content>
    )
  }
}

export default PublicLayout
