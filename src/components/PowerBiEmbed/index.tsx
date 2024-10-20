import React from 'react'
import { PowerBIEmbed } from 'powerbi-client-react'
import { models } from 'powerbi-client'

// Define the props interface
interface PowerBIEmbedProps {
  tokenId: string
  accessToken: string
  reportId: string
  embedUrl: string
}

const PowerBIEmbedComponent: React.FC<PowerBIEmbedProps> = ({
  tokenId,
  accessToken,
  reportId,
  embedUrl
}) => {
  // Create a map for event handlers
  const eventHandlers = new Map<string, (event: any) => void>([
    [
      'loaded',
      () => {
        console.log('Report loaded successfully')
      }
    ],
    [
      'error',
      (event) => {
        console.error(event.detail)
      }
    ]
  ])

  return (
    <div style={{ height: '700px', width: '100%' }}>
      <PowerBIEmbed
        embedConfig={{
          type: 'report', // Type of the Power BI object
          id: reportId, // Report ID
          embedUrl: embedUrl, // Embed URL
          accessToken: accessToken, // Access token
          tokenType: models.TokenType.Embed, // Token type
          settings: {
            filterPaneEnabled: false,
            navContentPaneEnabled: false
          }
        }}
        cssClassName="h-100"
        eventHandlers={eventHandlers} // Pass the Map of event handlers
      />
    </div>
  )
}

export default PowerBIEmbedComponent
