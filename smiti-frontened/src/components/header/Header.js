import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
export const Header = () => {
  return (
    <div><div class="container">
    <div class="row align-items-start">
      <div class="col">
   <nav className="header">
    <h1  className='head' >SMITI AUTISM CENTER</h1>

<div className="headlinks">          
<Link className="link" to="/">Home</Link>
<Link className="link" to="/About">About</Link>
<Link className="link" to="/Signup">Signup</Link>
<Link className="link" to="/Login">Login</Link>
<Link className="link" to="/Login">Logout</Link>
            </div>
           
           </nav>
      </div>
         </div> 
</div></div>
  )
}