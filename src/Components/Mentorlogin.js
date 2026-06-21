import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Mentorlogin = () => {

    const navigate = useNavigate();

    const [state,setState]  = useState({
      username : "",
      password : "",
    });
  
    const [message,setMessage] = useState("");
  
    
     const handleSubmit = (event) => {
          event.preventDefault();
  
          axios.get(`http://localhost:4000/mentors?name=${state.username}`)
          .then((response) => {
              console.log(response.data);
              console.log(state.username);
              console.log(state.password);
              if(response.data.length != 0){
                  if(response.data[0].username == state.username && 
                     response.data[0].password == state.password){
  
                      setMessage("User logged in successfully");
                      setTimeout(() => {
                          navigate("/mentorview/")
                      },2000);
                  }else{
                      setMessage("Credentials did not match");
                  }
              }else{
                  setMessage("Data not found");
              }
          }).catch((error) => setMessage("Error while logging in"));
     };
  
    const handleInp = (event) => {
      let incName = event.target.name;
      let incValue = event.target.value;
      setState({...state,[incName]:incValue});
    }
  


  return (
    <>
        <div className='login-card'>
            <h2>Mentor Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Username</label>
                    <br/>
                    <input type='text' name="username" onChange={handleInp}  value={state.username} required/>
                </div>
                <br/>
                <div className='form-group'>
                    <label>Password </label>
                    <br/>
                    <input type='password' name="password" onChange={handleInp} value={state.password} required/>
                </div>
                <br/>
                <Button variant='primary' type='submit' onClick={handleSubmit}>Login</Button>
                <br/>
                {message?<span>{message}</span>:null}
            </form>
        </div>
    </>
  )
}

export default Mentorlogin
