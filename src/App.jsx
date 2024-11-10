import React from 'react'
import NavBar from './components/Navbar/NavBar'
import Products from './components/Products/Products'
import Details from './components/Details/Details'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound'
import Layout from './components/Layout/Layout'

export default function App() {

  const routers = createHashRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Products /> },
        { path: 'product-details/:id', element: <Details /> },
        { path: '*', element: <NotFound /> },
      ]
    },
  ])

  return (
    <>

      <RouterProvider router={routers} />

    </>
  )
}
