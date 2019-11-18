import React from 'react';
import { Row, Card, Button, Image ,FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../css/Panellist.css';
import { FaSearch, FaExclamationCircle ,FaArrowDown } from 'react-icons/fa';

const PanellistDashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row mb-4">
                <Card className="mt-4 w-100">
                    <div className="p-4"><h6 className="font-weight-bold text-dark pl-3 mb-0">Panellist Dashboard</h6></div>
                        < hr className="my-0 mx-4" />

                    <Card.Body className="p-3">
                 <Row className="">  
                            <div className="col-md-4 d-flex align-items-center">
                                <div className="col-md-2">
                                    <div className="panellistImg">
                                        <Image src="../profile1.png" roundedCircle className="panellistImg" />
                                    </div>
                                </div>
                                <div className="col-md-10">
                                <h6 className="mb-0 textColor">Sarrah Connor</h6>
                                <p className="mb-0">JAVA, PHP</p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex align-items-center">
                                <div className="col-md-6">
                                    <p className="p_stl">Toatal Earnings</p>
                                    <p className="mb-0 text-dark font-weight-bold">$ 3,000.00</p>
                                </div>
                                <div className='col-md-6 align-items-center'>
                                    <p className="p_stl">Pending Invoices</p>
                                    <p className="mb-0 text-dark font-weight-bold">22</p>
                                </div>
                            </div>
                           
                            <div className="col-md-5 p-2 panellistbg d-flex justify-content-around">
                                <div className="col-md-4 d-flex  align-items-center">
                                    <div className="mr-2 text-danger" ><FaExclamationCircle size={30} /></div>
                                    <div>
                                        <p className="p_stl">Interview Alert</p>
                                        <p className="mb-0 text-dark font-weight-bold" style={{fontSize:"14px"}} >20/10/2019</p>
                                    </div>
                                </div>
                                <div className="col-md-4 p-0 d-flex align-items-end">
                                <p className="mb-2 text-dark font-weight-bold" style={{fontSize:"14px"}} >01.30.05</p>
                                </div>
                                <div className="col-md-2 d-flex align-items-center">
                                    <p className="multi-skill">Start</p>
                               </div>
                                <div className="col-md-2 pl-0 d-flex align-items-center">
                                <p className="multi-skill">Cancel</p>
                                </div>

                            </div>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
            <div className="row mb-4">
                <Card className="w-100">
                    <div className="d-flex p-3">
                        <div className="col-md-6 pt-2">
                            <h6 className="font-weight-bold text-dark px-2">Interview Schedule</h6>
                        </div>
                        <div className="col-md-6 d-flex">
                        <div className="col-md-6 pt-2">
                                <Link to="" className="float-right textColor" style={{borderBottom:"1px solid #00adef"}}>Add new comment</Link>
                            </div>
                            <div className="col-md-6">
                            <FormControl type="text" placeholder="" className="mr-sm-2" />
                               <p className="search_icon" > <FaSearch /></p> 
                            </div>
                        
                        </div>
                        </div>
                        < hr className="my-0 mx-4" />

                  
                    <Card.Body >
                        <Row className="sec_title">
                            <div className="col-md-2 d-flex">
                                <p className="p_stl">DATE</p>
                                <p className="ml-3"> <FaArrowDown/> </p> 
                            </div>
                     
                            <div className="col-md-2">
                                <p className="p_stl">INTERVIEW TITLE</p>
                            </div>
                            <div className="col-md-6">
                                <p className="p_stl">COMMENTS</p>
                            </div>
                            <div className="col-md-2">

                            </div>
                        </Row>
                        <Row className="row_cls">
                            <div className="col-md-2 m-auto">
                                <p className="p_stl">21/08/2019</p>
                            </div>
                            <div className="col-md-2">
                                <p className="p_stl">Cognizant Interview</p>
                                <div className="text-primary d-flex">
                                    <Link to=" "><p className="textColor m-auto">Resume</p></Link>
                                    <Link to=" "> <p className="textColor m-auto">| JD | </p></Link>
                                    <Link to=" "><p className="textColor m-auto">Video Interview</p></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <p className="p_stl">Pass in the url prop of your social network, and the icon will be rendered social network, and the icon will be rendered.</p>
                            </div>
                            <div className="col-md-4 m-auto d-flex justify-content-around">
                           
                                <Link to =" " className="multi-skill">Comment</Link>
                                <Link to =" " className="multi-skill">Start Interview</Link>
                            <Link to =" " className="multi-skill">Cancel</Link>
                       
                            </div>
                        </Row>
                        < hr className="my-0" />
                        <Row className="row_cls">
                        <div className="col-md-2 m-auto ">
                                <p className="p_stl">21/08/2019</p>
                            </div>
                            <div className="col-md-2 ">
                                <p className="p_stl">Cognizant Interview</p>
                                <div className="text-primary d-flex">
                                    <Link to=" "><p className="textColor m-auto">Resume</p></Link>
                                    <Link to=" "> <p className="textColor m-auto">| JD | </p></Link>
                                    <Link to=" "><p className="textColor m-auto">Video Interview</p></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <p className="p_stl">Pass in the url prop of your social network, and the icon will be rendered social network, and the icon will be rendered.</p>
                            </div>
                            <div className="col-md-4 m-auto d-flex justify-content-around">
                           
                                <Link to =" " className="multi-skill">Comment</Link>
                                <Link to =" " className="multi-skill">Start Interview</Link>
                            <Link to =" " className="multi-skill">Cancel</Link>
                       
                            </div>
                        </Row>
                        <hr className="my-0" />
                        <Row className="row_cls sec_title">
                        <div className="col-md-2 m-auto ">
                                <p className="p_stl">21/08/2019</p>
                            </div>
                            <div className="col-md-2 ">
                                <p className="p_stl">Cognizant Interview</p>
                                <div className="text-primary d-flex">
                                    <Link to=" "><p className="textColor m-auto">Resume</p></Link>
                                    <Link to=" "> <p className="textColor m-auto">| JD | </p></Link>
                                    <Link to=" "><p className="textColor m-auto">Video Interview</p></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <p className="p_stl">Pass in the url prop of your social network, and the icon will be rendered social network, and the icon will be rendered.</p>
                            </div>
                            <div className="col-md-4 m-auto d-flex justify-content-around">
                           
                                <Link to =" " className="multi-skill">Comment</Link>
                                <Link to =" " className="multi-skill">Start Interview</Link>
                            <Link to =" " className="multi-skill">Cancel</Link>
                       
                            </div>

                        </Row>
                    </Card.Body>
                </Card>

            </div>
           
            <div className="row mb-4">
                <Card className="w-100">
                <div className="p-4"><h6 className="font-weight-bold text-dark pl-3 mb-0">Create Invoice</h6></div>
                        < hr className="my-0 mx-4" />
                    <div>
                        <Row className="pt-3 pl-3 pr-3">
                            <div className="col-md-1 mr-3">
                                <p className="p_stl">Date</p>
                                <p className="border_stl">21/08/2019</p>
                            </div>
                            <div className="col-md-2  mr-3font-weight-bold">
                                <p className="p_stl">Interview Title</p>
                            </div>
                            <div className="col-md-1 mr-3">
                                <p className="p_stl">Hours</p>
                            </div>
                            <div className="col-md-1 mr-3">
                                <p className="p_stl">Amount</p>
                            </div>
                            <div className="col-md-4 mr-3">
                                <p className="p_stl">Comments</p>
                            </div>
                            <div className="col-md-2">
                            </div>
                        </Row>
                        <Row className="py-4 px-1 mx-3">
                            <div className="col-md-2 py-2 mr-3 bg-white commentsTitles">
                                <p className="mb-0 font-weight-bold">21/08/2019</p>
                            </div>
                            <div className="col-md-2 mr-3 py-2 bg-white commentsTitles font-weight-bold">
                                <p className="mb-0 font-weight-bold">Cognizant Interview</p>
                            </div>
                            <div className="col-md-1 mr-3 py-2 bg-white commentsTitles">
                                <p className="mb-0">20</p>

                            </div>
                            <div className="col-md-1 mr-3 py-2 bg-white commentsTitles">
                                <p className="mb-0">$ 2000</p>
                            </div>
                            <div className="col-md-4 py-2 bg-white commentsTitles">
                                <p className="mb-0">Completes enrolments by analyzing documents and tapes</p>
                            </div>
                            <div className="col-md-1 m-auto p-0 bg-white">
                                <Button variant="warning" size="sm" className="rounded-pill float-right text-white my-auto mb-0 ">
                                    <small>Raise Invoice</small></Button>

                            </div>


                        </Row>
                        < hr className="my-0 mx-4" />
                    </div>
                    <h4 className="bg-white py-3 px-1 d-flex">
                        <div className="col-md-6">
                            <h6 className="font-weight-bold PanelTitle px-2 mb-0">Invoices</h6>
                        </div>
                    </h4>
                    < hr className="my-0 mx-4" />

                    <Card.Body>
                        <Row className=" py-2 px-1 mx-3 d-flex">
                            <div className="col-md-1 ">
                                <Button variant="success" size="sm" className="my-auto w-100 mb-0 ">
                                    <small>PAID</small></Button>
                            </div>
                            <div className="col-md-2">
                                <p className="mb-0 font-weight-bold">21/08/2019</p>
                            </div>
                            <div className="col-md-2 ">
                                <p className="mb-0 font-weight-bold text-center">Cognizant Interview</p>

                            </div>
                            <div className="col-md-1 text-center ">
                                <p className="mb-0">20 </p>

                            </div>
                            <div className="col-md-1 text-center ">
                                <p className="mb-0">$ 2000</p>
                            </div>
                            <div className="col-md-5 text-center">
                                <p className="mb-0">Completes enrolments by analyzing documents and tapes.</p>
                            </div>
                        </Row>
                        <Row className=" py-2 px-1 mx-3 d-flex">
                            <div className="col-md-1 ">
                                <Button variant="warning" size="sm" className="my-auto text-white w-100 mb-0 ">
                                    <small>PENDING</small></Button>
                            </div>
                            <div className="col-md-2">
                                <p className="mb-0 font-weight-bold">21/08/2019</p>
                            </div>
                            <div className="col-md-2">
                                <p className="mb-0 font-weight-bold text-center">Cognizant Interview</p>

                            </div>
                            <div className="col-md-1 text-center">
                                <p className="mb-0">20 </p>

                            </div>
                            <div className="col-md-1 text-center">
                                <p className="mb-0">$ 2000</p>
                            </div>
                            <div className="col-md-5 text-center">
                                <p className="mb-0">Completes enrolments by analyzing documents and tapes.</p>
                            </div>
                        </Row>
                        <Row className=" py-2 px-1 mx-3 d-flex">
                            <div className="col-md-1 ">
                                <Button variant="danger" size="sm" className="my-auto mb-0 ">
                                    <small>CANCELLED</small></Button>
                            </div>
                            <div className="col-md-2">
                                <p className="mb-0 font-weight-bold">21/08/2019</p>
                            </div>
                            <div className="col-md-2">
                                <p className="mb-0 font-weight-bold text-center">Cognizant Interview</p>

                            </div>
                            <div className="col-md-1 text-center">
                                <p className="mb-0">20 </p>

                            </div>
                            <div className="col-md-1 text-center ">
                                <p className="mb-0">$ 2000</p>
                            </div>
                            <div className="col-md-5 text-center">
                                <p className="mb-0">Completes enrolments by analyzing documents and tapes.</p>
                            </div>
                        </Row>
                        <Row className=" py-2 px-1 mx-3 d-flex">
                            <div className="col-md-1 ">
                                <Button variant="danger" size="sm" className="my-auto mb-0 ">
                                    <small>CANCELLED</small></Button>
                            </div>
                            <div className="col-md-2">
                                <p className="mb-0 font-weight-bold">21/08/2019</p>
                            </div>
                            <div className="col-md-2">
                                <p className="mb-0 font-weight-bold text-center">Cognizant Interview</p>

                            </div>
                            <div className="col-md-1 text-center">
                                <p className="mb-0">20 </p>

                            </div>
                            <div className="col-md-1 text-center ">
                                <p className="mb-0">$ 2000</p>
                            </div>
                            <div className="col-md-5 text-center">
                                <p className="mb-0 circleDot rounded-circle">.</p>
                            </div>
                        </Row>

                    </Card.Body>

                </Card>
            </div>
        </div>
    )
}
export default PanellistDashboard;