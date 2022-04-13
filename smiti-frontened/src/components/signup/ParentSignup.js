
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Navigate} from 'react-router-dom';
//import './Signup.css';
import validation from './validation';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// let history =useHistory;
const gender = [
    { label: "yes", value: 1 },
    { label: "no", value: 2 },
    
  ];
export const ParentSignUp = () => {
    const navigate = useNavigate();

           
      //manage form values
      const [formValues,setFormvalues]=useState({father:"",mother:"",guardian:"",attendedschool:""});
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
        registerUser();

    
        console.log(formValues);
        /*if(formValues.usertype==="Parent"){
        //
        


            navigate("/ParentSignup", { replace: true });
        }
        else if(formValues.usertype==="Therapist"){
          console.log(formValues);
          axios.post("http://localhost:5000/api/signup",formValues).then(()=>{

          }).catch(()=>{

          })
            navigate("/TherapistSignup", { replace: true });
        }*/

      }     
    //   useEffect(()=>{
    //       if (Object.keys(formErrors).length===0 && isSubmit)
    //       {
    //           alert('validation successful')
    //           registerUser();
    //         }
    //       },[formErrors])

          async function registerUser() {
            const father = formValues.father;
            const mother = formValues.mother;
            const guardian = formValues.guardian;
            const attendedschool= formValues.attendedschool;
            //console.log("hi")
            //console.log("inside");
            axios.post("http://localhost:5000/api/parent-signup",formValues).then((response)=>{
                if (response)
                    {
                    alert('Created Account Successfully');
                    //navigate("/Questionaire", { replace: true });
                   
                // navigate("/home", { replace: true });
                 
                 
                    }
                   
                    
                
            }).catch(()=>{
  
            })
            navigate("/Speechquiz", { replace: true });
          }
        //     const response = await fetch(`https://localhost:5000/api/parent-signup`, {
        //         method: 'post',
        //         body: JSON.stringify({ father,mother,guardian,attendedschool}),
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     })
        //     console.log(response,"response");
        //     if (response)
        //     {
        //     alert('Created Account Successfully');
        //     navigate("/Questionaire", { replace: true });
           
        // // navigate("/home", { replace: true });
         
         
        //     }
        //     else
        //     {alert('error... '); 

        //     }
        
        // }
        const styleObj1 = {
            fontSize: 15,
            width: "500px",
            align :"center",
            padding: "20px",
            spacing:"20px;",
            height:"200px",
            backgroundColor:'whitesmoke',
            marginLeft:"500px"
               }
  return (<div className="signup">
    <form onSubmit={handleSubmit}><br/><br/>
    <label className='heading1' ><h1>Parent SignUp</h1></label><br/><br/><br/>
    <table style={styleObj1}>
        <tr><td><br/><label>Father's Name</label></td>
            <td><br/><input type="text" name="father" placeholder="father" required="" value={formValues.father} onChange={handleChange}/><br/><br/></td>
        </tr>
        <tr><td><br/><label>Mother's Name</label></td>
            <td><br/><input type="text" name="mother" placeholder="mother" required="" value={formValues.mother} onChange={handleChange}/><br/><br/></td>
        </tr>
        <tr><td><br/><label>Guardian's Name</label></td>
            <td><br/><input type="text" name="guardian" placeholder="guardian" required="" value={formValues.guardian} onChange={handleChange}/><br/><br/></td>
        </tr>
        <tr><td><label>Attended School</label></td> 
            <td><br/><div className="container">
                <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3">
                  <select  name="attendedschool" onChange={handleChange}>                 
                  {/* {
                    usertype.map((Value)=>{
                      console.log(Value.label);
                      return(
                         <option  value={Value.label} >{Value.label}</option>
                      )
                    })
                  } */}
                  <option  value="select" >select</option>
                   <option  value="Yes" >Yes</option>
                   <option  value="No" >No</option>
                   
                   </select> 

               </div>
                <div className="col-md-3"></div></div>
            <p className='error'>{formErrors.attendedschool}</p></div></td>
        </tr>
              </table><br/><button>Sign Up</button><br/></form>
      </div>

  )}