import React from 'react'
import Navbar from './navbar.jsx'
import Sidebar from './Sidebar.jsx'
import Dashboard from './Dashboard.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Sidebar/></>,
    },
    {
      path: "/dashboard",
      element: <><Navbar/><div className='flex'>
        <div className='basis-1/5'><Sidebar/></div>
        <div className='basis-4/5'><Dashboard/></div>
        </div></> ,
    },
    {

    }
    
  ]
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
