import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Department from '../src/Components/Departments/Department'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Career from './Components/Career/Career'
import AcademicInfo from './Components/Academic-Info/AcademicInfo'
import Analytics from './Components/Analytics/Analytics'
import Students from './Components/Students/Students'
import Error from './Components/Error/Error'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'/department',
        element:<Department />
      },
      {
        path:'/academic-info',
        element:<AcademicInfo />,
        loader : () => fetch('https://jsonplaceholder.typicode.com/users')

      },
      {
        path:'/career',
        element:<Career />
      },
      {
        path:'/analytics',
        element:<Analytics />
      },
      {
        path: '/students/:userId',
        element: <Students />,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`)
      },
      {
        path:'*',
        element:<Error />
      }
    
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
