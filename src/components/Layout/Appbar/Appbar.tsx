import './index.less'
import React from 'react'
// import LanguageSelect from '../Header/LanguageSelect'
import { Avatar } from 'antd'
import NoticeIconView from '../Header/NoticeIcon/NoticeIconView'
import { useNavigate } from 'react-router'

import SessionStore from '@stores/sessionStore'
import { defaultAvatar, sidebarStatus } from '@lib/appconst'
import { portalLayouts } from '../Router/router.config'
import { CodepenOutlined } from '@ant-design/icons'

interface Props {
  sessionStore: SessionStore
  changeMenu: (value: any) => void
}

const Appbar = (props: Props) => {
  const navigate = useNavigate()
  const [currentSidebarStatus, setCurrentSidebarStatus] =
    React.useState<any>(undefined)
  React.useEffect(() => {
    props.sessionStore
      .getMyProfilePicture()
      .then(() => setProfilePicture(props.sessionStore.profilePicture))
  }, [])
  const [profilePicture, setProfilePicture] = React.useState(defaultAvatar)
  return (
    <div className="h-100 w-100 d-flex flex-column justify-content-between align-items-center appbar-after">
      <div className="text-center mb-3">
        <Avatar
          style={{ height: 40, width: 40 }}
          className="my-3"
          shape="square"
          alt={'profile'}
          src={'/assets/images/logo-icon.png'}
        />
        <a
          onClick={() => {
            props.changeMenu(sidebarStatus.menu)
            setCurrentSidebarStatus(sidebarStatus.menu)
            navigate('/')
          }}>
          <CodepenOutlined
            style={{ height: 40, width: 40, fontSize: '1.4rem' }}
            className={`wrap-item my-3 ${
              currentSidebarStatus === sidebarStatus.menu && 'styleses'
            }`}
            shape="circle"
          />
        </a>
        <NoticeIconView history={history} wrapClass="wrap-item" />

        {/* <MessageOutlined
          style={{ height: 40, width: 40, fontSize: '1.4rem' }}
          className="wrap-item my-3"
          shape="circle"
        />
        <a
          onClick={() => {
            // props.changeMenu(sidebarStatus.setting)
            // setCurrentSidebarStatus(sidebarStatus.setting)
            // history.push(portalLayouts.appSetting.path)
          }}>
          <SettingOutlined
            style={{ height: 40, width: 40, fontSize: '1.4rem' }}
            className={`wrap-item my-3 ${
              currentSidebarStatus === sidebarStatus.setting && 'styleses'
            }`}
            shape="circle"
          />
        </a>
        <StarOutlined
          style={{ height: 40, width: 40, fontSize: '1.4rem' }}
          className="wrap-item my-3"
          shape="circle"
        /> */}
      </div>
      <div className="text-center my-3">
        {/* <LanguageSelect wrapClass="wrap-item" placement={'topRight'} /> */}
        <a
          onClick={() => {
            props.changeMenu(sidebarStatus.account)
            setCurrentSidebarStatus(sidebarStatus.account)
            navigate(portalLayouts.accountConfigMyProfile.path)
          }}>
          <span
            className={`wrap-item my-1 ${
              currentSidebarStatus === sidebarStatus.account && 'styleses'
            }`}>
            <Avatar
              style={{ height: 40, width: 40, borderRadius: '50%' }}
              shape="circle"
              alt={'profile'}
              src={profilePicture}
            />
          </span>
        </a>
      </div>
      <style>{`
      .styleses::after {
          content: '';
          position: absolute;
          right: -20px;
          width: 12px !important;
          height: 12px !important;
          background: white;
          transform: rotate(45deg);
      }
      .appbar-after::after {
        content: '';
        height: 100%;
        position: absolute;
        left: 58px;
        width: 16px;
        background: white;
        border-radius: 48px
      }
      `}</style>
    </div>
  )
}

export default Appbar
