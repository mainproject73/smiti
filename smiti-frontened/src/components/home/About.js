import React from 'react'
import Aboutpic1 from './about.jpeg'
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const About = () => {
    const styleObj = {
        fontSize: 13,
        color: "white",
        textAlign: "center",
        paddingTop: "10px",
        backgroundColor:'grey',
           }
  return (
    <div>
            <div class="container">
                <div class="row align-items-start">
                    <div class="col"><br /><h1>  SMITI Center of Care and Love </h1><br />
                        <img className='img1' src={Aboutpic1} alt="Aboutpic1" />
                    </div>
                </div>
                <br/><br/>

                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                        <h5>MISSION</h5><br/><br/>
                        <p> SMITI’s mission is to deliver the highest quality in wholistic, relationship-based care to individuals and their families across environments to reach their fullest potential. To achieve this goal, our highly educated, compassionate staff dedicates time and expertise to create experiences that maximize therapeutic outcomes. The strength, determination, and perseverance of our clients are evident as they succeed in therapy, and ultimately in their daily routines.</p>
                        </div>
                        <div class="col-sm">
                        <h5>STAFF</h5><br/><br/>
                        <p>SMITI provide user friendly staffs and services. It helps in the development of the child with proper care and love. We provide highly qualified and educated staff. Their love,care and help will mould the children into a new individual.  </p>
                        </div>
                        <div class="col-sm">
                        <h5>SERVICES</h5><br/><br/>
                        <ul>Physical Therapy</ul>
                        <ul>Behavioral Therapy</ul>
                        <ul>Communication Therapy</ul>
                        
                        </div>
                    </div>
                    </div>
 
                    <br/><br/><h6 style={styleObj}></h6> 


                <div class="row align-items-end">
                    <div class="col"><p><br/><br/>
                        
                    Each autistic child is unique with their
                        disabilities so special and continuous training is
                        required for them. We are planning to have a
                        administrator who identifies the category of the
                        child through questionnaire from parents and then
                        assigning them to a different therapists.
                        Therapists will be giving different tasks and
                        tutorials for them. Mapping of child to multiple
                        therapy and therapists is also possible. There is
                        a feedback mechanism for continuous monitoring
                        the improvement of child. According to the status
                        of training of child, child's level will be moved
                        up or down and task given by therapists will be
                        based on that.</p><br/>
                    </div>
                </div>
            </div>
            <br/><br/><br/>

        </div>
    )
}