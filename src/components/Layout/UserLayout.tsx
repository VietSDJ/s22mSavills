import './UserLayout.less'

import * as React from 'react'

import { Route, Routes } from 'react-router-dom'
// import DocumentTitle from 'react-document-title'
// import LanguageSelect from './Header/LanguageSelect'
import { userLayout } from './Router/router.config'
import utils from '../../utils/utils'

class UserLayout extends React.Component<any> {
  componentDidUpdate() {
    document.title = utils.getPageTitle(this.props.location.pathname)
  }
  render() {
    return (
      <div className="container">
        {/* <div className={'lang'} style={{ paddingRight: '15px' }}>
          <LanguageSelect wrapClass="auth-language" type="horizontal" />
        </div> */}
        <Routes>
          {Object.keys(userLayout).map((key: any, index: number) => {
            const route = userLayout[key]
            const ItemComponent = route.component
            if (!ItemComponent) {
              return null
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={<ItemComponent />}
              />
            )
          })}
        </Routes>
      </div>
    )
  }
}

export default UserLayout
