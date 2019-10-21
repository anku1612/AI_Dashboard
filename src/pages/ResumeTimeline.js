import React from 'react';
import { Card, ButtonToolbar, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import '../css/ResumeTimeline.css';

const cardstyle = {
    background: "white",
    display: "flex",
    padding: "20px 25px 10px 40px",
}
const cardbodystyle = {
    display: "flex",
    padding: "0px 25px 10px 40px",
}
const ResumeTimeline = () => {
    return (
        <div className="container-fluid">
            <div className="resumet">
                <Card>
                    <Card.Header style={cardstyle}>
                        <div className="col-md-10"><p className="head_con">  Resume Timeline</p></div>
                        <div className="col-md-2">

                            <ButtonToolbar>
                                {[DropdownButton].map((DropdownType, idx) => (
                                    <DropdownType
                                        size="sm"
                                        variant="secondary"
                                        title="Work Experience"
                                        id={`dropdown-button-drop-${idx}`}
                                        key={idx}
                                    >
                                        <Dropdown.Item eventKey="1">Experience</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Skills</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Projects</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Education</Dropdown.Item>
                                    </DropdownType>
                                ))}
                            </ButtonToolbar>
                        </div>
                    </Card.Header>


                    <Card.Body  >
                        <div className="">
                            <div className="col-md-12" style={cardstyle}>

                                <div className="col-wid">
                                    <div>
                                        <p className="mb-0 resume-timeline">1998</p>
                                        <p className="month">March</p>
                                    </div>
                                    <div className="">
                                        <div>  <div className="circle"></div>
                                            <div className="line"></div>  </div>
                                    </div></div>
                                <div className="col-wid">
                                    <p className="mb-0 resume-timeline">1999</p>
                                    <p className="month" >January</p>
                                    <div className="circleone"></div>
                                    <div className="lineone"></div>

                                </div>
                                <div className="col-wid">
                                    <p className="mb-0 resume-timeline">2001</p>
                                    <p className="month">September</p>
                                    <div className="circletwo"></div>
                                    <div className="linetwo"></div>



                                </div>
                                <div className="col-wid">
                                    <p className="mb-0 resume-timeline" >2002</p>
                                    <p className="month">March</p>
                                    <div className="circlethree"></div>
                                    <div className="linethree"></div>

                                </div>
                                <div className="col-wid">
                                    <p className="mb-0 resume-timeline">2004</p>
                                    <p className="month" >January</p>
                                    <div className="circlefour"></div>
                                    <div className="linefour"></div>


                                </div>
                                <div className="col-wid">
                                    <p className="mb-0 resume-timeline">2006</p>
                                    <p className="month" >September</p>
                                    <div className="circlefive"></div>
                                    <div className="linetwo"></div>


                                </div>
                                <div className="col-wid">
                                    <p className="mb-0 resume-timeline">2010</p>
                                    <p className="month" >September</p>
                                    <div className="circlesix"></div>
                                    <div className="linethree"></div>

                                </div>
                                <div className="col-wid">
                                    <p className="mb-0 resume-timeline">2019</p>
                                    <p className="month" >September</p>
                                    <div className="circleseven"></div>
                                    <div className="linethree"></div>


                                </div>
                            </div>
                        </div>


                        <div className="">
                            <div className="col-md-12" style={cardbodystyle}>
                                <div className="col-wid">
                                    <div>
                                        <p className="mb-1 comp">Infosys</p>
                                        <p className="month mb-1">Project Manager</p>
                                        <p className="month loc mb-1" >Suncity</p>
                                        <div className="d-flex">
                                            <p className="map-loc"><FaMapMarkerAlt color="red" /> </p>
                                            <p className="mt">GR</p></div>

                                    </div></div>

                                <div className="col-wid">
                                    <p className="mb-1 comp">Congizant</p>
                                    <p className="month mb-1">Java Developer</p>
                                    <p className="month mb-1">Hyderabad</p>

                                </div>
                                <div className="col-wid">
                                    <p className="mb-1 comp">TCS</p>
                                    <p className="month mb-1">PHP Developer</p>
                                    <p className="month loc mb-1">Munich</p>
                                    <div className="d-flex">
                                        <p className="map-loc"><FaMapMarkerAlt color="red" /> </p>
                                        <p className="mt">SG</p></div>



                                </div>
                                <div className="col-wid">
                                    <p className="mb-1 comp">Infosys</p>
                                    <p className="month mb-1">Project Manager</p>
                                    <p className="month mb-1">Hyderabad</p>

                                </div>
                                <div className="col-wid">
                                    <p className="mb-1 comp"> Congizant</p>
                                    <p className="month mb-1">Php Team Lead</p>
                                    <p className="month mb-1">Hyderabad</p>


                                </div>
                                <div className="col-wid">
                                    <p className="mb-1 comp">TCS</p>
                                    <p className="month mb-1">PHP Developer</p>
                                    <p className="month loc mb-1">New Jersy</p>
                                    <div className="d-flex">
                                        <p className="map-loc"><FaMapMarkerAlt color="red" /> </p>
                                        <p className="mt">USA</p></div>



                                </div>
                                <div className="col-wid">
                                    <p className="mb-1 comp">TCS</p>
                                    <p className="month mb-1">PHP Developer</p>
                                    <p className="month mb-1">Hyderabad</p>

                                </div>
                                <div className="col-wid">
                                    <p className="mb-1 comp">TCS</p>
                                    <p className="month mb-1">PHP Developer</p>
                                    <p className="month mb-1">Banglore</p>


                                </div>
                            </div>
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




                    </Card.Body>
                </Card>

            </div>

        </div>

    )
}

export default ResumeTimeline;