import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <nav>
        <ul style={{ display: 'flex', alignItems: 'center', gap: '20px'}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/async">Async</Link>
          </li>
          <li>
            <Link to="/sync">Sync</Link>
          </li>
        </ul>
      </nav>

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
