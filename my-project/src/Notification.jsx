import React,{useState} from 'react'
import DataTable from 'react-data-table-component';

function Notification(){
  const columns=[
    {
      name:'Id',
      selector:row=>row.Id,
      sortable:true

    },
    {
      name:'Title',
      selector:row=>row.Title,
      sortable:true

    },
    {
      name:'Message',
      selector:row=>row.Message,
      sortable:true

    },
    {
      name:'Created At',
      selector:row=>row.Created_At,
      sortable:true

    }
  ];
  const data=[
    {
      // Id:107,
      UserName:'Tushar',
      UserPhone :'9810762102',
      Amount:'500',
      Gateway:'RAZORPAY',
      Txn:'TXN171644244173',
      GatewayTxnId:'order_ODpUiSwyjc33AL',
      Status:"Success",
      Created:'May 23,11:34 AM'
    },
    

  ]
  

  const [records,setRecords]=useState(data);
  function handleFilter(event){
    const newData=data.filter(row=>{
   return row.name.toLowerCase().includes(event.target.value.toLowerCase)
    })
    setRecords(newData)
  }
  return(
    <div className='container mt-10'>
      <div className='text-end'><input type='text' onChange={handleFilter}/></div>
      <DataTable
      columns={columns}
      data={records}
      fixedHeader
      pagination
      ></DataTable>

    </div>
  )
}
export default Notification;