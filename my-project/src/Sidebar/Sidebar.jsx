import React from 'react'
import { NavLink } from "react-router-dom";

function Sidebar() {
  const navLinkStyle = "text-gray-400 no-underline"
  const listStyle = "m-0 p-2 w-full hover:border-white hover:border-2 hover:text-white"
  return (
    <div className='bg-[#674fa3] flex w-48 h-full text-sm font-medium  fixed'>
      <ul className='pl-2'>
        <NavLink className={navLinkStyle} to={"/dashboard"}><li className={listStyle}><i class="pr-4 bi bi-house-door-fill"></i> Dashboard</li></NavLink> 
        <NavLink className={navLinkStyle} to={"/users"}><li className={listStyle}><i className="pr-4 bi bi-person-fill"></i> Users </li></NavLink>
        <NavLink className={navLinkStyle} to={"/vehicles"}><li className={listStyle}><i className="pr-4 bi bi-car-front-fill"></i> Vehicles</li></NavLink>
        <NavLink className={navLinkStyle} to={"/rides"}><li className={listStyle}><i className="pr-4 bi bi-geo-alt-fill"></i> Rides</li></NavLink>
        <NavLink className={navLinkStyle} to={"/withdrawls"}><li className={listStyle}><i className="pr-4 bi bi-bank2"></i> Withdrawals</li></NavLink>
        <NavLink className={navLinkStyle} to={"/transactions"}><li className={listStyle}><i className="pr-4 bi bi-bank2"></i> Transaction</li></NavLink>
        <NavLink className={navLinkStyle} to={"/notification"}><li className={listStyle}><i className="pr-4 bi bi-bell-fill"></i> Notification</li></NavLink>
        <NavLink className={navLinkStyle} to={"/user_verification"}><li className={listStyle}><i className="pr-4 bi bi-patch-check-fill"></i> User Verifications</li></NavLink>
        <NavLink className={navLinkStyle} to={"/vehicle_verification"}><li className={listStyle}><i className="pr-4 bi bi-person-vcard-fill"></i> Vehicle Verifications</li></NavLink>
        <NavLink className={navLinkStyle} to={"/banners"}><li className={listStyle}><i className="pr-4 bi bi-sliders2"></i> Banners</li></NavLink>
        <NavLink className={navLinkStyle} to={"/emergency"}><li className={listStyle}><i className="pr-4 bi bi-exclamation-triangle-fill"></i> Emergency</li></NavLink>
        <NavLink className={navLinkStyle} to={"/reports"}><li className={listStyle}><i className="pr-4 bi bi-flag-fill"></i> Reports</li></NavLink>
        <NavLink className={navLinkStyle} to={"/interests"}><li className={listStyle}><i className="pr-4 bi bi-heart-fill"></i> Interest</li></NavLink>
        <NavLink className={navLinkStyle} to={"/highlights"}><li className={listStyle}><i className="pr-4 bi bi-postcard-heart-fill"></i> Highlights</li></NavLink>
        <NavLink className={navLinkStyle} to={"/setting"}><li className={listStyle}><i className="pr-4 bi bi-gear-fill"></i> Settings</li></NavLink>
      </ul> 
    </div> 
  ) 
} 

export default Sidebar
