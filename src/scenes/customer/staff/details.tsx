import CustomDrawer from '@components/Drawer/CustomDrawer'
import FormInput from '@components/FormItem/FormInput'
import FormTextArea from '@components/FormItem/FormTextArea'
import { L } from '@lib/abpUtility'
import { validateMessages } from '@lib/validation'
import Form from 'antd/es/form'
import Col from 'antd/es/grid/col'
import Row from 'antd/es/grid/row'
import React from 'react'
// import { emailRegex, phoneRegex } from "@lib/appconst";
import FileUploadWrap from '@components/FileUpload'
import FileStore from '@stores/common/fileStore'
import FormSwitch from '@components/FormItem/FormSwitch'
import FormMultiEmailInput from '@components/FormItem/FormInputMultipleEmail/FormMultiEmailInput'
import FormInputMultiplePhone from '@components/FormItem/FormInputMultiplePhone/FormInputMultiplePhone'
import FormSelect from '@components/FormItem/FormSelect'
import AppConsts from '@lib/appconst'
const { genderOption } = AppConsts

type Props = {
  visible: boolean
  onCancel: () => void
}
const CustomerStaffDetail = (props: Props) => {
  const onSave = async () => {
    const value = await form.getFieldsValue()
    console.log(value)
  }
  const [form] = Form.useForm()
  return (
    <Form form={form} validateMessages={validateMessages} layout={'vertical'}>
      <CustomDrawer
        useBottomAction
        title={L('COMPANY_STAFF_CREATE')}
        visible={props.visible}
        onClose={props.onCancel}
        onSave={onSave}
        extraBottomContent={
          <div className="d-flex align-items-center h-100">
            <FormSwitch
              label={''}
              name="isActive"
              formLayout={{ style: { marginBottom: 4 } }}
            />
            <label className="mx-1">{L('ACTIVE')}</label>
          </div>
        }>
        <Row gutter={8}>
          <Col md={{ span: 12 }}>
            <FormInput
              name="name"
              label={L('COMPANY_STAFF_NAME')}
              rule={[{ required: true }]}
            />
          </Col>
          <Col md={{ span: 12 }}>
            <FormSelect
              options={genderOption}
              name="gender"
              label={L('COMPANY_STAFF_GENDER')}
              rule={[{ required: true }]}
            />
          </Col>
          <Col md={{ span: 12 }}>
            <FormInput
              name="position"
              label={L('COMPANY_STAFF_POSITION')}
              rule={[{ required: true }]}
            />
          </Col>
          <Col md={{ span: 12 }}>
            <FormInput
              name="positionNote"
              label={L('COMPANY_STAFF_POSITION_NOTE')}
              rule={[{ required: true }]}
            />
          </Col>
          <Col md={{ span: 12 }}>
            <FormInputMultiplePhone
              isRequired
              form={form}
              label={L('PHONE_NUMBER')}
              objectFieldName="phoneNumber"
            />
          </Col>
          <Col md={{ span: 12 }}>
            <FormMultiEmailInput
              isRequired
              form={form}
              label={L('EMAIL')}
              objectFieldName="email"
            />
          </Col>

          <Col md={{ span: 12 }}>
            <FormInput
              name="contactReason"
              label={L('CONTACT_REASON')}
              rule={[{ required: true }]}
            />
          </Col>
          <Col md={{ span: 12 }}>
            <FormInput
              name="contactReasonNote"
              label={L('CONTACT_REASON_NOTE')}
              rule={[{ required: true }]}
            />
          </Col>

          <Col md={{ span: 24 }}>
            <FormTextArea
              name="description"
              label={L('COMPANY_STAFF_DESCRIPTION')}
            />
          </Col>
          <Col md={{ span: 24 }}>
            <label>{L('UPLOAD_DOCUMENT_PARTNER_LABEL')}</label>
            <FileUploadWrap
              fileStore={new FileStore()}
              onRemoveFile={() => {}}
              beforeUploadFile={() => false}
            />
          </Col>
        </Row>
      </CustomDrawer>
    </Form>
  )
}

export default CustomerStaffDetail
