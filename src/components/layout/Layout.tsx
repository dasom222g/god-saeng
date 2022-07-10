import React, { FC } from 'react'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const gridBg = {
    backgroundImage: 'url(/images/grid_bg.svg)',
    backgroundSize: '12px',
  }
  return (
    <div className="wrap overflow-hidden px-4 py-6 h-full min-h-screen" style={gridBg}>
      <div className="flex flex-col h-full max-w-lg mx-auto">
        <Header />
        <main className="px-4 md:px-8 h-full">{children}</main>
      </div>
    </div>
  )
}

export default Layout
