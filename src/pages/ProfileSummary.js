import React from 'react';
import {Card,Button,Image} from 'react-bootstrap';
import '../css/ProfileSummary.css';
import { FaVideo ,FaBullhorn,FaWikipediaW,FaEnvelope,FaPhone,FaRocketchat} from 'react-icons/fa';

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
     <div className="col-md-9"><p className="head_con">   CV-Summarization Chart </p></div>
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
     </Card.Header>
  <Card.Body style={cardstyle}>
  <div className="col-md-3">
    <div className="d-flex justify-content-around">
    <div>
  <Image src="../profile1.png" roundedCircle className="img_pro" />
  </div>
  <div className="Pro_con">
<p className="UsreName">Sharon Mathews </p>
<p>Senior java Programmer @infosys</p>
  <div className="d-flex"> 
  <div eventKey={4}  className="icon px-2"> <FaPhone/></div> 
  <div eventKey={4}  className="icon px-2"> <FaEnvelope/></div> 
  <div eventKey={4}  className="icon px-2"> <FaRocketchat/></div> 
  </div>
  </div>
  </div>
  </div>
  <div className="col-md-9">
    <div className="d-flex  justify-content-around align" >
<div className="User_con"> <p>Status</p>
 <p className="login">Logged in</p></div>
<div className="User_con"> <p>Visa:</p>
 <p className="_con">H1B</p></div>
<div className="User_con"> <p>Employed</p>
 <p className="agency">Agency</p></div>
<div className="User_con"> <p>Rank</p>
 <p className="_con">100%</p></div>
<div className="User_con"><p>Interview</p>
 <p className="_con">25</p></div>
<div className="User_con"><p>Qualified</p>
 <p className="login">20</p></div>
<div className="User_con"> <p>Rejected</p>
 <p className="reject">05</p></div>
<div ><p className="exp_con">26</p>
 <p className="yr">YRS EXP</p></div>

</div>
  </div>
  </Card.Body>
</Card>
</div>  
    </div>  
  )

  
}
export default ProfileSummary;
