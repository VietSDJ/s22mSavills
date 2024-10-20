import * as React from 'react'
import { Card } from 'antd'

export interface IDataTableProps {
  renderActions: any
  disable?: boolean

  closeCollapse?: boolean
}

const WrapPageFixed: React.FunctionComponent<IDataTableProps> = ({
  renderActions,
  disable = false,
  ...props
}) => {
  return (
    <>
      {!disable && (
        <div className="wrap-page-footer-fixed">
          <Card bordered={false}>{renderActions()}</Card>
        </div>
      )}
    </>
  )
}

export default WrapPageFixed
