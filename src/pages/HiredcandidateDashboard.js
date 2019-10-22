import React from 'react';
import { Card, Image } from 'react-bootstrap';
import '../css/HiredcandidateDashboard.css';
import { FaEllipsisV,FaTimesCircle,FaCheckCircle } from 'react-icons/fa';

const HiredcandidateDashboard = () => {
    return (
        <div className="mx-4 px-4">
            <div className="row">
                <div className="col-md-6">
                    <Card className="mt-4">
                        <div className="header pl-4 py-3 d-flex justify-content-between">
                            <h6 className="bg-white PanelTitle font-weight-bold">Hired Candidates</h6>
                            <div className="text-muted dotIcon mr-4" ><FaEllipsisV size={25} /></div>
                        </div>
                        < hr className="my-0 mx-4" />
                        <Card.Body>
                            <div className="row ">
                                <div className="col-md-2">
                                    <Image src="../profile1.png" roundedCircle className="hiredImg" />
                                </div>
                                <div className="col-md-5 px-0">
                                    <p className="mb-0 HiredtextColor">Sheron Mathews</p>
                                    <p className="mb-1">Senior Java Programmer @ Infosys</p>
                                    <p className="mb-0 textSmall PanelTitle">10 mins ago</p>
                                </div>
                                <div className="col-md-3 mt-3">
                                    <p className="mb-0 PanelTitle textSmall">Jazz Recruiters</p>
                                    <div className="d-flex  PanelTitle justify-content-between">
                                        <p className="PanelTitle textSmall">10:00</p>
                                        <p className="PanelTitle textSmall">20/01/2019</p>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <p className="text-success text-center mb-0 align-center">Hired</p>
                                </div>

                            </div>
                            <hr />
                            <div className="row ">
                                <div className="col-md-2">
                                    <Image src="../profile1.png" roundedCircle className="hiredImg" />
                                </div>
                                <div className="col-md-5 px-0">
                                    <p className="mb-0 HiredtextColor">Sheron Mathews</p>
                                    <p className="mb-1">Senior Java Programmer @ Infosys</p>
                                    <p className="mb-0 textSmall  PanelTitle">10 mins ago</p>
                                </div>
                                <div className="col-md-3 mt-3">
                                    <p className="mb-0  PanelTitle textSmall">Jazz Recruiters</p>
                                    <div className="d-flex  PanelTitle justify-content-between">
                                        <p className=" PanelTitle textSmall">10:00</p>
                                        <p className=" PanelTitle textSmall">20/01/2019</p>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <p className="text-success text-center mb-0">Hired</p>
                                </div>

                            </div>
                           <hr />
                           <div className="row ">
                                <div className="col-md-2">
                                    <Image src="../profile1.png" roundedCircle className="hiredImg" />
                                </div>
                                <div className="col-md-5 px-0">
                                    <p className="mb-0 HiredtextColor">Sheron Mathews</p>
                                    <p className="mb-1">Senior Java Programmer @ Infosys</p>
                                    <p className="mb-0 textSmall  PanelTitle">10 mins ago</p>
                                </div>
                                <div className="col-md-3 mt-3">
                                    <p className="mb-0  PanelTitle textSmall">Jazz Recruiters</p>
                                    <div className="d-flex  PanelTitle justify-content-between">
                                        <p className=" PanelTitle textSmall">10:00</p>
                                        <p className=" PanelTitle textSmall">20/01/2019</p>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <p className="text-success text-center pb-0">Hired</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            
                <div className="col-md-6">
                    <Card className="mt-4">
                        <div className="header pl-4 py-3 d-flex justify-content-between">
                            <h6 className="bg-white PanelTitle font-weight-bold">Verification</h6>
                            <div className="text-muted dotIcon mr-4" ><FaEllipsisV size={25} /></div>
                        </div>
                        < hr className="my-0 mx-4" />
                        <Card.Body>
                            <div className="row ">
                            <div className="col-md-2">
                                    <Image src="../profile1.png" roundedCircle className="hiredImg" />
                                </div>
                                <div className="col-md-4 px-0">
                                    <p className="mb-0 HiredtextColor">Sheron Mathews</p>
                                    <p className="mb-1 textSmall">Senior Java Programmer @ Infosys</p>
                                    <p className="mb-1 textSmall  PanelTitle">Jazz Recruiter</p>
                                    <p className="mb-0 textSmall  PanelTitle">10 mins ago</p>
                                </div>
                                <div className="col-md-2 text-center m-auto">
                                    <p className="text-center textSmall  PanelTitle text-center mb-0">Documents</p>
                                    <FaTimesCircle size={25} className="text-danger mt-1" />      
                                </div>
                                <div className="col-md-2 text-center m-auto">
                                    <p className="mb-0 textSmall  PanelTitle text-center">Background</p>
                                    <FaCheckCircle size={25} className="text-success mt-1" />
                                </div>
                                <div className="col-md-2 m-auto">
                                    <p className="mb-0 textSmall  PanelTitle text-center">Status</p>
                                    <p className="mb-0 mt-2 textSmall text-danger text-center">Not Joined</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row ">
                            <div className="col-md-2">
                                    <Image src="../profile1.png" roundedCircle className="hiredImg" />
                                </div>
                                <div className="col-md-4 px-0">
                                    <p className="mb-0 HiredtextColor">Sheron Mathews</p>
                                    <p className="mb-1 textSmall">Senior Java Programmer @ Infosys</p>
                                    <p className="mb-1 textSmall  PanelTitle">Jazz Recruiter</p>
                                    <p className="mb-0 textSmall  PanelTitle">10 mins ago</p>
                                </div>
                                <div className="col-md-2 text-center m-auto">
                                    <p className="text-center textSmall text-center  PanelTitle mb-0">Documents</p>
                                    <FaCheckCircle size={25} className="text-success mt-1" />      
                                </div>
                                <div className="col-md-2 text-center m-auto">
                                    <p className="mb-0 textSmall  PanelTitle text-center">Background</p>
                                    <FaCheckCircle size={25} className="text-success mt-1" />
                                </div>
                                <div className="col-md-2 ">
                                    <p className="mb-0 textSmall text-center mt-3  PanelTitle">Status</p>
                                    <p className="mb-0 mt-1 textSmall text-success text-center">Joined</p>
                                    <p className="mb-0 textSmall text-success text-center">02/12/2019</p>
                                </div>
                            </div>  
                           <hr />
                           <div className="row ">
                            <div className="col-md-2">
                                    <Image src="../profile1.png" roundedCircle className="hiredImg" />
                                </div>
                                <div className="col-md-4 px-0">
                                    <p className="mb-0 HiredtextColor">Sheron Mathews</p>
                                    <p className="mb-1 textSmall">Senior Java Programmer @ Infosys</p>
                                    <p className="mb-1 textSmall  PanelTitle">Jazz Recruiter</p>
                                    <p className="mb-0 textSmall  PanelTitle">10 mins ago</p>
                                </div>
                                <div className="col-md-2 text-center m-auto">
                                    <p className="text-center textSmall  PanelTitle text-center mb-0">Documents</p>
                                    <FaCheckCircle size={25} className="text-success mt-1" />      
                                </div>
                                <div className="col-md-2 text-center m-auto">
                                    <p className="mb-0 textSmall text-center  PanelTitle">Background</p>
                                    <FaCheckCircle size={25} className="text-success mt-1" />
                                </div>
                                <div className="col-md-2 ">
                                    <p className="mb-0 textSmall text-center  PanelTitle mt-3">Status</p>
                                    <p className="mb-0 mt-1 textSmall text-success text-center">Joined</p>
                                    <p className="mb-0 textSmall text-success text-center">02/12/2019</p>
                                </div>
                            </div>
                            
                        </Card.Body>
                    </Card>
                </div>
            
            </div>
        </div>
    )
}
export default HiredcandidateDashboard;