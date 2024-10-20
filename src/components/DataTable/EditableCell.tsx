import * as React from 'react'
import { InputNumber, Form, Checkbox, Input, Switch } from 'antd'
import { dateFormat } from '@lib/appconst'
import { IRowDealPayment } from '@models/dealContract/dealPaymentRowModel'
import DatePicker from 'antd/lib/date-picker'
import CurrencyInput from '@components/Inputs/CurrencyInput'
import Select from 'antd/lib/select'
import PercentInput from '@components/Inputs/PercentInput'
import TextArea from 'antd/lib/input/TextArea'

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean
  dataIndex: string
  title: any
  inputType:
    | 'number'
    | 'percent'
    | 'checkbox'
    | 'text'
    | 'date'
    | 'currency'
    | 'select'
    | 'selectTrueFalse'
    | 'textarea'
    | 'multiSelect'
  record: IRowDealPayment
  index: number
  children: React.ReactNode
  options: any[]
  required: boolean
  onSearch?: (value) => void
  onchange?: (value) => void
  onBlur?: (value) => void
  defautSwitch?: boolean
  locale?: string
  symbol?: string
}

export const buildEditableCell = (
  record,
  inputType,
  dataIndex,
  title,
  isEditing,
  options?,
  required?,
  onSearch?,
  onchange?,
  onBlur?,
  defautSwitch?,
  locale?,
  symbol?
) => ({
  record,
  inputType,
  dataIndex,
  title,
  editing: isEditing(record),
  options,
  required,
  onBlur,
  defautSwitch,
  locale,
  symbol
})

export const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  options,
  required,
  onSearch,
  onchange,
  onBlur,
  defautSwitch,
  locale,
  symbol,
  ...restProps
}) => {
  let inputNode
  switch (inputType) {
    case 'multiSelect': {
      inputNode = (
        <Select className="full-width" mode="multiple">
          {(options || []).map((option, index) => (
            <Select.Option key={index} value={option.value || option.id}>
              {option.label || option.name || option.ipName}
            </Select.Option>
          ))}
        </Select>
      )
      break
    }
    case 'number': {
      inputNode = <InputNumber className="full-width" />
      break
    }
    case 'percent': {
      inputNode = <PercentInput onChange={onBlur} />
      break
    }
    case 'checkbox': {
      inputNode = (
        <Checkbox onChange={onBlur} defaultChecked={record[dataIndex]} />
      )
      break
    }
    case 'currency': {
      inputNode = <CurrencyInput locale={locale} symbol={symbol} />
      break
    }
    case 'date': {
      inputNode = <DatePicker format={dateFormat} className="full-width" />
      break
    }
    case 'textarea': {
      inputNode = <TextArea autoSize={{ maxRows: 5 }} />
      break
    }
    case 'select': {
      inputNode = (
        <Select className="full-width" defaultValue={defautSwitch}>
          {(options || []).map((option, index) => (
            <Select.Option key={index} value={option.value || option.id}>
              {option.label ||
                option.name ||
                option.ipName ||
                option.projectName ||
                option.periodName}
            </Select.Option>
          ))}
        </Select>
      )
      break
    }
    case 'selectTrueFalse': {
      inputNode = <Switch defaultChecked={defautSwitch} />
      break
    }
    default: {
      inputNode = <Input />
    }
  }
  return (
    <td {...restProps}>
      {editing ? (
        inputType === 'checkbox' ? (
          <Form.Item
            name={dataIndex}
            style={{ margin: 0 }}
            rules={[{ required }]}
            label={title}
            valuePropName="checked">
            <div>{inputNode}</div>
          </Form.Item>
        ) : (
          <Form.Item
            name={dataIndex}
            style={{ margin: 0 }}
            rules={[{ required }]}
            label={title}>
            {inputNode}
          </Form.Item>
        )
      ) : (
        children
      )}
    </td>
  )
}
