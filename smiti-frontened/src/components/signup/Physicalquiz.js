import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import './Signup.css';
import validation from './validation';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// let history =useHistory;
export const Physicalquiz = () => {
    const navigate = useNavigate();

           
      //manage form values
      const [formValues,setFormvalues]=useState({q1:"",q2:"",q3:"",q4:""});
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
//
      // 




        /*if(usertype==="Parent"){
            history.push("/ParentSignup", { replace: true });
        }
        else if(usertype==="Therapist"){
            history.push("/TherapistSignup", { replace: true });
        }*/
        console.log(formValues);
        if(formValues.usertype==="Parent"){
        //
          //  navigate("/ParentSignup", { replace: true });
        }
        else if(formValues.usertype==="Therapist"){
          console.log(formValues);
          axios.post("http://localhost:5000/api/signup",formValues).then(()=>{

          }).catch(()=>{

          })
            navigate("/success", { replace: true });
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
                    
               
            const response = await fetch(`https://localhost:5000/api/reg`, {
                method: 'post',
                body: JSON.stringify({ q1,q2,q3,q4}),
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
        const styleObj1 = {
          fontSize: 15,
          width: "500px",
          textAlign :"center",
          padding: "20px",
          spacing:"20px;",
          height:"200px",
          backgroundColor:'whitesmoke',
          marginLeft:"60px"
             }
             const styleObj = {fontSize: 13,
              color: "white",
              textAlign: "center",
              paddingTop: "10px",
              backgroundColor:'grey',}
  return (<div className="quiz">
    <label className='heading1' ><h1><br/>FOR Physical Test</h1></label><br/><br/><br/>
    <form  onSubmit={handleSubmit}><br/><br/>
    <table style={styleObj1}>
    <tr><td>Able to brush teeth by their own?<br/><br/>
    <input type="radio" name="q1" value="1" onChange={handleChange}/>1 &nbsp;
    <input type="radio" name="q1" value="2" onChange={handleChange}/> 2 &nbsp;
    <input type="radio" name="q1" value="3" onChange={handleChange}/>3&nbsp;
    <input type="radio" name="q1" value="4" onChange={handleChange}/>4&nbsp;
    <input type="radio" name="q1" value="5" onChange={handleChange}/>5<br/></td></tr>

    <tr><td>Finds difficulty in food feeding and dressing?<br/><br/>
    <input type="radio" name="q2" value="1" onChange={handleChange}/>1 &nbsp;
    <input type="radio" name="q2" value="2" onChange={handleChange}/> 2 &nbsp;
    <input type="radio" name="q2" value="3" onChange={handleChange}/>3&nbsp;
    <input type="radio" name="q2" value="4" onChange={handleChange}/>4&nbsp;
    <input type="radio" name="q2" value="5" onChange={handleChange}/>5<br/></td></tr>

    <tr><td>Finds difficulty in walking?<br/><br/>
    <input type="radio" name="q3" value="1" onChange={handleChange}/>1 &nbsp;
    <input type="radio" name="q3" value="2" onChange={handleChange}/> 2 &nbsp;
    <input type="radio" name="q3" value="3" onChange={handleChange}/>3&nbsp;
    <input type="radio" name="q3" value="4" onChange={handleChange}/>4&nbsp;
    <input type="radio" name="q3" value="5" onChange={handleChange}/>5<br/></td></tr>

    <tr><td>Can your child play properly with small toys (eg cars or blocks ) without just mouthing, fiddling or dropping them?<br/><br/>
    <input type="radio" name="q4" value="1" onChange={handleChange}/>1 &nbsp;
    <input type="radio" name="q4" value="2" onChange={handleChange}/> 2 &nbsp;
    <input type="radio" name="q4" value="3" onChange={handleChange}/>3&nbsp;
    <input type="radio" name="q4" value="4" onChange={handleChange}/>4&nbsp;
    <input type="radio" name="q4" value="5" onChange={handleChange}/>5<br/></td></tr>
</table>
   
  
    <br/><button>Submit</button><br/><br/></form><h6 style={styleObj}></h6>
      </div>

  )}