import {useState} from 'react'
import React from 'react'
import DataTable from 'react-data-table-component';

function VehicleVerification(){
  const columns=[
    {
      name:'Id',
      selector:row=>row.id,
      sortable:true

    },
    {
      name:'Owner Name',
      selector:row=>row.owner_name,
      sortable:true

    },
    {
      name:'Owner Phone',
      selector:row=>row.owner_phone,
      sortable:true

    },
    {
      name:'Vechile Type',
      selector:row=>row.vechile_type,
      sortable:true

    },
    {
      name:'Vechile Number',
      selector:row=>row.vehicle_number,
      sortable:true

    },
    {
      name:'Vechile Photo',
      selector:row=> <div><img src="{row.vehicle_photo}" alt="img" /></div> ,
      sortable:true

    },
    {
      name:'Registration Certificate',
      selector:row=>row.registration_certificate,
      sortable:true


    },
   {
    name:'Driving License',
    selector:row=>row.driving_license,
    sortable:true

   },
   {
    name:'Verification Status',
    selector:row=>(
      <span 
      className={`px-2 py-1 rounded text-white text-sm ${
        row.verification_status==='Verified'?'bg-green-500':'bg-red-500'
      }`}
      >
        {row.verification_status}
      </span>

    ),
    sortable:true
   },
   {
    name:'Status Remark',
    selector:row=>row.status_remark,
    sortable:true
   },
   {
    name:'Created At',
    selector:row=>row.created_at,
    sortable:true
   },
   {
    name:'Action ',
    selector:row=> <div className='btn btn-primary'><button>view</button></div> ,
    sortable:true,
   }
  ];
  const data =[
    {
      "id": 1,
      "owner_name": "Ramesh",
      "owner_phone": "1234567890",
      "vehicle_type": "car",
      "vehicle_number": "KA-01-1234",
      "vehicle_photo": "https://via.placeholder.com/150",
      "registration_certificate": "https://via.placeholder.com/150",
      "driving_license": "https://via.placeholder.com/150",
      "verification_status": "Verified",
      "status_remark": "remark",
      "created_at": "2022-01-01 00:00:00"
    }
  ]
  const customStyles = {
    headCells: {
        style: {
            fontSize: 16,
            backgroundColor: "#674fa3",
            display: "inline",
        },
    }
}
  

  const [records,setRecords]=useState(data);
  function handleFilter(event){
    const newData=data.filter(row=>{
   return row.owner_name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }
  return(
    <>
    <div className='w-full md:w-10/12 border-slate-400 border my-3 p-1'>
                 <h4>Vehicle Verification</h4>
            </div>
     <div className='w-12/12 border-slate-400 border'>
      <DataTable
      customStyles={customStyles}
      columns={columns}
      data={records}
      fixedHeader
      pagination
    selectableRowsHighlight
      highlightOnHover
      subHeader
      subHeaderComponent={
        <input type="text" className='w-25 form-control' placeholder='Search...' onChange={handleFilter}/>
      }
      ></DataTable>
    </div>
    </>
  )
}
export default VehicleVerification;