import { L } from '@lib/abpUtility'
import AppConst from '@lib/appconst'
import { renderIsActive } from '@lib/helper'
const { align, groupUserEnum } = AppConst

const columns = (actionColumn?) => {
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
      title: L('STAFF_FULL_NAME'),
      dataIndex: 'displayName',
      key: 'displayName',
      width: 220,
      ellipsis: true,
      render: (displayName, row) => displayName
    },
    {
      title: L('COMPANY'),
      dataIndex: 'company',
      key: 'company',
      width: 180,
      ellipsis: true,
      render: (company, row) => company
    },
    {
      title: L('EMAIL'),
      dataIndex: 'emailAddress',
      key: 'emailAddress',
      width: 180,
      ellipsis: true,
      render: (emailAddress, row) => emailAddress
    },
    {
      title: L('PHONE_NUMBER'),
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      width: 180,
      ellipsis: true,
      render: (phoneNumber, row) => phoneNumber
    },
    {
      title: L('ROLE'),
      dataIndex: 'groupId',
      key: 'groupId',
      width: 100,
      ellipsis: true,
      render: (groupId, row) => (
        <>
          {groupId === groupUserEnum.employee
            ? L('ROLE_EMPLOYEE')
            : L('ROLE_CUSTOMER')}
        </>
      )
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
