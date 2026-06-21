import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Updatedata = () => {
  const [internData, setInternData] = useState({
    name: "",
    email: "",
    city: "",
    college: "",
    contact: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const [errorMessage, setErrorMesage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/interns/${id}`)
      .then((response) => setInternData(response.data))
      .catch();
  }, []);

  function handleInput(event) {
    let inName = event.target.name;
    let inValue = event.target.value;
    setInternData({...internData,[inName]:[inValue]})
  }

    function HandleSubmit(event) {
      event.preventDefault();
      let newInternData = JSON.stringify(internData);
      axios
        .put(`http://localhost:4000/interns/${id}`, newInternData)
        .then((response) => {
          setSubmitSuccess(`Data updated successfully`);
          setTimeout(() => navigate("/signup"),2000);
        })
        .catch((error) => setSubmitError(`Something went wrong`));
    }

    return (
      
        <div>
          <h1>
            Update
          </h1>
          <br/>
          <form className="myForm" onSubmit={HandleSubmit} style={{alignItems:"center"}}>
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
            
            <button className="btn btn-primary">Update</button>
            <br/>
            <br/>
            <br/>
            <br/>
            {submitSuccess?<span>{submitSuccess}</span>:null}
            {submitError?<span>{submitError}</span>:null}
        </form>
        </div>

    )
}

export default Updatedata
