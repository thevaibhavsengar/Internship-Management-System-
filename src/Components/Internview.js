import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Internview = () => {

  const navigate = useNavigate();
  

  const[internData,setInternData] = useState({
    name : "",
    email : "",
    city : "",
    college : "",
    contact : "",
  });

  const[submitSuccess,setSubmitSuccess] = useState("");
  const[submitError,setSubmitError] = useState("");
  const[errorMessage,setErrorMessage] = useState("");

  function handleInput(event) {
    let incName = event.target.name;
    let incValue = event.target.value;
    setInternData({...internData,[incName]:incValue})
  }

  function onClickGetData() {
    navigate("/get/")
  }

  function handleSubmit(event){
    event.preventDefault();
    let newInternData = JSON.stringify(internData);
    axios.post("http://localhost:4000/interns",newInternData)
    .then((response) => setSubmitSuccess(`Data added successfully with id: ${response.data.id}`))
    .catch((error) => setSubmitError("Something went wrong"));
  }

  return (
    <div>
      <nav className="navbar" style={{backgroundColor:"#A2CDF2"}}>
        <a className="navbar-brand" href="#" style={{marginLeft:"30px"}}>
          My Dashboard
        </a>
      </nav>
      <div>
        <h1>Intern Details</h1>
        <form className="myForm" style={{alignItems:"center"}}>
            <div style={{padding:"10px",display:"block"}}>
            <label style={{paddingRight:"40px"}}>Name -</label>
            <input type="text" placeholder="name" name="name" value={internData.name} 
            onChange={handleInput}/>
            </div>
            
            <div style={{padding:"10px"}}>
            <label style={{paddingRight:"40px"}}>Email -</label>
            <input required type="text" placeholder="email" name="email" value={internData.email} 
            onChange={handleInput}/>
            </div>

            <div style={{padding:"10px"}}>
            <label style={{paddingRight:"50px"}}>City -</label>
            <input required type="text" placeholder="city" name="city" value={internData.city} 
            onChange={handleInput}/>
            </div>

            <div style={{padding:"10px"}}>
            <label style={{paddingRight:"25px"}}>College -</label>
            <input required type="text" placeholder="college" name="college" value={internData.college} 
            onChange={handleInput}/>
            </div>

            <div style={{padding:"10px"}}>
            <label style={{paddingRight:"25px"}}>Contact -</label>
            <input required type="number" placeholder="contact" name="contact" value={internData.contact} 
            onChange={handleInput}/>
            </div>
            
            <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
            <br/>
            <br/>
            <button className="btn btn-primary" onClick={onClickGetData}>Get Data</button>
            <br/>
            <br/>
            {submitSuccess?<span>{submitSuccess}</span>:null}
            {submitError?<span>{submitError}</span>:null}
        </form>
      </div>
    </div>
  );
};

export default Internview;
