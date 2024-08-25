import React from 'react'
import DataTable from 'react-data-table-component'
import { useState } from 'react'

function Reports() {
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true
            },
            {
                name: 'Victim Name',
                selector: row => row.victim_name,
                sortable: true
                },
                {
                    name: 'User Name',
                    selector: row => row.user_name,
                    sortable: true,
                },
                {
                    name: 'Category',
                    selector: row => row.category,
                    sortable: true,
                },
                {
                    name: 'Comment',
                    selector: row => row.comment,
                },
                {
                    name: 'Status',
                    selector: row => row.status,
                },
                {
                    name: 'Created At',
                    selector: row => row.created_at,
                },
                {
                    name: 'Action',
                    selector: row => <div><button className='btn btn-primary'>{row.action}</button></div>,
                },
    ]
    const data = [
        {
            id: 1,
            victim_name: 'John Doe',
            user_name: 'John Doe',
            category: 'Category 1',
            comment: 'Comment 1',
            status: 'Status 1',
            created_at: '2020-01-01',
            },
            {
                id: 2,
                victim_name: 'Jane Doe',
                user_name: 'Jane Doe',
                category: 'Category 2',
                comment: 'Comment 2',
                status: 'Status 2',
                created_at: '2020-01-02',
                action: 'Resolved',
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
                    return row.victim_name.toLowerCase().includes(event.target.value.toLowerCase())
                })
                setRecords(newData)
            }
  return (
    <>
    <div className='w-11/12 border-slate-400 border my-3 p-2'>
      <h4>Report</h4>
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

export default Reports
