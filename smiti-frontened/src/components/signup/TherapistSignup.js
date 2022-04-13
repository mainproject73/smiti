import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import './Signup.css';
import validation from './validation';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const specialization = [
    { label: "Physical Therapy", value: 1 },
    { label: "Communication Therapy", value: 2 },
    { label: "Behavioral therapy", value: 3 },
  ];

export const TherapistSignup = () => {
    const navigate = useNavigate();

           
      //manage form values
      const [formValues,setFormvalues]=useState({qualification:"",specialization:"",experience:"",certificate:"",Recommendationletter:""});
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
      console.log(formValues);
      }
      const handleSubmit=(event)=>
      {
        event.preventDefault();
        setFormErrors(validation(formValues));
        setIsSubmit(true);
		navigate("/success", { replace: true });
		console.log("inside");
		let name="test"
		let user_id=localStorage.getItem('user_id')
 axios.post('http://localhost:5000/api/therapist-signup',{formValues,user_id}) ;
      }      
    /*  useEffect(()=>{
          if (Object.keys(formErrors).length===0 && isSubmit)
          {
              alert('validation successful')
              registerUser();
            }
          },[formErrors])*/

        //   async function registerUser() {
		// 	  console.log("inside");
        //     const qualification = formValues.qualification;
        //     const specialization = formValues.specialization;
        //     const experience= formValues.experience;
        //     const certificate= formValues.certificate;
        //     const Recommendationletter= formValues.Recommendationletter;
               
        //     const response = await fetch(`https://localhost:5000/api/therapist-signup`, {
        //         method: 'post',
        //         body: JSON.stringify({qualification,specialization,experience,certificate,Recommendationletter}),
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     })
        //     console.log(response,"response");
        //     if (response)
        //     {
        //     alert('Updated Account Successfully');
           
        // navigate("/home", { replace: true });
         
         
        //     }
        //     else
        //     {alert('error... '); 

        //     }
        
        
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
    <label className='heading1' ><h1>Therapist SignUp</h1></label><br/><br/><br/>
    <table style={styleObj1}>
        
        <tr><td><label>Qualification</label><br/></td>
            <td><br/><input type="text" name="qualification" placeholder="qualification" required="" value={formValues.qualification} onChange={handleChange}/>
            <p className='error'>{formErrors.qualification}</p></td>
        </tr>
        <tr><td><label>Specialization</label></td> 
            <td><br/><div className="container">
                <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3">
                <select name="specialization" onChange={handleChange}>
				<option  value="select" >select</option>
					<option  value="Physical Therapy" >Physical Therapy</option>
					<option  value="Communication Therapy" >Communication Therapy</option>
					<option  value="Behavioral Therapy" >Behavioral Therapy</option>
			</select> 
				
				</div>
                <div className="col-md-3"></div></div>
            <p className='error'>{formErrors.specialization}</p></div></td>
        </tr>



        {/* <tr>
           <td><label class="form-label" for="customFile">Experience</label><br/><br/></td>
            <td><input type="file" class="error" id="customFile" /><br/></td>
        </tr>
        <tr>
            <td><label class="form-label" for="customFile">Certificate</label><br/></td>
            <td><input type="file" class="error" id="customFile" /></td>
        </tr>
        <tr>
            <td><label class="form-label" for="customFile">Recommendation letter</label><br/></td>
            <td><input type="file" class="error" id="customFile" /></td>
        </tr> */}
		
            


              </table><br/><button>Sign Up</button><br/></form>
      </div>

  )}