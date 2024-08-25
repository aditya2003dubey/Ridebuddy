import React,{useState} from 'react'
import DataTable from 'react-data-table-component';

function Rides(){
    const columns=[
        {
            name:"ID",
            selector:row=>row.id,
            sortable:true

        },
        {
           name:'User Name', 
           selector:row =>row.user_name,
           sortable:true

        },

        {
            name:"User Phone",
            selector:row=>row.phone,
            sortable:true

        },
        {
            name:"Vehicles Number",
            selector:row =>row.vehicle_number,
            sortable:true

        },
        {
            name:"PickUp Location",
            selector:row=>row.pick_up,
            sortable:true
        },
        {
            name:"Destination Location",
            selector:row=>row.destination_location,
            sortable:true
        },
        {
            name:"Scheduled Time",
            selector:row=>row.scheduled_time,
            sortable:true
        },
        {
            name:"Estimated End Time ",
            selector:row=>row.estimated_end_time,
            sortable:true
        },
        {
            name:"Passenger Count",
            selector:row=>row.passenger_count,
            sortable:true
        },
        {
            name:"Status",
            selector:row=>row.status,
            sortable:true
        },
        {
            name:"Created At",
            selector:row=>row.created_at,
            sortable:true
        },
        {
            name:"Action",
            selector:row=> <div className='btn btn-primary'> <button>view</button> </div>,
            sortable:true
        }
     ];
     const data=[
        {
            id:181,
           user_name:'Tushar',
           phone:981076202,
           vehicle_number :'Sbahanbaj',
            pick_up:'Merrut,Uttar Pradesh,India',
            destination_location:'Noida,UttarPradesh,India',
            scheduled_time:'May 30 ,03:25PM',
            estimated_end_time:'May 30 ,04:56PM',
            passenger_count:'0',
            status:'Cancelled',
            created_at:'May29,03:27PM'

        },
        {
            id:182,
            user_name:'Tushar',
            phone:9810762102,
            vehicle_number :'Sbahanbaj',
             pick_up:'Merrut,Uttar Pradesh,India',
             destination_location:'Noida,UttarPradesh,India',
             scheduled_time:'May 30,03:25PM',
             estimated_end_time:'May 30,04:56PM',
             passenger_count:'0',
             status:'Cancelled',
             created_at:'May29,03:27PM'



        },
        {
            id:183,
            user_name:'Tushar',
            phone:9810762102,
            vehicle_number :'Sbahanbaj',
             pick_up:'Merrut,Uttar Pradesh,India',
             destination_location:'Noida,UttarPradesh,India',
             scheduled_time:'May 30,03:25PM',
             estimated_end_time:'May 30,04:56PM',
             passenger_count:'0',
             status:'Cancelled',
             created_at:'May29,03:27PM'
        },
        {
            id:180,
            user_name:'Harry',
            phone:1234567890,
            vehicle_number :'UP15DV6530',
             pick_up:'Merrut,Uttar Pradesh,India',
             destination_location:'Sector 128,Noida,Uttar Pradesh,India',
             scheduled_time:'May 28,08:00PM',
             estimated_end_time:'May 28,09:58PM',
             passenger_count:'0',
             status:'Completed',
             created_at:'May 28,07:20 PM'
        },{
            id:179,
            user_name:'Harry',
            phone:1234567890,
            vehicle_number :'UP15DV6530',
             pick_up:'Merrut,Uttar Pradesh,India',
             destination_location:'IMS ENGINEERING COLLEGE',
             scheduled_time:'May 28,09:00PM',
             estimated_end_time:'May 28,10:18PM',
             passenger_count:'0',
             status:'Cancelled',
             created_at:'May28,07:08PM'
        }
     ];

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
            return row.user_name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
      }

      return (

        <>
            <div className='w-full border-slate-400 border my-3 p-1'>
                 <h4>Rides</h4>
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
export default Rides;