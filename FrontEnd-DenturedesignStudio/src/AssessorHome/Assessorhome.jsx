import React from 'react';
import Myaccount from '../myaccount/Myaccount';
import Homecomp from '../homecomp/Homecomp';
import Exitbutton from '../Exitbutton/Exitbutton'
import './Assessorhome.css';
import { useNavigate } from 'react-router-dom';


function Assessorhome() {
    let username='ravindu';
    let navigate = useNavigate();
    return (
        <div className="Assessorhome">
            <Exitbutton/>
            <Myaccount />
            <div className='assessorhomecontent'>
                <h1>Welcome {username}</h1>
                <div id='assessorh1'>
                <Homecomp name={'Create a Patient Case'} click ={()=>navigate('/patientcase')}/>
                </div>
                <div id='assessorh2'>
                <Homecomp name={'Content'} click ={()=>navigate('/assessorcontent')} imge={true}/>
                    
                </div>
                <div id='assessorh3'>
                <Homecomp name={'Engagement Metrics'} click ={()=>navigate('/engagementmetrix')} imge={false}/>
                </div>
               

                    
                
            </div>
        </div>
    );
}

export default Assessorhome;