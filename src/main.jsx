import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider } from 'react-router-dom'
import route from './Route/Route'
import AuthProvaider from './Provaider/AuthProvaider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvaider>
      <RouterProvider router={route}></RouterProvider>
    </AuthProvaider>
  </React.StrictMode>,
)

