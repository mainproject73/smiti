import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import './Signup.css';
import validation from './validation';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// let history =useHistory;
export const Behaviouralquiz = () => {
    const navigate = useNavigate();

           
      //manage form values
      const [formValues,setFormvalues]=useState({q1:"",q2:"",q3:"",q4:"",q5:"",q6:""});
      //manage errors
      const [formErrors,setFormErrors]=useState({})
      //flag for successuful submit
      const [isSubmit, setIsSubmit] = useState(false);
      //maanage field change
      const handleChange=(event)=>{
       //   console.log(event.target);
          //destructuring
      const {name,value}=event.target;
      //spread syntax..the value typing is get appended

      setFormvalues({...formValues,[name]:value})
      // console.log(formValues);
      }
      const handleSubmit=(event)=>

      {
        
        event.preventDefault();
        setFormErrors(validation(formValues));
        setIsSubmit(true);
        console.log(formValues);
        if(formValues.usertype==="Parent"){
        //
           //navigate("/ParentSignup", { replace: true });
        }
        else if(formValues.usertype==="Therapist"){
          console.log(formValues);
          axios.post("http://localhost:5000/api/Behaviouralquiz",formValues).then(()=>{
          }).catch(()=>{

          })
            navigate("/Physicalquiz", { replace: true });
        }

      }      
      useEffect(()=>{
          if (Object.keys(formErrors).length===0 && isSubmit)
          {
              alert('validation successful')
              registerUser();
            }
          },[formErrors])

          async function registerUser() {
            const q1 = formValues.q1;
            const q2 = formValues.q2;
            const q3 = formValues.q3;
            const q4= formValues.q4;
            const q5 = formValues.q5;
            const q6 = formValues.q6;           
               
            const response = await fetch(`https://localhost:5000/api/reg`, {
                method: 'post',
                body: JSON.stringify({ q1,q2,q3,q4,q5,q6}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(response,"response");
            if (response)
            {
            alert('Created Account Successfully');
           
        navigate("/home", { replace: true });
         
         
            }
            else
            {alert('error... '); 

            }
        
        }
  return (<div className="quiz">
    <label className='heading1' ><h1><br/>For Behavioural Test</h1></label><br/><br/><br/>
    <form  onSubmit={handleSubmit}><br/><br/>
    
    
    <table><tr>Shows self- abuse such as headbanging , skin picking,byting?<br/><br/>
    <input type="radio" name="q1" value="1" onChange={handleChange}/>1 &nbsp;
    <input type="radio" name="q1" value="2" onChange={handleChange}/> 2 &nbsp;
    <input type="radio" name="q1" value="3" onChange={handleChange}/>3&nbsp;
    <input type="radio" name="q1" value="4" onChange={handleChange}/>4&nbsp;
    <input type="radio" name="q1" value="5" onChange={handleChange}/>5<br/></tr>

    <tr>Lacks focus or attention?<br/><br/>
    <input type="radio" name="q2" value="1" onChange={handleChange}/>1 &nbsp;
    <input type="radio" name="q2" value="2" onChange={handleChange}/> 2 &nbsp;
    <input type="radio" name="q2" value="3" onChange={handleChange}/>3&nbsp;
    <input type="radio" name="q2" value="4" onChange={handleChange}/>4&nbsp;
    <input type="radio" name="q2" value="5" onChange={handleChange}/>5<br/></tr>


    <tr>Repetitive body movements like hand flapping and spinning?<br/><br/>

    <input type="radio" name="q3" value="1" onChange={handleChange}/>1 &nbsp;
    <input type="radio" name="q3" value="2" onChange={handleChange}/> 2 &nbsp;
    <input type="radio" name="q3" value="3" onChange={handleChange}/>3&nbsp;
    <input type="radio" name="q3" value="4" onChange={handleChange}/>4&nbsp;
    <input type="radio" name="q3" value="5" onChange={handleChange}/>5<br/></tr>


    <tr>Obsessive attachment to unusual objects?<br/><br/>
    <input type="radio" name="q4" value="1" onChange={handleChange}/>1 &nbsp;
    <input type="radio" name="q4" value="2" onChange={handleChange}/> 2 &nbsp;
    <input type="radio" name="q4" value="3" onChange={handleChange}/>3&nbsp;
    <input type="radio" name="q4" value="4" onChange={handleChange}/>4&nbsp;
    <input type="radio" name="q4" value="5" onChange={handleChange}/>5<br/></tr>


    <tr>Does your child ever seem oversensitive to noise?<br/><br/>
    
    <input type="radio" name="q5" value="1" onChange={handleChange}/>1 &nbsp;
    <input type="radio" name="q5" value="2" onChange={handleChange}/> 2 &nbsp;
    <input type="radio" name="q5" value="3" onChange={handleChange}/>3&nbsp;
    <input type="radio" name="q5" value="4" onChange={handleChange}/>4&nbsp;
    <input type="radio" name="q5" value="5" onChange={handleChange}/>5<br/></tr>


    <tr>Does your child make unusual finger movements near his/her face?<br/><br/>
    <input type="radio" name="q6" value="1" onChange={handleChange}/>1 &nbsp;
    <input type="radio" name="q6" value="2" onChange={handleChange}/> 2 &nbsp;
    <input type="radio" name="q6" value="3" onChange={handleChange}/>3&nbsp;
    <input type="radio" name="q6" value="4" onChange={handleChange}/>4&nbsp;
    <input type="radio" name="q6" value="5" onChange={handleChange}/>5<br/></tr>

    </table>
    <br/><button>Next</button><br/><br/></form>
      </div>

  )}