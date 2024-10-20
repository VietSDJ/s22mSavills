import React from 'react'
import { Button, Col, Pagination, Row, Spin } from 'antd'
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons'
import { isGranted, L } from '../../lib/abpUtility'
import './DataTable.less'
import { ExcelIcon } from '@components/Icon'

export interface IDataTableProps {
  title?: string
  keywordPlaceholder?: string
  textAddNew?: string
  onRefresh?: () => void
  onCreate?: () => void
  onExportExcel?: () => void
  pagination?: any
  createPermission?: string
  exportExcelPermission?: string
  actionComponent?: () => void
  filterComponent?: any
  children: React.ReactNode
  loadding?: boolean
}

const DataTable: React.FunctionComponent<IDataTableProps> = ({
  title,
  textAddNew,
  onRefresh,
  onCreate,
  onExportExcel,
  pagination,
  createPermission,
  exportExcelPermission,
  actionComponent,
  filterComponent,
  loadding = false,
  ...props
}) => {
  const handleRefresh = () => {
    onRefresh && onRefresh()
  }
  const handleCreate = () => {
    onCreate && onCreate()
  }
  const handleExportExcel = () => {
    onExportExcel && onExportExcel()
  }
  const handleOnChange = (page, pageSize) => {
    if (pagination.onChange) {
      pagination.onChange({ current: page, pageSize: pageSize })
    }
  }

  return (
    <>
      <Row
        className={'mb-2 mt-1 table-header flex align-items-end'}
        gutter={[8, 8]}>
        {filterComponent && <>{filterComponent}</>}
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'flex-end',
            right: 10
          }}>
          <>
            {actionComponent && actionComponent()}
            {onCreate && (!createPermission || isGranted(createPermission)) && (
              <Button
                className="button-primary"
                icon={<PlusOutlined />}
                onClick={handleCreate}
                style={{ boxShadow: '0px 4px 8px rgba(110, 186, 196, 0.2)' }}>
                {textAddNew}
              </Button>
            )}
            {onExportExcel &&
              (!exportExcelPermission || isGranted(exportExcelPermission)) && (
                <Button
                  className="button-primary"
                  icon={<ExcelIcon />}
                  onClick={handleExportExcel}
                  style={{
                    boxShadow: '0px 4px 8px rgba(110, 186, 196, 0.2)'
                  }}></Button>
              )}
            {onRefresh && (!createPermission || isGranted(createPermission)) && (
              <Button
                className="button-primary"
                icon={<ReloadOutlined />}
                onClick={handleRefresh}
                style={{
                  boxShadow: '0px 4px 8px rgba(110, 186, 196, 0.2)'
                }}></Button>
            )}
          </>
        </div>
      </Row>
      <Spin spinning={loadding}>{props.children}</Spin>
      {pagination && pagination.total > 0 && (
        <Row className="mt-1">
          <Col sm={{ span: 24, offset: 0 }} style={{ textAlign: 'end' }}>
            <Pagination
              size="small"
              showTotal={(total) => L('TOTAL_{0}_ITEMS', total)}
              {...pagination}
              onChange={handleOnChange}
              showSizeChanger={true}
              pageSizeOptions={[10, 20, 25, 50]}
            />
          </Col>
        </Row>
      )}
    </>
  )
}

export default DataTable
