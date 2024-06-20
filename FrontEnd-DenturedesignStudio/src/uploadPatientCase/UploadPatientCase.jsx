import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadPatientCase.css';
import Home from '../homebutton/home';

function UploadPatientCases() {
  let navigate = useNavigate();

  function handleClick(path) {
    navigate(path);
  }

  return (
    <>
      <div className="UploadPatientCase">
        <Home onClick={() => handleClick("/studenthome")}></Home>
        <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Salsa&display=swap" />
        <div className='teethBackground'></div>
        <div className="rectangle1"></div>
        <div className="rectangle2"></div>
          <h2 className='CreateAPatientCase'>Create and Upload a Patient Case</h2>
          <h1 className='steps'>
            step 1 : Select missing teeth<br />
            step 2 : Click Create & Upload!
          </h1>
        </div>
        <button className='button' onClick={() => handleClick('/CreateAndUpload')}>
          <div className="buttonContent">
            <span className="buttontext">Create & Upload</span>
          </div>
        </button>
      </div>
    </>
  );
}

export default UploadPatientCases;
