import React from 'react'
import './App.css'
import Navbar from './navbar.jsx'
import Sidebar from './Sidebar.jsx'
import Dashboard from './Dashboard.jsx'
import Vehicles from './Vehicles.jsx'
import Highlights from './Highlights.jsx'
import Emergency from './Emergency.jsx'
import Interests from './Interests.jsx'
import Reports from './Reports.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Setting from './Setting.jsx'
import Users from './Users.jsx'
import Rides from './Rides.jsx'
import VehicleVerification from './Vehicle_Verfication.jsx'
import Banner from './Banner.jsx'
import Transaction from './Transactions.jsx'
import Withdrawal from './Withdrawls.jsx'
// import Highlights from './Highlights.jsx'

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
      path: "/view",
      element: <><Navbar/><div className='flex'>
        <div className='basis-1/5'><Sidebar/></div>
        <div className='basis-4/5'><View/></div>
        </div></> ,
    },
    {
      path:'/vechile_details',
      element:<><Navbar/><div className='flex'>
        <div className='basis-1/5'><Sidebar/></div>
        <div className='basis-4/5'><VechileDetails/></div>
        </div></>

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
      path: "/notification",
      element: <><Navbar/><div className='flex'>
        <div className='basis-1/5 w-1/6'><Sidebar/></div>
        <div className='basis-4/5 w-5/6'><Notification/></div>
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
     path:"/User_Verification",
     element: <><Navbar/><div className='flex'>
        <div className='basis-1/5 w-1/6'><Sidebar/></div>
        <div className='basis-4/5 w-5/6' ><UserVerification/></div>
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
