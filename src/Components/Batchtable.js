import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Mentorview from "./Mentorview";

const Batchtable = () => {
  const navigate = useNavigate();
  const[batchDatabase,setBatchDataBase] = useState([]);

  useEffect(() => {
    getBatchData();
  },[])

  function getBatchData(){
    axios.get("http://localhost:4000/batches")
    .then((response) => setBatchDataBase(response.data))
    .catch((error) => alert("Something went wrong"))
  }

  function HandleBatchDelete(id){
    axios.delete(`http://localhost:4000/batches/${id}`)
    .then(setBatchDataBase(batchDatabase.filter((data) => data.id !== id)))
    .catch((error) => alert("Something went wrong"))
  }

  function HandleBatchUpdate(id){
    navigate(`/batchUpdate/${id}`)
  }

  function HandleAddBatch(){
    navigate("/mentorview")
  }

  return (
    <div className="container-b" >
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
      <h1 style={{float:"left",marginTop:"5rem"}}>Batches</h1>
      <Table striped bordered variant="dark">
        <thead>
          <tr>
            <th>Title</th>
            <th>Created On</th>
            <th>Duration</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {batchDatabase.map((btc) => (
            <tr key={btc.id}>
            <td>{btc.title}</td>
            <td>{btc.createdOn}</td>
            <td>{btc.duration}</td>
            <td>{btc.description}</td>
            <td>
              <Button variant="warning" onClick={() => HandleBatchUpdate(btc.id)} style={{margin:"10px"}}>Edit</Button>
              <Button variant="danger" onClick={() => HandleBatchDelete(btc.id)}>Delete</Button>
            </td>
          </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={HandleAddBatch}>Add Batch</Button>
    </div>
  );
};

export default Batchtable;
