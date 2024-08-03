import React from 'react'
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className='bg-purple-800 flex w-64  h-screen  text-sm font-medium  fixed'>
      <ul className='pl-2'>
        <li className='m-0 p-2 '><Link className='text-gray-400 no-underline ' to={"/dashboard"}><i class="pr-4 bi bi-house-door-fill"></i> Dashboard</Link> </li>
        <li className='m-0 p-2 '><Link className='text-gray-400 no-underline ' to={"/"}><i class="pr-4 bi bi-person-fill"></i> Users </Link></li>
        <li className='m-0 p-2 '><Link className='text-gray-400 no-underline ' to={"/"}><i class="pr-4 bi bi-car-front-fill"></i> Vehicles</Link></li>
        <li className='m-0 p-2 '><Link className='text-gray-400 no-underline ' to={"/"}><i class="pr-4 bi bi-geo-alt-fill"></i> Rides</Link></li>
        <li className='m-0 p-2 '><Link className='text-gray-400 no-underline ' to={"/"}><i class="pr-4 bi bi-bank2"></i> Withdrawals</Link></li>
        <li className='m-0 p-2 '><Link className='text-gray-400 no-underline ' to={"/"}><i class="pr-4 bi bi-bank2"></i> Transaction</Link></li>
        <li className='m-0 p-2 '><Link className='text-gray-400 no-underline ' to={"/"}><i class="pr-4 bi bi-bell-fill"></i> Notification</Link></li>
        <li className='m-0 p-2 '><Link className='text-gray-400 no-underline ' to={"/"}><i class="pr-4 bi bi-patch-check-fill"></i> User Verifications</Link></li>
        <li className='m-0 p-2 '><Link className='text-gray-400 no-underline ' to={"/"}><i class="pr-4 bi bi-person-vcard-fill"></i> Vehicle Verifications</Link></li>
        <li className='m-0 p-2 '><Link className='text-gray-400 no-underline ' to={"/"}><i class="pr-4 bi bi-sliders2"></i> Banners</Link></li>
        <li className='m-0 p-2 '><Link className='text-gray-400 no-underline ' to={"/"}><i class="pr-4 bi bi-exclamation-triangle-fill"></i> Emergency</Link></li>
        <li className='m-0 p-2 '><Link className='text-gray-400 no-underline ' to={"/"}><i class="pr-4 bi bi-flag-fill"></i> Reports</Link></li>
        <li className='m-0 p-2 '><Link className='text-gray-400 no-underline ' to={"/"}><i class="pr-4 bi bi-heart-fill"></i> Interest</Link></li>
        <li className='m-0 p-2 '><Link className='text-gray-400 no-underline ' to={"/"}><i class="pr-4 bi bi-postcard-heart-fill"></i> Highlights</Link></li>
        <li className='m-0 p-2 '><Link className='text-gray-400 no-underline ' to={"/"}><i class="pr-4 bi bi-gear-fill"></i> Settings</Link></li>
      </ul> 
    </div> 
  ) 
} 

export default Sidebar
