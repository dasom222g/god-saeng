import React, { FC } from 'react'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="wrap overflow-hidden px-4 py-6 h-full min-h-screen">
      <div className="flex flex-col h-full">
        <Header />
        <main className="px-4 md:px-8 h-full">{children}</main>
      </div>
    </div>
  )
}

export default Layout
