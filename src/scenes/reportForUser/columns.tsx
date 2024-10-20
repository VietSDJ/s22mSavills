import { L } from '@lib/abpUtility'
import AppConst from '@lib/appconst'
import { formatNumber, renderDate, renderIsActive } from '@lib/helper'
const { align } = AppConst

const columns = (goTodetail: (id) => void) => {
  let data = [
    {
      title: L('ID'),
      dataIndex: 'id',
      key: 'id',
      width: 80,
      ellipsis: true,
      render: (id, row) => id
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
      title: L('PBI_REPORT'),
      dataIndex: 'link',
      key: 'link',
      width: 80,
      align: align.center,
      ellipsis: true,
      render: (id, row) => <a onClick={() => goTodetail(row.id)}>{L('LINK')}</a>
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
      width: 80,
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

  return data
}

export default columns
