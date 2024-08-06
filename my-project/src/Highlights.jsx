import React from 'react'
import DataTable from 'react-data-table-component'
import { useState } from 'react'

function Highlights() {
    const columns = [
        {
            name: 'S.No',
            selector: row => row.sno,
            sortable: true,
        },
        {
            name: 'Highlight',
            selector: row => row.highlight,
            sortable: true,
            },
            {
                name: 'Position',
                selector: row => row.postion,
                sortable: true,
            },
            {
                name: 'Status',
                selector: row => row.status,
            },
            {
                name: 'Created At',
                selector: row => row.createdAt,

            },
            {
                name: 'Action',
                selector: row => <div><button className="btn btn-primary">Edit</button> <button className='btn btn-danger'>Delete</button></div>
            },
        ]
        const data = [
            {
                sno: 1,
                highlight: 'Highlight 1',
                postion: 'Position 1',
                status: 'Active',
                createdAt: '2020-01-01',
                },
                {
                    sno: 2,
                    highlight: 'Highlight 2',
                    postion: 'Position 2',
                    status: 'Inactive',
                    createdAt: '2020-01-02',
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
                        return row.passenger_name.toLowerCase().includes(event.target.value.toLowerCase())
                    })
                    setRecords(newData)
                }
  return (
    <>
    <div className='w-11/12 border-slate-400 border my-3 p-2'>
      <h4>Highlights</h4>
    </div>
    <div className='w-11/12 border-slate-400 border'>
    <DataTable
    customStyles={customStyles}
      columns ={columns}
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

export default Highlights
