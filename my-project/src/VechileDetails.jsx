import React from "react";
import { useLocation, useNavigate} from 'react-router-dom'


function VechileDetails(){
    const navigate =useNavigate();
   const location = useLocation();
   const {vechile}=location.state||{};

   return (
    <>
    <div className='w-full border-slate-400 border my-3 p-1'>
      <h4>Vehicle Details</h4>
    </div>
    <div className='flex m-1 '>
    <div className='basis-1/2 m-1'>
      <div className='mt-2 text-black'> 
    <label htmlFor="platform_fee">Platform Fee</label>
    </div>

    <div className="mt-2 text-black">
      <label htmlFor="owner_name">Owner name</label>

    </div>
    </div>
    </div>
    </>
    

  )
}
export default VechileDetails