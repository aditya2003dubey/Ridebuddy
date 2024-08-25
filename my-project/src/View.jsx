import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom';

function View(){
    const location =useLocation();
    const navigate =useNavigate();
    const {user}=location.state||{};
    if(!user){
        return <div>No uset selected</div>;
    }
    return(
        <div className='bg-white shadow-md rounded-lg p-6 w-full md:w-2/3 lg:w-1/2 mx-auto'>
            <h2 className='text-lg font-semibold mb-4'>User Details</h2> 

            <div className='flex-space-x-4' >

                <div className='flex-1'>
                    <label className='block text-sm font-medium text-gray-700 '>NAme</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Aishwarya" />

                </div>
                <div className='flex-1'>
                <label className='block text-sm font-medium text-gray-700'>Phone</label>
                <input type='text' className='mt-1 w-6/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' placeholder='98765433210'/>
            </div>

            </div>
            

            <div>
            <label className='block text-sm font-medium text-gray-700'>Email</label>
            <input type='text' className='mt-1 block w-full rounded-md borderg-ray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ' placeholder='user@example.com'/>
            </div>
            <div >
                <label className='block-text-sm font-medium text-gray-700'>Location</label>
                <input type='text' className='mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' placeholder='Location'/>


            </div>
            <div>
                <label className='block-text-sm font-medium text-gray-700'>Gender</label>
                <select className='mt-1 block w-full border:gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>

                </select>
            </div>
            <div >
                <label className='block text-sm font-medium text-gray-700'>
                    Age
                </label>
                <input type='text' className='mt-1 block w-full rounded-md focus:border-indigo-500 sm:text-sm ' placeholder='Age'/>
                
            </div>
            <label className='block text-sm font-medium text-gray-700'> Box </label>
            <input type='text' className='mt-1 block w-full min-h-24 rounded-md focus:border-indigo-500 sm:text-sm ' placeholder=''/>
            <div>
                <label className='block text-sm font-medium text-gray-700'>Wallet Balence</label>
                <input type ='text' className='mt-1 block w-full rounded-md focus:border-indigo-500 sm:text-sm ' placeholder='0'/>
            </div>
            <div>
                <label className='block text-sm font-medium text-gray-700'>Rewards Point</label>
                <input type='text' className='mt-1 block w-full rounded -md focus:border-indigo-500 sm:text-sm' placeholder='0'/>
            </div>
            <div>
                <label className='block-text-sm font-medium text-gray-700 '>Carbon total </label>
                <input type='text' className='mt-1 block w-full rounded-md focus:border-indigo-500 sm:text-sm' placeholder='0'/>
            </div>
            <div>
                <label className='block-text-sm font-medium text-gray-700'>Rating</label>
                <input className='mt-1 block w-full rounded-md focus:border-indigo-500 sm:text-sm'placeholder='0'/>
            </div>

            <div>
                <label className='block text-sm font-medium text-gray-700'>Interest</label>
                <button className='bg-gray-400 p-1 text-white rounded-md mt-1 shadow-md hover:bg-indigo-500'>
                    Introvert
                </button>
                <button className='mx-2 bg-gray-400 p-1 text-white rounded-md mt-1 shadow-md hover:bg-indigo-500'>
                    Extrovert
                </button>
                <button className='mx-1 bg-gray-400 p-1 text-white rounded-md mt-1 shadow-md hover:bg-indigo-500'>
                    Driving
                </button>
                <button className='mx-1 bg-gray-400 p-1 text-white rounded-md mt-1 hover:bg-indigo-500'>
                 Food
                </button>
                <button className='mx-1 bg-gray-400 p-1 text-white rounded-md mt-1 hover:bg-indigo-500'>
                    Party
                </button>

            </div>
            <div>
               <label classname='block text-sm font-medium text-gray' >Photos</label> 
               <div className='w-26 h-14'>
               <img src='' alt='Authentication'/>

               </div>
            </div>
            <div>
                Selfie Video
            </div>

            <div>

            </div>


            {/* <div className='p-2'>
            <button className="bg-indigo-600 p-2 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700">Unlock</button>

            </div> */}
            <div></div>
           
            
            <button
                className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700"
                onClick={() => navigate(-1)}
            >
                Back to Users
            </button>
        </div>
        
    )
     
}
export default View