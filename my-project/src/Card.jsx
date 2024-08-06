import React from 'react'

function Card({icon,para,data}) {
  return (
    <div className='w-64 m-2 rounded-md flex p-2 h-20 bg-slate-200 hover:border-[#674fa3] hover:border-2'>
    <div className='text-4xl flex items-center text-[#664fa3]'>
      <i className={icon} ></i>
      </div>
      <div className='ml-3 mt-1'>
        <p className='mb-0'>{para}</p>
        <h6 className='mb-0'>{data}</h6>
        </div>
    
    </div>
  )
}

export default Card
