import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Department from '../src/Components/Departments/Department'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Career from './Components/Career/Career'
import AcademicInfo from './Components/Academic-Info/AcademicInfo'
import Analytics from './Components/Analytics/Analytics'
import CMTStudents from './Components/CMTStudents/CMTStudents'
import Error from './Components/Error/Error'
import FifthSemester from './Components/CMTData/FifthSemester/FifthSemester'
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
        path: '/CMTStudents',
        element: <CMTStudents />,
      },
      {
        path:'*',
        element:<Error />
      },
      {
        path:'/Cmt5th',
        element:<FifthSemester />,
        loader : () => fetch('cmtstudent5th.json')
      }
    
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
