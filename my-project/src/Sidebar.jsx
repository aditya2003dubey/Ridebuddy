import React from 'react'

function Sidebar() {
  return (
    <div className='bg-purple-800 flex w-60 h-screen text-gray-400 text-sm font-medium  fixed'>
      <ul>
        <li className='m-0 p-2'><i class="pr-4 bi bi-house-door-fill"></i> Dashboard</li>
        <li className='m-0 p-2'><i class="pr-4 bi bi-person-fill"></i> Users</li>
        <li className='m-0 p-2'><i class="pr-4 bi bi-car-front-fill"></i> Vehicles</li>
        <li className='m-0 p-2'><i class="pr-4 bi bi-geo-alt-fill"></i> Rides</li>
        <li className='m-0 p-2'><i class="pr-4 bi bi-bank2"></i> Withdrawals</li>
        <li className='m-0 p-2'><i class="pr-4 bi bi-bank2"></i> Transaction</li>
        <li className='m-0 p-2'><i class="pr-4 bi bi-bell-fill"></i> Notification</li>
        <li className='m-0 p-2'><i class="pr-4 bi bi-patch-check-fill"></i> User Verifications</li>
        <li className='m-0 p-2'><i class="pr-4 bi bi-person-vcard-fill"></i> Vehicle Verifications</li>
        <li className='m-0 p-2'><i class="pr-4 bi bi-sliders2"></i> Banners</li>
        <li className='m-0 p-2'><i class="pr-4 bi bi-exclamation-triangle-fill"></i> Emergency</li>
        <li className='m-0 p-2'><i class="pr-4 bi bi-flag-fill"></i> Reports</li>
        <li className='m-0 p-2'><i class="pr-4 bi bi-heart-fill"></i> Interest</li>
        <li className='m-0 p-2'><i class="pr-4 bi bi-postcard-heart-fill"></i> Highlights</li>
        <li className='m-0 p-2'><i class="pr-4 bi bi-gear-fill"></i> Settings</li>
      </ul> 
    </div> 
  ) 
} 

export default Sidebar
