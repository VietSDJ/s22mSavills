import React from 'react'
import { Form, Input, InputProps } from 'antd'
import AppConsts from '@lib/appconst'

const { formVerticalLayout } = AppConsts
interface FormInputProps {
  label?: string
  name: string | string[]
  rule?
  disabled?: boolean
  className?: string
  placeholder?: string
  inputProps?: InputProps
  prefix?: any
  size?: 'middle' | 'small' | 'large'
}

const FormInputPassword: React.FC<FormInputProps> = ({
  label,
  name,
  rule,
  disabled,
  className,
  placeholder,
  inputProps,
  prefix,
  size
}) => {
  return (
    <Form.Item label={label} name={name} rules={rule} {...formVerticalLayout}>
      <Input.Password
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

export default FormInputPassword
