import React, { useEffect, useRef, useState } from 'react'
import { models, service, factories } from 'powerbi-client'
import './pbiEmbed.less'
import { ExpandOutlined } from '@ant-design/icons'

// Define the props interface
interface PowerBIEmbedProps {
  tokenId: string
  accessToken: string
  reportId: string
  embedUrl: string
}

const PowerBIEmbed: React.FC<PowerBIEmbedProps> = ({
  tokenId,
  accessToken,
  reportId,
  embedUrl
}) => {
  const reportRef = useRef<HTMLDivElement | null>(null)
  const [report, setReport] = useState<any | null>(null)

  useEffect(() => {
    if (reportRef.current) {
      const embedConfig = {
        type: 'report', // Type of the Power BI object
        id: reportId, // Report ID
        embedUrl: embedUrl, // Embed URL
        accessToken: accessToken, // Access token
        tokenType: models.TokenType.Embed, // Token type
        settings: {
          filterPaneEnabled: false,
          navContentPaneEnabled: false,
          layoutType: models.LayoutType.Custom, // Custom layout type
          customLayout: {
            displayOption: models.DisplayOption.FitToWidth // Fit report to width
          }
        }
      }
      let powerbi = new service.Service(
        factories.hpmFactory,
        factories.wpmpFactory,
        factories.routerFactory
      )

      // Embed the report and display it within the div container
      const reportInstance = powerbi.embed(
        reportRef.current,
        embedConfig
      ) as any

      // Set the embedded report instance to state
      setReport(reportInstance)

      // Add event handlers for the report
      reportInstance.on('loaded', () => {
        console.log('Report loaded successfully')

        if (reportRef.current) {
          reportRef.current.style.width = '100%' // Set width to 100% of parent div
          // reportRef.current.style.height = '600px' // Set a specific height, or adjust as needed
        }
      })

      reportInstance.on('error', (event) => {
        console.error(event.detail)
      })

      // Cleanup function to remove the embedded report on component unmount
      return () => {
        reportInstance.off('loaded')
        reportInstance.off('error')
        reportInstance.reload()
      }
    }
    return undefined
  }, [reportId, embedUrl, accessToken])

  // Function to toggle fullscreen
  const handleFullScreen = () => {
    if (report) {
      report.fullscreen()
    }
  }

  return (
    <div className="pbi-parent">
      <ExpandOutlined onClick={handleFullScreen} className="btn-fullscreen" />
      <div className="h-100 w-100" ref={reportRef}></div>
    </div>
  )
}

export default PowerBIEmbed
