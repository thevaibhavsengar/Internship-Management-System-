import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Mentorview = () => {

  const navigate = useNavigate();

  const [batchData, setBatchData] = useState({
    title: "",
    createdOn: "",
    duration: "",
    description: "",
  });

  const[saveSucess,setSaveSuccess] = useState("");
  const[saveError,setSaveError] = useState("");

  function handleInps(event) {
    let incName = event.target.name;
    let incValue = event.target.value;
    setBatchData({ ...batchData, [incName]: incValue });
  }

  function onClickBatchData() {
    navigate("/getBatchData/")
  }

  function handleSave(event) {
    event.preventDefault();
    let newBatchData = JSON.stringify(batchData);
    axios.post("http://localhost:4000/batches",newBatchData)
    .then((response) => setSaveSuccess(`Batch details saved sucessfully with id : ${response.data.id}`))
    .catch((error) => setSaveError(`Something went wrong`));
  }

  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "#A2CDF2" }}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page">
                Batches
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/get">
                Interns
              </Link>
            </li>
          </ul>
        </nav>
        <h1>Batch Details</h1>
        <form className="myForm" style={{ alignItems: "center" }}>
          <div style={{ padding: "10px", display: "block" }}>
            <label style={{ paddingRight: "80px" }}>Title - </label>
            <input
              type="text"
              name="title"
              value={batchData.title}
              onChange={handleInps}
            ></input>
          </div>

          <div style={{ padding: "10px", display: "block" }}>
            <label style={{ paddingRight: "80px" }}>Created On - </label>
            <input
              type="date"
              name="createdOn"
              value={batchData.createdOn}
              onChange={handleInps}
            ></input>
          </div>

          <div style={{ padding: "10px", display: "block" }}>
            <label style={{ paddingRight: "50px" }}>Duration - </label>
            <input
              type="text"
              name="duration"
              value={batchData.duration}
              onChange={handleInps}
            ></input>
          </div>

          <div style={{ padding: "10px", display: "block" }}>
            <label style={{ paddingRight: "30px" }}>Description - </label>
            <input
              type="text"
              name="description"
              value={batchData.description}
              onChange={handleInps}
            ></input>
          </div>
          <br />
          <Button onClick={handleSave} variant="primary">Save</Button>
          <Button onClick={onClickBatchData} variant="info" style={{marginLeft:"3rem"}}>Get Batch Data</Button>
          <br/>
          {saveSucess?<span>{saveSucess}</span>:null}
          {saveError?<span>{saveError}</span>:null}
        </form>
      </div>
    </>
  );
};

export default Mentorview;
