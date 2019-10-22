import React from 'react';
import { Card, ListGroup, Button, Dropdown, Image,InputGroup } from 'react-bootstrap';
import '../css/candidate_complete_profile.css';
import { Icon } from 'react-icons-kit';
import { androidSearch } from 'react-icons-kit/ionicons/androidSearch';
import { androidMoreVertical } from 'react-icons-kit/ionicons/androidMoreVertical';
import { thumbsup } from 'react-icons-kit/ionicons/thumbsup';
import { thumbsdown } from 'react-icons-kit/ionicons/thumbsdown';
import { iosLightbulbOutline } from 'react-icons-kit/ionicons/iosLightbulbOutline';
import { videocamera } from 'react-icons-kit/ionicons/videocamera';
import { iosPersonadd } from 'react-icons-kit/ionicons/iosPersonadd';
import Calendar from './Calendar'
import {ic_send} from 'react-icons-kit/md/ic_send'
import {ic_attachment} from 'react-icons-kit/md/ic_attachment'

class candidate_complete_profile extends React.Component {
    render() {
        return (
            <div className="my_super_candidate">
                <div className="my_candidate">
                    <div className="col-md-3">
                        <Card>
                            <Card.Body>
                                <div className="my_icon">
                                    <Card.Title className="my_titel">Interview view</Card.Title>
                                    <Icon className="Search" size={28} icon={androidSearch} />
                                    <Icon size={30} icon={androidMoreVertical} />
                                </div>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <div className="head_titl" >
                                            Congnizant Technologies
                                            </div>
                                        <p className="m-1" style={{ fontSize: "15px", color: "#b14037" }}>Rejected</p>
                                        <p className="my_status">10 mins ago</p>
                                        <p className="">Organization (Direct)</p>
                                        <div className="my_progress">
                                            <div className="my_dots">
                                            </div>
                                            <div className="horizantal_line">
                                            </div>
                                            <div className="my_dotsv">
                                            </div>
                                            <div className="horizantal_linev">
                                            </div>
                                            <div className="dotsv">
                                            </div>
                                            <div className="linev">
                                            </div>
                                            <div className="dotsv_end">
                                            </div>
                                            <div className="linev_end">
                                            </div>
                                            <div className="_ended">
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="head_titl" >Congnizant Technologies</div>
                                        <p className="m-1" style={{ fontSize: "15px", color: "#282c34" }}>Pending</p>
                                        <p className="my_status">10 mins ago</p>
                                        <p className="">Organization (Direct)</p>
                                        <div className="my_progress">
                                            <div className="my_dots">
                                            </div>
                                            <div className="horizantal_line">
                                            </div>
                                            <div className="my_dotsv">
                                            </div>
                                            <div className="horizantal_linev">
                                            </div>
                                            <div className="dotsv">
                                            </div>
                                            <div className="linev">
                                            </div>
                                            <div className="dotsv_end">
                                            </div>
                                            <div className="linev_end">
                                            </div>
                                            <div className="_ended">
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="head_titl" >
                                            Congnizant Technologies
                                            </div>
                                        <p className="m-1" style={{ fontSize: "15px", color: "green" }}>Hired</p>
                                        <p className="my_status">10 mins ago</p>
                                        <p className="">Organization (Direct)</p>
                                        <div className="my_progress">
                                            <div className="my_dots">
                                            </div>
                                            <div className="horizantal_line">
                                            </div>
                                            <div className="my_dotsv">
                                            </div>
                                            <div className="horizantal_linev">
                                            </div>
                                            <div className="dotsv">
                                            </div>
                                            <div className="linev">
                                            </div>
                                            <div className="dotsv_end">
                                            </div>
                                            <div className="linev_end">
                                            </div>
                                            <div className="_ended">
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <Card.Body>
                                <div className="items_ico">
                                    <Card.Title>Recruiter Feedbacks</Card.Title>
                                    <Icon size={30} icon={androidMoreVertical} />
                                </div>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="my_filters">
                                        <Button variant="outline-info" className="my_button">filter 1</Button>
                                        <Button variant="outline-info" className="my_button">filter 2</Button>
                                        <Button variant="outline-info" className="my_button">filter 3</Button>
                                        <Button variant="outline-info" className="my_button">filter 4</Button>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="my_align">
                                        <div className="col-md-2">
                                            <Icon size={30} icon={thumbsup} style={{ color: "green" }} />
                                        </div>
                                        <div className="col-md-8 p-0">
                                            <p className="recruiter">Recruiter</p>
                                            <p className="my_req" style={{ color: "green" }}>Interview @ Congnizant Technologies</p>
                                            <p className="my_req">Excellent Keep up the Good work</p>
                                            <p className="my_req">10 Mins ago</p>
                                        </div>
                                        <div className="col-md-2">
                                            <Icon size={30} icon={androidMoreVertical} />
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="my_align">
                                        <div className="col-md-2">
                                            <Icon size={30} icon={thumbsdown} style={{ color: "red" }} />
                                        </div>
                                        <div className="col-md-8 p-0">
                                            <p className="recruiter">Recruiter</p>
                                            <p className="my_req" style={{ color: "red" }}>Interview @ Congnizant Technologies</p>
                                            <p className="my_req">Excellent Keep up the Good work</p>
                                            <p className="my_req">10 Mins ago</p>
                                        </div>
                                        <div className="col-md-2">
                                            <Icon size={30} icon={androidMoreVertical} />
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="my_align">
                                        <div className="col-md-2">
                                            <Icon size={30} icon={iosLightbulbOutline} style={{ color: "#12c2f5" }} />
                                        </div>
                                        <div className="col-md-8 p-0">
                                            <p className="recruiter">Recruiter</p>
                                            <p className="my_req" style={{ color: "#12c2f5" }}>Interview @ Congnizant Technologies</p>
                                            <p className="my_req">Excellent Keep up the Good work</p>
                                            <p className="my_req">10 Mins ago</p>
                                        </div>
                                        <div className="col-md-2">
                                            <Icon size={30} icon={androidMoreVertical} />
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="my_align">
                                        <div className="col-md-2">
                                            <Icon size={30} icon={iosLightbulbOutline} style={{ color: "#12c2f5" }} />
                                        </div>
                                        <div className="col-md-8 p-0">
                                            <p className="recruiter">Recruiter</p>
                                            <p className="my_req" style={{ color: "#12c2f5" }}>Interview @ Congnizant Technologies</p>
                                            <p className="my_req">Excellent Keep up the Good work</p>
                                            <p className="my_req">10 Mins ago</p>
                                        </div>
                                        <div className="col-md-2">
                                            <Icon size={30} icon={androidMoreVertical} />
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-5 p-0">
                        <Card>
                            <Card.Body className="pr-2">
                                <div className="main_body d-flex">
                                    <div className=" d-flex">
                                        <Icon size={30} icon={videocamera} style={{ color: "#12c2f5" }} />
                                        <Card.Title className="mb-0 pl-2">Live Chat</Card.Title>
                                    </div>
                                    <div className="">
                                        <Icon size={50} icon={androidMoreVertical} />
                                    </div>
                                </div>
                                {/* <ListGroup.Item></ListGroup.Item> */}
                                <ListGroup variant="flush">
                                    <div className="col-md-12 p-0 d-flex">
                                        <div className="col-md-5 p-0 finde_border">
                                            <ListGroup.Item className="d-flex my_items p-1" style={{ background: "#87ceec" }}>
                                                <div className="user_icon">
                                                    <Icon size={20} icon={iosPersonadd} />
                                                </div>
                                                <div className="my_text">
                                                    <p className="my_title mb-0 ml-3" style={{ color: "white" }}>ramakrishna<br /> Congnizant Technologies</p>
                                                    <div className="my_circle">
                                                    </div>
                                                    <p className="my_title mb-0 ml-3" style={{ color: "white" }}>02:PM 17/10/2019</p>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item className="d-flex my_items p-1" style={{ background: "white" }}>
                                                <div className="user_icon">
                                                    <Icon size={20} icon={iosPersonadd} />
                                                </div>
                                                <div className="my_text">
                                                    <p className="my_title mb-0 ml-3" style={{ color: "black" }}>ramakrishna<br /> Congnizant Technologies</p>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item className="d-flex my_items p-1" style={{ background: "white" }}>
                                                <div className="user_icon">
                                                    <Icon size={20} icon={iosPersonadd} />
                                                </div>
                                                <div className="my_text">
                                                    <p className="my_title mb-0 ml-3" style={{ color: "black" }}>ramakrishna<br /> Congnizant Technologies</p>
                                                </div>
                                            </ListGroup.Item>
                                        </div>

                                        <div className="col-md-7 p-0 vestibulum">
                                            <ListGroup.Item>Ramakrishna</ListGroup.Item>
                                            <div className="circle">
                                            </div>
                                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>

                                            <div className="d-flex chat_inputtwo">

<input className="form-control Chat_user_input text-white"  type ="text" placeholder="Tyep your message here...." />
<Image src="../profile1.png" roundedCircle className="img_chat" />
</div>


<div className="d-flex chat_inputone">
<Image src="../profile1.png" roundedCircle className="img_chat" />
<input className="form-control" type ="text" placeholder="Tyep your message here...." />
</div>

                                            <div className="chat_input">
                                            <InputGroup className="">
                                                <input className="form-control" type ="text" placeholder="Tyep your message here...." />
                                                <Icon size={30} className="icon_chat" icon={ic_send} />
                                                <Icon size={30} className="my_icon_lable" icon={ic_attachment} />
                                                 </InputGroup> 
                                            </div>
                                        </div>
                                    </div>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="candidate">
                    <div className="col-md-7">
                        <Card className="p-3">
                            <div className="scheduler d-flex">
                                <Card.Header className="border_my" style={{ color: "#717171", fontSize: "30px", fontWeight: "500" }}>Interview Scheduler</Card.Header>
                                <Icon size={40} icon={androidMoreVertical} />
                            </div>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="d-flex my_claender">
                                <div className="col-md-6 p-2">
                                        <div className="confirm_intrview">
                                        <Calendar/>
                               </div>
                                    </div>
                                    <div className="col-md-6 p-2">
                                        <div className="confirm_intrview">
                                            <h6 className="d-flex my_title_head">Congnizant Technologies
                                                    <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basic" className="drop_down">
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </Dropdown.Menu>

                                                </Dropdown>
                                            </h6>
                                            <div className="items_alined d-flex">
                                                <div className="main_content d-flex col-md-6 p-0 pb-1">
                                                    <div className="dataset d-flex">
                                                        <div className="my_confirmed">
                                                            <p className="time_confirm mb-2 mt-2">02:00 PM</p>
                                                        </div>
                                                        <div className="my_confirmed">
                                                            <p className="time_confirm mb-2 mt-2" style={{ color: "#40c351" }}>Confirm</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="main_content d-flex col-md-6 p-0 pb-1">
                                                    <div className="dataset d-flex">
                                                        <div className="my_confirmed">
                                                            <p className="time_confirm mb-2 mt-2">02:00 PM</p>
                                                        </div>
                                                        <div className="my_confirmed">
                                                            <p className="time_confirm mb-2 mt-2" style={{ color: "#40c351" }}>Confirm</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="items_alined d-flex">
                                                <div className="main_content d-flex col-md-6 p-0 pb-1">
                                                    <div className="dataset d-flex">
                                                        <div className="my_confirmed">
                                                            <p className="time_confirm mb-2 mt-2">02:00 PM</p>
                                                        </div>
                                                        <div className="my_confirmed">
                                                            <p className="time_confirm mb-2 mt-2" style={{ color: "#40c351" }}>Confirm</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="main_content d-flex col-md-6 p-0 pb-1">
                                                    <div className="dataset d-flex">
                                                        <div className="my_confirmed">
                                                            <p className="time_confirm mb-2 mt-2">02:00 PM</p>
                                                        </div>
                                                        <div className="my_confirmed">
                                                            <p className="time_confirm mb-2 mt-2" style={{ color: "#40c351" }}>Confirm</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="items_alined d-flex">
                                                <div className="main_content d-flex col-md-6 p-0 pb-1">
                                                    <div className="dataset d-flex">
                                                        <div className="my_confirmed">
                                                            <p className="time_confirm mb-2 mt-2">02:00 PM</p>
                                                        </div>
                                                        <div className="my_confirmed">
                                                            <p className="time_confirm mb-2 mt-2" style={{ color: "#40c351" }}>Confirm</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="main_content d-flex col-md-6 p-0 pb-1">
                                                    <div className="dataset d-flex">
                                                        <div className="my_confirmed">
                                                            <p className="time_confirm mb-2 mt-2">02:00 PM</p>
                                                        </div>
                                                        <div className="my_confirmed">
                                                            <p className="time_confirm mb-2 mt-2" style={{ color: "#40c351" }}>Confirm</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="pl-0 pr-0">
                                    <div className="p-0 boder_setting pl-2">
                                        <Card.Title>
                                            Interview @ Congnizant Technologies
                                            </Card.Title>
                                        <div className="col-md-12 d-flex p-0 pb-2">
                                            <div className="col-md-3 pl-0 pr-3">
                                                <div className="sub_itm d-flex">
                                                    <h6 className="interview_time_slot pr-1">02:00 PM</h6>
                                                    <h6 className="interview_time_slot pl-1">17/10/2019</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-3 pl-0 pr-3">
                                                <div className="sub_itm d-flex">
                                                    <h6 className="interview_time_slot pr-1"> 02:00 PM</h6>
                                                    <h6 className="interview_time_slot pl-1"> 17/10/2019</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-3 pl-0 pr-3">
                                                <div className="sub_itm d-flex">
                                                    <h6 className="interview_time_slot pr-1"> 02:00 PM</h6>
                                                    <h6 className="interview_time_slot pl-1"> 17/10/2019</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-3 pl-0 pr-3">
                                                <div className="sub_itm d-flex">
                                                    <h6 className="interview_time_slot pr-1"> 02:00 PM</h6>
                                                    <h6 className="interview_time_slot pl-1"> 17/10/2019</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-0 pl-3">
                                        <div className="col-md-12 d-flex p-0">
                                            <div className="col-md-3 pl-0 pr-3">
                                                <div className="sub_itm d-flex">
                                                    <h6 className="interview_time_slot pr-3">cancel </h6>|
                                                    <h6 className="interview_time_slot pl-3"> Confirm</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-3 pl-0 pr-3">
                                                <div className="sub_itm d-flex">
                                                    <h6 className="interview_time_slot pr-3"> cancel</h6>|
                                                <h6 className="interview_time_slot pl-3"> Confirm</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-3 pl-0 pr-3">
                                                <div className="sub_itm d-flex">
                                                    <h6 className="interview_time_slot pr-3"> cancel</h6>|
                                                <h6 className="interview_time_slot pl-3"> Confirm</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-3 pl-0 pr-3">
                                                <div className="sub_itm d-flex">
                                                    <h6 className="interview_time_slot pr-3"> cancel</h6>|
                                                <h6 className="interview_time_slot pl-3"> Confirm</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ListGroup.Item>

                                <ListGroup.Item className="pl-0 pr-0">
                                    <div className="p-0 boder_settings pl-2">
                                        <Card.Title>
                                            Interview @ Infosys
                                            </Card.Title>
                                        <div className="col-md-12 d-flex p-0 pb-2">
                                            <div className="col-md-3 pl-0 pr-3">
                                                <div className="sub_itm d-flex">
                                                    <h6 className="interview_time_slot pr-1">02:00 PM</h6>
                                                    <h6 className="interview_time_slot pl-1">17/10/2019</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-0 pl-3">
                                        <div className="col-md-12 d-flex p-0">
                                            <div className="col-md-3 pl-0 pr-3">
                                                <div className="sub_itm d-flex">
                                                    <h6 className="interview_time_slot pr-3">cancel </h6>|
                                                    <h6 className="interview_time_slot pl-3"> Confirm</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-3 pl-0 pr-3">
                                                <div className="sub_itm d-flex">
                                                    <h6 className="interview_time_slot pr-3"> cancel</h6>|
                                                <h6 className="interview_time_slot pl-3"> Confirm</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-3 pl-0 pr-3">
                                                <div className="sub_itm d-flex">
                                                    <h6 className="interview_time_slot pr-3"> cancel</h6>|
                                                <h6 className="interview_time_slot pl-3"> Confirm</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-3 pl-0 pr-3">
                                                <div className="sub_itm d-flex">
                                                    <h6 className="interview_time_slot pr-3"> cancel</h6>|
                                                <h6 className="interview_time_slot pl-3"> Confirm</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                    <div className="col-md-5 p-0">
                        <Card className="p-2">
                            <div className="scheduler d-flex">
                                <Card.Header className="border_my" style={{ color: "#717171", fontSize: "30px", fontWeight: "500" }}>Profile</Card.Header>
                                <Icon size={40} icon={androidMoreVertical} />
                            </div>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="pl-0 pr-0">
                                    <div className="col-md-12 d-flex pl-2 pr-0">
                                        <div className="col-md-6 p-0 pr-2">
                                            <Image className="profile_pic" src="../XYZ-01.jpg" style={{ width: "100%" }} />
                                            <div className="d-flex my_fattel">
                                                <div className="userfile_exits">
                                                    <h5 className="job_title" style={{ color: "#12c2f5" }}>Daniel Howard</h5>
                                                    <h6 className="" >UX Designer</h6>
                                                </div>
                                                <div className="userfile_exits">
                                                    <Button className="radius_button" variant="primary">Edit Profile</Button>
                                                </div>
                                            </div>
                                            <ListGroup.Item className="p-0 pt-2">
                                                <Card.Title className="resume_ranking">Resume Ranking</Card.Title>
                                                <div className="col-md-12 d-flex p-0 my_resume">
                                                    <div className="col-md-3 p-0 pr-2" style={{ fontSize: "25px" }}>20%</div>
                                                    <div className="col-md-6 p-0 pr-2 pl-1">Update Resume for better result</div>

                                                    <div className="col-md-3 p-0 pr-2">
                                                        <Button className="pro_update" size="sm" variant="primary">Update</Button> </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item style={{ paddingBottom: "8.3rem" }}></ListGroup.Item>
                                        </div>
                                            <div className="col-md-6 p-0">
                                                <div className="">
                                                    <p className=" test_skill mb-2">Test your skill</p>
                                                    <p className="chances mb-2">Increase chances of your selection</p>
                                                </div>
                                                <div className="d-flex sub_title">
                                                    <div className="">
                                                        <p className="" style={{ color: "black" }}>Skill Test Score</p>
                                                    </div>
                                                    <div className="">
                                                        <p className="" style={{ color: "#12c2f5" }}>10/10</p>
                                                    </div>
                                                </div>
                                                <div className="your_skill pb-2">
                                                <Button className="pro_update" variant="primary">Test Skills</Button>
                                                </div>
                                                <ListGroup.Item className="p-0">
                                                <div className="">
                                                    <p className=" test_skill mb-2">Test your skill</p>
                                                    <p className="chances mb-2">Increase chances of your selection</p>
                                                </div>
                                                <div className="d-flex sub_title">
                                                    <div className="">
                                                        <p className="" style={{ color: "black" }}>Skill Test Score</p>
                                                    </div>
                                                    <div className="">
                                                        <p className="" style={{ color: "#12c2f5" }}>10/10</p>
                                                    </div>
                                                </div>
                                                <div className="your_skill pb-2">
                                                <Button className="pro_update" variant="primary">Test Skills</Button>
                                                </div>
                                                </ListGroup.Item>
                                            </div>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
export default candidate_complete_profile;