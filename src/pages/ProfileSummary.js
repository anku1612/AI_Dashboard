import React from 'react';
import { Card, Button, Image, Form } from 'react-bootstrap';
import '../css/ProfileSummary.css';
import { FaVideo, FaBullhorn, FaWikipediaW, FaEnvelope, FaPhone, FaRocketchat, FaFileAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Chartrow from './Chartrow';
import '../css/ResumeTimeline.css';
import Comment from './Comment';
const cardstyle = {
  background: "white",
  display: "flex"
}
const cardbodystyle = {
  display: "flex",
  padding: "0px 25px 10px 40px",
}
const cardonestyle = {
  background: "white",
  display: "flex",
  // paddingTop: "0px",
}
const ProfileSummary = () => {
  return (
    <div className="container-fluid">
      <div className="profile">
        <Card>
          <Card.Header style={cardstyle} className="row pb-0">
            <div className="col-md-8"><p className="head_con"> CV-Summarization Chart </p></div>
            <div className="col-md-4">
              <div className="d-flex justify-content-around pt-2">
                <div><p className="resume">Resume</p> </div>
                <div className="d-flex">
                  <p className="px-2"><FaVideo /></p>
                  <p className="px-2"><FaBullhorn /></p>
                  <p className="px-2"> <FaWikipediaW /></p></div>
                <div> <Button variant="outline-primary rounded-pill" className="btn_int">Interview</Button>
                </div>
              </div>
            </div>
          </Card.Header>
          <Card.Body style={cardstyle} className="c_body row">
            <div className="col-md-3 p-0">
              <div className="d-flex justify-content-around">
                <div>
                  <Image src="../profile1.png" roundedCircle className="img_pro" />
                </div>
                <div className="ml-3">
                  <p className="UsreName mb-0">Sharon Mathews </p>
                  <p className="mb-0">Senior java Programmer @infosys</p>
                  <div className="d-flex">
                    <div className="icon px-2"> <FaPhone /></div>
                    <div className="icon px-2"> <FaEnvelope /></div>
                    <div className="icon px-2"> <FaRocketchat /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-8">
              <div className="d-flex row justify-content-around align">
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
                  <div className="year_exp"><p className="exp_con">26</p>
                    <p className="yr">YRS EXP</p></div>
                </div>
              </div>
            </div>
          </Card.Body>
          <Card.Body style={cardstyle} className="row pt-2 pb-2">
            <div className="col-md-2 main">
              <p className="mb-1">Primary Skills</p>
              <p className="skills">JAVA, PHP</p>
            </div>
            <div className="col-md-2 main">
              <p className="mb-1">Time Period</p>
              <p className="skills">6 Year</p>
            </div>
            <div className="col-md-2 main">
              <p className="mb-1">Location</p>
              <p className="skills">Hyderabad</p>
            </div>
            <div className="col-md-2 main">
              <p className="mb-1">Notice period</p>
              <p className="skills">2 Months</p>
            </div>
            <div className="col-md-2 main">
              <p className="mb-1">Current CTC</p>
              <p className="skills">INR 2,00,000/-</p>
            </div>
            <div className="col-md-2 main">
              <p className="mb-1">Expected CTC</p>
              <p className="skills">INR 2,30,000/-</p>
            </div>
          </Card.Body>
          <Card.Body style={cardonestyle} className="pt-2 pb-2 row">
            <div className="col-md-2 main">
              <p className="mb-1">Documents Verified</p>
              <p className="per-details Doc"><FaFileAlt />Yes</p>
            </div>
            <div className="col-md-2 main">
              <p className="mb-1">Highest Education</p>
              <p className="per-details">MS IIT</p>
            </div>
            <div className="col-md-2 main">
              <p className="mb-1">Date Of Birth</p>
              <p className="per-details">16-02-1975</p>
            </div>
            <div className="col-md-2 main">
              <p className="mb-1">Marital Status</p>
              <p className="per-details">Married</p>
            </div>
            <div className="col-md-2 main">
              <p className="mb-1">Present Address</p>
              <p className="per-details">4-5-2/A, Shrinivasa colony kukatpally,
Hyderabad-500016</p>
            </div>
            <div className="col-md-2 main">
              <p className="mb-1">Permanent Address</p>
              <p className="per-details">4-5-2/A, Shrinivasa colony kukatpally,
Hyderabad-500016</p>
            </div>
          </Card.Body>
          <Chartrow />
          <Card.Header style={cardstyle}>
            <div className="col-md-10"><p className="head_con mb-0"> Resume Timeline</p></div>
            <div className="col-md-2">
              <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">
                <Form.Control as="select" className="drp-cv">
                  <option>Work Experience</option>
                  <option>Experience</option>
                  <option> Skills</option>
                  <option> Projects</option>
                </Form.Control>
              </Form.Group>
            </div>
          </Card.Header>
          <Card.Body>
            <div className="">
              <div className="row justify-content-around" style={cardstyle}>
                <div className="">
                  <p className="mb-0 resume-timeline">1998</p>
                  <p className="month">March</p>
                  <div className="circlemarch"></div>
                  <div className="line"></div>
                  <p className="mb-1 comp">Infosys</p>
                  <p className="month mb-1">Project Manager</p>
                  <p className="month loc mb-1">Suncity</p>
                  <div className="d-flex">
                    <p className="map-loc"><FaMapMarkerAlt color="red" /> </p>
                    <p className="mt">GR</p></div>
                </div>
                <div className=" ">
                  <p className="mb-0 resume-timeline">1999</p>
                  <p className="month">January</p>
                  <div className="circleone"></div>
                  <div className="lineone"></div>
                  <p className="mb-1 comp">Congizant</p>
                  <p className="month mb-1">Java Developer</p>
                  <p className="month mb-1">Hyderabad</p>
                </div>
                <div className="">
                  <p className="mb-0 resume-timeline">2001</p>
                  <p className="month">September</p>
                  <div className="circletwo"></div>
                  <div className="linetwo"></div>
                  <p className="mb-1 comp">TCS</p>
                  <p className="month mb-1">PHP Developer</p>
                  <p className="month loc mb-1">Munich</p>
                  <div className="d-flex">
                    <p className="map-loc"><FaMapMarkerAlt color="red" /> </p>
                    <p className="mt">SG</p></div>
                </div>
                <div className=" ">
                  <p className="mb-0 resume-timeline">2002</p>
                  <p className="month">March</p>
                  <div className="circleone"></div>
                  <div className="lineone"></div>
                  <p className="mb-1 comp">Infosys</p>
                  <p className="month mb-1">Project Manager</p>
                  <p className="month mb-1">Hyderabad</p>
                </div>
                <div className=" ">
                  <p className="mb-0 resume-timeline">2004</p>
                  <p className="month">January</p>
                  <div className="circleone"></div>
                  <div className="lineone"></div>
                  <p className="mb-1 comp">Congizant</p>
                  <p className="month mb-1">Java Developer</p>
                  <p className="month mb-1">Hyderabad</p>
                </div>
                <div className="">
                  <p className="mb-0 resume-timeline">2006</p>
                  <p className="month">September</p>
                  <div className="circletwo"></div>
                  <div className="linetwo"></div>
                  <p className="mb-1 comp">TCS</p>
                  <p className="month mb-1">PHP Developer</p>
                  <p className="month loc mb-1">New Jersy</p>
                  <div className="d-flex">
                    <p className="map-loc"><FaMapMarkerAlt color="red" /> </p>
                    <p className="mt">USA</p></div>
                </div>
                <div className=" ">
                  <p className="mb-0 resume-timeline">2010</p>
                  <p className="month">January</p>
                  <div className="circleone"></div>
                  <div className="lineone"></div>
                  <p className="mb-1 comp">TCS</p>
                  <p className="month mb-1">PHP Developer</p>
                  <p className="month mb-1">Hyderabad</p>
                </div>
                <div className=" ">
                  <p className="mb-0 resume-timeline">2019</p>
                  <p className="month">January</p>
                  <div className="circleone"></div>
                  <div className="lineone"></div>
                  <p className="mb-1 comp">TCS</p>
                  <p className="month mb-1">PHP Developer</p>
                  <p className="month mb-1">Hyderabad</p>
                </div>
              </div>
              <div className="">
              </div>
              <div className="">
                <div className="col-md-12" style={cardbodystyle}>
                  <div className="col-wid">
                    <p className="month mb-1">Worked at Gulf Oil Corporation..
Worked at Gulf Oil Corporation...</p> </div>
                  <div className="col-wid">
                    <p className="month mb-1">Worked at Gulf Oil Corporation..
Worked at Gulf Oil Corporation...</p> </div>
                  <div className="col-wid">
                    <p className="month mb-1">Worked at Gulf Oil Corporation..
Worked at Gulf Oil Corporation...</p> </div>
                  <div className="col-wid">
                    <p className="month mb-1">Worked at Gulf Oil Corporation..
Worked at Gulf Oil Corporation...</p> </div>
                  <div className="col-wid">
                    <p className="month mb-1">Worked at Gulf Oil Corporation..
Worked at Gulf Oil Corporation...</p> </div>
                  <div className="col-wid">
                    <p className="month mb-1">Worked at Gulf Oil Corporation..
Worked at Gulf Oil Corporation...</p> </div>
                  <div className="col-wid">
                    <p className="month mb-1">Worked at Gulf Oil Corporation..
Worked at Gulf Oil Corporation...</p> </div>
                  <div className="col-wid">
                    <p className="month mb-1">Worked at Gulf Oil Corporation..
Worked at Gulf Oil Corporation...</p> </div>
                </div>
              </div>
            </div>
          </Card.Body>
          <Comment />
        </Card>
      </div>
    </div>
  )
}
export default ProfileSummary;