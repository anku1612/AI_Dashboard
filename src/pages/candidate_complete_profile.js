import React from 'react';
import { Card, Button , Image, InputGroup, OverlayTrigger, Tooltip ,Form} from 'react-bootstrap';
import '../css/candidate_complete_profile.css';
import { ProgressBar, Step } from "react-step-progress-bar";
import { Link} from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { FaEllipsisH, FaSearch ,FaRegCircle ,FaCircle ,FaPaperclip ,FaPaperPlane} from 'react-icons/fa';
import { thumbsup } from 'react-icons-kit/ionicons/thumbsup';
import { thumbsdown } from 'react-icons-kit/ionicons/thumbsdown';
import { videocamera } from 'react-icons-kit/ionicons/videocamera';
import Calendar from './Calendar'

class candidate_complete_profile extends React.Component {
    render() {
        return (
            <div className="my_super_candidate">
                <div className="row my_candidate">
                    <div className="col-md-3">
                        <Card>
                            <Card.Body>
                                <div className="bg-white d-flex req-skil-head">
                                    <div className="col-md-12 d-flex pl-0 p-1 pb-2">
                                        <div className="col-md-10 p-0">
                                            <h6 className="font-weight-bold text-dark">Interview View</h6>
                                        </div>
                                        <div className="col-md-1">
                                            <h6 className="float-right"><FaSearch /></h6>
                                        </div>
                                        <div className="col-md-1">
                                            <h6 className="float-right"><FaEllipsisH /></h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-2 pb-2 req-skil-head ">
                                    <div className="d-flex">
                                        <div className="col-md-8 p-0">
                                        <Link to="/"><p className="text-dark font-weight-bold mb-1">Cognizant</p></Link>  
                                            <p className="mail pb-2" >10 mins ago </p>
                                            <p className="mb-0">Rajeev Chouhan / Agency</p>
                                        </div>
                                        <div className="col-md-4 p-0 text-right">
                                            <p className="Rej_stl" >Rejected</p>
                                        </div>
                                    </div>
                                    <div className="p-2 pt-4 pb-3">
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
                                             <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Date: 02/06/2019
                                            <br/> Accenture
                                            <br/>Agency Rec :Naresh
                                            <br/> Email :pavan@agency.Com
                                            <br/> Ph:989897878</Tooltip>}>
                                             <span className="d-inline-block">
                                            < FaRegCircle className="dot_icon"  disabled style={{ pointerEvents: 'none' }} />
                                            </span>
                                            </OverlayTrigger>
                                        )}
                                    </Step>
                                    <Step transition="scale">
                                        {({ accomplished }) => (
                                                    < FaRegCircle className="red_cir" />
                                        )}
                                    </Step>
                                    <Step transition="scale">
                                        {({ accomplished }) => (
                                            < FaRegCircle className="cir_icon" />
                                        )}
                                    </Step>
                                </ProgressBar>
                                </div>
                                </div>

                                <div className="pt-2 pb-2 req-skil-head">
                                    <div className="d-flex">
                                        <div className="col-md-8 p-0">
                                        <Link to="/Dashboard"><p className="text-dark font-weight-bold mb-1">Infosys</p></Link>  
                                            <p className="mail pb-2" >10 mins ago </p>
                                           
                                            <p className="mb-0">Srikanth Chauhan / Agency</p>
                                        </div>
                                        <div className="col-md-4 p-0 text-right">
                                            <p className="hired-stl mb-0">Hired</p>
                                        </div>
                                    </div>
                                    <div className=" p-2 pt-4 pb-3">
                                    <ProgressBar
                                    percent={100}
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
                                             <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Date: 02/06/2019
                                            <br/> Accenture
                                            <br/>Agency Rec :Naresh
                                            <br/> Email :pavan@agency.Com
                                            <br/> Ph:989897878</Tooltip>}>
                                             <span className="d-inline-block">
                                            < FaRegCircle className="dot_icon"  disabled style={{ pointerEvents: 'none' }} />
                                            </span>
                                            </OverlayTrigger>
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
                                </ProgressBar>
                                </div>
                                </div>
                                    <div className="pt-2 d-flex">
                                        <div className="col-md-8 p-0">
                                        <Link to="/Dashboard"><p className="text-dark font-weight-bold mb-1">Accenture</p></Link>  
                                            <p className="mail" >10 mins ago </p>
                                        </div>
                                        <div className="col-md-4 p-0 text-right">
                                        <p className="mb-0"><FaEllipsisH /></p>
                                            <p className="Rej_stl">Rejected</p>
                                        </div>
                                    </div>
                               </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card>
                            <Card.Body>
                            <div className="pb-2 bg-white d-flex req-skil-head">
                                    <div className="col-md-12 d-flex pl-0 p-1 pb-2">
                                        <div className="col-md-10 p-0">
                                            <h6 className="font-weight-bold text-dark">Recruiter Feedbacks</h6>
                                        </div>
                                        <div className="col-md-2">
                                            <h6 className="float-right"><FaEllipsisH /></h6>
                                        </div>
                                    </div>
                                </div>
                                    <div className="bg-white pt-3 pb-2 d-flex justify-content-around">
                                        <Button variant="" className="btn-req">Req</Button>
                                        <Button variant="" className="btn-req reqstyle">Req </Button>
                                        <Button variant="" className="btn-req">Req </Button>
                                    </div>
                                <div className="pt-3 pb-2 req-skil-head ">
                                <Link to="/Dashboard"><p className="text-dark font-weight-bold mb-1">Super Recruiters</p></Link>  
                                            <p className="mail pb-3" >10 mins ago </p>
                                    <div className="d-flex">
                                        <div className="col-md-8 p-0">
                                            <p className="mb-0">@ Cognizant Technologies</p>
                                            <p className="req_feed">"Keep up the good work"</p>
                                        </div>
                                        <div className="col-md-4 p-0 text-right">
                                <Icon size={30} icon={thumbsup} style={{ color: "#13db56" }} />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-3 pb-2 req-skil-head">
                                <Link to="/Dashboard"><p className="text-dark font-weight-bold mb-1">Super Recruiters</p></Link>  
                                            <p className="mail pb-3" >10 mins ago </p>
                                    <div className="d-flex">
                                        <div className="col-md-8 p-0">
                                            <p className="mb-0">Infosys</p>
                                            <p className="req_feed">"Need to improve"</p>
                                        </div>
                                        <div className="col-md-4 p-0 text-right">
                                  <Icon size={30} icon={thumbsdown} style={{ color: "red" }} />
                                        </div>
                                    </div>
                                </div>



                                 
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card>
                            <Card.Body className="">
                            <div className="pb-2 bg-white d-flex req-skil-head">
                                    <div className="col-md-12 d-flex pl-0 p-1 pb-2">
                                        <div className="col-md-10 p-0">
                                            <h6 className="font-weight-bold text-dark">Live Chat</h6>
                                        </div>
                                        <div className="col-md-2 text-right">
                                        <Icon size={30} icon={videocamera} style={{ color: "#12c2f5" }} />
                                        </div>
                                    </div>
                                </div>
                              
                                <div className="">
              <div className="d-flex">
                <div className="col-md-5 p-0">
                  <div className="card-body d-flex p-2 reava">
                    <div className="col-md-3 p-1">
                      <Image src="../XYZ-01.jpg" roundedCircle className="img_req" />
                    </div>
                    <div className="col-md-7 p-2">
                      <p className="mb-0 text-dark font-weight-bold">Harikrishna</p>
                      <p className="mb-0 mail">02:25 PM  02/12/2019</p>
                      <p className="mb-0">Cognizant Technologies</p>
                    </div>
                    <div className="col-md-2 p-2">
                      <FaCircle className="circle_int" />
                    </div>
                  </div>

                  <div className="card-body d-flex p-1">
                    <div className="col-md-3 p-2">
                      <Image src="../XYZ-01.jpg" roundedCircle className="img_req" />
                    </div>
                    <div className="col-md-7 p-2">
                      <p className="mb-0 text-dark font-weight-bold">Harikrishna</p>
                      <p className="mb-0 mail">02:25 PM  02/12/2019</p>
                      <p className="mb-0">Accenture</p>
                    </div>
                    <div className="col-md-2 p-2">
                      <FaCircle className="circle_int" />
                    </div>
                  </div>
                  <div className="card-body d-flex p-1">
                    <div className="col-md-3 p-2">
                      <Image src="../XYZ-01.jpg" roundedCircle className="img_req" />
                    </div>
                    <div className="col-md-7 p-2">
                      <p className="mb-0 text-dark font-weight-bold">Harikrishna</p>
                      <p className="mb-0 mail">02:25 PM  02/12/2019</p>
                      <p className="mb-0">Cognizant Technologies</p>
                    </div>
                    <div className="col-md-2 p-2">
                      <FaCircle className="circle_int" />
                    </div>
                  </div>
                </div>
                <div className="col-md-7 p-0 Live_bor-left">
                  <p className="text-reava p-2">Harikrishna</p>
                
                  <div className="chat-back">

                    <div className="d-flex Live_inputtwo">

                      <input className="form-control input-stl live_font" type="text" placeholder="Type your message here...." />
                      <Image src="../profile1.png" roundedCircle className="img-reava" />
                    </div>


                    <div className="d-flex Live_inputone">
                      <Image src="../profile1.png" roundedCircle className="img-reava" />
                      <input className="form-control live_font" style={{'borderRadius':'10px'}} type="text" placeholder="Keep Up the good work" />
                    </div>

                
                  </div>
                  <div className="Live_chatinput">
                      <InputGroup className="">
                        <input className="form-control search" type="text" placeholder="Keep Up the good work" />
                        <FaPaperclip  style={{ color: "#717171",position: "absolute",right: "40px", top: "10px"}} />
                        <FaPaperPlane style={{ color: "#53d0f7", position: "absolute",right: "15px", top: "10px"}} />
                      </InputGroup>
                    </div>
                </div>
              </div>
            </div>

            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="row candidate">
                    <div className="col-md-7">
                        <Card className="p-3">
                        <div className="row d-flex req-skil-head">
                                    <div className="col-md-10 p-0">
                                        <p className="req font-weight-bold text-dark"> Interview scheduler </p>
                                    </div>
                                    <div className="col-md-2 text-right">
                                        <FaEllipsisH />
                                    </div>
                                </div>

                                
                                <div className="row d-flex pb-2 pt-3">
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


                          
                       <div className="req-skil-head pl-1 p-2">
                       <p className="req font-weight-bold text-dark mb-0"> Interview @ Cognizant Technologies </p>
                <div className="row d-flex">
                    <div className="col-md-3 p-0">
                        <div className="d-flex">
                            <p className="mb-0 mr-3">02:00 PM</p>
                            <p className="mb-0">17/10/2019</p>
                        </div>
                        <div className="d-flex">
                            <p className="ict_stl"> Cancel</p>
                            <p className="ictc_stl">Confirm</p>
                        </div>
                    </div> 
                     <div className="col-md-2"></div>
                    <div className="col-md-3 p-0">
                        <div className="d-flex">
                        <p className="mb-0 mr-3">02:00 PM</p>
                            <p className="mb-0">17/10/2019</p>
                        </div>
                        <div className="d-flex">
                            <p className="ict_stl">Cancel</p>
                            <p className="ictc_stl">Confirm</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 p-0">
                        <div className="d-flex">
                            <p className="mb-0 mr-3">02:00 PM</p>
                            <p className="mb-0">17/10/2019</p>
                        </div>
                        <div className="d-flex">
                            <p className="ict_stl">Cancel</p>
                            <p className="ictc_stl">Confirm</p>
                        </div>
                    </div>
                </div>
                       </div>
                       
                       <div className="pl-1 p-2">
                       <p className="req font-weight-bold text-dark"> Interview @ Cognizant Technologies </p>
                       <div className="row d-flex">
                    <div className="col-md-3 p-0">
                        <div className="d-flex">
                            <p className="mb-0 mr-3">02:00 PM</p>
                            <p className="mb-0">17/10/2019</p>
                        </div>
                        <div className="d-flex">
                            <p className="ict_stl"> Cancel</p>
                            <p className="ictc_stl">Confirm</p>
                        </div>
                    </div> 
                     <div className="col-md-2"></div>
                    <div className="col-md-3 p-0">
                        <div className="d-flex">
                        <p className="mb-0 mr-3">02:00 PM</p>
                            <p className="mb-0">17/10/2019</p>
                        </div>
                        <div className="d-flex">
                            <p className="ict_stl">Cancel</p>
                            <p className="ictc_stl">Confirm</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 p-0">
                        <div className="d-flex">
                            <p className="mb-0 mr-3">02:00 PM</p>
                            <p className="mb-0">17/10/2019</p>
                        </div>
                        <div className="d-flex">
                            <p className="ict_stl">Cancel</p>
                            <p className="ictc_stl">Confirm</p>
                        </div>
                    </div>
                </div>
                      
                       </div>
                        </Card>
                    </div>
                    <div className="col-md-5 p-0">
                        <Card className="p-3">
                        <div className="row d-flex req-skil-head">
                                    <div className="col-md-10 p-0">
                                        <p className="req font-weight-bold text-dark"> Profile </p>
                                    </div>
                                    <div className="col-md-2 text-right">
                                        <FaEllipsisH />
                                    </div>
                                </div>
                          
                          <div className="row d-flex pb-4 pt-4">
                              <div className="col-md-5 p-0">
                              <Image src="../XYZ-01.jpg" style={{ width: "100%", borderRadius: "8px", height: "140px" }} />
                             <div className="profile_con">
                             <Link to="/">
                             <p className="req font-weight-bold text-dark mb-0"> Daniel Howard </p>
                             </Link>
                              <p className="mb-5 ui_stl">UI Designer </p>
                              <Button variant="" className="btn-req">Edit Profile</Button> 
                                 </div> 
                              </div>
                              <div className="col-md-7">
                             <p className="req font-weight-bold text-dark mb-0"> Test Your Skill </p>
                             <div className="d-flex pb-3 req-skil-head">
                                 <div className="col-md-5 p-0">
                                 <p className="pro_stl">85%</p> 
                                 <Button variant="" className="btn-req">Test Skills</Button> 
                                 </div>
                                 <div className="col-md-5 p-0">
                                 <p className="pt-2">Increase chances of your selection</p>
                                 </div>
                            <div className="col-md-2"> </div>
                              </div>
                              <p className="req font-weight-bold text-dark mb-0 pt-3"> Resume Ranking </p>
                             <div className="d-flex pb-3 req-skil-head mb-1">
                                 <div className="col-md-5 p-0">
                                 <p className="pro_stl">20%</p> 
                                 <Button variant="" className="btn-req"> Edit Resume </Button> 
                                 </div>
                                 <div className="col-md-5 p-0">
                                 <p className="pt-2">Update Resume for better results</p>
                                 </div>
                            <div className="col-md-2"> </div>
                              </div>
                              <p className="req font-weight-bold text-dark mb-0 pt-3"> Live Interview Panel </p>
                             <div className="d-flex pb-4 req-skil-head">
                                 <div className="col-md-6 p-0">
                                 <p className="pro_stl"> 10/10 </p> 
                                 <Button variant="" className="btn-req">Attend Interview</Button> 
                                 </div>
                                 <div className="col-md-5 p-0">
                                 <p className="pt-2">Panel Interview Score</p>
                                 </div>
                            <div className="col-md-1"> </div>
                              </div>
                              </div>
                          </div>
                          
                             </Card>
                    </div>
                </div>
            </div>
        )
    }
}
export default candidate_complete_profile;