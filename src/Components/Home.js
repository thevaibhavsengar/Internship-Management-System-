import React from "react";
import { Button, Card, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function handleInternLoginClick() {
    navigate("/interLogin/");
  }

  function handleMentorLoginClick() {
    navigate("/mentorlogin/");
  }

  return (
    <div>
      <div>
      <nav className="navbar" style={{backgroundColor:"#A2CDF2"}}>
       
        <a className="navbar-brand" href="#" style={{marginLeft:"30px"}}>Home</a>
        
      </nav>
      </div>
      <div className="home">
        <div className="left-section">
          <Card style={{ width: "25rem", height: "23rem", marginTop: "-7rem" }}>
            <Card.Img
              variant="top"
              src="https://t4.ftcdn.net/jpg/02/63/38/55/360_F_263385574_H7SxVE8PwEY6p3Ur32MI4CsdgwXhEoaM.jpg"
            />
          </Card>
          <br />
          <br />
          <Button variant="success" onClick={handleMentorLoginClick}>Mentor Login</Button>
        </div>
        <div className="right-section">
          <Card style={{ width: "25rem", height: "23rem", marginTop: "-7rem" }}>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrWfCXQ9uI34r9blrHNqgeo5NiJ6xUj8zf9A&s"
            />
          </Card>
          <br />
          <br />
          <Button variant="primary" onClick={handleInternLoginClick}>Intern Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
