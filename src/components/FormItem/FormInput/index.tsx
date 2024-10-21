import React from 'react'
import { Form, Input, InputProps } from 'antd'
import AppConsts from '@lib/appconst'

const { formVerticalLayout } = AppConsts
interface FormInputProps {
  label?: string
  name: string | (string | number)[]
  rule?
  disabled?: boolean
  className?: string
  placeholder?: string
  prefix?: any
  inputProps?: InputProps
  size?: 'middle' | 'small' | 'large'
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  rule,
  disabled,
  className,
  inputProps,
  placeholder,
  prefix,
  size
}) => {
  return (
    <Form.Item label={label} name={name} rules={rule} {...formVerticalLayout}>
      <Input
        disabled={disabled}
        prefix={prefix}
        className={className}
        placeholder={placeholder}
        {...inputProps}
        size={size ?? 'large'}
      />
    </Form.Item>
  )
}

export default FormInput
