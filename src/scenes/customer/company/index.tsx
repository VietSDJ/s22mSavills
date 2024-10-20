import DataTable from '@components/DataTable'
import { actionColumn } from '@components/DataTable/columns'
import { L } from '@lib/abpUtility'
import AppConsts, { appPermissions } from '@lib/appconst'
import { renderOptions } from '@lib/helper'
import CustomerStore from '@stores/member/customer/customerStore'
import Stores from '@stores/storeIdentifier'
import { Table } from 'antd'
import Col from 'antd/es/grid/col'
import Row from 'antd/es/grid/row'
import Input from 'antd/es/input'
import Select from 'antd/es/select'
import { inject, observer } from 'mobx-react'
import React from 'react'
import columnsCustomerCompany from './columns'
import CustomerCompanyDetail from './details'
const { activeStatus } = AppConsts

type Props = {
  customerStore: CustomerStore
}

const CustomerCompanyManagement = inject(Stores.CustomerStore)(
  observer((props: Props) => {
    const [filter, setFilter] = React.useState<any>({
      maxResultCount: 50,
      skipCount: 0
    })
    const getAll = async (filter) => {
      await props.customerStore.getAll(filter)
    }
    const handleSearch = (name, value) => {
      setFilter({ ...filter, [name]: value })
    }
    React.useEffect(() => {
      getAll(filter)
    }, [filter])
    const onCreate = () => {
      gotoDetail(null)
    }
    const [detailVisible, setDetailVisible] = React.useState(false)
    const gotoDetail = (id?) => {
      setDetailVisible(true)
    }
    const handleTableChange = (pagination: any) => {
      setFilter({
        ...filter,
        skipCount: (pagination.current - 1) * filter.maxResultCount!,

        maxResultCount: pagination.pageSize
      })
    }
    const filterComponent = () => (
      <Row gutter={[8, 8]}>
        <Col sm={{ span: 16, offset: 0 }}>
          <Input.Search
            allowClear
            placeholder={L('CUSTOMER_COMPANY_KEYWORD_PLACEHOLDER')}
            onSearch={(value) => handleSearch('keyword', value)}
          />
        </Col>
        <Col md={{ span: 8, offset: 0 }}>
          <Select
            allowClear
            onChange={(value) => handleSearch('isActive', value)}
            style={{ width: '100%' }}
            placeholder={L('IS_ACTIVE')}>
            {renderOptions(activeStatus)}
          </Select>
        </Col>
      </Row>
    )

    const columns = columnsCustomerCompany(
      actionColumn(
        () => {},
        '',
        () => {},
        ''
      )
    )
    const currentPage = Math.floor(filter.skipCount / filter.maxResultCount) + 1
    return (
      <div>
        <DataTable
          onCreate={onCreate}
          pagination={{
            pageSize: filter.maxResultCount,
            current: currentPage,
            total: props.customerStore.customers.totalCount ?? 0,
            onChange: handleTableChange
          }}
          createPermission={appPermissions.staff.create}
          filterComponent={filterComponent()}>
          <Table
            size="middle"
            className="custom-ant-table"
            rowKey={(record) => record.id}
            columns={columns}
            pagination={false}
            loading={props.customerStore.isLoading}
            dataSource={props.customerStore.customers.items ?? []}
            scroll={{ x: 1024, scrollToFirstRowOnChange: true }}
          />
        </DataTable>
        <CustomerCompanyDetail
          visible={detailVisible}
          onCancel={() => setDetailVisible(false)}
        />
      </div>
    )
  })
)

export default CustomerCompanyManagement
