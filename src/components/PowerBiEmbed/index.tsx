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
  const mainref = useRef<any | null>(null)

  const [report, setReport] = useState<any | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [pages, setPages] = useState<any[]>([]) // State to hold report pages
  const [selectedPage, setSelectedPage] = useState<string | null>(null) // State to hold selected page

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
      const powerbi = new service.Service(
        factories.hpmFactory,
        factories.wpmpFactory,
        factories.routerFactory
      )

      // Embed the report and display it within the div container
      const reportInstance = powerbi.embed(
        reportRef.current,
        embedConfig
      ) as any

      setReport(reportInstance)

      // Add event handlers for the report
      reportInstance.on('loaded', async () => {
        console.log('Report loaded successfully')
        if (reportRef.current) {
          reportRef.current.style.width = '100%' // Set width to 100% of parent div
          reportRef.current.style.height = '600px' // Set a specific height, or adjust as needed
        }

        // Get available pages
        const pages = await reportInstance.getPages()
        setPages(pages)
        if (pages.length > 0) {
          setSelectedPage(pages[0].name) // Set the first page as selected by default
        }
      })

      reportInstance.on('error', (event) => {
        console.error(event.detail)
        setError('An error occurred while loading the report.')
      })

      // Cleanup function to remove the embedded report on component unmount
      return () => {
        reportInstance.off('loaded')
        reportInstance.off('error')
        // reportInstance?.destroy() // Dispose of the report instance
      }
    }
    return undefined
  }, [reportId, embedUrl, accessToken])

  // Function to toggle fullscreen
  const handleFullScreen = () => {
    if (mainref.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        mainref.current
          .requestFullscreen()
          .then(() => {
            // Đảm bảo reportRef chiếm toàn bộ không gian khi fullscreen
            if (reportRef.current) {
              reportRef.current.style.height = '100vh' // Chiếm toàn bộ chiều cao khi fullscreen
            }
          })
          .catch((err: any) => {
            console.error(
              `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
            )
          })
      }
    }
  }

  // Lắng nghe sự kiện fullscreen để khôi phục chiều cao khi thoát fullscreen
  useEffect(() => {
    const onFullScreenChange = () => {
      if (!document.fullscreenElement && reportRef.current) {
        // Khi thoát fullscreen, trả về chiều cao cũ
        reportRef.current.style.height = '600px'
      }
    }

    document.addEventListener('fullscreenchange', onFullScreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', onFullScreenChange)
    }
  }, [])

  // Function to handle page change
  const handlePageChange = async (pageName: string) => {
    if (report) {
      try {
        await report.setPage(pageName) // Navigate to the selected page
        setSelectedPage(pageName)
      } catch (error) {
        console.error('Error changing page:', error)
      }
    }
  }
  return (
    <div className="pbi-parent" ref={mainref}>
      {error && <div className="error-message">{error}</div>}
      <ExpandOutlined onClick={handleFullScreen} className="btn-fullscreen" />

      <div className="w-100 h-other" ref={reportRef}></div>

      <div className="pbi-page-slider">
        {pages.map((page) => (
          <div
            key={page.name}
            className={`page-item ${
              selectedPage === page.name ? 'active' : ''
            }`}
            onClick={() => handlePageChange(page.name)}>
            {page.displayName}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PowerBIEmbed
