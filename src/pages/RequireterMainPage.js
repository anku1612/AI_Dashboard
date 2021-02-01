/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
import React from 'react';
import "react-step-progress-bar/styles.css";
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ProgressBar, Step } from "react-step-progress-bar";
import {Row, Col, Button, Image, Form, ButtonToolbar, Dropdown, DropdownButton, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Pie, } from '../../node_modules/react-chartjs-2/es/index'
import {FaSquare,FaAddressBook, FaTrash, FaEnvelopeOpen, FaEnvelope, FaEllipsisH, FaRegCircle, FaSpinner, FaCheckCircle, FaPencilAlt, FaPaperPlane, FaSearch, FaEllipsisV, FaCheck, FaExclamationCircle, FaCircle, FaRegEnvelope, FaPaperclip, FaRegCheckCircle, FaStar, FaRegTrashAlt } from 'react-icons/fa';
import '../css/RequireterMainPage.css';
import Calendar from './Calendar'
import AmChart from './New_chart'
import Hirechart from './Hirechart'
import Dashboard from './ProfileSummary';


const cardstyle = {
    background: "white",
    padding: "20px 20px 0px 20px"
}
const Account =() =>
<div className="">
<div className="row mail-sec">
    <div className="d-flex justify-content-around">
        <div className="col-md-3 d-flex justify-content-around">
        <FaCheck style={{ color: "#b1b1b1" }} />
        <FaStar style={{ color: "#b1b1b1" }} />
        <FaTrash style={{ color: "#b1b1b1" }} />
        </div>
      
        <div className="col-md-2 p-0">
        <p className="text-dark mb-0 mail font-weight-bold"> Jazz Recruiters </p>
        <p className="mail"> 10 mins ago </p>
        </div>
        
        <div className="col-md-1">
        <FaPaperclip />
        </div>
        <div className="col-md-6">
        <p className="mail">Crafted with love to help desiners build great mobile apps quickly </p>
        </div> 
    </div> 
    </div>
    <div className="row mail-sec">
    <div className="d-flex justify-content-around">
        <div className="col-md-3 d-flex justify-content-around">
        <FaCheck style={{ color: "#b1b1b1" }} />
        <FaStar style={{ color: "#b1b1b1" }} />
        <FaTrash style={{ color: "#b1b1b1" }} />
        </div>
      
        <div className="col-md-2 p-0">
        <p className="text-dark mb-0 mail font-weight-bold"> Jazz Recruiters </p>
        <p className="mail"> 10 mins ago </p>
        </div>
        
        <div className="col-md-1">
        <FaPaperclip />
        </div>
        <div className="col-md-6">
        <p className="mail">Crafted with love to help desiners build great mobile apps quickly </p>
        </div> 
    </div> 
    </div>
    <div className="row mail-sec">
    <div className="d-flex justify-content-around">
        <div className="col-md-3 d-flex justify-content-around">
        <FaCheck style={{ color: "#b1b1b1" }} />
        <FaStar style={{ color: "#b1b1b1" }} />
        <FaTrash style={{ color: "#b1b1b1" }} />
        </div>
      
        <div className="col-md-2 p-0">
        <p className="text-dark mb-0 mail font-weight-bold"> Jazz Recruiters </p>
        <p className="mail"> 10 mins ago </p>
        </div>
        
        <div className="col-md-1">
        <FaPaperclip />
        </div>
        <div className="col-md-6">
        <p className="mail">Crafted with love to help desiners build great mobile apps quickly </p>
        </div> 
    </div> 
    </div>
</div>

