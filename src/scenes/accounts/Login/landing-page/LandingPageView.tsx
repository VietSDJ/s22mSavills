import React, { useState, useEffect, useCallback } from 'react'
import { CButton, CLink, CRow, CCol, CImg } from '@coreui/react'
import './LandingPageView.less'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import {
  FAQ,
  S22M,
  ASPECT_RATIO_16_10,
  VIDEO_WIDTH_HEIGHT,
  VIDEO_HEIGHT_WIDTH,
  VIDEO_BACKGROUND
} from '../../../../constant'
import {
  LAZY_IMG_4_3,
  LAZY_IMG_16_10,
  LAZY_IMG_16_9,
  S22M_LOGO
} from '@assets/images/banner/index'

import { DOT_1, DOT_2, DOT_3 } from '@assets/images/graphics'
import utils from '../../../../utils/utils'

const LAZY_IMGS = {
  tablet: LAZY_IMG_4_3,
  desktop43: LAZY_IMG_4_3,
  desktop1610: LAZY_IMG_16_10,
  desktop169: LAZY_IMG_16_9
}

export default function () {
  const [lazyImg, setLazyImg] = useState(null)
  const [videoSrc, setVideoSrc] = useState(null)
  const [videoStyle, setVideoStyle] = useState(VIDEO_HEIGHT_WIDTH)
  const [isAssetsLoading, setIsAssetsLoading] = useState({
    logo: true,
    bg: true,
    graphic1: true,
    graphic2: true,
    graphic3: true
  })

  const getAspectRatio = () => {
    const { availWidth, availHeight } = window.screen
    return availWidth / availHeight
  }

  const getDevice = () => {
    const { availWidth, availHeight } = window.screen
    return utils.getCurrentDevice(availWidth, availHeight)
  }

  const updateBackgroundPoster = () => {
    const device = getDevice()
    const lazyImg = LAZY_IMGS[device]
    setLazyImg(lazyImg)
  }

  const updateBackgroundStyle = () => {
    const aspectRatio = getAspectRatio()
    const videoStyle =
      aspectRatio < ASPECT_RATIO_16_10 ? VIDEO_WIDTH_HEIGHT : VIDEO_HEIGHT_WIDTH
    setVideoStyle(videoStyle)
  }

  const updateBackgroundSrc = async () => {
    const device = getDevice()
    const dimensions = VIDEO_BACKGROUND[device]
    import(`@assets/images/banner/bg-${dimensions}.mp4`).then((videoSrc) =>
      setVideoSrc(videoSrc.default)
    )
  }

  const updateBackground = () => {
    updateBackgroundPoster()
    updateBackgroundStyle()
    updateBackgroundSrc()
  }

  useEffect(() => {
    window.addEventListener('resize', updateBackground)
    return () => window.removeEventListener('resize', updateBackground)
  })

  useEffect(() => {
    updateBackground()
  })

  const setAssetLoaded = useCallback((type) => {
    setIsAssetsLoading((prevState) => ({
      ...prevState,
      [type]: false
    }))
  }, [])

  const checkAllAssetsLoaded = () => {
    return Object.values(isAssetsLoading).every((state) => !state)
  }

  return (
    <React.Fragment>
      <div className="lp-container">
        <div className="lp-header">
          <CRow className="align-items-start">
            <CCol xs={3} md={2} lg={2}>
              <CImg
                src={S22M_LOGO}
                type="image/png"
                className="lp-logo"
                onLoad={setAssetLoaded.bind(null, 'logo')}
                style={{ opacity: checkAllAssetsLoaded() ? '1' : '0' }}></CImg>
            </CCol>
            <CCol xs={9} md={10} lg={10} className="text-right">
              <CLink href={S22M} target="_blank">
                <CButton
                  className="lp-btn mr-xs-1 mr-md-2 mr-lg-3"
                  color="secondary"
                  variant="ghost">
                  S22M
                </CButton>
              </CLink>
              <CLink href={FAQ} target="_blank">
                <CButton
                  className="lp-btn mr-xs-1 mr-md-2 mr-lg-3"
                  color="secondary"
                  variant="ghost">
                  FAQ
                </CButton>
              </CLink>
            </CCol>
          </CRow>
        </div>

        <LazyLoadComponent>
          <div className="lp-background">
            <video
              className={videoStyle}
              autoPlay
              muted
              loop
              playsInline
              poster={lazyImg ?? ''}
              src={videoSrc ?? ''}
              preload="none"
              onLoadedData={setAssetLoaded.bind(null, 'bg')}></video>
          </div>
        </LazyLoadComponent>

        <div className="lp-absolute">
          <CRow className="justify-center">
            <CImg
              src={DOT_1}
              type="image/svg+xml"
              height="216px"
              className={`lp-graphic ${
                checkAllAssetsLoaded() ? 'lp-graphic-right first' : ''
              }`}
              onLoad={setAssetLoaded.bind(null, 'graphic1')}></CImg>
            <CImg
              src={DOT_2}
              type="image/svg+xml"
              height="216px"
              className={`lp-graphic ${
                checkAllAssetsLoaded() ? 'lp-graphic-right second' : ''
              }`}
              onLoad={setAssetLoaded.bind(null, 'graphic2')}></CImg>
            <CImg
              src={DOT_3}
              type="image/svg+xml"
              height="216px"
              className={`lp-graphic ${checkAllAssetsLoaded() ? 'third' : ''}`}
              onLoad={setAssetLoaded.bind(null, 'graphic3')}></CImg>
          </CRow>

          <div
            className="lp-content"
            style={{ opacity: checkAllAssetsLoaded() ? '1' : '0' }}>
            <div className="lp-title mt-4">Property Consultancy</div>
            <div className="lp-slogan">
              powered by cutting-edge data science
            </div>
          </div>

          <div className="mt-3">
            <CLink href="./login">
              <CButton
                className={`lp-btn lp-btn-primary ${
                  checkAllAssetsLoaded() ? 'lp-btn-primary-animation' : ''
                }`}
                color="secondary"
                variant="ghost">
                LOGIN
              </CButton>
            </CLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
