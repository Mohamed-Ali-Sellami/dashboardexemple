import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addproduct } from '../Redux/ProductSlice'

const AddProduct = ({setshowSecond,ping,setping}) => {
    const [newproduct, setnewproduct] = useState({

        name:"" ,
        price: "",
        category:""
      }
      )
      const dispatch=useDispatch()
  return (
    <div className='box-add-client'>
       <input placeholder='name' type='text' onChange={(e)=>setnewproduct({...newproduct,name:e.target.value})}/>
             <input placeholder='price' type='text'  onChange={(e)=>setnewproduct({...newproduct,address:e.target.value})}/>
             <input placeholder='category' type='text' onChange={(e)=>setnewproduct({...newproduct,number:e.target.value})}/>
             <div className='btn-formadd'>
             <button onClick={()=>(dispatch(addproduct(newproduct)),setshowSecond(false),setping(!ping))}>Add</button>
             <button onClick={()=>setshowSecond(false)}>Cancel</button>
             </div>
    </div>
  )
}

export default AddProduct
