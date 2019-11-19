/* eslint-disable no-unused-vars */
import React from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Row, Col, Button, Image, Form, ButtonToolbar, Dropdown, DropdownButton, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Pie, } from '../../node_modules/react-chartjs-2/es/index'
import { FaTrash, FaEnvelopeOpen, FaEnvelope, FaEllipsisH, FaRegCircle, FaSpinner, FaCheckCircle, FaPencilAlt, FaPaperPlane, FaSearch, FaEllipsisV, FaCheck, FaExclamationCircle, FaCircle, FaRegEnvelope, FaPaperclip, FaRegCheckCircle, FaStar, FaRegTrashAlt } from 'react-icons/fa';
import '../css/RequireterMainPage.css';
import Calendar from './Calendar'
import AmChart from './New_chart'

const cardstyle = {
    background: "white",
    padding: "20px 20px 0px 20px"
}

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
                        <div className="card pl-3 pr-3 pb-3">
                            <div className="bg-white py-3 px-1 d-flex card-header ">
                                <div className="col-md-9 p-0">
                                    <h6 className="font-weight-bold text-dark">Top Ten</h6>
                                </div>
                                <div className="col-md-3">
                                    <h6 className="float-right"><FaEllipsisH /></h6>
                                </div>
                            </div>
                            <div className="bg-white pt-3 pb-2 d-flex justify-content-around">

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
                                <div className="col-md-3 p-0 text-right">
                                    <p className="mb-0"><FaEllipsisH size={22} /> </p>
                                    <p className="pc">100%</p>
                                    <p className="pc">match</p>
                                </div>



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
                                <div className="col-md-3 p-0 text-right">
                                    <p className="mb-0"><FaEllipsisH size={22} /> </p>
                                    <p className="pc">100%</p>
                                    <p className="pc">match</p>
                                </div>



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
                                <div className="col-md-3 p-0 text-right">
                                    <p className="mb-0"><FaEllipsisH size={22} /> </p>
                                    <p className="pc">100%</p>
                                    <p className="pc">match</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Live Action section */}
                    <Col md="6">
                        <div className="card pl-3 pr-3">
                            <div className="bg-white py-3 px-1 d-flex card-header ">
                                <div className="col-md-5 p-0">
                                    <h6 className="font-weight-bold text-dark">Live Actions</h6>
                                </div>
                                <div className="col-md-7">
                                    <h6 className="float-right"><FaEllipsisH /></h6>

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
                        <div className="card pl-3 pr-3">
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
                                <Image src="../XYZ-01.jpg" style={{ width: "100%", borderRadius: "8px", height: "140px" }} />
                            </div>
                            <div className="pt-4 pl-2">
                                <p className="mb-0 text-dark">Daniel Howard </p>
                                <p className="mb-2">UI Designer </p>
                                <p className="">Infosys Technologies Pvt Ltd</p>
                            </div>
                            <div className="p-3 pt-4 pb-4">
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

                                {/* 
                                <div className="right_icon" />

                                < FaRegCircle className="dot_icon" />

                                < FaRegCircle className="dot_icon" />
                                < FaRegCircle className="dot_icon" />
                                < FaRegCircle className="" /> */}

                            </div>
                            <div className="p-2">
                                <p className="btn-req float-right ">NEXT</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Seceond Row   */}
                <Row className="mt-4 mb-5">

                    {/* In-Mail section   */}
                    <Col md="9">
                        <div className="card">
                            <div style={cardstyle}>
                                <div className="row d-flex req-skil-head">
                                    <div className="col-md-10 p-0">
                                        <p className="req font-weight-bold text-dark"> In-Mail  </p>
                                    </div>
                                    <div className="col-md-2 text-right">
                                        <FaEllipsisH />
                                    </div>
                                </div>

                            </div>
                            <div className="p-3">
                                <div className="req-skil-head">
                                    <div className="row d-flex justify-content-around w-75">
                                        <p className="multi-skill">Account Manager</p>
                                        <p className="multi-skill">Client</p>
                                        <p className="python-skill">Candidate</p>
                                        <p className="multi-skill">Requiements</p>
                                        <p className="multi-skill">Interviews</p>

                                    </div>
                                </div>

                                <div className="row d-flex">
                                    <div className="col-md-1 p-0">
                                        <div className="mail-first">
                                            <FaEnvelope size={40} style={{ color: "#1474e5", marginBottom: "40px" }} />
                                            <FaPaperPlane size={40} style={{ color: "#b1b1b1", marginBottom: "40px" }} />
                                            <FaEnvelopeOpen size={40} style={{ color: "#b1b1b1", marginBottom: "40px" }} />
                                            <FaTrash size={40} style={{ color: "#b1b1b1", marginBottom: "40px" }} />
                                        </div>
                                    </div>
                                    <div className="col-md-11 p-0">
                                        <div className="row mail-sec">
                                            <div className="col-md-3 p-0 d-flex justify-content-around">
                                                <FaCheck style={{ color: "#b1b1b1" }} />
                                                <FaStar style={{ color: "#b1b1b1" }} />
                                                <FaTrash style={{ color: "#b1b1b1" }} />
                                                <p> Jazz Recruiters </p></div>

                                            <p> Crafted with love to help desiners build great mobile apps quickly </p>
                                            <FaPaperclip />
                                            <p>10 mins ago</p>
                                        </div>

                                        <div className="row mail-sec">
                                            <div className="col-md-3 p-0 d-flex justify-content-around">
                                                <FaCheck style={{ color: "#b1b1b1" }} />
                                                <FaStar style={{ color: "#b1b1b1" }} />
                                                <FaTrash style={{ color: "#b1b1b1" }} />
                                                <p> Jazz Recruiters </p></div>

                                            <p> Crafted with love to help desiners build great mobile apps quickly </p>
                                            <FaPaperclip />
                                            <p>10 mins ago</p>
                                        </div>

                                        <div className="row mail-sec">
                                            <div className="col-md-3 p-0 d-flex justify-content-around">
                                                <FaCheck style={{ color: "#b1b1b1" }} />
                                                <FaStar style={{ color: "#b1b1b1" }} />
                                                <FaTrash style={{ color: "#b1b1b1" }} />
                                                <p> Jazz Recruiters </p></div>

                                            <p> Crafted with love to help desiners build great mobile apps quickly </p>
                                            <FaPaperclip />
                                            <p>10 mins ago</p>
                                        </div>

                                        <div className="row mail-sec">
                                            <div className="col-md-3 p-0 d-flex justify-content-around">
                                                <FaCheck style={{ color: "#b1b1b1" }} />
                                                <FaStar style={{ color: "#b1b1b1" }} />
                                                <FaTrash style={{ color: "#b1b1b1" }} />
                                                <p> Jazz Recruiters </p></div>

                                            <p> Crafted with love to help desiners build great mobile apps quickly </p>
                                            <FaPaperclip />
                                            <p>10 mins ago</p>
                                        </div>

                                        <div className="row mail-sec">
                                            <div className="col-md-3 p-0 d-flex justify-content-around">
                                                <FaCheck style={{ color: "#b1b1b1" }} />
                                                <FaStar style={{ color: "#b1b1b1" }} />
                                                <FaTrash style={{ color: "#b1b1b1" }} />
                                                <p> Jazz Recruiters </p></div>

                                            <p> Crafted with love to help desiners build great mobile apps quickly </p>
                                            <FaPaperclip />
                                            <p>10 mins ago</p>
                                        </div>

                                        <div className="row mail-sec">
                                            <div className="col-md-3 p-0 d-flex justify-content-around">
                                                <FaCheck style={{ color: "#b1b1b1" }} />
                                                <FaStar style={{ color: "#b1b1b1" }} />
                                                <FaTrash style={{ color: "#b1b1b1" }} />
                                                <p> Jazz Recruiters </p></div>

                                            <p> Crafted with love to help desiners build great mobile apps quickly </p>
                                            <FaPaperclip />
                                            <p>10 mins ago</p>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </Col>

                    {/* Hire Analytics section   */}

                    <Col md="3">
                        <div className="card">
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

                            <div className="card-body pb-4 pt-1">
                                <div className="my-2">
                                    <AmChart />
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>


                <Row className="mt-4 mb-5">
                    <Col md="6">
                        <div className="card">
                            <div style={cardstyle} className="pb-4">
                                <div className="row d-flex req-skil-head">
                                    <div className="col-md-10 p-0">
                                        <p className="req font-weight-bold text-dark"> Interview scheduler </p>
                                    </div>
                                    <div className="col-md-2 text-right">
                                        <FaEllipsisH />
                                    </div>
                                </div>



                                <div className="row d-flex req-skil-head pt-3">
                                    <div className="col-md-5 p-0">
                                        <Calendar />
                                    </div>
                                    <div className="col-md-7 p-2">
                                        <div className="row d-flex">
                                            <div className="col-md-3 p-0 pt-2" ><p>Company</p></div>
                                            <div className="col-md-9 p-0" >
                                                <Form.Group controlId="exampleForm.ControlSelect1">
                                                    <Form.Control as="select" className="drp-cv font-int">
                                                        <option>Cognizant Technologies</option>
                                                        <option>Ui Developer</option>
                                                        <option> Web Developer</option>
                                                        <option> JS Developer</option>
                                                    </Form.Control>
                                                </Form.Group></div>
                                        </div>

                                        <div className="d-flex">
                                            <div className="col-md-6 p-1 ">
                                                <div className="d-flex int_time">
                                                    <p className="mb-0 mail mr-3"> 02:00 PM</p>
                                                    <p className="confirm_stl"> Confirm</p>
                                                </div>
                                                <div className="d-flex int_time">
                                                    <p className="mb-0 mail mr-3"> 02:00 PM</p>
                                                    <p className="confirm_stl"> Confirm</p>
                                                </div>
                                                <div className="d-flex int_time">
                                                    <p className="mb-0 mail mr-3"> 02:00 PM</p>
                                                    <p className="confirm_stl"> Confirm</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 p-1">
                                                <div className="d-flex int_time">
                                                    <p className="mb-0 mail mr-3"> 02:00 PM</p>
                                                    <p className=" confirm_stl"> Confirm</p>
                                                </div>
                                                <div className="d-flex int_time">
                                                    <p className="mb-0 mail mr-3"> 02:00 PM</p>
                                                    <p className="confirm_stl"> Confirm</p>
                                                </div>
                                                <div className="d-flex int_time">
                                                    <p className="mb-0 mail mr-3"> 02:00 PM</p>
                                                    <p className="confirm_stl"> Confirm</p>
                                                </div>


                                            </div>

                                        </div>
                                    </div>

                                </div>


                                <div className="d-flex int_sch_stl">


                                    <div className="col-md-4 pt-2">
                                        <p className="mb-0 ">Interview  With Marks</p>
                                        <p className=""></p>
                                    </div>

                                    <div className="col-md-4 pt-2">
                                        <p className="">Congnizant Technologies</p>
                                    </div>
                                    <div className="col-md-4 pt-2" >
                                        <p className="text-center"> 02:00 PM</p>
                                    </div>

                                </div>
                                <div className="d-flex int_sch_stl">
                                    <div className="col-md-4 pt-2">
                                        <p className="">Interview  With Marks</p>
                                    </div>

                                    <div className="col-md-4 pt-2">
                                        <p className="">Congnizant Technologies</p>
                                    </div>
                                    <div className="col-md-4 pt-2">
                                        <p className="text-center"> 02:00 PM</p>
                                    </div>

                                </div>
                                <div className="d-flex int_sch_stl">
                                    <div className="col-md-4 pt-2">
                                        <p className="">Interview  With Marks</p>
                                    </div>
                                    <div className="col-md-4 pt-2">
                                        <p className="">Congnizant Technologies</p>
                                    </div>
                                    <div className="col-md-4 pt-2" >
                                        <p className="text-center"> 02:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md="3">
                        <div className="card">
                            <div style={cardstyle} className="pb-5">
                                <div className="row d-flex req-skil-head">
                                    <div className="col-md-10 p-0">
                                        <p className="req font-weight-bold text-dark"> Interview Status </p>
                                    </div>
                                    <div className="col-md-2 text-right">
                                        <FaEllipsisH />
                                    </div>
                                </div>

                                <div className="pt-3 pb-3 req-skil-head ">
                                    <div className="d-flex">
                                        <div className="col-md-8 p-0">
                                            <p className="text-dark font-weight-bold mb-1">Sarrah Conner</p>
                                            <p className="mail pb-3" >10 mins ago </p>
                                            <p className="mail mb-0 " >UI Designer</p>
                                            <p className="mb-0">@ Cognizant Technologies</p>
                                            <p className="mail">Jazz Requireters</p>
                                        </div>
                                        <div className="col-md-4 p-0 text-right">
                                            <p className="pc"><FaCheckCircle /></p>
                                            <p className="pc" >100%</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-3 pb-3 req-skil-head">
                                    <div className="d-flex">
                                        <div className="col-md-8 p-0">
                                            <p className="text-dark font-weight-bold mb-1">Sarrah Conner</p>
                                            <p className="mail pb-3" >10 mins ago </p>
                                            <p className="mail mb-0 " >UI Designer </p>
                                            <p className="mb-0">@ Cognizant Technologies</p>
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


                    <Col md="3">
                        <div className="card">
                            <div style={cardstyle} className="pb-4">
                                <div className="row d-flex req-skil-head">
                                    <div className="col-md-10 p-0">
                                        <p className="req font-weight-bold text-dark">Live Interviews</p>
                                    </div>
                                    <div className="col-md-2 text-right">
                                        <FaEllipsisH />
                                    </div>
                                </div>


                                <div className="pt-4 mb-1">
                                    <Image src="../XYZ-01.jpg" style={{ width: "100%", borderRadius: "8px", height: "140px" }} />
                                </div>
                                <div className="pt-4 d-flex req-skil-head">
                                    <div className="col-md-9 p-0">
                                        <p className="mb-0 text-dark font-weight-bold">Ram </p>
                                        <p className="mb-0">UI Designer </p>
                                        <p className="">Infosys</p> </div>
                                    <div className="col-md-3 p-0 text-right">
                                        <FaCircle className="circle_int" />
                                    </div>
                                </div>
                                <div className="pt-4 d-flex req-skil-head">
                                    <div className="col-md-4 p-0">
                                        <Image src="../XYZ-01.jpg" className="img_liveint" />
                                    </div>
                                    <div className="col-md-6 p-0">
                                        <p className="mb-0 text-dark font-weight-bold">Ram</p>
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

                </Row>




            </div>
        )
    }
}
export default Welcome;
