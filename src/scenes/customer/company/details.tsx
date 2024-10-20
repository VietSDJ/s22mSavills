import CustomDrawer from "@components/Drawer/CustomDrawer";
import FormInput from "@components/FormItem/FormInput";
import FormTextArea from "@components/FormItem/FormTextArea";
import { L } from "@lib/abpUtility";
import { validateMessages } from "@lib/validation";
import Tabs from "antd/es/tabs";
import Form from "antd/es/form";
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";
import React from "react";
import { emailRegex, phoneRegex } from "@lib/appconst";
import FileUploadWrap from "@components/FileUpload";
import FileStore from "@stores/common/fileStore";
import FormSwitch from "@components/FormItem/FormSwitch";

type Props = {
  visible: boolean;
  onCancel: () => void;
};
const tabKeys = {
  information: "COMPANY_INFORMATION",
  staffList: "COMPANY_STAFF_LIST",
};
const CustomerCompanyDetail = (props: Props) => {
  const onSave = async () => {
    const value = await form.getFieldsValue();
    console.log(value);
  };
  const [form] = Form.useForm();
  return (
    <Form form={form} validateMessages={validateMessages} layout={"vertical"}>
      <CustomDrawer
        useBottomAction
        title={L("COMPANY_CREATE")}
        visible={props.visible}
        onClose={props.onCancel}
        onSave={onSave}
        extraBottomContent={
          <div className="d-flex align-items-center h-100">
            <FormSwitch
              label={""}
              name="isActive"
              formLayout={{ style: { marginBottom: 4 } }}
            />
            <label className="mx-1">{L("ACTIVE")}</label>
          </div>
        }
      >
        <Tabs defaultActiveKey={tabKeys.information}>
          <Tabs.TabPane tab={L(tabKeys.information)} key={tabKeys.information}>
            <Row gutter={8}>
              <Col md={{ span: 8 }}>
                <FormInput
                  name="nameVN"
                  label={L("COMPANY_NAME_VN")}
                  rule={[{ required: true }]}
                />
              </Col>
              <Col md={{ span: 8 }}>
                <FormInput
                  name="nameES"
                  label={L("COMPANY_NAME_ES")}
                  rule={[{ required: true }]}
                />
              </Col>
              <Col md={{ span: 8 }}>
                <FormInput
                  name="nameShort"
                  label={L("COMPANY_NAME_SHORT")}
                  rule={[{ required: true }]}
                />
              </Col>
              <Col md={{ span: 12 }}>
                <FormInput
                  name="representative"
                  label={L("COMPANY_REPRESENTATIVE")}
                  rule={[{ required: true }]}
                />
              </Col>
              <Col md={{ span: 12 }}>
                <FormInput
                  name="tax"
                  label={L("COMPANY_TAX_CODE")}
                  rule={[{ required: true }]}
                />
              </Col>
              <Col md={{ span: 24 }}>
                <FormInput name="address" label={L("COMPANY_ADDRESS")} />
              </Col>
              <Col md={{ span: 8 }}>
                <FormInput
                  name="phone"
                  label={L("COMPANY_PHONE")}
                  rule={[
                    {
                      pattern: phoneRegex,
                    },
                  ]}
                />
              </Col>
              <Col md={{ span: 8 }}>
                <FormInput
                  name="fax"
                  label={L("COMPANY_FAX")}
                  rule={[
                    {
                      pattern: phoneRegex,
                    },
                  ]}
                />
              </Col>
              <Col md={{ span: 8 }}>
                <FormInput
                  name="email"
                  label={L("COMPANY_EMAIL")}
                  rule={[
                    { min: 6 },
                    { max: 256 },
                    {
                      pattern: emailRegex,
                    },
                  ]}
                />
              </Col>
              <Col md={{ span: 24 }}>
                <FormTextArea
                  name="description"
                  label={L("COMPANY_DESCRIPTION")}
                />
              </Col>
              <Col md={{ span: 24 }}>
                <label>{L("UPLOAD_DOCUMENT_PARTNER_LABEL")}</label>
                <FileUploadWrap
                  fileStore={new FileStore()}
                  onRemoveFile={() => {}}
                  beforeUploadFile={() => false}
                />
              </Col>
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={L(tabKeys.staffList)}
            key={tabKeys.staffList}
          ></Tabs.TabPane>
        </Tabs>
      </CustomDrawer>
    </Form>
  );
};

export default CustomerCompanyDetail;
