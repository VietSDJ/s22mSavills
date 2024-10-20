import SystemColumn from "@components/DataTable/columns";
import { L } from "@lib/abpUtility";
import { renderIsActive } from "@lib/helper";

const columnsCustomerCompany = (actionColumn?) => {
  let data = [
    {
      title: L("COMPANY"),
      dataIndex: "name",
      key: "name",
      width: 150,
    },
    {
      title: L("TAX_CODE"),
      dataIndex: "type",
      key: "type",
      width: 150,
    },
    {
      title: L("NOTE"),
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

export default columnsCustomerCompany;
