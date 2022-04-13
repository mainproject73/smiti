//import logo from './logo.svg';
import{
  BrowserRouter as Router,
  Route,Routes
}from 'react-router-dom';
import './App.css';
import{ Home} from './components/home/Home';
import { About} from './components/home/About';
import { SignUp } from './components/signup/Signup';
import { Logout } from './components/signup/Logout';
import { Login } from './components/signup/Login';
//import { Router } from 'express';
import { Header } from './components/header/Header';
import {Footer} from './components/footer/Footer';
import { TherapistSignup } from './components/signup/TherapistSignup';
import { ParentSignUp } from './components/signup/ParentSignup';
import { Component } from 'react';
import Success from './components/success';
//import { Insert } from './component/demo/Insert';
import {Approve} from './components/Administrator/approve';
import {PendingTrainer} from './components/Administrator/PendingTrainer';
import {Admin} from './components/home/Admin';
import { Speechquiz } from './components/signup/Speechquiz';
import { Physicalquiz } from './components/signup/Physicalquiz';
import { Behaviouralquiz } from './components/signup/Behaviouralquiz';


function App() {
  return (
    
      <div className= "App">
       
          <Router>
            <>
         <Header/> 
        <Routes>
          <Route path="/" element={<Home />}exact />
          <Route path="/about" element={<About />}exact /> 
           <Route path="/signup" element={<SignUp/>}exact />
          <Route path="/login" element={<Login />}exact />
          <Route path="/logout" element={<Logout />}exact />
          <Route path="/TherapistSignup" element={<TherapistSignup />}exact />
          <Route path="/ParentSignup" element={<ParentSignUp />}exact />
          <Route path="/Speechquiz" element={<Speechquiz />}exact />
          <Route path="/Success" element={<Success/>} exact/> 
          <Route path="/approve" element={<Approve/>} exact/>
          <Route path="/PendingTrainer" element={<PendingTrainer/>} exact/>
          <Route path="/Admin" element={<Admin />}exact />
          <Route path="/Physicalquiz" element={<Physicalquiz />}exact />
          <Route path="/Behaviouralquiz" element={<Behaviouralquiz />}exact />
         
          </Routes>
          <Footer/>
          </>
        </Router>
      </div>
  );
}

export default App;
