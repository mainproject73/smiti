import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Navigate} from 'react-router-dom';
//import './Signup.css';
import validation from './validation';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// let history =useHistory;
const usertype = [
    { label: "Parent", value: 1 },
    { label: "Therapists", value: 2 },
    { label: "Administartor", value: 3 },
  ];
  const sex = [
    { label: "Male", value: 1 },
    { label: "Female", value: 2 },
    { label: "Other", value: 3 },
  ];

export const SignUp = () => {
    const navigate = useNavigate();

           
      //manage form values
      const [formValues,setFormvalues]=useState({name:"",email:"",usertype:"",gender:"",address:"",phone:"", password:""});
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


        /*if(usertype==="Parent"){
            history.push("/ParentSignup", { replace: true });
        }
        else if(usertype==="Therapist"){
            history.push("/TherapistSignup", { replace: true });
        }*/
        console.log(formValues);
        if(formValues.usertype==="Parent"){
          console.log(formValues);
          axios.post("http://localhost:5000/api/signup",formValues).then((response)=>{
            if(response){
              console.log(response.data);
              if(response.data.success){
                console.log("inside");
                console.log(response.data.user_id);
                localStorage.setItem('user_id',response.data.user_id)
              }

              
            }

          }).catch(()=>{

          })


            navigate("/ParentSignup", { replace: true });
        }
      
        else if(formValues.usertype==="Therapist"){
          console.log(formValues);
          axios.post("http://localhost:5000/api/signup",formValues).then((response)=>{
            if(response){
              console.log(response.data);
              if(response.data.success){
                console.log("inside");
                console.log(response.data.user_id);
                localStorage.setItem('user_id',response.data.user_id)
              }

              
            }

          }).catch(()=>{

          })
            navigate("/TherapistSignup", { replace: true });
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
            const name = formValues.name;
            const email = formValues.email;
            const usertype = formValues.usertype;
            const gender= formValues.gender;
          
            const address= formValues.address;
            const phone= formValues.phone;
            const password= formValues.password;
               
            const response = await fetch(`https://localhost:5000/api/reg`, {
                method: 'post',
                body: JSON.stringify({ name,email,usertype,gender,address,phone,password}),
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
            align :"center",
            padding: "20px",
            spacing:"20px;",
            height:"200px",
            backgroundColor:'whitesmoke',
            marginLeft:"500px"
               }
  return (<div className="signup">
    <form onSubmit={handleSubmit}><br/><br/>
    <label className='heading1' ><h1>SignUp</h1></label><br/><br/><br/>
    <table style={styleObj1}>
        <tr><td><br/><label>Name</label></td>
            <td><br/><input type="text" name="name" placeholder=" name" required="" value={formValues.name} onChange={handleChange}/><br/>
            <small id="emailHelp" class="form-text text-muted">Enter the name of your child.</small>
            <p className='error'>{formErrors.name}</p></td>
        </tr>
        <tr><td><p className='error'>{formErrors.name}</p><label>Email Id</label><br/></td>
            <td><br/><input type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={handleChange}/><br/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>

            <p className='error'>{formErrors.email}</p></td>
        </tr>
        <tr><td><label>Usertype</label></td> 
            <td><br/><div className="container">
                <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3">
                  <select  name="usertype" onChange={handleChange}>                 
                  {/* {
                    usertype.map((Value)=>{
                      console.log(Value.label);
                      return(
                         <option  value={Value.label} >{Value.label}</option>
                      )
                    })
                  } */}
                  <option  value="select" >select</option>
                   <option  value="Parent" >Parent</option>
                   <option  value="Therapist" >Therapist</option>
                   <option  value="Administrator" >Administrator</option> 
                   </select> 

               </div>
                <div className="col-md-3"></div></div>
            <p className='error'>{formErrors.usertype}</p></div></td>
        </tr>
        {/*<tr><td><label>Sex</label></td> 
            <td><br/><div className="container">
                <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3">
                  <select  name="sex" onChange={handleChange}>                 
                  {/* {
                    usertype.map((Value)=>{
                      console.log(Value.label);
                      return(
                         <option  value={Value.label} >{Value.label}</option>
                      )
                    })
                  } 
                  <option  value="select" >select</option>
                   <option  value="Male" >Parent</option>
                   <option  value="Female" >Therapist</option>
                   <option  value="Other" >Administrator</option> 
                   </select> 

               </div>
                <div className="col-md-3"></div></div>
            <p className='error'>{formErrors.sex}</p></div></td>
                </tr>*/}
        
        <tr><td><br/><label>Address</label></td>
            <td><br/><textarea className="form-control"  cols= {10} name="address" placeholder="address" required="" value={formValues.address} onChange={handleChange}></textarea><br/><br/>
            <p className='error'>{formErrors.address}</p></td>
        </tr>

        <tr><td><br/><label>Phone</label></td>
            <td><br/><input type="number" name="phone" placeholder="phone" maxLength={10} required="" value={formValues.phone} onChange={handleChange}/><br/><br/>
            <p className='error'>{formErrors.phone}</p></td>
        </tr>
        <tr>
            <td><label>Password</label><br/><br/></td>
            <td><br/><input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange} />
            <p className='error'>{formErrors.password}</p><br/></td>
        </tr>
              </table><br/><button>Sign Up</button><br/></form>
      </div>

  )}