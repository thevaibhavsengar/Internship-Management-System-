import logo from "./logo.svg";
import "./App.css";
import "./Components/Home.css";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Internview from "./Components/Internview";
import Interntable from "./Components/Interntable";
import Internlogin from "./Components/Internlogin";
import Mentorlogin from "./Components/Mentorlogin";
import Mentorview from "./Components/Mentorview";
import Updatedata from "./Components/Updatedata";
import Batchtable from "./Components/Batchtable";
import Updatebatchdata from "./Components/Updatebatchdata";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Internview/>}/>
          <Route path="/get" element={<Interntable/>}/>
          <Route path="/interLogin" element={<Internlogin/>}/>
          <Route path="/mentorlogin" element={<Mentorlogin/>}/>
          <Route path="/mentorview" element={<Mentorview/>}/>
          <Route path="/update/:id" element={<Updatedata/>}/>
          <Route path="/getBatchData" element={<Batchtable/>}/>
          <Route path="/batchUpdate/:id" element={<Updatebatchdata/>}/>
        </Routes>
      </BrowserRouter>

      {/* <Batchtable/> */}
      
    </div>
  );
}

export default App;
