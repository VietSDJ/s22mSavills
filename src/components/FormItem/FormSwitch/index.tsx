import React from "react";
import { Form, Switch } from "antd";
import { L } from "@lib/abpUtility";
import AppConsts from "@lib/appconst";

const { formVerticalLayout } = AppConsts;
interface FormInputProps {
  formLayout?: any;
  label: string;
  name: string;
  rule?;
  defaultChecked?
}

const FormSwitch: React.FC<FormInputProps> = ({
  label,
  name,
  rule,
  formLayout,
  defaultChecked,
}) => {
  const layout = formLayout ? { ...formLayout } : { ...formVerticalLayout };
  return (
    <Form.Item
      label={L(label)}
      name={name}
      rules={rule}
      valuePropName="checked"
      {...layout}
    >
      <Switch defaultChecked={defaultChecked} />
    </Form.Item>
  );
};

export default FormSwitch;
