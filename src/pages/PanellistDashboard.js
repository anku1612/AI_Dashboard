import React from 'react';
import { Col, Form, Row, Card, Button, Image, } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../css/Panellist.css';
import { FaExclamationTriangle, FaClock, FaCalendarAlt, FaVideo, FaFile, FaEllipsisH, FaSearch, FaExclamationCircle, FaArrowDown } from 'react-icons/fa';

const btnstyle = {
    padding: "0px 15px 0px 15px",
    background: "#ffa64d",
}
const cardstyle = {
    background: "white",
    padding: "20px 20px 0px 20px"
}
const UpcomingToday = () =>
    <div className="pb-4">
        <div className="req-skil-head ">
            <div className="row pt-3 pb-2 d-flex">
                <div className="col-md-3">
                    <p className="">21/08/2019</p>
                </div>
                <div className="col-md-4">
                    <p className="mb-0 text-dark font-weight-bold">Subhakar Rao</p>
                    <p className="mb-0">Ui Designer</p>
                </div>
                <div className="col-md-5">
                    <p className="p_stl pl-2">Cognizant Interview</p>
                    <div className="justify-content-around d-flex">
                        <Link to="/"><p className="textIntColor m-auto"> Resume </p></Link>  <span className="textColor"> | </span>
                        <Link to="/"> <p className="textIntColor m-auto">  JD   </p></Link>  <span className="textColor"> | </span>
                        <Link to="/"><p className="textIntColor m-auto"> Video Interview </p></Link>
                    </div>
                </div>
            </div>
            <div className="pt-3 pb-3 d-flex justify-content-around w-75">
                <Link to=" " className="multi-skill">Comment</Link>
                <Link to=" " className="multi-skill">Start Interview</Link>
                <Link to=" " className="multi-skill">Cancel</Link>
            </div>
        </div>

        <div className="req-skil-head ">
            <div className="row pt-3 pb-2 d-flex">
                <div className="col-md-3">
                    <p className="">21/08/2019</p>
                </div>
                <div className="col-md-4">
                    <p className="mb-0 text-dark font-weight-bold">Subhakar Rao</p>
                    <p className="mb-0">Ui Designer</p>
                </div>
                <div className="col-md-5">
                    <p className="p_stl pl-2">Cognizant Interview</p>
                    <div className="justify-content-around d-flex">
                        <Link to="/"><p className="textIntColor m-auto"> Resume  </p> </Link> <span className="textColor"> | </span>
                        <Link to="/"> <p className="textIntColor m-auto">  JD   </p></Link>   <span className="textColor"> | </span>
                        <Link to="/"><p className="textIntColor m-auto"> Video Interview </p></Link>
                    </div>
                </div>
            </div>
            <div className="pt-3 pb-3 d-flex justify-content-around w-75">
                <Link to=" " className="multi-skill">Comment</Link>
                <Link to=" " className="multi-skill">Start Interview</Link>
                <Link to=" " className="multi-skill">Cancel</Link>
            </div>
        </div>
    </div>
