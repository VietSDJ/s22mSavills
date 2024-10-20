// import * as React from 'react'
// import './index.less'

// import AppComponentBase from '@components/AppComponentBase'
// import Row from "antd/lib/grid/row"
// import Col from "antd/lib/grid/col"
// import {observer} from "mobx-react"
// import dashboardBIService from '@services/common/dashboardBIService'

// export interface IDashboardProps {
// }

// @observer
// export class Dashboard extends AppComponentBase<IDashboardProps, any> {
//   state = {
//     linkDashboard: 'https://app.powerbi.com/view?r=eyJrIjoiYTZkMjcwMjMtYmFkMy00ODQ5LTkxYzktNDFlMzgxYzNkMjc3IiwidCI6Ijg1OGJhZDU2LWIwZDctNGQ1ZS05NGQ3LWFhMGQ4MmVlZGJlMiIsImMiOjEwfQ%3D%3D'
//   }

//   componentWillUnmount() {
//     const res = dashboardBIService.get()
//    //     this.setState({linkDashboard: res})
//     console.log(this.state.linkDashboard)
//   }
//   render() {
//     return (
//         <Row>
//           <Col sm={24} style={{ height: 'calc(100vh - 80px)' }}>
//             <iframe
//               style={{ position: 'relative', height: '100%', width: '100%' }}
//               src={this.state.linkDashboard}
//               frameBorder="0"
//               allowFullScreen={true}
//             ></iframe>
//           </Col>
//         </Row>
//     )
//   }
// }

// export default Dashboard
import React from 'react'
import { inject, observer } from 'mobx-react'
import { Col, Row } from 'antd'
import dashboardBIService from '@services/common/dashboardBIService'

type Props = {}

const ProjectList = inject()(
  observer((props: Props) => {
    React.useEffect(() => {
      getLink()
    }, [])

    const [linkDashboard, setLinkDashboard] = React.useState('')
    const getLink = async () => {
      const res = await dashboardBIService.get()
      setLinkDashboard(res)
    }
    return (
      <Row>
        <Col sm={24} style={{ height: 'calc(100vh - 80px)' }}>
          <iframe
            style={{ position: 'relative', height: '100%', width: '100%' }}
            src={linkDashboard}
            frameBorder="0"
            allowFullScreen={true}></iframe>
        </Col>
      </Row>
    )
  })
)
export default ProjectList
