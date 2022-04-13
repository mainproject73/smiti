import React from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import back from './back.png'
export const Footer = () => {
    const styleObj = {
        fontSize: 13,
        color: "white",
        textAlign: "center",
        paddingTop: "10px",
        backgroundColor:'peru',
           }
    return (
        <div>
            <div className="container">
                <div className="row align-items-start">
                <div className='col'>
                <h5>QUICK LINKS</h5><br/>
                https://totalspectrumcare.com<br/>
                https://reachabatherapy.com<br/>
                https://reachdevelopment.org<br/>

                {/*<a href="/https://totalspectrumcare.com">Spectrumcare</a><br/>
                <a href="https://reachabatherapy.com">Reachabatherapy</a><br/>
    <a href="https://reachdevelopment.org">Reachdevelopment</a><br/>*/}
                       {/*} <Link className="link" to="https://totalspectrumcare.com/">Spectrumcare</Link><br/>
                        <Link className="link" to="https://reachabatherapy.com/">Reachabatherapy</Link><br/>
    <Link className="link" to="https://reachdevelopment.org/">Reachdevelopment</Link><br/>*/}
                    </div>
                    <div className='col'>
                        <h5>GET IN TOUCH</h5><br/>

                        Contact No: 9824710547,<br/>
                        8451038472<br/>
                        Mail id: abc2022@gmail.com<br/>
                    </div>
                    {/*<div className='col'>
                        QUICK LINKS
                    </div>
                    <div className='col'>
                        GET IN TOUCH
    </div>*/}
                    <div className='col'>
                        OUR TIMINGS<br /><br />

Monday:         8:30am – 5:00pm<br />

Tuesday:         8:30am – 5:00pm<br />

Wednesday:  8:30am – 5:00pm<br />

Thursday:       8:30am – 5:00pm<br />
Friday:          8:30am – 5:00pm
                    </div>
                </div>
                <img src={back} width='100%' height='30px' />
                <h6 style={styleObj}>All Rights Reserved 2021. SMITI  Behavior and Development Center</h6>
            </div>



        </div >
    )
}
