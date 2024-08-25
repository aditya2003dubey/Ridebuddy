import React from 'react'
import DataTable from 'react-data-table-component'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'



function Users() {
    const navigate=useNavigate()
    function View(user){
        navigate("/View",{state:{user}});
    }
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true
            },
            {
                name: 'Name',
                selector: row => row.name,
                sortable: true
                },
                {
                    name: 'Gender',
                    selector: row => row.gender,
                    sortable: true,
                },
                {
                    name: 'Phone',
                    selector: row => row.phone,
                    sortable: true,
                },
                {
                    name: 'Email',
                    selector: row => row.email,
                },
                {
                    name: 'Location',
                    selector: row => row.location,
                },
                {
                    name: 'Wallet Balance',
                    selector: row => row.wallet_balance,
                },
                {
                    name: 'Created At',
                    selector: row => row.created_at,
                },
                {
                name: 'verification Status',
                selector: row =>  (
                    <span
                      className={`px-2 py-1 rounded text-white text-sm ${
                        row.verification_status === 'verified' ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    >
                      {row.verification_status}
                    </span>
                  ),
            },
                {
                    name: 'User Status',
                    selector: row => (
                        <span className={`px-2 py-1  text-black text-sm ${
                            row.user_status==='blocked'?'bg-red-500':
                            row.user_status==='active'?'bg-green-500':
                            'bg-yellow-400'

                        }`}
                        
                        >
                            {row.user_status}
                        </span>
                    ),
                },
                {
                    name: 'Action',
                    selector: row => <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
                        <button className='px-1 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition-all duration-200' onClick={()=>handleBlock(row.id)}>Block</button>
            <button className='px-1 py-1 bg-purple-500 text-white rounded hover:bg-purple-700 transition-all duration-200' onClick={()=>View (row)}>View</button>
                    </div>,
                },
    ]
    const data = [
        {
            id: 211,
            name: 'John Doe',
            gender: 'Male',
            phone: '123456789',
            email: 'john@example.com',
            location: 'New York',
            wallet_balance: 1000,
            created_at: '2022-01-01',
            verification_status: 'verified',
            user_status: 'active',
        },
        {
            id: 2,
            name: 'Jane Doe',
            gender: 'Female',
            phone: '987654321',
            email: 'jane@example.com',
            location: 'Delhi',
            wallet_balance: 500,
            created_at: '2022-01-02',
            verification_status: 'unverified',
            user_status: 'inactive',
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

    const[records,setRecords] = useState(data);

    // function handleBlock(id){
    //     alert('User status changed successfully!')
    // }
    function handleBlock(id){
        const updatedRecords=records.map(row=>{
            if(row.id==id){
                return{...row,user_status:'blocked'};
            }
            return row;
        });
        setRecords(updatedRecords);
        alert('user status changed to block!');

    }

    function handleFilter(event){
        const newData = data.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }
  return (
    <>
    <div className='w-12/12 border-slate-400 border my-3 p-2'>
      <h4>Users</h4>
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
        <input type="text" className='w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#674fa3] focus:border-transparent' placeholder='Search...' onChange={handleFilter}/>
      }
      ></DataTable>
    </div>
    {/* <ToastContainer/> */}
    </>
  )
}

export default Users