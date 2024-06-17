import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './first-page/Homepage';
import Loginpage from './logingpage/Logingpage';
import Signup from './Signinpage/signup';
import Studenthome from './StudentHome/Studenthome';
import UploadPatientCase from './uploadPatientCase/UploadPatientCase';
import Assessorhome from './AssessorHome/Assessorhome';
import Adminhome from './AdminHome/Adminhome';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/login' element={<Loginpage />} />
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/studenthome' element={<Studenthome/>}/>
        <Route exact path='/assessorhome' element={<Assessorhome/>}/>
        <Route exact path='/adminhome' element={<Adminhome/>}/>
        <Route exact path='/createuploadpatient' element={<UploadPatientCase/>}/>
      </Routes>
    </Router>
  );
}

export default App;
