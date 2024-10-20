import SystemColumn from "@components/DataTable/columns";
import { L } from "@lib/abpUtility";
import { renderIsActive } from "@lib/helper";

const columnsCustomerStaff = (actionColumn?) => {
  let data = [
    {
      title: L("STAFF"),
      dataIndex: "name",
      key: "name",
      width: 150,
    },
    {
      title: L("COMPANY"),
      dataIndex: "name",
      key: "name",
      width: 150,
    },
    {
      title: L("CONTACT"),
      dataIndex: "type",
      key: "type",
      width: 150,
    },
    {
      title: L("POSITION"),
      dataIndex: "location",
      key: "location",
      width: 250,
    },
    {
      title: L("STAFF_CONTACT"),
      dataIndex: "description",
      key: "description",
      width: 250,
    },
    {
      title: L("STAFF_POSITION"),
      dataIndex: "description",
      key: "description",
      width: 250,
    },
    {
      title: L("CONTACT_REASON"),
      dataIndex: "description",
      key: "description",
      width: 250,
    },
    {
      title: L("CONTACT_NOTED"),
      dataIndex: "isActive",
      key: "isActive",
      width: 150,
    },
    {
      title: L("STATUS"),
      dataIndex: "isActive",
      key: "isActive",
      width: 150,
      render: renderIsActive,
    },
    SystemColumn,
  ];

  if (actionColumn) {
    data.push(actionColumn);
  }

  return data;
};

export default columnsCustomerStaff;
