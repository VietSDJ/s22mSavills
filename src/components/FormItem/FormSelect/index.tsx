import React from 'react'
import { Form, Select } from 'antd'
import { L } from '@lib/abpUtility'
import AppConsts from '@lib/appconst'
import { SelectProps, SelectValue } from 'antd/lib/select'
import { renderOptions } from '@lib/helper'
import { OptionModel } from '@models/global'

const { formVerticalLayout } = AppConsts
interface FormSelectProps {
  size?: 'middle' | 'small' | 'large'
  label: string
  name: string | string[]
  rule?
  options: OptionModel[]
  selectProps?: SelectProps<SelectValue>
  disabled?: boolean
  onChange?: (value: any) => void
  optionModal?: (item: any, index: any) => void
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  rule,
  options,
  selectProps,
  disabled = false,
  optionModal,
  onChange,
  size
}) => {
  return (
    <Form.Item
      label={L(label)}
      name={name}
      rules={rule}
      {...formVerticalLayout}>
      <Select
        showSearch
        allowClear
        filterOption={false}
        className="full-width"
        onChange={onChange}
        disabled={disabled}
        size={size ?? 'large'}
        {...selectProps}>
        {optionModal
          ? (options || []).map((item, index) => optionModal(item, index))
          : renderOptions(options)}
      </Select>
    </Form.Item>
  )
}

export default FormSelect
