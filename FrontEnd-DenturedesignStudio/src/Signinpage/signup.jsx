import "./signup.css";
import React, { useState } from 'react';
import Back from '../backbutton/Back';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'

function Signup() {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [user_name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [compassword, setCompassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [showComPassword, setShowComPassword] = useState(false); 

  let navigate = useNavigate();
  const student = 'student';
  const Assessor = 'assessor';

  function clickhandle(path) {
    navigate(path);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(first_name, last_name, email, user_name, password, compassword, role);
    try{
      let url =''
      if(role===student){
        url ='http://localhost:5000/student/add'
      }else if(role=== Assessor){
        url = 'http://localhost:5000/assessor/add'
      }
      const response = await axios.post(url,{ first_name, last_name,email, user_name,password});
      alert(response.data);
      navigate ('/login');
    }catch(err){
      alert("error"+err.message);
    }


  };

  return (
    <div className="signuppage">
      <div className="back">
        <Back onclick={() => clickhandle("/")}></Back>
      </div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Salsa&display=swap" />
      <form className='contentbox2' onSubmit={handleSubmit}>
        <div>
          <h1 className="header2">Create a new account</h1>
        </div>
        <div className="role">
          <h3>Role:</h3>
          <input type="radio" name="role" value={student} id="Student1" onChange={(e) => setRole(e.target.value)} /><p id="Student2">Student</p>
          <input type="radio" name="role" value={Assessor} id="Assessor1" onChange={(e) => setRole(e.target.value)} /><p id="Assessor2">Assessor</p>
        </div>
        <div className="signinput" id="signinput1">
          <h3 className="signhead">First name:</h3>
          <input type="text" onChange={(e) => setFirstname(e.target.value)} />
        </div>
        <div className="signinput" id="signinput2">
          <h3 className="signhead">Last name:</h3>
          <input type="text" onChange={(e) => setLastname(e.target.value)} />
        </div>
        <div className="signinput" id="signinput3">
          <h3 className="signhead">Email:</h3>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="signinput" id="signinput4">
          <h3 className="signhead">Username:</h3>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="signinput" id="signinput5">
          <h3 className="signhead">Password:</h3>
          <input
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div onClick={() => setShowPassword(!showPassword)} className="eyeicon">
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </div>
        </div>
        <div className="signinput" id="signinput6">
          <h3 className="signhead">Confirm Password:</h3>
          <input
            type={showComPassword ? "text" : "password"}
            onChange={(e) => setCompassword(e.target.value)}
          />
          <div onClick={() => setShowComPassword(!showComPassword)} className="eyeicon">
            <FontAwesomeIcon icon={showComPassword ? faEyeSlash : faEye} />
          </div>
        </div>
        <div>
          <button className="sign2" type="submit">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
