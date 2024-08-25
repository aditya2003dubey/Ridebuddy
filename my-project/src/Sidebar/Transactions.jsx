import React,{useState} from 'react'
import DataTable from 'react-data-table-component';

function Transaction(){
  const columns=[
    {
      name:'Id',
      selector:row=>row.Id,
      sortable:true

    },
    {
      name:'UserName',
      selector:row=>row.UserName,
      sortable:true

    },
    {
      name:'User Phone',
      selector:row=>row.UserPhone,
      sortable:true

    },
    {
      name:'Amount',
      selector:row=>row.Amount,
      sortable:true

    },
    {
      name:'Gateway',
      selector:row=>row.Gateway,
      sortable:true

    },
    {
      name:'Txn ID',
      selector:row=>row.Txn,
      sortable:true

    },
    {
      name:'GatewayTxnId',
      selector:row=>row.GatewayTxnId,
      sortable:true


    },
   {
    name:'Status',
    selector:row=>row.Status,
    sortable:true

   },
   {
    name:'Created At',
    selector:row=>row.Created,
    sortable:true
   }
  ];
  const data=[
    {
      Id:107,
      UserName:'Tushar',
      UserPhone :'9810762102',
      Amount:'500',
      Gateway:'RAZORPAY',
      Txn:'TXN171644244173',
      GatewayTxnId:'order_ODpUiSwyjc33AL',
      Status:"Success",
      Created:'May 23,11:34 AM'
    },
    {
      Id:130,
      UserName:'new',
      UserPhone :'1122335544',
      Amount:'5000',
      Gateway:'PHONEPAY',
      Txn:'TXN1718654668097',
      GatewayTxnId:'T2406180134287546529499',
      Status:"Success",
      Created:'June 18,1:34 AM'
    },
    {
      Id:129,
      UserName:'new',
      UserPhone :'1122335544',
      Amount:'500',
      Gateway:'RAZORPAY',
      Txn:'TXN17185653263595',
      GatewayTxnId:'Order_ONXrKwNnRfRmyv',
      Status:"Success",
      Created:'June 17,12:49 AM'
    },
    {
      Id:128,
      UserName:'new',
      UserPhone :'1122335544',
      Amount:'200',
      Gateway:'RAZORPAY',
      Txn:'TXN171865263595',
      GatewayTxnId:'Order_ONXmRkL5BnRW6t',
      Status:"Success",
      Created:'June 17,12:44 AM'
    },
    {
      Id:127,
      UserName:'Tushar',
      UserPhone :'9810762102',
      Amount:'500',
      Gateway:'RAZORPAY',
      Txn:'TXN1718563602443',
      GatewayTxnId:'order_ONXJBnls83iqh6',
      Status:"Success",
      Created:'June 18,1:34 AM'
    },
    {
      Id:126,
      UserName:'smarty',
      UserPhone :'1122334455',
      Amount:'100',
      Gateway:'PHONEPAY',
      Txn:'TXN1718563602443',
      GatewayTxnId:'order_ONXJBnls83iqh6',
      Status:"Success",
      Created:'June 18,1:34 AM'
    },
    {
      Id:125,
      UserName:'Smarty',
      UserPhone :'1122334455',
      Amount:'100',
      Gateway:'RAZORPAY',
      Txn:'TXN1718563463012',
      GatewayTxnId:'order_ONXGjah8W9YGqr',
      Status:"PENDING",
      Created:'June 17,12:14 PM'
    },{
      Id:124,
      UserName:'Smarty',
      UserPhone :'1122334455',
      Amount:'5000',
      Gateway:'PHONEPAY',
      Txn:'TXN1718654668097',
      GatewayTxnId:'T2406180134287546529499',
      Status:"Success",
      Created:'June 17,12:12 PM'
    },{
      Id:123,
      UserName:'Smarty',
      UserPhone :'1122334455',
      Amount:'100',
      Gateway:'RAZORPAY',
      Txn:'TXN1718563328678',
      GatewayTxnId:'order_ONXENumSCrn3Ye',
      Status:"Pending",
      Created:'June 17,12:12 PM'
    },
    {
      Id:122,
      UserName:'Aryan',
      UserPhone :'4111111111',
      Amount:'50',
      Gateway:'PHONEPAY',
      Txn:'TXN1718326864487',
      GatewayTxnId:'T2406180134287546529499',
      Status:"Success",
      Created:'June 18,1:34 AM'
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
    <>
    <div className='w-full border-slate-400 border my-3 p-1'>
      <h4>Transaction</h4>
       </div>
       <div className=''w-full border-slate-400 border>
      {/* <div className='text-end'><input type='text' onChange={handleFilter}/></div> */}
      <DataTable
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
export default Transaction;