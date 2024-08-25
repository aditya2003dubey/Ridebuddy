import React from 'react'
import DataTable from 'react-data-table-component'
import { useState } from 'react'

function Interests() {
    const columns = [
        {
            name: 'S.No',
            selector: row => row.sno,
            sortable: true,
        },
        {
            name: 'Interest',
            selector: row => row.interest,
            sortable: true,
        },
        {
            name: 'Created At',
            selector: row => row.createdAt,
            sortable: true,
        },
        {
            name: 'Action',
            selector: row => <div className='flex '><button className='btn btn-primary mr-1'>Edit</button><button className='btn btn-danger'>Delete</button></div>,
        },
    ]
    const data = [
        { sno: 1, interest: 'Reading', createdAt: '2020-01-28'},
        { sno: 2, interest: 'Writing', createdAt: '2020-01-12'},
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
            return row.interest.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }
  return (
    <>
    <div className='w-11/12 border-slate-400 border my-3 p-2'>
      <h4>Interest</h4>
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

export default Interests
