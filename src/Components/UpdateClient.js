import React, { useState } from 'react'
import { updateclient } from '../Redux/ClientSlice'
import { useDispatch } from 'react-redux'

const UpdateClient = (ping,setping,data) => {
const dispatch=useDispatch()
    const [upclient, setupclient] = useState({
name:"" ,
address:"",
number :"",

    })
  return (
    <div>
      <div className='box-update' >
      <input placeholder='name' type='text' onChange={(e)=>setupclient({...upclient,name:e.target.value})}/>
      <input placeholder='address' type='text'  onChange={(e)=>setupclient({...upclient,address:e.target.value})}/>
      <input placeholder='number' type='number' onChange={(e)=>setupclient({...upclient,number:e.target.value})}/>
      <button onClick={()=>(dispatch(updateclient({id:data._id,upclient:upclient})),setping(!ping))}> Update </button>
      </div>

    </div>
  )
}

export default UpdateClient
