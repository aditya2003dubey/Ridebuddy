import React from 'react'
import './App.css'
import Navbar from './Sidebar/navbar.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'
import Vehicles from './Sidebar/Vehicles.jsx'
import Dashboard from './Sidebar/Dashboard.jsx'
import Highlights from './Sidebar/Highlights.jsx'
import Emergency from './Sidebar/Emergency.jsx'
import Interests from './Sidebar/Interests.jsx'
import Reports from './Sidebar/Reports.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Setting from './Sidebar/Setting.jsx'
import Users from './Sidebar/Users.jsx'
import Rides from './Sidebar/Rides.jsx'
import VehicleVerification from './Sidebar/Vehicle_Verfication.jsx'
import Banner from './Sidebar/Banner.jsx'
import Transaction from './Sidebar/Transactions.jsx'
import Withdrawal from './Sidebar/Withdrawls.jsx'

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
      path: "/users",
      element: <><Navbar/><div className='flex'>
        <div className='basis-1/5 w-1/6'><Sidebar/></div>
        <div className='basis-4/5 w-4/6' ><Users/></div>
        </div></> ,
    },
    {
      path: "/vehicles",
      element: <><Navbar/><div className='flex'>
        <div className='basis-1/5 w-1/5 '><Sidebar/></div>
        <div className='basis-4/5  w-4/5 mx-5 max-lg:w-full max-lg:basis-full '  ><Vehicles/></div>
        </div></> ,
    },
    {
      path: "/rides",
      element: <><Navbar/><div className='flex'>
        <div className='basis-1/5 w-1/6'><Sidebar/></div>
        <div className='basis-4/5 w-5/6' ><Rides/></div>
        </div></> ,
    },
    {
      path: "/withdrawls",
      element: <><Navbar/><div className='flex'>
        <div className='basis-1/5 w-1/6'><Sidebar/></div>
        <div className='basis-4/5 w-5/6' ><Withdrawal/></div>
        </div></> ,
    },
    {
      path: "/transactions",
      element: <><Navbar/><div className='flex'>
        <div className='basis-1/5 w-1/6'><Sidebar/></div>
        <div className='basis-4/5 w-5/6' ><Transaction/></div>
        </div></> ,
    },
    {
      path: "/vehicle_verification",
      element: <><Navbar/><div className='flex'>
        <div className='basis-1/5 w-1/6'><Sidebar/></div>
        <div className='basis-4/5 w-5/6' ><VehicleVerification/></div>
        </div></> ,
    },
    {
      path: "/banners",
      element: <><Navbar/><div className='flex'>
        <div className='basis-1/5 w-1/6'><Sidebar/></div>
        <div className='basis-4/5 w-5/6' ><Banner/></div>
        </div></> ,
    },
    {
      path: "/emergency",
        element: <><Navbar/><div className='flex'>
          <div className='basis-1/5 w-1/6'><Sidebar/></div>
          <div className='basis-4/5 w-5/6' ><Emergency/></div>
          </div></> ,
      },
      {
        path: "/reports",
        element: <><Navbar/><div className='flex'>
          <div className='basis-1/5 w-1/6'><Sidebar/></div>
          <div className='basis-4/5 w-5/6' ><Reports/></div>
          </div></> ,
      },

      {
        path: "/interests",
        element: <><Navbar/><div className='flex'>
          <div className='basis-1/5 w-1/6'><Sidebar/></div>
          <div className='basis-4/5 w-5/6' ><Interests/></div>
          </div></> ,
      },

    {
    path: "/highlights",
      element: <><Navbar/><div className='flex'>
        <div className='basis-1/5 w-1/6'><Sidebar/></div>
        <div className='basis-4/5 w-5/6' ><Highlights/></div>
        </div></> ,
    },
    {
      path: "/setting",
        element: <><Navbar/><div className='flex'>
          <div className='basis-1/5 w-1/6'><Sidebar/></div>
          <div className='basis-4/5 w-5/6' ><Setting/></div>
          </div></> ,
      },
  ]
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
