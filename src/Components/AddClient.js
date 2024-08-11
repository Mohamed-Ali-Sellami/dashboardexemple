import React, { useState } from 'react'
import { addclient } from '../Redux/ClientSlice'
import { useDispatch } from 'react-redux'

const AddClient = ({setshowSecond,ping,setping}) => {
    const [newclient, setnewclient] = useState({

        name:"" ,
        address: "",
        number :"",
      }
      )
      const dispatch=useDispatch()
  return (
    <div className='box-add-client'>
       <input placeholder='Name & Last Name' type='text' onChange={(e)=>setnewclient({...newclient,name:e.target.value})}/>
             <input placeholder='Address' type='text'  onChange={(e)=>setnewclient({...newclient,address:e.target.value})}/>
             <input placeholder='Mobile Phone' type='text' onChange={(e)=>setnewclient({...newclient,number:e.target.value})}/>
             <div className='btn-formadd'>
             <button onClick={()=>(dispatch(addclient(newclient)),setshowSecond(false),setping(!ping))}>Add</button>
             <button onClick={()=>setshowSecond(false)}>Cancel</button>
             </div>
    </div>
  )
}

export default AddClient
