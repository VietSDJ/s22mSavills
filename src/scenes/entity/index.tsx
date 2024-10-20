import React from 'react'
import {
  Button,
  Col,
  Dropdown,
  Input,
  Menu,
  Modal,
  Row,
  Table,
  Select
} from 'antd'
import { isGranted, L, LNotification } from '@lib/abpUtility'
import { MoreOutlined, PlusOutlined, ReloadOutlined } from '@ant-design/icons'
import AppConsts, { appPermissions } from '@lib/appconst'
import { v4 as uuid } from 'uuid'
import Stores from '@stores/storeIdentifier'
import { inject, observer } from 'mobx-react'
import columnsEntity from './columns'
import DataTable from '@components/DataTable'
import EntityStore from '@stores/entity/entityStore'
import EntityDetail from './details'
import { renderOptions } from '@lib/helper'

type Props = {
  entityStore: EntityStore
}
const { align, activeStatus } = AppConsts
const { confirm } = Modal
const Search = Input.Search

const EntityList = inject(Stores.EntityStore)(
  observer((props: Props) => {
    const [filter, setFilter] = React.useState<any>({
      maxResultCount: 25,
      skipCount: 0
    })
    const [data, setData] = React.useState<any[]>([])
    const [dataFilter, setDataFilter] = React.useState<any[]>([])

    React.useEffect(() => {
      getAll(filter)
    }, [filter])
    React.useEffect(() => {
      getData()
    }, [])
    const getAll = async (filter) => {
      await props.entityStore.getAll(filter)
      const res = props.entityStore.entities.items

      res.forEach((object) => {
        object.key = uuid()
      })
      setData(res)
    }
    const handleTableChange = (pagination: any) => {
      setFilter({
        ...filter,
        skipCount: (pagination.current - 1) * filter.maxResultCount!,

        maxResultCount: pagination.pageSize
      })
    }
    const getData = async () => {
      await props.entityStore.getAll({})
      setDataFilter(props.entityStore.entities.items)

      console.log(dataFilter)
    }
    const activateOrDeactivate = (id: number, isActive) => {
      confirm({
        title: LNotification(
          isActive
            ? 'DO_YOU_WANT_TO_ACTIVATE_THIS_ITEM'
            : 'DO_YOU_WANT_TO_DEACTIVATE_THIS_ITEM'
        ),
        okText: L('BTN_YES'),
        cancelText: L('BTN_NO'),
        onOk: async () => {
          await props.entityStore.activateOrDeactivate(id, isActive)
          handleTableChange({ current: 1 })
        }
      })
    }
    const handleSearch = (keyword, value) => {
      // if (keyword === '') {

      //   getAll(filter)

      // } else {
      console.log(keyword, value)
      setFilter({ ...filter, [keyword]: value })

      // }
    }
    const keywordPlaceholder = `${L('KEYWORD_ENTITY')}`

    const [dataEdit, setDataEdit] = React.useState<any[]>([])
    const [visible, setVisible] = React.useState(false)
    const entityColumn = columnsEntity({
      title: (
        <div>
          {isGranted(appPermissions.entityManagement.create) && (
            <Button
              type="primary"
              shape="circle"
              size="small"
              icon={<PlusOutlined />}
              onClick={() => {
                setDataEdit([]), setVisible(true)
              }}
            />
          )}
        </div>
      ),
      dataIndex: 'operation',
      key: 'operation',
      fixed: align.right,
      align: align.right,
      width: '50px',
      render: (text: string, item: any) => (
        <div>
          <Dropdown
            trigger={['click']}
            overlay={
              <Menu>
                {isGranted(appPermissions.entityManagement.update) && (
                  <Menu.Item
                    onClick={() => {
                      setDataEdit(item), setVisible(true)
                    }}>
                    {L('BTN_EDIT')}
                  </Menu.Item>
                )}
                {isGranted(appPermissions.entityManagement.delete) && (
                  <Menu.Item
                    onClick={() =>
                      activateOrDeactivate(item.id, !item.isActive)
                    }>
                    {L(item.isActive ? 'BTN_DEACTIVATE' : 'BTN_ACTIVATE')}
                  </Menu.Item>
                )}
              </Menu>
            }
            placement="bottomLeft">
            <MoreOutlined />
          </Dropdown>
        </div>
      )
    })

    const currentPage = Math.floor(filter.skipCount / filter.maxResultCount) + 1
    return (
      <>
        <Row gutter={[16, 8]}>
          <Col sm={{ span: 6, offset: 0 }}>
            <label>{L('FILTER_KEYWORD')}</label>
            <Search
              placeholder={keywordPlaceholder}
              onSearch={(value) => handleSearch('keyword', value)}
            />
          </Col>

          <Col md={{ span: 6, offset: 0 }}>
            <label>{L('IS_ACTIVE')}</label>
            <Select
              allowClear
              value={filter.isActive}
              onChange={(value) => handleSearch('isActive', value)}
              style={{ width: '100%' }}
              placeholder={L('IS_ACTIVE')}>
              {renderOptions(activeStatus)}
            </Select>
          </Col>
          <Col md={{ span: 11, offset: 0 }}></Col>
          <Col md={{ span: 1, offset: 0 }}>
            <label>{''}</label>
            <Button
              type="primary"
              shape="circle"
              size="small"
              icon={<ReloadOutlined />}
              onClick={() => {
                handleTableChange({ current: 1 })
              }}
            />
          </Col>
        </Row>

        <DataTable
          pagination={{
            pageSize: filter.maxResultCount,
            current: currentPage,
            total: props.entityStore.entities.totalCount ?? 0,
            onChange: handleTableChange
          }}>
          <Table
            size="middle"
            className="custom-ant-table"
            rowKey={(record) => record.id}
            columns={entityColumn}
            pagination={false}
            //loading={this.props.workOrderStore.isLoading}
            dataSource={data}
            scroll={{ x: 1000, y: 666, scrollToFirstRowOnChange: true }}
          />
          <EntityDetail
            data={dataEdit}
            entityStore={props.entityStore}
            visible={visible}
            onCancel={() => {
              getAll(filter), setVisible(false)
            }}
          />
        </DataTable>
      </>
    )
  })
)
export default EntityList
