import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import './Signup.css';
import validation from './validation1';
import axios from 'axios';

const usertype = [
  { label: "Parent", value: 1 },
  { label: "Therapists", value: 2 },
  { label: "Administartor", value: 3 },
];
export const Login = (props) => {

  const navigate = useNavigate();
  const [formValues, setFormvalues] = useState({ email: "", password: "", usertype: "" });
  //manage errors
  const [formErrors, setFormErrors] = useState({})
  //flag for successuful submit
  const [isSubmit, setIsSubmit] = useState(false);
  //maanage field change
  const handleChange = (event) => {
    //   console.log(event.target);
    //destructuring
    const { name, value } = event.target;
    //spread syntax..the value typing is get appended

    setFormvalues({ ...formValues, [name]: value })
    
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validation(formValues));
    setIsSubmit(true);
    console.log(formValues);
  if(formValues.email==="mainproject73@gmail.com" && formValues.password==="smiti123" && formValues.usertype==="Administrator"){
navigate("/admin",{replace:true})
  }
  else{

    axios.post("http://localhost:5000/api/login", formValues).then(() => {
  
    }).catch(() => {
  
    })
  }
  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     alert('validation successful')
  //    
  //   }
  // }, [formErrors])
  // async function loginUser() {
  //   // const user = formValues.username;
  //   const email = formValues.email;
  //   const password = formValues.password;
  //   const usertype = formValues.usertype;
  //   const response = await fetch(`http://localhost:5000/api/login`);
  //   console.log(response, "response");
  //   if (response) {
  //     //Window
  //     localStorage.setItem('email', email);
  //     localStorage.setItem('token', response.token);
  //     alert('Successfullly logged in. ');
  
  //     navigate("/", { replace: true });
  //   }
  //   else {
  //     alert('error... ');
  
  //   }
  
  // }
  }



  const styleObj1 = {
    fontSize: 15,
    width: "500px",
    align: "center",
    padding: "20px",
    spacing: "10px;",
    height: "200px",
    backgroundColor: 'whitesmoke',
    marginLeft: "500px"
  }
  {/*return (<div className="login">
    <form onSubmit={handleSubmit}><br/><br/>
    <label className='heading1' ><h1>Login</h1></label><br/><br/><br/>
    <table style={styleObj1}>
        <tr><td><br/><label>Email Id</label></td>
        <td><br/><label for="chk" aria-hidden="true">Email Id</label>;</td>
        <td><br/><input type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={handleChange}/><br/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            <p className='error'>{formErrors.name}</p></td>
        </tr>

        <tr><td><label for="chk" aria-hidden="true">Password</label></td>
        <td><input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange}/><br/>
              <p className='error'>{formErrors.password}</p> </td>
        </tr>      


        <tr><td><label>Usertype</label></td>
            <td><br/><div className="container">
                <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3">
                  <select name=" usertype " onChange={handleChange}>                 
                  {/* {
                    usertype.map((Value)=>{
                      console.log(Value.label);
                      return(
                         <option value={Value.label} >{Value.label}</option>
                      )
                    })
                  } */}
  {/* <option value="select" >select</option>
                   <option value="Parent" >Parent</option>
                   <option value="Therapist" >Therapist</option>
                   <option value="Administrator" >Administrator</option> 
                   </select> 

              </div>
                <div className="col-md-3"></div></div>
            <p className='error'>{formErrors.usertype}</p></div></td>
          </tr>
            
      </table><br/><button>Login</button><br/>
  </form>
  <a class="dropdown-item" href="/signup">New around here? Sign up</a>
  <a class="dropdown-item" href="/forgot">Forgot password?</a>
</div></div>;
};*/}
  return (
    <div className="login">
      <form onSubmit={handleSubmit}><br /><br />
        <label className='heading1' ><h1>Login</h1></label><br /><br /><br />

        <table style={styleObj1}>
          <tr><td><br /><label>Email</label></td>
            {/*<td><br /><label for="chk" aria-hidden="true"></label></td>*/}
            <td><br /><input type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={handleChange} /><br />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              <p className='error'>{formErrors.name}</p></td>
          </tr>

          <tr><td><label for="chk" aria-hidden="true">Password</label></td>
            <td><input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange} /><br />
              <p className='error'>{formErrors.password}</p> </td>
          </tr>


          <tr><td><label>Usertype</label></td>
            <td><br /><div className="container">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3">
                  <select name="usertype" onChange={handleChange}>
                    {/* {
                    usertype.map((Value)=>{
                      console.log(Value.label);
                      return(
                         <option value={Value.label} >{Value.label}</option>
                      )
                    })
                  } */}
                    <option value="select" >select</option>
                    <option value="Parent" >Parent</option>
                    <option value="Therapist" >Therapist</option>
                    <option value="Administrator" >Administrator</option>
                  </select>

                </div>
                <div className="col-md-3"></div></div>
              <p className='error'>{formErrors.usertype}</p></div></td>
          </tr>

        </table><br /><button>Login</button>
      </form>
      <a class="dropdown-item" href="/signup">New around here? Sign up</a>
      <a class="dropdown-item" href="/forgot">Forgot password?</a>
    </div>
  )
  // </div>;
};
