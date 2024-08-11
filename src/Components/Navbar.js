import React from 'react'
import images from './Images/Profil.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div class="navbar">
                <div class="navbar-logo">
                    <a href="#home">  <h1> Admin_Dashboard</h1> </a>  
                </div>
                
                <img src={images} alt="Description of the image" /> 
                <p>dashboardexemple@gomycode.com</p>

                <ul class="liste">
                  <Link to='/' style={{textDecoration:'none'}}><li> Home </li>  </Link>

                  <Link to='/client' style={{textDecoration:'none'}}> <li>Gestion Clients</li> </Link>
                 
                  <Link to='/produit' style={{textDecoration:'none'}}><li > Gestion Produits</li> </Link>
                   </ul>    

                  
            </div>
  )
}

export default Navbar
