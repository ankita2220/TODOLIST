import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="space-y-8 p-4">
      <Outlet />
    </div>
  )
}

export default Layout