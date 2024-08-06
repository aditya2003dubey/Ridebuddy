import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

function Emergency() {
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
            },
            {
                name: 'Ride',
                selector: row => row.ride,
                sortable: true,
            },
            {
                name: 'Ride Status',
                selector: row => row.ride_status,
            },
            {
                name: 'Passenger Name',
                selector: row => row.passenger_name,
                grow: 2
                },
                {
                    name: 'Passenger Phone',
                    selector: row => row.passenger_phone,
                },
                {
                    name: 'Last Location',
                    selector: row => row.last_location,
                    },
                    {
                        name: 'Owner Name',
                        selector: row => row.owner_name,
                    },
                    {
                        name: 'Owner Phone',
                        selector: row => row.owner_phone,
                    },
                    {
                        name: 'Vehicle Number',
                        selector: row => row.vehicle_number,
                    },
                    {
                        name: 'Alert At',
                        selector: row => row.alert_at,
                    }
                ]
    
    const data = [
        {
            id: 1,
            ride: 'Ride 1',
            ride_status: 'Ride Status 1',
            passenger_name: 'Passenger Name 1',
            passenger_phone: 'Passenger Phone 1',
            last_location: 'Last Location 1',
            owner_name: 'Owner Name 1',
            owner_phone: 'Owner Phone 1',
            vehicle_number: 'Vehicle Number 1',
            alert_at: 'Alert At 1',
            },
            {
                id: 2,
                ride: 'Ride 2',
                ride_status: 'Ride Status 2',
                passenger_name: 'Passenger Name 2',
                passenger_phone: 'Passenger Phone 2',
                last_location: 'Last Location 2',
                owner_name: 'Owner Name 2',
                owner_phone: 'Owner Phone 2',
                vehicle_number: 'Vehicle Number 2',
                alert_at: 'Alert At 2',
                },
            ]
      const tableHeaders = {
                headCells: {
                    style: {
                        fontWeight:"bold",
                        fontSize: "14px",
                        backgroundColor: "#674fa3",
                        display: "inline",
                    },
                }
            }

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

    // useEffect(()=>{
    //     const filteredData = data.filter((item) => {
    //         return item.title.toLowerCase().match(search.toLocaleLowerCase())
    //         });
    //         setSearch(filteredData)
    // },[search]);
  return (
    <>
    <div className='w-11/12 border-slate-400 border my-3 p-2'>
      <h4>Emergency</h4>
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

export default Emergency
