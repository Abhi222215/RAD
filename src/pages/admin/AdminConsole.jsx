import React from 'react'
import StaticHtmlFrame from './StaticHtmlFrame.jsx'
import adminConsoleHtml from './index.html?raw'

// AdminConsole component that renders the static HTML content of the admin console
export default function AdminConsole() {
  return <StaticHtmlFrame title="Admin Console" html={adminConsoleHtml} />
}
