import React from "react";
import { Form, Input, InputProps } from "antd";
import { L } from "@lib/abpUtility";
import AppConsts from "@lib/appconst";

const { formVerticalLayout } = AppConsts;
interface FormInputProps {
  label: string;
  name: string | (string | number)[];
  rule?;
  disabled?: boolean;
  className?: string;
  inputProps?: InputProps;
  size?: "middle" | "small" | "large";
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  rule,
  disabled,
  className,
  inputProps,
  size,
}) => {
  return (
    <Form.Item
      label={L(label)}
      name={name}
      rules={rule}
      {...formVerticalLayout}
    >
      <Input
        disabled={disabled}
        className={className}
        {...inputProps}
        size={size ?? "large"}
      />
    </Form.Item>
  );
};

export default FormInput;
