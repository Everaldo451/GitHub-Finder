import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Home from './routes/Home.tsx'
import BestRepositorys from './routes/BestRepositorys.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/repos",
        element: <BestRepositorys/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
