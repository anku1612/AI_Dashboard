/* eslint-disable no-unused-vars */
import React from 'react';
import { Row, Col, Button, Image, ButtonToolbar, Dropdown, DropdownButton } from 'react-bootstrap';
import { Pie, } from '../../node_modules/react-chartjs-2/es/index'
import { FaEllipsisH ,FaSpinner, FaPencilAlt, FaPaperPlane, FaSearch, FaEllipsisV, FaCheck, FaExclamationCircle, FaCircle, FaRegEnvelope, FaPaperclip, FaRegCheckCircle, FaStar, FaRegTrashAlt } from 'react-icons/fa';
import '../css/RequireterMainPage.css';
import Calendar from './Calendar'
import AmChart from './New_chart'

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
            <div className="mt-5 mx-4">

                {/* First Row  */}
                <Row>
                    {/* For Top 10 Requirements */}
                    <Col md="3">
                        <div className="card">
                            <div className="bg-white py-3 px-1 d-flex card-header ">
                                <div className="col-md-9">
                                    <h6 className="font-weight-bold text-dark">Top Ten</h6>
                                </div>
                                <div className="col-md-3">
                                      <h6 className="float-right"><FaEllipsisH /></h6>
                                </div>
                            </div>
                            <div className="bg-white p-2 d-flex justify-content-around">
                          
                                    <Button variant="" className="btn-req">Req</Button>
                         
                            
                                    <Button variant="" className="btn-req reqstyle">Req </Button>
                       
                            
                                    <Button variant="" className="btn-req">Req </Button>
                             
                             
                            </div>
                            <div className="card-body d-flex">
                                <div className="col-md-2 p-0">
                                    <Image src="../profile1.png" roundedCircle className="img_req" />
                                </div>
                                <div className="col-md-6 p-0 ml-3">
                                    <p className="mb-0 text-dark font-weight-bold">Sharon Mathews </p>
                                    <p className="mb-0 ">10 mins ago</p>
                                    <p className="mb-0 ">UI Designer</p>
                                 
                                </div>
                                <div className="col-md-3 p-0 sec">
                                <FaEllipsisH />
                                    <p className="UsreName mb-0">100%</p>
                                    <p className="mb-0 mat pc">match</p>
                                </div>

                               
                                
                                </div>

                            <div className="card-body d-flex">
                                <div className="col-md-2 p-0">
                                    <Image src="../profile1.png" roundedCircle className="img_req" />
                                </div>
                                <div className="col-md-6 p-0 ml-3">
                                    <p className="mb-0 pc">Sharon Mathews </p>
                                    <p className="mb-0 ">UI Designer</p>
                                    <p className="mb-0 pc">10 mins ago</p>
                                </div>
                                <div className="col-md-3 p-0 sec">
                                    <p className="UsreName mb-0">100%</p>
                                    <p className="mb-0 mat pc">match</p>
                                </div>

                                <div className="col-md-1 p-0 mt-3">
                                    <FaEllipsisV />
                                </div> </div>

                            <div className="card-body d-flex">
                                <div className="col-md-2 p-0">
                                    <Image src="../profile1.png" roundedCircle className="img_req" />
                                </div>
                                <div className="col-md-6 p-0 ml-3">
                                    <p className="mb-0 pc">Sharon Mathews </p>
                                    <p className="mb-0 ">UI Designer</p>
                                    <p className="mb-0 pc">10 mins ago</p>
                                </div>
                                <div className="col-md-3 p-0 sec">
                                    <p className="UsreName mb-0 ">100%</p>
                                    <p className="mb-0 mat pc">match</p>
                                </div>

                                <div className="col-md-1 p-0 mt-3">
                                    <FaEllipsisV />
                                </div> </div>

                            <div className="card-body d-flex">
                                <div className="col-md-2 p-0">
                                    <Image src="../profile1.png" roundedCircle className="img_req" />
                                </div>
                                <div className="col-md-6 p-0 ml-3">
                                    <p className="mb-0 pc">Sharon Mathews </p>
                                    <p className="mb-0">UI Designer</p>
                                    <p className="mb-0 pc">10 mins ago</p>
                                </div>
                                <div className="col-md-3 p-0 sec">
                                    <p className="UsreName mb-0">100%</p>
                                    <p className="mb-0 mat pc">match</p>
                                </div>

                                <div className="col-md-1 p-0 mt-3">
                                    <FaEllipsisV />
                                </div> </div>
                        </div>
                    </Col>

                    {/* Live Action section */}
                    <Col md="6">
                        <div className="card">
                            <div className="bg-white py-3 px-1 d-flex card-header ">
                                <div className="col-md-5 d-flex">
                                    <div className="col-md-7">
                                        <h6 className="font-weight-bold head">Live Actions</h6>
                                    </div>
                                    <div className="col-md-2">
                                        <h6 className="float-right"><FaSpinner /></h6>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <h6 className="float-right"><FaEllipsisV /></h6>

                                </div>
                            </div>


                            <div className="card-body">
                                <Pie data={this.state.pieData} options={this.state.pieChartOptions}
                                    width={1000} height={600} redraw />
                            </div>
                        </div>
                    </Col>

                    {/* Live Screening Status section */}
                    <Col md="3">
                        <div className="card">
                            <div className="bg-white py-3 px-1 d-flex card-header ">
                                <div className="col-md-11 d-flex">
                                    <div className="col-md-10">
                                        <h6 className="font-weight-bold head">Live Screening Status</h6>
                                    </div>
                                    <div className="col-md-1">
                                        <h6 className="float-right"><FaSpinner /></h6>
                                    </div>
                                </div>
                                <div className="col-md-1">
                                    <h6 className="float-right"><FaEllipsisV /></h6>

                                </div>
                            </div>
                            <div className="">
                                <Image src="../XYZ-01.jpg" style={{ width: "100%" }} />
                            </div>
                            <div className="card-body pb-0">

                                <p className="UserName mb-0">Daniel Howard </p>
                                <p className="mb-0">UI Designer </p>
                                <p className="pc">Infosys Pvt Ltd</p>
                            </div>
                            <div className="card-body">
                                <FaCheck className="right_icon" />
                                < div className="dot_icon" />
                                <FaCheck className="right_icon" />
                                < div className="dotone_icon" />
                                <FaCheck className="right_icon" />
                                < div className="dottwo_icon" />
                                <FaExclamationCircle className="hold_icon" />
                                < div className="dotthree_icon" />
                                <FaCircle className="circle_icon" />


                            </div>
                            <div className="card-body p-0">
                                <p className="float-right pr-4">NEXT</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Seceond Row   */}
                <Row className="mt-4 mb-5">

                    {/* In-Mail section   */}
                    <Col md="9">
                        <div className="card">
                            <div className="bg-white py-3 px-1 d-flex card-header ">
                                <div className="col-md-9 ">
                                    <h6 className="font-weight-bold head">In-Mail</h6>
                                </div>
                                <div className="col-md-3">
                                    <h6 className="float-right"><FaEllipsisV /></h6>
                                </div>
                            </div>
                            <div className="bg-white p-3 d-flex card-body">
                                <div className="d-flex justify-content-around">
                                    <div className="">
                                        <Button variant="outline-primary rounded-pill" className="mail_btn">Account Manager</Button>
                                    </div>
                                    <div className="">
                                        <Button variant="outline-primary rounded-pill" className="mail_btn" active>Client</Button>
                                    </div>
                                    <div className="">
                                        <Button variant="outline-primary rounded-pill" className="mail_btn reqstyle">candidate</Button>
                                    </div>
                                    <div className="">
                                        <Button variant="outline-primary rounded-pill" className="mail_btn">Requiements</Button>
                                    </div>
                                    <div className="">
                                        <Button variant="outline-primary rounded-pill" className="mail_btn">Interviews</Button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-2 d-flex card-body">

                                <div className="col-md-2"><p className="mb-0"><FaRegEnvelope style={{ width: "60px", height: "50px", color: "#64c9f3" }} /></p>
                                    <p className="mb-0" style={{ color: "#64c9f3", marginLeft: "12px" }}>Inbox</p>
                                </div>
                                <div className="col-md-7">
                                    <p className="mb-0 mail">Sarah Connors</p>
                                    <p className="mb-0" style={{ color: "#717171", fontWeight: "bold" }}>Sub UI Designer <FaPaperclip /></p>
                                    <p className="mb-0 mail">Crafted with love to help Designer
                                     build great mobile apps quickly. crafted with
                                      love to help Designer build great mobile apps
  quickly.</p>


                                </div>

                                <div className="col-md-2">
                                    <p className="mail" style={{ textAlign: "right" }}>10 mins ago</p>
                                </div>
                                <div className=" mail_icons" >
                                    <div> <FaRegCheckCircle /></div>
                                    <div> <FaStar /></div>
                                    <div> <FaRegTrashAlt /></div>


                                </div>

                            </div>

                            <div className="bg-white p-2 d-flex card-body">

                                <div className="col-md-2"><p className="mb-0"><FaPaperPlane style={{ width: "50px", height: "40px" }} /></p>
                                    <p className="mb-0" style={{ marginLeft: "12px" }}>sent</p>
                                </div>
                                <div className="col-md-7">
                                    <p className="mb-0 mail">Sarah Connors</p>
                                    <p className="mb-0" style={{ color: "#717171", fontWeight: "bold" }}>Sub UI Designer <FaPaperclip /></p>
                                    <p className="mb-0 mail">Crafted with love to help Designer
                                     build great mobile apps quickly. crafted with
                                      love to help Designer build great mobile apps
  quickly.</p>


                                </div>

                                <div className="col-md-2">
                                    <p className="mail" style={{ textAlign: "right" }}>10 mins ago</p>
                                </div>
                                <div className=" mail_icons" >
                                    <div> <FaRegCheckCircle /></div>
                                    <div> <FaStar /></div>
                                    <div> <FaRegTrashAlt /></div>


                                </div>

                            </div>

                            <div className="bg-white p-2 d-flex card-body">

                                <div className="col-md-2"><p className="mb-0">
                                    <FaPencilAlt style={{ width: "50px", height: "40px" }} /></p>
                                    <p className="mb-0" style={{ marginLeft: "12px" }}>Draft</p>
                                </div>
                                <div className="col-md-7">
                                    <p className="mb-0 mail">Sarah Connors</p>
                                    <p className="mb-0" style={{ color: "#717171", fontWeight: "bold" }}>Sub UI Designer <FaPaperclip /></p>
                                    <p className="mb-0 mail">Crafted with love to help Designer
                                     build great mobile apps quickly. crafted with
                                      love to help Designer build great mobile apps
  quickly.</p>


                                </div>

                                <div className="col-md-2">
                                    <p className="mail" style={{ textAlign: "right" }}>10 mins ago</p>
                                </div>
                                <div className=" mail_icons" >
                                    <div> <FaRegCheckCircle /></div>
                                    <div> <FaStar /></div>
                                    <div> <FaRegTrashAlt /></div>


                                </div>

                            </div>

                            <div className="bg-white p-2 d-flex card-body">

                                <div className="col-md-2"><p className="mb-0">
                                    <FaRegTrashAlt style={{ width: "50px", height: "40px" }} /></p>
                                    <p className="mb-0" style={{ marginLeft: "12px" }}>Delete</p>
                                </div>

                            </div>
                        </div>
                    </Col>

                    {/* Hire Analytics section   */}

                    <Col md="3">
                        <div className="card">
                            <div className="bg-white py-3 px-1 d-flex card-header ">
                                <div className="col-md-9 ">
                                    <h6 className="font-weight-bold head">Hire Analytics</h6>
                                </div>
                                <div className="col-md-3">
                                    <h6 className="float-right"><FaEllipsisV /></h6>
                                </div>
                            </div>
                            <div className="card-body pb-4 pt-1">
                                <div className="my-2">
                               <AmChart/>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>


                <Row className="mt-4 mb-5">
                    <Col md="6">
                        <div className="card">
                            <div className="bg-white py-3 px-1 d-flex card-header ">
                                <div className="col-md-9">
                                    <h6 className="font-weight-bold head">Interview scheduler</h6>
                                </div>
                                <div className="col-md-3">
                                    <h6 className="float-right"><FaEllipsisV /></h6>
                                </div>
                            </div>

                            <div className="bg-white d-flex card-body p-0 pb-4">
                                <div className="col-md-6">
                                    <Calendar />
                                </div>
                                <div className="col-md-6 p-2">
                                    <div className="">
                                        <h6 className="d-flex my_title_head">Congnizant Technologies
                                                    <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basic" className="drop_down">
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Infosys</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Wipro</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">TCS</Dropdown.Item>
                                                    </Dropdown.Menu>

                                                </Dropdown>
                                            </h6>
                                    </div>
                                    <div className="d-flex">
                                        <div className="col-md-6 p-1 ">
                                            <div className="d-flex int_time">
                                                <p className="mb-0 mail mr-4"> 02:00 PM</p>
                                                <p className="mb-0  success"> Confirm</p>
                                            </div>
                                            <div className="d-flex int_time">
                                                <p className="mb-0 mail mr-4"> 02:00 PM</p>
                                                <p className="mb-0  success"> Confirm</p>
                                            </div>
                                            <div className="d-flex int_time">
                                                <p className="mb-0 mail mr-4"> 02:00 PM</p>
                                                <p className="mb-0  success"> Confirm</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-1">
                                            <div className="d-flex int_time">
                                                <p className="mb-0 mail mr-4"> 02:00 PM</p>
                                                <p className=" mb-0 success"> Confirm</p>
                                            </div>
                                            <div className="d-flex int_time">
                                                <p className="mb-0 mail mr-4"> 02:00 PM</p>
                                                <p className=" mb-0 success"> Confirm</p>
                                            </div>
                                            <div className="d-flex int_time">
                                                <p className="mb-0 mail mr-4"> 02:00 PM</p>
                                                <p className=" mb-0 success"> Confirm</p>
                                            </div>


                                        </div>

                                    </div>
                                </div>

                            </div>


                            <div className="bg-white p-3 d-flex card-body">

                                <div className="col-md-1">
                                    <h5 className="text_line">|</h5>
                                </div>
                                <div className="col-md-5 p-0">
                                    <p className="mb-0" style={{ color: "#717171", fontWeight: "bold", fontSize: "12px" }}>Interview schedule With Marks</p>
                                </div>

                                <div className="col-md-4">
                                    <p className="mail" style={{ textAlign: "center" }}>Congnizant Technologies</p>
                                </div>
                                <div className="col-md-2" >
                                    <p className="mb-0 mail"> 02:00 PM</p>
                                </div>

                            </div>

                            <div className="bg-white p-3 d-flex card-body">

                                <div className="col-md-1">
                                    <h5 className="text_line">|</h5>

                                </div>
                                <div className="col-md-5 p-0">
                                    <p className="mb-0" style={{ color: "#717171", fontWeight: "bold", fontSize: "12px" }}>Interview schedule With Marks</p>
                                </div>

                                <div className="col-md-4">
                                    <p className="mail" style={{ textAlign: "center" }}>Congnizant Technologies</p>
                                </div>
                                <div className="col-md-2" >
                                    <p className="mb-0 mail"> 02:00 PM</p>
                                </div>

                            </div>
                            <div className="bg-white p-3 d-flex card-body ">

                                <div className="col-md-1">
                                    <h5 className="text_line">|</h5>
                                </div>
                                <div className="col-md-5 p-0">
                                    <p className="mb-0" style={{ color: "#717171", fontWeight: "bold", fontSize: "12px" }}>Interview schedule With Marks</p>
                                </div>

                                <div className="col-md-4">
                                    <p className="mail" style={{ textAlign: "center" }}>Congnizant Technologies</p>
                                </div>
                                <div className="col-md-2" >
                                    <p className="mb-0 mail"> 02:00 PM</p>
                                </div>

                            </div>

                        </div>


                    </Col>

                    <Col md="3">
                        <div className="card">
                            <div className="bg-white py-3 px-1 d-flex card-header ">
                                <div className="col-md-9 ">
                                    <h6 className="font-weight-bold head">Interview Status</h6>
                                </div>
                                <div className="col-md-3">
                                    <h6 className="float-right"><FaEllipsisV /></h6>
                                </div>
                            </div>
                            <div className="bg-white p-1  card-body">
                                <div className="d-flex">  <div className="col-md-7">
                                    <p className="mb-0" style={{ color: "#717171", fontWeight: "bold" }}>Sankar</p>
                                    <p className="mb-0" >UI Developer </p>
                                    <p className="mb-0 mail">@ Cognizant Technologies</p>
                                    <p>Jazz Requireters</p>
                                </div>
                                    <div className="col-md-5 int_status">
                                        <p className="mb-0" style={{ color: "#717171" }}>Status</p>
                                        <p className="mb-0 success">Successful</p>
                                        <p className="mb-0 mail">10 mins ago</p>
                                    </div>
                                     </div>
                            </div>

                            <div className="bg-white p-1  card-body">
                                <div className="d-flex">  <div className="col-md-7">
                                    <p className="mb-0" style={{ color: "#717171", fontWeight: "bold" }}>Sankar</p>
                                    <p className="mb-0" >UI Developer </p>
                                    <p className="mb-0 mail">@ Cognizant Technologies</p>
                                    <p>Jazz Requireters</p>
                                </div>
                                    <div className="col-md-5 int_status">
                                        <p className="mb-0" style={{ color: "#717171" }}>Status</p>
                                        <p className="mb-0 success">Successful</p>
                                        <p className="mb-0 mail">10 mins ago</p>
                                    </div>
                                     </div>
                            </div>

                            <div className="bg-white p-1  card-body">
                                <div className="d-flex">  <div className="col-md-7">
                                    <p className="mb-0" style={{ color: "#717171", fontWeight: "bold" }}>Sankar</p>
                                    <p className="mb-0" >UI Developer </p>
                                    <p className="mb-0 mail">@ Cognizant Technologies</p>
                                    <p>Jazz Requireters</p>
                                </div>
                                    <div className="col-md-5 int_status">
                                        <p className="mb-0" style={{ color: "#717171" }}>Status</p>
                                        <p className="mb-0 denger">UnSuccessful</p>
                                        <p className="mb-0 mail">10 mins ago</p>
                                    </div>
                                     </div>
                            </div>

                            <div className="bg-white p-1  card-body">
                                <div className="d-flex">  <div className="col-md-7">
                                    <p className="mb-0" style={{ color: "#717171", fontWeight: "bold" }}>Sankar</p>
                                    <p className="mb-0" >UI Developer </p>
                                    <p className="mb-0 mail">@ Cognizant Technologies</p>
                                    <p>Jazz Requireters</p>
                                </div>
                                    <div className="col-md-5 int_status">
                                        <p className="mb-0" style={{ color: "#717171" }}>Status</p>
                                        <p className="mb-0 success">Successful</p>
                                        <p className="mb-0 mail">10 mins ago</p>
                                    </div>
                                     </div>
                            </div>
                        </div>
                    </Col>


                    <Col md="3">
                        <div className="card">
                            <div className="bg-white py-3 px-1 d-flex card-header ">
                                <div className="col-md-9 ">
                                    <h6 className="font-weight-bold head">Live Interviews</h6>
                                </div>
                                <div className="col-md-3">
                                    <h6 className="float-right"><FaEllipsisV /></h6>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div className="d-flex">
                                    <div className="col-md-6 p-3">
                                        <Image src="../XYZ-01.jpg" style={{ width: "100%" }} />
                                        <p className="mb-0" style={{ color: "#717171", fontWeight: "bold" }}>Ram</p>
                                        <p className="mb-0 mail">Congnizant Technologies</p>
                                        <p className="mb-0 mail">Java Developer</p>
                                        <p className="mb-0 success">In Progress</p>
                                    </div>
                                    <div className="col-md-6 p-3">
                                        <Image src="../XYZ-01.jpg" style={{ width: "100%" }} />
                                        <p className="mb-0" style={{ color: "#717171", fontWeight: "bold" }}>Ram</p>
                                        <p className="mb-0 mail">Congnizant Technologies</p>
                                        <p className="mb-0 mail">Java Developer</p>
                                        <p className="mb-0 success">In Progress</p>
                                    </div> 
                                      </div>
                            </div>


                            <div className="card-body d-flex p-0 pb-1 px-2">
                                <div className="col-md-3 p-2">
                                    <Image src="../XYZ-01.jpg" className="img_req" />
                                </div>
                                <div className="col-md-7 p-2">
                                    <p className="mb-0" style={{ color: "#717171", fontWeight: "bold" }}>Ram</p>
                                    <p className="mb-0 mail">Congnizant Technologies</p>
                                    <p className="mb-0 mail">Java Developer</p>
                                </div>
                                <div className="col-md-2 p-2">
                                    <FaCircle className="circle_int" />
                                </div> 
                                </div>

                            <div className="card-body d-flex p-0 pb-1 px-2">
                                <div className="col-md-3 p-2">
                                    <Image src="../XYZ-01.jpg" className="img_req" />
                                </div>
                                <div className="col-md-7 p-2">
                                    <p className="mb-0" style={{ color: "#717171", fontWeight: "bold" }}>Ram</p>
                                    <p className="mb-0 mail">Congnizant Technologies</p>
                                    <p className="mb-0 mail">Java Developer</p>
                                </div>
                                <div className="col-md-2 p-2">
                                    <FaCircle className="circle_int" />
                                </div>
                                 </div>

                            <div className="card-body d-flex p-0 pb-1 px-2">
                                <div className="col-md-3 p-2">
                                    <Image src="../XYZ-01.jpg" className="img_req" />
                                </div>
                                <div className="col-md-7 p-2">
                                    <p className="mb-0" style={{ color: "#717171", fontWeight: "bold" }}>Ram</p>
                                    <p className="mb-0 mail">Congnizant Technologies</p>
                                    <p className="mb-0 mail">Java Developer</p>
                                </div>
                                <div className="col-md-2 p-2">
                                    <FaCircle className="circle_int" />
                                </div>
                                </div>

                        </div>
                    </Col>

                </Row>




            </div>
        )
    }
}
export default Welcome;
