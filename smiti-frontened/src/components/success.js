import React from 'react'
import { Link } from 'react-router-dom';
export const Success = () => {
  return (
    <div>
        <h1>THANKS YOU FOR REGISTERING </h1>

        <h2><br/> You will get Email notifications from Administrator of SMITI MANAGEMENT TEAM</h2>
        
        <h3><br/><Link to="/login">Login as User</Link> </h3>
        <br/><br/><br/>
    </div>
  )
}
export  default Success;