import React, { FC } from 'react'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="wrap overflow-hidden px-4 py-6 min-h-screen">
      <div>
        <Header />
        <main className=" pb-4 md:pb-6 px-4 md:px-8">{children}</main>
      </div>
    </div>
  )
}

export default Layout
