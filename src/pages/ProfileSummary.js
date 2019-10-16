import React from 'react';
import {Card,Button } from 'react-bootstrap';
import '../css/ProfileSummary.css';
import { FaVideo ,FaBullhorn,FaWikipediaW} from 'react-icons/fa';

const cardstyle={
    background: "white",
    display:"flex"
}
const ProfileSummary = () => {
  return(
      
     <div className="container-fluid">
         <div className ="profile">
       <Card>
  <Card.Header style={cardstyle}>
     <div className="col-md-9"><p>   CV-Summarization Chart </p></div>
     <div className="col-md-3">
       <div className="d-flex justify-content-around">
        <div><p className="resume">Resume</p> </div>
     <div className="d-flex">
       <p className="px-2"><FaVideo/></p>
     <p  className="px-2"><FaBullhorn/></p>
     <p  className="px-2"> <FaWikipediaW/></p></div>
     <div>  <Button variant="outline-primary rounded-pill" className="btn_int">Interview</Button>
     </div>
       </div>
       </div>
    {/* <div className="col-md-1">Resume </div>
    <div className="col-md-1"><FaVideo/></div>
    <div className="col-md-1"> <FaBullhorn/></div>
    <div className="col-md-1"> <FaWikipediaW/></div>
    <div className="col-md-1"> Interview </div> */}
     </Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>  
    </div>  
  )

  
}
export default ProfileSummary;
