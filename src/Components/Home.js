import React, { useState } from 'react'
import images from './Images/Profil.png'


const Home = () => {

  const contacts = [
    { 
      id: 'c1',
      name: 'Joe Biden',
      email: 'WhiteHouse@test.com',
      phone: '123456789',
      city: 'washington',
    },
    {
      id: 'c2',
      name: 'Vlademir Putin',
      email: 'Kremlin@test.com',
      phone: '987654321',
      city: 'moscou',
      
    },
    {
      id: 'c3',
      name: 'Emmanuel Macron',
      email: 'Elysée@test.com',
      phone: '+331545457888',
      city: 'Paris',
      
    },
    {
      id: 'c4',
      name: 'Fumio Kishida',
      email: 'Empratoriat@test.com',
      phone: '+331545457888',
      city: 'Tokyo',
      
    }

  ];

  const products = [
    { 
      id: 'P1',
      name: 'Northrop f-35',
      email: 'WhiteHouse@test.com',
      phone: '123456789',
      city: 'washington',
    },
    {
      id: 'P2',
      name: 'Shukoi-35',
      email: 'Kremlin@test.com',
      phone: '987654321',
      city: 'moscou',
      
    },
    {
      id: 'P3',
      name: 'Mirage-20',
      email: 'Elysée@test.com',
      phone: '+331545457888',
      city: 'Paris',
      
    },
    {
      id: 'P4',
      name: 'Mazda-m20',
      email: 'Empratoriat@test.com',
      phone: '+331545457888',
      city: 'Tokyo',
      
    }

  ];


  const [showFirst, setshowFirst] = useState(false);
  const [showSecond, setshowSecond] = useState(false);







  return (
    <div>
      
      <div class="navbar">
                <div class="navbar-logo">
                    <a href="#home">  <h1>Dashboard</h1> </a>  
                </div>
    
                <ul class="liste">
                  <li> Home </li>  
                    <li  onClick={() => setshowFirst(!showFirst)} >Gestion Clients</li> 
                   <li   onClick={() => setshowSecond(!showSecond)} > Gestion Produits</li>
                   </ul>    

                   <img src={images} alt="Description of the image" />
      </div>


<div className='box-Gestion'>
  
  {showFirst ? (


        <div className="box-tab"> 

        
    <h1> Gestion des Clients</h1>


        <div className='addclient'>
          <i class="fa-solid fa-user-plus"></i>
          <h2>ADD Clients</h2>
        </div>



        <table className='styled-table' border="1" width="100%">
        <thead className='titletab'>
         
          <tr>
            <th>id</th>
            <th>Listes of Contacts</th>
            <th>Action</th>
          </tr>
       
          </thead>
   
         
              <tbody>
                {contacts.map((data) => (
                <tr>
                   <th >{data.id}</th>
                   <th >{data.name}</th>
                   
                   <th className='btn-action'>  
                    <button className='btn-update'>Update</button>  
                    <button className='btn-Delete'>Delete</button>
                  </th>

                 </tr> 
                ))}

                 </tbody> 

        </table>
        
        </div>):null }



        {showSecond ? (


<div className="box-tab"> 


<h1> Gestion des Produits</h1>


<div className='addclient'>
  <i class="fa-solid fa-user-plus"></i>
  <h2>Add Product</h2>
</div>



<table className='styled-table' border="1" width="100%">
<thead className='titletab'>
 
  <tr>
    <th>id</th>
    <th>Listes of Products</th>
    <th>Action</th>
  </tr>

  </thead>

 
      <tbody>
        {products.map((data) => (
        <tr>
           <th >{data.id}</th>
           <th >{data.name}</th>
           
           <th className='btn-action'>  
            <button className='btn-update'>Update</button>  
            <button className='btn-Delete'>Delete</button>
          </th>

         </tr> 
        ))}

         </tbody> 

</table>

</div>):null }












</div>



<div>


</div>

    </div>
  )
}

export default Home

