import * as React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import Utils from './utils/utils'
import initializeStores from './stores/storeInitializer'
import registerServiceWorker from './registerServiceWorker'
import appDataService from '@services/appDataService'
import './index.css'
import './styles/custom-bootstrap.less'
import './styles/custom-ant.less'
import './styles/custom-wijimo.less'
import './styles/app.less'
import { ErrorBoundary } from '@components/ErrorBoundary'

import { createRoot } from 'react-dom/client'

Utils.setLocalization()
appDataService.getAppConfiguration().then(async () => {
  const stores = initializeStores()
  const container = document.getElementById('root')
  const root = createRoot(container!) // createRoot(container!) if you use TypeScript
  root.render(
    <Provider {...stores}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  )

  registerServiceWorker()
})
