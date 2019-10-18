import React from 'react';
import {Card,Button,Image} from 'react-bootstrap';
import '../css/ProfileSummary.css';
import { FaVideo ,FaBullhorn,FaWikipediaW,FaEnvelope,FaPhone,FaRocketchat,FaFileAlt} from 'react-icons/fa';

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
  <Card.Body style={cardstyle} className="c_body">

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
 <div className="yrexp">
<div className="year_exp" ><p className="exp_con">26</p>
 <p className="yr">YRS EXP</p></div>
 </div>
</div>
  </div>
 
  </Card.Body>

  <Card.Body style={cardstyle}  >
<div className="col-md-2 main">
<p className="mb-1">Primary Skills</p>
<p className="skills">JAVA, PHP</p>
</div>

<div className="col-md-2 main">
<p className="mb-1">Time Period</p>
<p className="skills" >6 Year</p>
</div>
<div className="col-md-2 main">
<p className="mb-1">Location</p>
<p  className="skills">Hyderabad</p>
</div>
<div className="col-md-2 main">
<p className="mb-1" >Notice period</p>
<p  className="skills">2 Months</p>
</div>
<div className="col-md-2 main">
<p className="mb-1">Current CTC</p>
<p className="skills" >INR 2,00,000/-</p>
</div>
<div className="col-md-2 main">
<p className="mb-1">Expected CTC</p>
<p className="skills" >INR 2,30,000/-</p>
</div>
</Card.Body>



<Card.Body style={cardstyle}  className="cb_body">
<div className="col-md-2 main">
<p className="mb-1 ">Documents  Verified</p>
<p className="per-details Doc"><FaFileAlt/>Yes</p>
</div>

<div className="col-md-2 main">
<p className="mb-1">Highest Education</p>
<p className="per-details" >MS IIT</p>
</div>
<div className="col-md-2 main">
<p className="mb-1">Date Of Birth</p>
<p  className="per-details">16-02-1975</p>
</div>
<div className="col-md-2 main">
<p className="mb-1" >Marital Status</p>
<p  className="per-details">Married</p>
</div>
<div className="col-md-2 main">
<p className="mb-1">Present Address</p>
<p className="per-details" >4-5-2/A, Shrinivasa colony kukatpally,
Hyderabad-500016</p>
</div>
<div className="col-md-2 main">
<p className="mb-1">Permanent Address</p>
<p className="per-details" >4-5-2/A, Shrinivasa colony kukatpally,
Hyderabad-500016</p>
</div>
</Card.Body>
</Card>
</div>  
    </div>  
  )

  
}
export default ProfileSummary;
