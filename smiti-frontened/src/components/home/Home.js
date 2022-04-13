import React from 'react'
import poster from './poster.jpg'
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Home = () => {
    return (
        <div>
            
            <div class="container">
                <div class="row align-items-start">
                    <div class="col"><br /><h1>  SMITI Center of Care and Love </h1><br />
                        <img className='img1' src={poster} alt="poster" />
                    </div>
                </div>
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

        </div>
    )
}
