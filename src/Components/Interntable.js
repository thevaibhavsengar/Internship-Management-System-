import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from 'react-router-dom'
import {Button} from 'react-bootstrap';

const Interntable = () => {
    
    const navigate = useNavigate();
    const [internDatabase,setInternDatabase] = useState([]);

    useEffect(() => {
        getData();
    },[])

    function getData(){
        axios.get("http://localhost:4000/interns")
        .then((response) => setInternDatabase(response.data))
        .catch((error) => alert("Something went wrong"))
    }

    function HandleDelete(id){
        axios.delete(`http://localhost:4000/interns/${id}`)
        .then(setInternDatabase(internDatabase.filter((data) => data.id !== id)))
        .catch((error) => alert("something went wrong"))
    }

    function HandleUpdate(id){
        navigate(`/update/${id}`)
    }

  return (
    <div className='container'>
        <h1>Intern Details</h1>
      <Table striped bordered hover variant='dark'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>College</th>
                <th>Contact</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
                {internDatabase.map((itr) => (
                    <tr key={itr.id}>
                        <td>{itr.name}</td>
                        <td>{itr.email}</td>
                        <td>{itr.city}</td>
                        <td>{itr.college}</td>
                        <td>{itr.contact}</td>
                        <td>
                            <Button variant='warning' style={{margin:"10px"}} onClick={() => HandleUpdate(itr.id)}>Edit</Button>
                            <Button variant='danger' onClick={() => HandleDelete(itr.id)}>Delete</Button>
                        </td>
                    </tr>
                ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Interntable;