const PanellistDashboard = () => {
    return (
        <div className="container-fluid">
            <div className="profile">
                <div className="row mb-4">
                    <Card className="cardstl  w-100">
                        <div style={cardstyle}>
                            <div className="row d-flex req-skil-head">
                                <div className="col-md-10 p-0">
                                    <p className="req"> PanelList Dashboard </p>
                                </div>
                                <div className="col-md-2 text-right">
                                    <FaEllipsisH />
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="row d-flex">
                                <div className="col-md-6 d-flex align-items-center">
                                    <div className="col-md-2 pl-0">
                                        <div className="panellistImg">
                                            <Image src="../profile1.png" roundedCircle className="panellistImg" />
                                        </div>
                                    </div>
                                    <div className="col-md-10 pl-0">
                                        <Link to="/Dashboard">  <h6 className="mb-0 textColor">Sarrah Connor</h6></Link>
                                        <p className="mb-0">JAVA, PHP</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="pt-2 d-flex align-items-center">
                                        <div className="col-md-4">
                                            <p className="p_stl">My Toatal Earnings</p>
                                            <p className="mb-0 text-dark font-weight-bold">$ 3,000.00</p>
                                        </div>
                                        <div className='col-md-4 align-items-center'>
                                            <p className="p_stl">My Pending Invoices</p>
                                            <p className="mb-0 text-dark font-weight-bold">22</p>
                                        </div>
                                        <div className='col-md-4 align-items-center'>
                                            <p className="p_stl">Upcoming Interview</p>
                                            <p className="mb-0 text-dark font-weight-bold">02</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex pt-3">
                                <div className="col-md-6">
                                    <div className="p-2 panellistbg">
                                        <div className="d-flex">
                                            <div className="col-md-8 d-flex p-0">
                                                <div className="mr-2 text-danger" ><FaExclamationCircle size={18} /></div>
                                                <p className="pld_stl">Interview Alert</p>
                                            </div>
                                            <div className="col-md-4 d-flex p-0 justify-content-around pt-1">
                                                <p className="mb-0">20/10/2019</p>
                                                <p className="mb-0">01:30:05</p>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                        <div className="pl-3 pr-3 pt-3">
                                            <div className="row d-flex">
                                                <div className="col-md-4 d-flex">
                                                    <Image src="../XYZ-01.jpg" className="mr-3 img_paneldash rounded-circle" />
                                                    <div>
                                                        <p className="mb-0 text-dark font-weight-bold">Subhakar Rao</p>
                                                        <p className="mb-0">Ui Designer</p> </div>
                                                </div>

                                                <div className="col-md-8 pt-3 d-flex ">
                                                    <div className="col-md-3"> <FaVideo /></div>
                                                    <div className="col-md-1 mr-2"> <FaFile style={{ color: "#ff8800 " }} /> </div>
                                                    <div className="col-md-2 p-0 pt-1"> <p className="text-dark font-weight-bold">JD</p> </div>
                                                    <div className="col-md-3">  <p className="pnlintbtn">Start</p>    </div>
                                                    <div className="col-md-3 pr-0">  <p className="pnlintbtn">Cancel</p>    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="pl-3 pr-3 pt-3 pb-2 pnlAlrtbg">
                                        <p className="free_stl mb-2">Free Time Alert </p>
                                        <div className="pt-2 d-flex">
                                            <div className="col-md-3 pl-0 pt-2">
                                                <p className="p_stl">Intimate Free Time</p> </div>

                                            <div className="col-md-4 p-0 " style={{ marginLeft: "-20px" }}>
                                                <div className="d-flex stl_bor_free">
                                                    <p className="p_stl mb-0 mr-2" style={{fontStyle:"italic"}}>Free Time alert to Recruiter </p>
                                                    <p className="mb-0"><FaCalendarAlt style={{marginTop:"-3px"}}/></p>
                                                </div>

                                            </div>
                                            <div className="col-md-1"><FaClock /></div>
                                            <div className="col-md-1 p-0 mr-2"><p className="stl_bor_free">02:25</p></div>
                                            <div className="col-md-1 p-0"> <p className="stl_bor_free">02:25</p></div>
                                            <div className="col-md-2 pr-0">
                                                <p className="btnFree_sub">Submit</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="row mb-4">
                    <Card className="cardstl  w-100">
                        <div style={cardstyle}>
                            <div className="row d-flex req-skil-head">
                                <div className="col-md-10 p-0">
                                    <p className="req"> Feedback Completed Interview </p>
                                </div>
                                <div className="col-md-2 text-right">
                                    <FaEllipsisH />
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="row d-flex">
                                <div className="col-md-1  pr-0 ">
                                    <p className="feed_stl pt-1">20/02/2012 </p>
                                </div>
                                <div className="col-md-2 d-flex ">
                                    <div className="col-md-3">
                                        <Image src="../XYZ-01.jpg" className="mr-3 img_paneldash rounded-circle" />
                                    </div>
                                    <div className="col-md-9">
                                        <p className="mb-0 text-dark font-weight-bold pt-1">Subhakar Rao</p>
                                    </div>
                                </div>
                                <div className="col-md-1 p-0 d-flex pt-1">
                                    <p className="mb-0 text-dark">Ui Designer</p>
                                    <div className="col-md-1"> <FaExclamationTriangle style={{ color: "#ffd500" }} /></div>
                                </div>
                                <div className="col-md-7">
                                    <Form.Group className="mb-0">
                                        <Form.Control type="text" placeholder="" className="input_search mr-sm-2 " />
                                    </Form.Group>
                                </div>
                                <div className="col-md-1 pl-0 pt-1">
                                    <p className="btn_sub">Submit</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="row mb-4">
                    <Col md="6" className="pl-0">
                        <div className="cardstl  card">
                            <div style={cardstyle}>
                                <div className="row d-flex req-skil-head">
                                    <div className="col-md-7 p-0">
                                        <p className="req font-weight-bold text-dark"> Interview scheduler  </p>
                                    </div>
                                    <div className="col-md-4 p-0">
                                        <Form.Control type="text" placeholder="" className="intputschl" />
                                        <span className="Intsearch_icon"> <FaSearch /></span>
                                    </div>
                                    <div className="col-md-1 text-right ">
                                        <FaEllipsisH />
                                    </div>
                                </div>

                                <div className="">
                                    <Router>
                                        <div className="row d-flex">
                                            <div className="col-md-12 p-0 req-skil-head">
                                                <div className="d-flex justify-content-around pt-2  w-75">
                                                    <Link to="/panelList"> <p className="ReAva_stl mb-0">UpComing Today</p> </Link>
                                                    <Link to="/panelList"> <p className="mb-0">This Week</p> </Link>
                                                    <Link to="/panelList"> <p className=" mb-0">This Month</p> </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <Switch>
                                            <Route path="/panelList"> <UpcomingToday /> </Route>
                                        </Switch>
                                    </Router>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md="3">
                        <div className="cardstl card">
                            <div style={cardstyle}>
                                <div className="row d-flex req-skil-head">
                                    <div className="col-md-10 p-0">
                                        <p className="req font-weight-bold text-dark"> Re-Schedule Interview </p>
                                    </div>
                                    <div className="col-md-2 text-right">
                                        <FaEllipsisH />
                                    </div>
                                </div>
                                <div className="pt-3">
                                    <div className="d-flex req-skil-head">
                                        <div className="col-md-8 p-0">
                                            <Link to="/Dashboard"><p className="text-dark font-weight-bold mb-0">Sarrah Conner</p></Link>
                                            <p className="mb-0 pb-2" >Ui Designer </p>
                                            <p className="mail mb-0">@ Cognizant Technologies</p>
                                            <p className="mail">22/02/2012</p>
                                        </div>
                                        <div className="col-md-4 p-0 text-right">
                                            <p className="calschl_stl"> <FaCalendarAlt /></p>
                                        </div>
                                    </div>
                                    <div className="pt-3  d-flex req-skil-head">
                                        <div className="col-md-8 p-0">
                                            <Link to="/Dashboard"><p className="text-dark font-weight-bold mb-0">Sarrah Conner</p></Link>
                                            <p className="mb-0 pb-2" >Ui Designer </p>
                                            <p className="mail mb-0">@ Cognizant Technologies</p>
                                            <p className="mail">22/02/2012</p>
                                        </div>
                                        <div className="col-md-4 p-0 text-right">
                                            <p className="calschl_stl"> <FaCalendarAlt /></p>
                                        </div>
                                    </div>
                                    <div className="pt-3 d-flex">
                                        <div className="col-md-8 p-0">
                                            <Link to="/Dashboard"><p className="text-dark font-weight-bold mb-0">Sarrah Conner</p></Link>
                                            <p className="mb-0 pb-2" >Ui Designer </p>
                                            <p className="mail mb-0">@ Cognizant Technologies</p>
                                            <p className="mail">22/02/2012</p>
                                        </div>
                                        <div className="col-md-4 p-0 text-right">
                                            <p className="calschl_stl"> <FaCalendarAlt /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="3" className="pr-0 pl-4">
                        <div className="cardstl card">
                            <div style={cardstyle}>
                                <div className="row d-flex req-skil-head">
                                    <div className="col-md-10 p-0">
                                        <p className="req font-weight-bold text-dark"> Canceled Interview </p>
                                    </div>
                                    <div className="col-md-2 text-right">
                                        <FaEllipsisH />
                                    </div>
                                </div>
                                <div className="pt-3">
                                    <div className="d-flex req-skil-head">
                                        <div className="col-md-8 p-0">
                                            <Link to="/Dashboard"><p className="text-dark font-weight-bold mb-0">Sarrah Conner</p></Link>
                                            <p className="mb-0 pb-2" >Ui Designer </p>
                                            <p className="mail mb-0">@ Cognizant Technologies</p>
                                            <p className="mail">22/02/2012</p>
                                        </div>
                                        <div className="col-md-4 p-0 text-right">
                                            <p className="calcncl_stl"> <FaCalendarAlt /></p>
                                        </div>
                                    </div>
                                    <div className="pt-3  d-flex req-skil-head">
                                        <div className="col-md-8 p-0">
                                            <Link to="/Dashboard"><p className="text-dark font-weight-bold mb-0">Sarrah Conner</p></Link>
                                            <p className="mb-0 pb-2" >Ui Designer </p>
                                            <p className="mail mb-0">@ Cognizant Technologies</p>
                                            <p className="mail">22/02/2012</p>
                                        </div>
                                        <div className="col-md-4 p-0 text-right">
                                            <p className="calcncl_stl"> <FaCalendarAlt /></p>
                                        </div>
                                    </div>
                                    <div className="pt-3 d-flex">
                                        <div className="col-md-8 p-0">
                                            <Link to="/Dashboard"><p className="text-dark font-weight-bold mb-0">Sarrah Conner</p></Link>
                                            <p className="mb-0 pb-2" >Ui Designer </p>
                                            <p className="mail mb-0">@ Cognizant Technologies</p>
                                            <p className="mail">22/02/2012</p>
                                        </div>
                                        <div className="col-md-4 p-0 text-right">
                                            <p className="calcncl_stl"> <FaCalendarAlt /></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Col>
                </div>

                <div className="row mb-4">
                    <Card className="w-100 cardstl">
                    <div style={cardstyle}>
                            <div className="row d-flex req-skil-head">
                                <div className="col-md-10 p-0">
                                    <p className="req">Create Invoice </p>
                                </div>
                                <div className="col-md-2 text-right">
                                    <FaEllipsisH />
                                </div>
                            </div>
                        </div>
                
                        <div>
                            <Row className="p-4">
                                <div className="col-md-1 p-0">
                                    <p className="p_stl">Date</p>
                                    <p className="border_stl">21/08/2019</p>
                                </div>

                                <div className="col-md-2 ">
                                    <p className="p_stl">Interview Title</p>
                                    <p className="border_stl">Cognizant Interview</p>
                                </div>
                                <div className="col-md-1">
                                    <p className="p_stl">Hours</p>
                                    <p className="border_stl">20</p>
                                </div>
                                <div className="col-md-1 ">
                                    <p className="p_stl">Amount</p>
                                    <p className="border_stl">3,000.00</p>
                                </div>
                                <div className="col-md-6">
                                    <p className="p_stl">Comments</p>
                                    <p className="border_stl">Completes enrolments by analyzing documents and tapes</p>
                                </div>
                                <div className="col-md-1 p-0 pt-4">
  
                                    <Button variant="" size="sm" style={{background:"#ffdd00",padding: "0px 10px "}} className="rounded-pill text-dark mb-0 ">
                                        <small className="font-weight-bold">Raise Invoice</small></Button>
                                </div>
                            </Row>
                        </div>

                    </Card>

                </div>

                <div className="row">
                    <Card className="w-100 cardstl">
                    <div style={cardstyle}>
                            <div className="row d-flex req-skil-head">
                                <div className="col-md-10 p-0">
                                    <p className="req"> Invoices </p>
                                </div>
                                <div className="col-md-2 text-right">
                                    <FaEllipsisH />
                                </div>
                            </div>
                       
                        <div className="pb-4">
                            <Row className="sec_title pt-3">
                                <div className="col-md-1 d-flex">
                                    <p className="p_stl">DATE</p>
                                    <p className="ml-3"> <FaArrowDown /> </p>
                                </div>

                                <div className="col-md-1 text-center">
                                    <p className="p_stl">STATUS</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="p_stl">INVOICE TITLE</p>
                                </div>
                                <div className="col-md-1">
                                    <p className="p_stl">HOURS</p>
                                </div>
                                <div className="col-md-1">
                                    <p className="p_stl">AMOUNT</p>
                                </div>
                                <div className="col-md-5">
                                    <p className="p_stl">COMMENTS</p>
                                </div>
                               
                            </Row>
                            <Row className="row_cls">
                                <div className="col-md-1 p-0">
                                    <p className="p_stl">21/08/2019</p>
                                </div>
                                <div className="col-md-1">
                                    <Button variant="" size="sm" className="text-white mb-0" style={{ padding: "1px 25px", background: "#00f510" }} >
                                        <small>PAID</small></Button>
                                </div>
                                <div className="col-md-3">
                                    <p className="p_stl">Cognizant Technologies</p>
                                </div>
                                <div className="col-md-1">
                                    <p className="p_stl">20</p>
                                </div>
                                <div className="col-md-1">
                                    <p className="p_stl">3,000.00</p>
                                </div>
                                <div className="col-md-5">
                                    <p className="p_stl">Completes enrolments by analyzing and auditing documents, tapes.</p>
                                </div>
                            
                            </Row>
                            < hr className="my-0" />
                            <Row className="row_cls">
                                <div className="col-md-1 p-0">
                                    <p className="p_stl">21/08/2019</p>
                                </div>
                                <div className="col-md-1">
                                    <Button variant="" size="sm" style={btnstyle} className="text-white mb-0 ">
                                        <small>PENDING</small></Button>
                                </div>
                                <div className="col-md-3">
                                    <p className="p_stl">Cognizant Technologies</p>
                                </div>
                                <div className="col-md-1">
                                    <p className="p_stl">20</p>
                                </div>
                                <div className="col-md-1">
                                    <p className="p_stl">3,000.00</p>
                                </div>
                                <div className="col-md-5">
                                    <p className="p_stl">Completes enrolments by analyzing and auditing documents, tapes.</p>
                                </div>
                              
                            </Row>
                            < hr className="my-0" />
                            <Row className="row_cls">
                                <div className="col-md-1 p-0">
                                    <p className="p_stl">21/08/2019</p>
                                </div>
                                <div className="col-md-1">
                                    <Button variant="" size="sm" className="text-white mb-0 " style={{ padding: "0px 10px", background: "#f51100" }}>
                                        <small>CANCELLED</small></Button>
                                </div>
                                <div className="col-md-3">
                                    <p className="p_stl">Cognizant Technologies</p>
                                </div>
                                <div className="col-md-1">
                                    <p className="p_stl">20</p>
                                </div>
                                <div className="col-md-1">
                                    <p className="p_stl">3,000.00</p>
                                </div>
                                <div className="col-md-5">
                                    <p className="p_stl">Completes enrolments by analyzing and auditing documents, tapes.</p>
                                </div>
                           
                            </Row>
                            <hr className="my-0" />
                            <Row className="row_cls sec_title">
                                <div className="col-md-1 p-0">
                                    <p className="p_stl">21/08/2019</p>
                                </div>
                                <div className="col-md-1">
                                    <Button variant="" size="sm" style={btnstyle} className="text-white  mb-0 ">
                                        <small>PENDING</small></Button>
                                </div>
                                <div className="col-md-3">
                                    <p className="p_stl">Cognizant Technologies</p>
                                </div>
                                <div className="col-md-1">
                                    <p className="p_stl">20</p>
                                </div>
                                <div className="col-md-1">
                                    <p className="p_stl">3,000.00</p>
                                </div>
                                <div className="col-md-5">
                                    <p className="p_stl">Completes enrolments by analyzing and auditing documents, tapes.</p>
                                </div>
                            </Row>
                        </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default PanellistDashboard;