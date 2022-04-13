import {React, useEffect,useState }  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export const Approve = () => {

    // Temporary storage of DB data
    const [trainerpend, settrainerpend] = useState([]);

    // Backend Connection API Fetch
    useEffect(() => {
        axios.get(`http://localhost:5000/api/pending`).then((res)=>{
          let data=res.data
          console.log(data);
          settrainerpend(data);
      })
      }, []);


    return (
        <div>
             <div> <br/> <h1> List Pending for Approval</h1>   <br/>         </div>
            {trainerpend.length<1?<></>: trainerpend.map((i, key) => (    
                <>
                <Link className='user' key={key} to={`/pending/${i._id}`}>
                    <h2 className='trainerpend_head'>{i.name}</h2>
                    <br/> 
                </Link>
                    </>
            )
            )
            
            } 
           

        </div>
    );
}