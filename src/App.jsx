import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout'
import Home from './pages/home/home'
import Async from './pages/async/async'
import Sync from './pages/sync/sync'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'async',
          element: <Async />,
        },
        {
          path: 'sync',
          element: <Sync />,
        },
      ],
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
