import React from 'react'
import { Checkbox, Form, Input, InputProps } from 'antd'
import { L } from '@lib/abpUtility'
import { DeleteOutlined, PlusOutlined, StarFilled } from '@ant-design/icons'
import Button from 'antd/es/button'
import { emailRegex } from '@lib/appconst'

interface FormMultiEmailInputProps {
  form: any
  label: string
  objectFieldName: string
  rule?
  isRequired?: boolean
  className?: string
  inputProps?: InputProps
  size?: 'middle' | 'small' | 'large'
}

const FormMultiEmailInput: React.FC<FormMultiEmailInputProps> = ({
  label,
  form,
  objectFieldName,
  rule,
  isRequired,
  className,
  inputProps,
  size
}) => {
  const handleSelectPrimary = async (index) => {
    const fieldList = (await form.getFieldsValue()[objectFieldName]).map(
      (item) => ({ ...item, isPrimary: false })
    )
    const primaryField = fieldList[index]
    primaryField.isPrimary = true
    fieldList.splice(index, 1)
    fieldList.splice(0, 0, primaryField)
    form.setFieldValue(objectFieldName, fieldList)
  }
  return (
    <>
      <label>
        {isRequired && <span className="is-required-style">*</span>}
        {label}
      </label>
      <Form.List
        name={objectFieldName}
        rules={rule}
        initialValue={[{ email: '', isPrimary: true }]}>
        {(fields, { add, remove }, { errors }) => {
          return (
            <>
              {fields.length === 0 && (
                <Button onClick={add} type="primary">
                  {L('ADD_EMAIL')}
                </Button>
              )}
              {fields.map((field, index) => (
                <React.Fragment key={index}>
                  <Form.Item
                    name={[field.name, 'isPrimary']}
                    className="d-none">
                    <Checkbox checked />
                  </Form.Item>

                  <Form.Item
                    {...field}
                    name={[field.name, 'email']}
                    rules={[{ pattern: emailRegex }]}>
                    <Input
                      onChange={(e) => e.persist()}
                      {...inputProps}
                      size="large"
                      suffix={
                        <>
                          <PlusOutlined
                            className="ml-1"
                            onClick={() => add({ email: '', isPrimary: false })}
                          />
                          <StarFilled
                            onClick={() => handleSelectPrimary(index)}
                            style={{
                              color: index === 0 ? 'gold' : ''
                            }}
                          />
                          <DeleteOutlined
                            className="ml-1"
                            onClick={() => remove(index)}
                          />
                        </>
                      }
                    />
                  </Form.Item>
                </React.Fragment>
              ))}
            </>
          )
        }}
      </Form.List>
      <style scoped>{`
    .ant-col .ant-form-item-label {
      padding: 0 !important;
    }
    `}</style>
    </>
  )
}

export default FormMultiEmailInput
