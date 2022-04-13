import React, { useEffect } from 'react'

export const Logout = () => {
    //localStorage.clearToken();
    
    if (localStorage.getItem()) { 
        //check something in local storage so you can know
        // if you should reload or not 
        //localStorage.clear();
       window.location.reload();
    } 
    
  return (
    <div><br/><br/>
        <h1> Thank you for using the Our Website </h1><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
       </div>
  )
}