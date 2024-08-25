import React,{useState} from 'react'
import DataTable from 'react-data-table-component';

function UserVerification(){
  const columns=[
    {
      name:'Id',
      selector:row=>row.Id,
      sortable:true

    },
    {
      name:'Name',
      selector:row=>row.Name,
      sortable:true

    },
    {
      name:'Profile',
      selector:row=>row.profile,
      sortable:true

    },
    {
      name:'Gender',
      selector:row=>row.Gender,
      sortable:true

    },
    {
      name:'Phone',
      selector:row=>row.Phone,
      sortable:true

    },
    {
      name:'Email',
      selector:row=>row.Email,
      sortable:true

    },
    {
      name:'Age',
      selector:row=>row.Age,
      sortable:true


    },
   {
    name:'Location',
    selector:row=>row.Location,
    sortable:true

   },
   {
    name:'Aadhar Front',
    selector:row=>row.Aadhar_Front,
    sortable:true
   },
   {
    name:'Aadhar Back',
    selector:row=>row.Aadhar_Back,
    sortable:true
   }
  ];
  const data=[
    {
      Id:107,
      Name:'Archana',
      Profile :'',
      Gender:'Female',
      Phone:'9548067541',
      Email:'archana.kapil.ak.11@gmail.com',
      Age:'23',
      Location:'Merrut,Uttar Pradesh,India',
      Aadhar_Front:'',
      Aadhar_Back:'',
    }

  ]
  

  const [records,setRecords]=useState(data);
  function handleFilter(event){
    const newData=data.filter(row=>{
   return row.name.toLowerCase().includes(event.target.value.toLowerCase)
    })
    setRecords(newData)
  }
  return(
    <div className='container mt-5'>
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
export default UserVerification;
