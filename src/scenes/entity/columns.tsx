import { L } from '@lib/abpUtility'
import AppConsts from '@lib/appconst'
import { Switch } from 'antd'
// import { renderIsActive } from '@lib/helper'
import { Popover } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import Paragraph from 'antd/lib/typography/Paragraph'
const { align } = AppConsts

const columnsEntity = (actionColumn?) => {
  let data: ColumnsType<any> = [
    {
      title: L('ENTITY_CODE'),
      dataIndex: 'entityCode',
      key: 'entityCode',
      width: 260,
      render: (entityCode) => (
        <>
          {' '}
          <Popover trigger="click" content={entityCode || ''}>
            {' '}
            <Paragraph
              ellipsis={{
                rows: 1
              }}>
              {' '}
              {entityCode || ''}
            </Paragraph>
          </Popover>
        </>
      )
    },
    {
      title: L('SHORT_NAME'),
      dataIndex: 'shortName',
      key: 'shortName',
      width: 200,
      render: (shortName) => (
        <>
          {' '}
          <Popover trigger="click" content={shortName || ''}>
            {' '}
            <Paragraph
              ellipsis={{
                rows: 1
              }}>
              {' '}
              {shortName || ''}
            </Paragraph>
          </Popover>
        </>
      )
    },
    {
      title: L('LEGAL_NAME'),
      dataIndex: 'legalName',
      key: 'legalName',
      width: 450,
      render: (legalName) => (
        <>
          {' '}
          <Popover trigger="click" content={legalName || ''}>
            {' '}
            <Paragraph
              ellipsis={{
                rows: 1
              }}>
              {' '}
              {legalName || ''}
            </Paragraph>
          </Popover>
        </>
      )
    },
    {
      title: L('CATEGORY'),
      dataIndex: 'category',
      key: 'category',
      width: 260,
      render: (category) => (
        <>
          {' '}
          <Popover trigger="click" content={category?.name || ''}>
            {' '}
            <Paragraph
              ellipsis={{
                rows: 1
              }}>
              {' '}
              {category?.name || ''}
            </Paragraph>
          </Popover>
        </>
      )
    },
    {
      title: L('ENTITY_ISACTIVE'),
      dataIndex: 'isActive',
      key: 'isActive',
      align: align.center,
      width: 180,

      render: (isActive) => (
        <Switch size="small" checked={isActive} disabled={true} />
      )
    }
  ]

  if (actionColumn) {
    data.push(actionColumn)
  }
  return data
}

export default columnsEntity
