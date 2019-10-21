import React from 'react';
import { Row, Card, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../css/Panellist.css';
import { FaSearch, FaExclamationCircle } from 'react-icons/fa';

const PanellistDashboard = () => {
    return (
        <div className="mx-4 px-4">
            <div className="row ">
                <Card className="mt-4 w-100">
                    <h4 className="bg-white py-3 px-4 d-flex">
                            <h6 className="font-weight-bold PanelTitle">Panellist Dashboard</h6>                
                    </h4>
                    < hr className="my-0" />

                    <Card.Body>

                        <Row className=" ">
                            
                            <div className="col-md-3 d-flex">
                                <div className="col-md-4 d-flex align-items-center">
                                    <div className="panellistImg">
                                        <Image src="../profile1.png" roundedCircle className="panellistImg" />
                                    </div>
                                </div>
                                <div className="col-md-8 d-flex align-items-center">
                                    <h6 className="textColor">Panellist Name</h6>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex align-items-center">
                                <div className='col-md-6 '>
                                    <p className="mb-0">Toatal Earnings</p>
                                    <h6 className="mb-0 textColor">$ 200</h6>
                                </div>
                                <div className='col-md-6 align-items-center'>
                                    <p className="mb-0 ">Pending Invoices</p>
                                    <h6 className="mb-0 textColor">20</h6>
                                </div>
                            </div>
                            <div className="col-md-5 p-2 d-flex panellistbg d-flex justify-content-around">
                                <div className="col-md-4 d-flex align-items-center">
                                    <div className="mr-2 text-danger" ><FaExclamationCircle size={25} /></div>
                                    <div>
                                        <p className="mb-0 ">Interview Alert</p>
                                        <p className="mb-0">30/12/2019</p>
                                    </div>
                                </div>
                                <div className="col-md-2 mx-0 px-0 d-flex align-items-end">
                                    <p className="mb-0 ">00.15.02</p>
                                </div>
                                <div className="col-md-3 d-flex mx-0 p-2 align-items-center">
                                    <Button variant="primary" size="sm" className="rounded-pill text-center mb-0">
                                        <small>START INTERVIEW</small>
                                    </Button>
                                </div>
                                <div className="col-md-3 d-flex mx-0 p-1 align-items-center">
                                    <Button variant="primary" size="sm" className="rounded-pill text-center mb-0 ">
                                        <small >CANCEL</small></Button>
                                </div>

                            </div>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
            <div className="row">
                <Card className=" mt-4 w-100">
                    <Card.Header className="bg-white py-3 px-1 d-flex">
                        <div className="col-md-6">
                            <h6 className="font-weight-bold PanelTitle  px-2">Interview Schedule</h6>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="col-md-7">
                                <p><h6 className="float-right"><FaSearch /></h6></p>
                            </div>
                            <div className="col-md-5">
                                <h6 className="float-right font-weight-bold text-success">Add new comment</h6>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Row className="commentsTitles py-3 px-1 mx-3">
                            <div className="col-md-2">
                                <p className="mb-0">Date</p>
                            </div>
                            <div className="col-md-2 font-weight-bold">
                                <p className="mb-0">Interview Title</p>
                            </div>
                            <div className="col-md-6">
                                <p className="mb-0">Comments</p>
                            </div>
                            <div className="col-md-2">

                            </div>
                        </Row>
                        <Row className="py-4 px-1 mx-3">
                            <div className="col-md-2 m-auto fontsize">
                                <p className="font-weight-bold">21/08/2019</p>
                            </div>
                            <div className="col-md-2 fontsize">
                                <p className="font-weight-bold m-auto">Cognizant Interview</p>
                                <div className="text-primary d-flex">
                                    <Link><p className="textColor m-auto">Resume</p></Link>
                                    <Link> <p className="textColor m-auto">| JD | </p></Link>
                                    <Link><p className="textColor m-auto">Video Interview</p></Link>
                                </div>
                            </div>
                            <div className="col-md-5 month m-auto">
                                <p>Pass in the url prop of your social network, and the icon will be rendered social network, and the icon will be rendered.</p>
                            </div>
                            <div className="col-md-3 m-auto d-flex justify-content-around text-center">
                                <p className="mr-2 m-auto"><Link className="text-success fontsize float-left">Comment</Link></p>
                                <Button variant="primary" size="sm" className="rounded-pill h-50 text-center my-auto mr-2 mb-0 ">
                                    <small>START INTERVIEW</small></Button>
                                <Button variant="primary" size="sm" className="rounded-pill h-50 my-auto mb-0 ">
                                    <small>CANCEL</small></Button>
                            </div>
                        </Row>
                        < hr className="my-0" />
                        <Row className="py-4 px-1 mx-3">
                            <div className="col-md-2 fontsize">
                                <p className="font-weight-bold">21/08/2019</p>
                            </div>
                            <div className="col-md-2 fontsize">
                                <p className="font-weight-bold mb-0">Cognizant Interview</p>
                                <div className="text-primary d-flex">
                                    <Link><p className="textColor">Resume</p></Link>
                                    <Link> <p className="textColor">| JD | </p></Link>
                                    <Link><p className="textColor">Video Interview</p></Link>

                                </div>
                            </div>
                            <div className="col-md-5 month m-auto">
                                <p>Pass in the url prop of your social network, and the icon will be rendered social network, and the icon will be rendered.</p>
                            </div>
                            <div className="col-md-3 d-flex justify-content-around text-center">
                                <p className="mr-2 m-auto"><Link to="" className="text-success fontsize float-left">Comment</Link></p>
                                <Button variant="primary" size="sm" className="rounded-pill h-50 text-center my-auto mr-2 mb-0 ">
                                    <small>START INTERVIEW</small></Button>
                                <Button variant="primary" size="sm" className="rounded-pill h-50 my-auto mb-0 ">
                                    <small>CANCEL</small></Button>
                            </div>
                        </Row>
                        <hr className="my-0" />
                        <Row className="py-4 px-1 mx-3">
                            <div className="col-md-2 fontsize">
                                <p className="font-weight-bold m-auto">21/08/2019</p>
                            </div>
                            <div className="col-md-2 fontsize m-auto">
                                <p className="font-weight-bold mb-0">Cognizant Interview</p>
                                <div className="text-primary d-flex">
                                    <Link><p className="textColor m-auto">Resume</p></Link>
                                    <Link> <p className="textColor m-auto">| JD | </p></Link>
                                    <Link><p className="textColor">Video Interview</p></Link>

                                </div>
                            </div>
                            <div className="col-md-5 month m-auto">
                                <p>Pass in the url prop of your social network, and the icon will be rendered social network, and the icon will be rendered.</p>
                            </div>
                            <div className="col-md-3 d-flex justify-content-around text-center">
                                <p className="mr-2 m-auto"><Link to="" className="text-success fontsize float-left">Comment</Link></p>
                                <Button variant="primary" size="sm" className="rounded-pill h-50 text-center my-auto mr-2 mb-0 ">
                                    <small>START INTERVIEW</small></Button>
                                <Button variant="primary" size="sm" className="rounded-pill h-50 my-auto mb-0 ">
                                    <small>CANCEL</small></Button>
                            </div>

                        </Row>
                    </Card.Body>
                </Card>

            </div>
            <div className="row">
                <Card className=" mt-4 w-100">
                    <h4 className="bg-white pt-4 pb-0 px-1 d-flex">
                        <div className="col-md-6">
                            <h6 className="font-weight-bold PanelTitle px-2">Transactions</h6>
                        </div>
                    </h4>
                    <Card.Body>
                        <Row className="commentsTitles py-3 px-1 mx-3">
                            <div className="col-md-2 mr-3">
                                <p className="mb-0">Date</p>
                            </div>
                            <div className="col-md-2  mr-3font-weight-bold">
                                <p className="mb-0">Interview Title</p>
                            </div>
                            <div className="col-md-1 mr-3">
                                <p className="mb-0">Hours</p>

                            </div>
                            <div className="col-md-1 mr-3">
                                <p className="mb-0">Amount</p>

                            </div>
                            <div className="col-md-4 mr-3">
                                <p className="mb-0">Comments</p>
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
                        < hr className="my-0" />
                    </Card.Body>
                    <h4 className="bg-white py-0 px-1 d-flex">
                        <div className="col-md-6">
                            <h6 className="font-weight-bold PanelTitle px-2 pb-0">Invoices</h6>
                        </div>
                    </h4>

                    <Card.Body>
                        < hr className="mt-0" />
                        <Row className=" py-2 px-1 mx-3 d-flex">
                            <div className="col-md-1 ">
                                <Button variant="success" size="sm" className="my-auto w-100 mb-0 ">
                                    <small>PAID</small></Button>
                            </div>
                            <div className="col-md-1">
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
                            <div className="col-md-6 text-center">
                                <p className="mb-0">Completes enrolments by analyzing documents and tapes.</p>
                            </div>
                        </Row>
                        <Row className=" py-2 px-1 mx-3 d-flex">
                            <div className="col-md-1 ">
                                <Button variant="warning" size="sm" className="my-auto text-white w-100 mb-0 ">
                                    <small>PENDING</small></Button>
                            </div>
                            <div className="col-md-1">
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
                            <div className="col-md-6 text-center">
                                <p className="mb-0">Completes enrolments by analyzing documents and tapes.</p>
                            </div>
                        </Row>
                        <Row className=" py-2 px-1 mx-3 d-flex">
                            <div className="col-md-1 ">
                                <Button variant="danger" size="sm" className="my-auto mb-0 ">
                                    <small>CANCELLED</small></Button>
                            </div>
                            <div className="col-md-1">
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
                            <div className="col-md-6 text-center">
                                <p className="mb-0">Completes enrolments by analyzing documents and tapes.</p>
                            </div>
                        </Row>

                    </Card.Body>

                </Card>
            </div>
        </div>
    )
}
export default PanellistDashboard;