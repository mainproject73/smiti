import React from 'react'
// import '../header/Header.css';
// import '../footer/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Approve } from '../Administrator/approve';
import PendingTrainer from '../Administrator/PendingTrainer';
export const Admin = () => {
  return (
    <div>
        <Approve/>
        <PendingTrainer/>
    </div>
  )
}
