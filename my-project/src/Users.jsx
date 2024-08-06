import React from 'react'
import DataTable from 'react-data-table-component'
import { useState } from 'react'

function Users() {
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
                selector: row => row.verification_status,
                },
                {
                    name: 'User Status',
                    selector: row => row.user_status,
                },
                {
                    name: 'Action',
                    selector: row => <div><button className='btn btn-danger'>Block</button><button className='btn btn-purple'></button></div>,
                },
    ]
    const data = [
        {
            id: 1,
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

    function handleFilter(event){
        const newData = data.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }
  return (
    <>
    <div className='w-11/12 border-slate-400 border my-3 p-2'>
      <h4>Users</h4>
    </div>
    <div className='w-11/12 border-slate-400 border'>
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

export default Users
