import React from 'react'
import DataTable from 'react-data-table-component'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'


function Vehicles() {
  const navigate= useNavigate();
  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Owner Name',
      selector: row => row.owner_name,
      sortable: true,
    },
    {
      name: 'Owner Phone',
      selector: row => row.owner_phone,
    },
    {
      name: 'Vehicle Type',
      selector: row => row.vehicle_type,
    },
    {
      name: 'Vehicle Number',
      selector: row => row.vehicle_number,
    },
    {
      name: 'Vehicle Photo',
      selector: row => <img src="" alt="h" />,

    },
    {
      name: 'Verification Status',
      selector: row => row.verification_status,
    },
    {
      name: 'Status Remark',
      selector: row => row.status_remark,
    },
    {
      name: 'Created At',
      selector: row => row.created_at,
    },
    {
      name: 'Action',
      selector: row => <div >
   <button className='px-1 py-1 bg-blue-500 text-white rounded hover:bg-blue-500 transition-all duration-200'onClick={() => navigate("/vechile_details", { state: row })}

        >View</button>
      </div>
    }
  ];
  const data = [
    {
      id: 1,
      owner_name: 'John Doe',
      owner_phone: '1234567890',
      vehicle_type: 'Car',
      vehicle_number: 'ABC123',
      vehicle_photo: 'https://example.com/photo1.jpg',
      verification_status: 'Verified',
      status_remark: '',
      created_at: '2022-01-01 12:00:00',
      },
      {
        ID: 2,
        owner_name: 'Jane Doe',
        owner_phone: '9876543210',
        vehicle_type: 'Truck',
        vehicle_number: 'DEF456',    
        vehicle_photo: 'https://example.com/photo2.jpg',
        verification_status: 'Pending',
        status_remark: 'Waiting for verification',
        created_at: '2022-01-02 13:00:00',
        },
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

    const[records,setRecords] = useState(data);

    function handleFilter(event){
        const newData = data.filter(row => {
            return row.owner_name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }
  return (
    <>
    <div className='w-full border-slate-400 border my-3 p-1'>
      <h4>Vehicles</h4>
    </div>
    <div className='w-full border-slate-400 border'>
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

export default Vehicles
