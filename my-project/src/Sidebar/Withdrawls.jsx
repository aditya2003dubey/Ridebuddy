import React, { useState } from 'react' ;
import DataTable from 'react-data-table-component';

function Withdrawal(){
const columns=[
  {
    name:"Id",
    selector:row=>row.Id,
    sortable:true
  },

  {
    name:'Name',
    selector:row =>row.name,
    sortable:true
  },
  {
    name:"User Phone",
    selector:row=>row.User,
    sortable:true

  },
  {
    name:"Amount",
    selector:row=>row.Amount,
    sortable:true
  },
  {
    name:"Method",
    selector:row=>row.Method,
    sortable:true
  },
  {
    name:"Account",
    selector:row=>row.Account,
    sortable:true
  },
  {
    name:"Status",
    selector:row=>row.Status,
    sortable:true
  },
  {
    name:"Status Message",
    selector:row=>row.Status,
    sortable:true
  }
];
const data=[
  {
   Id:'4',
    name:'Aryan',
    User:'4111111111',
    Amount:'2000',
    Method:'Bank',
    Account:'Account Name:test Account Number:test IFSC Code:test',
    Status :'Your Transaction is pending and proceeding in 3 days'
  },
  {
    Id:'3',
    name:'Aryan',
    User:'4111111111',
    Amount:'5000',
    Method:'Bank',
    Account:'Account Name:test Account Number:test IFSC Code:test',
    Status :'Your Transaction is pending and proceeding in 3 days'
  },
  {
    Id:'6',
    name:'Sparsh',
    User:'9058531710',
    Amount:'100',
    Method:'Bank',
    Account:'Account Name:Sparsh Account Number:35679 IFSC Code:barb0gangan',
    Status :'Your Transaction is pending and proceeding in 3 days'
  },
  {
    Id:'5',
    name:'Mohit',
    User:'7037382525',
    Amount:'1000',
    Method:'Bank',
    Account:'Account Name:MCR Account Number:8888 IFSC Code:ywwywh7727',
    Status :'Your Transaction is pending and proceeding in 3 days'
  },
  {
    Id:'2',
    name:'Aryan',
    User:'4111111111',
    Amount:'20',
    Method:'Bank',
    Account:'Account Name:test Account Number:test IFSC Code:test',
    Status :'Your Transaction is pending and proceeding in 3 days'
  }
]
const [records,setRecords]=useState(data);
function handleFilter(event){
  const newData=data.filter(row=>{
    return row.name.toLowerCase().includes(event.target.value.toLowerCase())
  })
  setRecords(newData)
}
  return (

    <div className='container mt-5'>
      <div><input type="text" onChange={handleFilter}/></div>
<DataTable
columns={columns}
data={records}
// selectableRows
fixedHeader
pagination

></DataTable>
    </div>
  )
}
export default Withdrawal;