class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'React',
            lineData: {
                labels: ["Requirements", "Received CV's", "Intial Screening", "Completed Screening", "HOT CV's", "Rejected Candidates", "Phone Screens Scheduled", "Schedule an Interview", "Offers", "Hires"],
                datasets: [{
                    label: "Old User",
                    backgroundColor: '#08AEEA',
                    borderColor: '#08AEEA',
                    data: [5, 69, 5, 10, 20, 50, 6, 20, 80, 3],
                }]
            },

            pieData: {
                labels: ["Requirements", "Received CV's", "Intial Screening", "Completed Screening", "HOT CV's", "Rejected Candidates", "Phone Screens Scheduled", "Schedule an Interview", "Offers", "Hires"],
                datasets: [{
                    backgroundColor: [
                        'rgb(0,128,0)',
                        'rgb(63, 127, 191)',
                        'rgba(255, 0, 0, 0.7)',
                        'rgba(255, 100, 50, 0.7)',
                        'rgba(10, 100, 200, 0.7)',
                        'rgba(20, 110, 250, 0.7)',
                        'rgba(50, 210, 350, 0.7)',
                        'rgba(255, 100, 255, 0.7)',
                        'rgb(190, 120, 190)',
                        'rgba(250, 200, 10, 0.7)',
                    ],
                    borderColor: [
                        'rgb(0,128,0)',
                        'rgb(63, 127, 191)',
                        'rgba(255, 0, 0, 0.7)',
                        'rgba(255, 100, 50, 0.7)',
                        'rgba(10, 100, 200, 0.7)',
                        'rgba(20, 110, 250, 0.7)',
                        'rgba(50, 210, 350, 0.7)',
                        'rgba(255, 100, 255, 0.7)',
                        'rgb(190, 120, 190)',
                        'rgba(250, 200, 10, 0.7)',
                    ],
                    data: [5, 69, 5, 10, 20, 50, 6, 20, 80, 3],
                }]
            },

            pieChartOptions: {
                maintainAspectRatio: true,
                legend: {
                    position: 'right',
                }
            },
            dataFlow: {
                datasets: [{
                    backgroundColor: [
                        'rgb(0,128,0)',
                        'rgb(63, 127, 191)',
                        'rgba(255, 0, 0, 0.7)',
                        'rgba(255, 100, 50, 0.7)',
                        'rgba(10, 100, 200, 0.7)',
                        'rgba(20, 110, 250, 0.7)',
                        'rgba(50, 210, 350, 0.7)',
                        'rgba(255, 100, 255, 0.7)',
                        'rgb(190, 120, 190)',
                        'rgba(250, 200, 10, 0.7)',
                    ],
                    borderColor: [
                        'rgb(0,128,0)',
                        'rgb(63, 127, 191)',
                        'rgba(255, 0, 0, 0.7)',
                        'rgba(255, 100, 50, 0.7)',
                        'rgba(10, 100, 200, 0.7)',
                        'rgba(20, 110, 250, 0.7)',
                        'rgba(50, 210, 350, 0.7)',
                        'rgba(255, 100, 255, 0.7)',
                        'rgb(190, 120, 190)',
                        'rgba(250, 200, 10, 0.7)',
                    ],
                    data: [5, 69, 5, 10, 20, 50, 6, 20, 80, 3],
                }]
            },
        };
        // Create chart instance

    }
    render() {
        return (
            <div className="container-fluid">
            <div className="profile">
                {/* First Row  */}
                <Row>
                    {/* For Top 10 Requirements */}
                    <Col md="3">
                        <div className="cardstl card pl-3 pr-3 pb-4">
                            <div className="bg-white pb-2 px-1 d-flex card-header ">
                                <div className="col-md-9 p-0">
                                    <h6 className="font-weight-bold text-dark">Top Ten</h6>
                                </div>
                                <div className="col-md-3">
                                    <h6 className="float-right"><FaEllipsisH /></h6>
                                </div>
                            </div>
                            <div className="bg-white pt-4 pb-3 d-flex justify-content-around">
                                <Button variant="" className="btn-req">Req</Button>
                                <Button variant="" className="btn-req reqstyle">Req </Button>
                                <Button variant="" className="btn-req">Req </Button>
                            </div>
                            <div className="pt-3 pb-2 d-flex">
                                <div className="col-md-3 pl-0">
                                    <Image src="../profile1.png" roundedCircle className="img_req" />
                                </div>
                                <div className="col-md-7 p-0 dropdown">
                                    <Link to="/Dashboard"><p className="mb-0 text-dark font-weight-bold dropbtn">Sharon Mathews</p> </Link>
                                    {/* <div className="dropdown-content" >
                                            <Dashboard />
                                        </div>
                                    */}
                                    <p className="mb-0 ">10 mins ago</p>
                                    <p className="mb-0 ">UI Designer</p>

                                </div>
                                <div className="col-md-2 p-0 text-right">
                                    <p className="mb-0"><FaEllipsisH size={22} /> </p>
                                    <p className="pc">100%</p>
                                    <p className="pc">match</p>
                                </div>
                            </div>
                        </div>


                    <div className="p-2"></div>
                        <div className="cardstl card">
                            <div style={cardstyle} className="pb-2">
                                <div className="row d-flex req-skil-head">
                                    <div className="col-md-10 p-0">
                                        <p className="req font-weight-bold text-dark"> Interview Status </p>
                                    </div>
                                    <div className="col-md-2 text-right">
                                        <FaEllipsisH />
                                    </div>
                                </div>

                                <div className="pt-3">
                                    <div className="d-flex">
                                        <div className="col-md-8 p-0">
                                        <Link to="/Dashboard"><p className="text-dark font-weight-bold mb-1">Sarrah Conner</p></Link>  
                                            <p className="mail mb-0" >10 mins ago </p>
                                            <p className="mail pb-2" >UI Designer</p>
                                            <p className="mail mb-0">@ Cognizant Technologies</p>
                                            <p className="mail">Jazz Requireters</p>
                                        </div>
                                        <div className="col-md-4 p-0 text-right">
                                            <p className="pc"><FaCheckCircle /></p>
                                            <p className="pc" >100%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  
                    </Col>
                    {/* For Live Interviews */}
                    <Col md="3">
                    <div className="cardstl card pl-3 pr-3">
                            <div className="bg-white pb-2 px-1 ">
                                <div className="row pt-2 d-flex req-skil-head">
                                    <div className="col-md-10 p-0">
                                        <p className="req font-weight-bold text-dark">Live Interviews</p>
                                    </div>
                                    <div className="col-md-2 text-right">
                                        <FaEllipsisH />
                                    </div>
                                </div>
                                <div className="pt-3 mb-1">
                                    <Image src="../XYZ-01.jpg" style={{ width: "100%", borderRadius: "8px", height: "120px" }} />
                                </div>
                                <div className="pt-3 d-flex req-skil-head">
                                    <div className="col-md-9 p-0">
                                    <Link to="/Dashboard"><p className="mb-0 text-dark font-weight-bold">Sridhar</p></Link>
                                        <p className="mb-0">UI Designer </p>
                                        <p className="">Infosys</p> </div>
                                    <div className="col-md-3 p-0 text-right">
                                        <FaCircle className="circle_int" />
                                    </div>
                                </div>
                                <div className="pt-2 d-flex req-skil-head">
                                    <div className="col-md-4 p-0">
                                        <Image src="../XYZ-01.jpg" className="img_liveint" />
                                    </div>
                                    <div className="col-md-6 p-0">
                                    <Link to="/Dashboard"><p className="mb-0 text-dark font-weight-bold">Ram</p></Link>  
                                        <p className="mb-0">UI Designer </p>
                                        <p className="">Infosys</p>
                                    </div>
                                    <div className="col-md-2 p-0 text-right">
                                        <FaCircle className="circle_int" />
                                    </div>
                                </div>
                                <div className="pt-2 d-flex">
                                    <div className="col-md-4 p-0">
                                        <Image src="../XYZ-01.jpg" className="img_liveint" />
                                    </div>
                                    <div className="col-md-6 p-0">
                                    <Link to="/Dashboard"><p className="mb-0 text-dark font-weight-bold">Ram</p></Link>  
                                        <p className="mb-0">UI Designer </p>
                                        <p className="">Infosys</p>
                                    </div>
                                    <div className="col-md-2 p-0 text-right">
                                        <FaCircle className="circle_int" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    {/* Live Action section */}
                    <Col md="3">
                        <div className="cardstl card pl-3 pr-3">
                            <div className="bg-white pb-2 px-1 d-flex card-header ">
                                <div className="col-md-5 p-0">
                                    <h6 className="font-weight-bold text-dark">Live Actions</h6>
                                </div>
                                <div className="col-md-7">
                                    <h6 className="float-right"><FaEllipsisH /></h6>
                                </div>
                            </div>
                            <div className="p-2">
                                   <AmChart />
                                {/* <Pie data={this.state.pieData} options={this.state.pieChartOptions}
                                    width={1000} height={600} redraw /> */}
                                    <div className="p-2">
                                  <div className="chart-scrollbar">
                                        <div className="d-flex">
                                         <FaSquare style={{color:"#F7464A",marginTop:"3px"}}/>
                                         <p className="mb-2 pl-3">Requirements</p>
                                        </div>
                                        <div className="d-flex ">
                                         <FaSquare style={{color:"#3977a9",marginTop:"3px"}}/>
                                         <p className="mb-2 pl-3">Received CV's</p>
                                        </div>
                                        <div className="d-flex ">
                                         <FaSquare style={{color:"#0db91d",marginTop:"3px"}}/>
                                         <p className="mb-2 pl-3">Initial Screening</p>
                                        </div>
                                        <div className="d-flex">
                                         <FaSquare style={{color:"#ffc655",marginTop:"3px"}}/>
                                         <p className="mb-2 pl-3">Completed Screening</p>
                                        </div>
                                        <div className="d-flex">
                                         <FaSquare style={{color:"#fe756d",marginTop:"3px"}}/>
                                         <p className="mb-2 pl-3">HOT CV's</p>
                                        </div>
                                        <div className="d-flex">
                                         <FaSquare style={{color:"#b19dff",marginTop:"3px"}}/>
                                         <p className="mb-2 pl-3">Rejected Candidates</p>
                                        </div>
                                        <div className="d-flex">
                                         <FaSquare style={{color:"#ffb8e1",marginTop:"3px"}}/>
                                         <p className="mb-2 pl-3">Phone Screens Scheduled</p>
                                        </div>
                                        <div className="d-flex">
                                         <FaSquare style={{color:"#d1d1d1",marginTop:"3px"}}/>
                                         <p className="mb-2 pl-3">Offers</p>
                                        </div>
                                        <div className="d-flex">
                                         <FaSquare style={{color:"#f77ca4",marginTop:"3px"}}/>
                                         <p className="mb-2 pl-3">Hires</p>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </Col>
                    {/* Live Screening Status section */}
                    <Col md="3">
                        <div className="cardstl  card pl-3 pr-3">
                            <div className="bg-white d-flex card-header pl-0 pr-0">
                                <div className="col-md-11 d-flex pl-0 p-1">
                                    <div className="col-md-10 p-0">
                                        <h6 className="font-weight-bold text-dark">Live Screening Status</h6>
                                    </div>
                                    <div className="col-md-1">
                                        <h6 className="float-right"><FaSpinner /></h6>
                                    </div>
                                </div>
                                <div className="col-md-1">
                                    <h6 className="float-right"><FaEllipsisH /></h6>
                                </div>
                            </div>
                            <div className="pt-3">
                                <Image src="../XYZ-01.jpg" style={{ width: "100%", borderRadius: "8px", height: "120px" }} />
                            </div>
                            <div className="pt-3 pl-2">
                            <Link to="/Dashboard"><p className="mb-0 text-dark font-weight-bold">Daniel Howard</p> </Link>
                                <p className="mb-2">UI Designer </p>
                                <p className="">Infosys Technologies Pvt Ltd</p>
                            </div>
                            <div className="p-3 pt-5 pb-5">
                                <ProgressBar
                                    percent={75}
                                    fillBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                                >
                                    <Step transition="scale">
                                        {({ accomplished }) => (

                                            < FaRegCircle className="dot_icon" />
                                        )}
                                    </Step>
                                    <Step transition="scale">
                                        {({ accomplished }) => (
                                            < FaRegCircle className="dot_icon" />
                                        )}
                                    </Step>
                                    <Step transition="scale">
                                        {({ accomplished }) => (
                                            < FaRegCircle className="dot_icon" />
                                        )}
                                    </Step>
                                    <Step transition="scale">
                                        {({ accomplished }) => (
                                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">On Hold</Tooltip>}>
                                                <span className="d-inline-block">
                                                    < FaRegCircle className="red_cir" disabled style={{ pointerEvents: 'none' }} />
                                                </span>
                                            </OverlayTrigger>
                                        )}
                                    </Step>
                                    <Step transition="scale">
                                        {({ accomplished }) => (
                                            < FaRegCircle className="cir_icon" />
                                        )}
                                    </Step>
                                </ProgressBar>
                            </div>
                            <div className="p-2">
                                <p className="btn-req float-right ">NEXT</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* Seceond Row   */}
                <Row className="mt-4">
                    {/* In-Mail section   */}
                    <Col md="6">
                        <div className="cardstl  card">
                            <div style={cardstyle}>
                                <div className="row d-flex">
                                    <div className="col-md-2 p-0">
                                        <p className="req font-weight-bold text-dark"> In-Mail  </p>
                                    </div>
                                    <div className="col-md-10 p-0 text-right req-skil-head">
                                        <FaEllipsisH />
                                    </div>
                                </div>

                           
                            <div className="">
                                <div className="row d-flex">
                                    <div className="col-md-2 pl-0 pr-0">
                                        <div className="mail-first pb-2">
                                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Inbox</Tooltip>}>
                                                <span className="d-inline-block">
                                                <FaEnvelope size={25} style={{ color: "#1474e5", marginBottom: "25px" }} />
                                                </span>
                                            </OverlayTrigger>
                                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Sent</Tooltip>}>
                                                <span className="d-inline-block">
                                            <FaPaperPlane size={25} style={{ color: "#b1b1b1", marginBottom: "25px" }} />
                                                </span>
                                            </OverlayTrigger>
                                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">E-mail</Tooltip>}>
                                                <span className="d-inline-block">
                                            <FaEnvelopeOpen size={25} style={{ color: "#b1b1b1", marginBottom: "25px" }} />
                                                </span>
                                            </OverlayTrigger>
                                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Contacts</Tooltip>}>
                                                <span className="d-inline-block">
                                            <FaAddressBook size={25} style={{ color: "#b1b1b1", marginBottom: "25px" }} />
                                                </span>
                                            </OverlayTrigger>
                                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Remove</Tooltip>}>
                                                <span className="d-inline-block">
                                            <FaTrash size={25} style={{ color: "#b1b1b1", marginBottom: "25px" }} />
                                                </span>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                    <div className="col-md-10 p-0">
                                    <Router>
                                        <div className="d-flex justify-content-around pt-3 req-skil-head">
                                       <Link to="/Reqhome"> <p className="mb-0">Account Manager</p> </Link>
                                       <Link to="/Reqhome"> <p className="mb-0">Client</p> </Link>
                                       <Link to="/Reqhome"> <p className="can_stl mb-0">Candidate</p> </Link>
                                       <Link to=""> <p className="mb-0">Panelist</p> </Link>
                                       <Link to=""> <p className="mb-0">Requirements</p> </Link>
                                       <Link to=""> <p className="mb-0">Interviews</p> </Link>
                                        </div>
                                        <Switch>
                      <Route path="/Reqhome">
                        <Account />
                      </Route>
                    </Switch> </Router>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    {/* Hire Analytics section   */}

                    <Col md="3">
                        <div className="cardstl card">
                            <div style={cardstyle}>
                                <div className="row d-flex req-skil-head">
                                    <div className="col-md-10 p-0">
                                        <p className="req font-weight-bold text-dark"> Hire Analytics </p>
                                    </div>
                                    <div className="col-md-2 text-right">
                                        <FaEllipsisH />
                                    </div>
                                </div>

                            </div>
                           
                            <div className="card-body ">
                                <div className="mb-2">
                                    {/* <AmChart /> */}
                                    <Hirechart/>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="cardstl  card">
                            <div style={cardstyle} className="pb-3">
                                <div className="row d-flex req-skil-head">
                                    <div className="col-md-10 p-0">
                                        <p className="req font-weight-bold text-dark"> Interview scheduler </p>
                                    </div>
                                    <div className="col-md-2 text-right">
                                        <FaEllipsisH />
                                    </div>
                                </div>
                                <div className="pt-3 pb-3">
                                        <Calendar />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
              
              
              
              
              
               </div>
                </div>
        )
    }
}
export default Welcome;
