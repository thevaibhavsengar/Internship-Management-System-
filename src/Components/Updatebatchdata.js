import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Updatebatchdata = () => {

  const [errorMessage, setErrorMesage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [submitError, setSubmitError] = useState("");

  const [batchData, setBatchData] = useState({
    title: "",
    createdOn: "",
    duration: "",
    description: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/batches/${id}`)
    .then((response) => setBatchData(response.data))
    .catch();
  },[])

  function handleInput(event) {
    let inName = event.target.name;
    let inValue = event.target.value;
    setBatchData({...batchData,[inName]:[inValue]})
  }

  function handleUpSave(event){
    event.preventDefault();
    let newBatchData = JSON.stringify(batchData);

    axios.put(`http://localhost:4000/batches/${id}`,newBatchData)
    .then((response) => {
        setSubmitSuccess(`Data updated successfully`);
        setTimeout(() => navigate("/getBatchData"),2000);
    })
    .catch((error) => setSubmitError(`Something went wrong`));
  }

  return (
    <div>
      <h1>Update Batch details</h1>
      <form className="myForm" style={{ alignItems: "center" }}>
          <div style={{ padding: "10px", display: "block" }}>
            <label style={{ paddingRight: "80px" }}>Title - </label>
            <input
              type="text"
              name="title"
              value={batchData.title}
              onChange={handleInput}
            ></input>
          </div>

          <div style={{ padding: "10px", display: "block" }}>
            <label style={{ paddingRight: "80px" }}>Created On - </label>
            <input
              type="date"
              name="createdOn"
              value={batchData.createdOn}
              onChange={handleInput}
            ></input>
          </div>

          <div style={{ padding: "10px", display: "block" }}>
            <label style={{ paddingRight: "50px" }}>Duration - </label>
            <input
              type="text"
              name="duration"
              value={batchData.duration}
              onChange={handleInput}
            ></input>
          </div>

          <div style={{ padding: "10px", display: "block" }}>
            <label style={{ paddingRight: "30px" }}>Description - </label>
            <input
              type="text"
              name="description"
              value={batchData.description}
              onChange={handleInput}
            ></input>
          </div>
          <br />
          <Button onClick={handleUpSave} variant="primary">Update</Button>
          {/* <Button variant="info" style={{marginLeft:"3rem"}}>Get Batch Data</Button> */}
          <br/>
          {submitSuccess?<span>{submitSuccess}</span>:null}
          {submitError?<span>{submitError}</span>:null}
        </form>
    </div>
  )
}

export default Updatebatchdata
