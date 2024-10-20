import FormInput from '@components/FormItem/FormInput'
import { L } from '@lib/abpUtility'
import Stores from '@stores/storeIdentifier'
import { Col, Form, Row } from 'antd'
import { inject, observer } from 'mobx-react'
import React from 'react'
import { validateMessages } from '@lib/validation'
import CustomDrawer2 from '@components/Drawer/CustomDrawer2'
import { useForm } from 'antd/lib/form/Form'
import AppConsts from '@lib/appconst'
import EntityStore from '@stores/entity/entityStore'
import industrialService from '@services/industrial/industrialService'
import FormSelect from '@components/FormItem/FormSelect'
// import FormSwitch from '@components/FormItem/FormSwitch'

const {} = AppConsts

type Props = {
  visible: boolean
  data: any
  entityStore: EntityStore
  onCancel: () => void
}

const EntityDetail = inject(Stores.EntityStore)(
  observer((props: Props) => {
    const [form] = useForm()
    React.useEffect(() => {
      getCategoryOption('EntityCategory')
      if (props.data.id) {
        form.setFieldsValue(props.data)
      } else {
        form.resetFields()
      }
    }, [props.visible])
    const [categoryOption, setCategoryOption] = React.useState<any[]>([])
    const getCategoryOption = async (keyWord) => {
      const res = await industrialService.getListCategory({ keyWord })

      setCategoryOption(res)
    }
    // const handleChangeCategory = async (): Promise<any[]> => {
    //   const res = await industrialService.getListCategory({ keyWord })
    //   return res
    // }
    const onSave = async () => {
      form.validateFields().then(async (values: any) => {
        if (props.data.id) {
          const values = form.getFieldsValue()
          values.id = props.data.id
          values.isActive = props.data.isActive
          await props.entityStore.update(values)
          form.resetFields()
          props.onCancel()
        } else {
          const values = form.getFieldsValue()

          await props.entityStore.create(values)
          form.resetFields()
          props.onCancel()
        }
      })
    }

    return (
      <Form form={form} validateMessages={validateMessages} layout={'vertical'}>
        <CustomDrawer2
          useBottomAction
          title={L('ENTITY_DETAIL')}
          visible={props.visible}
          onClose={() => {
            form.resetFields(), props.onCancel()
          }}
          onSave={onSave}>
          <Row gutter={8}>
            <Col md={{ span: 12 }}>
              <FormInput
                size="middle"
                name="entityCode"
                label={L('ENTITY_CODE')}
                rule={[{ required: true }]}
              />
            </Col>
            <Col md={{ span: 12 }}>
              <FormInput
                size="middle"
                name="shortName"
                label={L('SHORT_NAME')}
                // rule={[{ required: true }]}
              />
            </Col>
          </Row>
          <Row gutter={8}>
            <Col sm={{ span: 12, offset: 0 }}>
              <FormInput
                size="middle"
                name="legalName"
                label={L('LEGAL_NAME')}
                // rule={[{ required: true }]}
              />
            </Col>

            <Col md={{ span: 12 }}>
              <FormSelect
                size={'middle'}
                label={L('CATEGORY')}
                name="categoryId"
                options={categoryOption || []}
                rule={[{ required: true }]}
                selectProps={
                  {
                    // onChange: handleChangeCategory
                  }
                }
              />
            </Col>
          </Row>

          {/* <Row>
            <FormSwitch
              defaultChecked={false}
              label={'IS_ACTIVE'}
              name="isActive"
              formLayout={{ style: { marginBottom: 4 } }}
            />
          </Row> */}
        </CustomDrawer2>
      </Form>
    )
  })
)

export default EntityDetail
