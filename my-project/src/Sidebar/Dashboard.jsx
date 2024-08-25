import React from 'react'
import Card from '../Components/Card.jsx'

function Dashboard() {
  return (
    <div className='flex flex-wrap ml-0 basis-4/5'>
      <Card icon ="bi bi-person-fill" para = "Total Users" data = "105"/>
      <Card icon = "bi bi-car-front-fill" para = "Total Vehicles" data = "25"/>
      <Card icon = "bi bi-taxi-front-fill" para = "Total Active Rides" data = "21"/>
      <Card icon = "bi bi-person-plus-fill" para = "New Users" data = "0"/>
      <Card icon = "bi bi-taxi-front-fill" para = "Rides Today" data = "0"/>
      <Card icon = "bi bi-car-front-fill" para = "Vehicles Today" data = "0"/>
      <Card icon = "bi bi-currency-rupee" para = "Total Ride Amount" data = "Rs 531"/>
      <Card icon = "bi bi-cash" para = "Platform Fee Total" data = "Rs 0"/>
      <Card icon = "bi bi-patch-plus-fill" para = "Discount Total" data = "Rs 0"/>
    </div>
  )
}

export default Dashboard
