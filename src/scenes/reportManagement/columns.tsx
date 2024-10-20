import { L } from '@lib/abpUtility'
import AppConst from '@lib/appconst'
import { formatNumber, renderDate, renderIsActive } from '@lib/helper'
const { align } = AppConst

const columns = (actionColumn?) => {
  let data = [
    {
      title: L('USER_NAME'),
      dataIndex: 'userName',
      key: 'userName',
      width: 220,
      ellipsis: true,
      render: (userName, row) => row?.user?.userName
    },
    {
      title: L('EMAIL'),
      dataIndex: 'emailAddress',
      key: 'emailAddress',
      width: 180,
      ellipsis: true,
      render: (emailAddress, row) => row?.user?.emailAddress
    },
    {
      title: L('COMPANY'),
      dataIndex: 'company',
      key: 'company',
      width: 180,
      ellipsis: true,
      render: (company, row) => row?.user?.company
    },

    {
      title: L('TITLE'),
      dataIndex: 'title',
      key: 'title',
      width: 180,
      ellipsis: true,
      render: (title, row) => title
    },
    {
      title: L('START_DATE'),
      dataIndex: 'startDate',
      key: 'startDate',
      width: 150,
      align: align.center,
      ellipsis: true,
      render: renderDate
    },
    {
      title: L('EXPIRED_DATE'),
      dataIndex: 'expiredDate',
      key: 'expiredDate',
      align: align.center,
      width: 150,
      ellipsis: true,
      render: renderDate
    },
    {
      title: L('NO_OF_VIEWS'),
      dataIndex: 'count',
      key: 'count',
      width: 180,
      align: align.right,
      ellipsis: true,
      render: (count, row) => <>{formatNumber(count)}</>
    },
    {
      title: L('STAFF_ACTIVE_STATUS'),
      dataIndex: 'isActive',
      key: 'isActive',
      width: 100,
      align: align.center,
      render: renderIsActive
    }
  ]

  if (actionColumn) {
    data.push(actionColumn)
  }

  return data
}

export default columns
