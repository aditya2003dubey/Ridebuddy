import React from 'react'
import { useForm} from "react-hook-form"

function Setting() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    
      console.log(watch("example")) // watch input value by passing the name of it
    
    
  return (
    <div>
      <div className='w-11/12 border-slate-400 border my-2 p-2'>
      <h4>Setting</h4>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className='border-slate-400 border w-11/12  text-stone-950 font-medium' >
      <div className='flex m-1 '>
      <div className='basis-1/2 m-1'>
        <div className='mt-2 text-black'> 
      <label htmlFor="platform_fee">Platform Fee</label>
      <input className='form-input block w-full h-8 rounded-sm' type='number' id='platform_fee'  defaultValue={10} {...register("platform_fee")} />
      </div>

        <div className='mt-2'>
      <label htmlFor="max_fare_multiplier">Max Fare Multiplier</label>
      <input id='max_fare_multiplier h-8 ' className='block w-full h-8 rounded-sm' defaultValue={2.8} {...register("max_fare_multiplier")} />
      </div>

      <div className='mt-2'>
      <label htmlFor="razorpay">Razorpay</label>
      <select {...register("razorpay")} id='razorpay' className='block w-full h-9 rounded-sm'>
        <option value="enable">Enabled</option>
        <option value="disable">Disable</option>
        </select>
      </div>

      <div className='mt-2'>
      <label htmlFor="phonepe_salt">Phonepe Salt</label>
      <input className='block w-full h-8 rounded-sm' id='phonepe_salt'  defaultValue="73182gd-7361287gd-237tdgu" {...register("phonepe_salt")} />
      </div>

      <div className='mt-2'>
      <label htmlFor="razorpay_secret">Razorpay Secret</label>
      <input className='block w-full h-8 rounded-sm' id='razorpay_secret'  defaultValue="hiueh84789yhehdj" {...register("razorpay_secret")} />
      </div>

        <div className='mt-2'>
      <label htmlFor="pickup_distance_limit">Pickup Distance Limit</label>
      <input className='block w-full h-8 rounded-sm' id='pickup_distance_limit'  defaultValue={20} {...register("pickup_distance_limit")} />
      </div>
        </div>
       
       <div className='basis-1/2 m-1'>

        <div className='mt-2'>
       <label htmlFor="min_fare_multiplier">Min Fare Multiplier</label>
      <input className='block w-full h-8 rounded-sm' id='min_fare_multiplier'  defaultValue={2.2} {...register("min_fare_multiplier")} />
        </div>

        <div className='mt-2'>
      <label htmlFor="phone_pe">Phone Pe</label>
       <select {...register("phone_pe")} id='phone_pe' className='block w-full h-9 rounded-sm'>
        <option value="enable" className='h-8'>Enabled</option >
        <option value="disable" className='h-8'>Disable</option>
        </select>
        </div>
      
      <div className='mt-2'>
      <label htmlFor="phonpe_merchant_id">Phonepe Merchant ID</label>
      <input className='block w-full h-8 rounded-sm' id='phonpe_merchant_id'  defaultValue="FYRYUTUYGYF7654" {...register("phonpe_merchant_id")} />
      </div>

      <div className='mt-2'>
      <label htmlFor="razorpay_key">Razorpay Key</label>
      <input className='block w-full h-8 rounded-sm' id='razorpay_key'  defaultValue="ujhbh-hjgjgj-yfttcgvgv7t5" {...register("razorpay_key")} />
      </div>

      <div className='mt-2'>
      <label htmlFor="fcm_auth">FCM Auth</label>
      <input className='block w-full h-8 rounded-sm' id='fcm_auth'  defaultValue="bjhbhjbjbjb_kuryfydrtvfyjgyu_757ftyf" {...register("fcm_auth")} />
      </div>

      <div className='mt-2'>
      <label htmlFor="destination_distance_limit">Destination Distance Limit</label>
      <input className='block w-full h-8 rounded-sm' id='destination_distance_limit'  defaultValue={20} {...register("destination_distance_limit")} />      
      {errors.exampleRequired && <span>This field is required</span>}
      </div>

      </div>
      </div>
      <div className='flex justify-center mb-1 '>
      <input type="submit" value="Save" className='w-60 bg-[#664fa3] h-8 text-white rounded-md' />
      </div>
    </form>
    </div>
  )
}

export default Setting
