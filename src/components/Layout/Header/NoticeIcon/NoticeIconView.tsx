import React, { Component } from 'react'
import NoticeIcon from './index'
import notificationService from '../../../../services/common/notificationService'
import fileService from '../../../../services/common/fileService'
import { L, LNotification } from '@lib/abpUtility'
import { portalLayouts } from '@components/Layout/Router/router.config'
import * as Push from 'push.js'
import { moduleIds, notificationTypes } from '@lib/appconst'
import moment from 'moment-timezone/moment-timezone'
import { NotificationModel } from '@models/common/notificationModel'
import { withRouter } from '@components/Layout/Router/withRouter'

export interface GlobalHeaderRightProps {
  navigate: any
  notices?: any[]
  currentUser?: any
  wrapClass?: any
  fetchingNotices?: boolean
  onNoticeVisibleChange?: (visible: boolean) => void
  onNoticeClear?: (tabName?: string) => void
}

class NoticeIconView extends Component<GlobalHeaderRightProps> {
  state = {
    unreadCount: 0,
    noticeData: { notifications: [], message: [], event: [] }
  }
  componentDidMount = async () => {
    await this.initNotification()

    abp.event.on('abp.notifications.received', (userNotification) => {
      abp.notifications.showUiNotifyForUserNotification(userNotification, {
        onClick: () =>
          this.changeReadState(NotificationModel.assign(userNotification))
      })

      //Desktop notification
      Push.default.create('Property Cube', {
        body: abp.notifications.getFormattedMessageFromUserNotification(
          userNotification
        ),
        icon: 'assets/images/logo-icon.png',
        timeout: 6000,
        onClick: () => this.changeReadState(userNotification)
      })
      this.initNotification()
    })

    abp.event.on('abp.notifications.refresh', () => {
      this.initNotification()
    })
  }

  initNotification = async () => {
    const noticeData = (await this.getNoticeData()) as any
    this.setState({
      unreadCount: noticeData.unreadCount,
      noticeData: { notifications: noticeData.notification || [] }
    })
  }

  changeReadState = async (item: any) => {
    if (!item.read) {
      await notificationService.setNotificationAsRead({ id: item.id })
      const noticeData = this.state.noticeData
      noticeData.notifications.forEach((notification: any) => {
        if (notification.id === item.id) {
          notification.read = true
        }
      })

      this.setState({
        noticeData,
        unreadCount:
          this.state.unreadCount > 0
            ? this.state.unreadCount - 1
            : this.state.unreadCount
      })
    }

    if (
      item.type === notificationTypes.download &&
      item.notification &&
      item.notification.data
    ) {
      let { fileExpiredAt } = item.notification.data.properties
      fileExpiredAt = moment(fileExpiredAt)
      if (fileExpiredAt.isAfter(moment())) {
        await fileService.downloadTempFile(item.notification.data.properties)
      } else {
        abp.notify.info(
          LNotification(
            'DOWNLOAD_TIME_EXPIRED_AT_{0}_MESSAGE',
            fileExpiredAt.format('DD/MM/YYY HH:mm')
          )
        )
      }
    }

    if (
      item.type === notificationTypes.gotoDetail &&
      item.moduleId &&
      item.parentId
    ) {
      let routePath = undefined
      switch (item.moduleId) {
        case moduleIds.jobRequest: {
          routePath = portalLayouts.communicationWorkOrderDetail.path.replace(
            ':id',
            item.parentId
          )
        }
      }

      if (routePath) {
        this.props.navigate(routePath)
      }
    }
  }

  handleNoticeClear = async (title: string, key: string) => {
    await notificationService.setAllNotificationAsRead()
    const noticeData = this.state.noticeData
    noticeData.notifications.forEach((notification: any) => {
      notification.read = true
    })

    this.setState({ noticeData, unreadCount: 0 })
  }

  handleViewMore = () => {
    this.props.navigate(portalLayouts.notification.path)
  }

  getNoticeData = async () => {
    const result = await notificationService.getUserNotifications({
      SkipCount: 0,
      maxResultCount: 50
    })

    return { unreadCount: result.unreadCount, notification: result.items }
  }

  render() {
    const { onNoticeVisibleChange, wrapClass } = this.props
    const { noticeData, unreadCount } = this.state
    return (
      <div className={wrapClass}>
        <NoticeIcon
          count={unreadCount}
          onItemClick={this.changeReadState}
          clearText={L('MARK_ALL_AS_READ')}
          viewMoreText={L('VIEW_MORE')}
          onClear={this.handleNoticeClear}
          onPopupVisibleChange={onNoticeVisibleChange}
          onViewMore={this.handleViewMore}
          clearClose>
          <NoticeIcon.Tab
            tabKey="notification"
            count={unreadCount}
            data={noticeData.notifications}
            title="Notification"
            emptyText={L('YOU_HAVE_VIEWED_ALL_NOTIFICATIONS')}
            showViewMore
            onClick={this.changeReadState}
          />
        </NoticeIcon>
        {/*<NoticeIcon.Tab*/}
        {/*  tabKey="message"*/}
        {/*  data={noticeData.message}*/}
        {/*  title="News"*/}
        {/*  emptyText="You have read all the messages"*/}
        {/*  showViewMore*/}
        {/*/>*/}
        {/*<NoticeIcon.Tab*/}
        {/*  tabKey="event"*/}
        {/*  title="Upcoming"*/}
        {/*  emptyText="You have completed all to do"*/}
        {/*  data={noticeData.event}*/}
        {/*  showViewMore*/}
        {/*/>*/}
      </div>
    )
  }
}

export default withRouter(NoticeIconView)
