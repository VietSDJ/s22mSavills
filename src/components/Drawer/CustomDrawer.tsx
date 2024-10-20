import { L } from '@lib/abpUtility'
import { Button, Drawer, Space } from 'antd'
import React, { ReactNode } from 'react'

type Props = {
  title?: string
  visible: boolean
  onClose: () => void
  onSave: () => void
  useBottomAction?: boolean
  extraBottomContent?: ReactNode
  loading?: boolean
}

const CustomDrawer = (props: React.PropsWithChildren<Props>) => {
  return (
    <Drawer
      title={<span style={{ fontWeight: 600 }}>{props.title}</span>}
      placement="right"
      closable={false}
      onClose={props.onClose}
      open={props.visible}
      width={window.innerWidth < 600 ? '100%' : '70%'}
      extra={
        !props.useBottomAction && (
          <Space>
            <Button onClick={props.onClose} shape="round">
              {L('BTN_CANCEL')}
            </Button>
            <Button type="primary" onClick={props.onSave} shape="round">
              {L('BTN_SAVE')}
            </Button>
          </Space>
        )
      }>
      <div className="mb-3">{props.children}</div>
      {props.useBottomAction && (
        <>
          <div style={{ height: 60 }} />
          <div className="bottom-action-style">
            <div className="w-100 h-100 d-flex justify-content-between align-items-center">
              <div className="pl-3 pt-2">{props.extraBottomContent}</div>
              <div>
                <Button onClick={props.onClose} shape="round">
                  {L('BTN_CANCEL')}
                </Button>
                {props.onSave && (
                  <Button
                    loading={props.loading}
                    type="primary"
                    className="mx-3"
                    onClick={props.onSave}
                    shape="round">
                    {L('BTN_SAVE')}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      <style scoped>{`
      .ant-drawer-content {
        position: relative !important;
      }
      .ant-drawer-body {
        padding-top: 4px !important;
      }
      .bottom-action-style {
        position: absolute  !important;
        width: 100%;
        bottom: 4px;
        right: 0;
        height: 60px;
        background-color: #FAF8EE
      }
      `}</style>
    </Drawer>
  )
}

export default CustomDrawer
