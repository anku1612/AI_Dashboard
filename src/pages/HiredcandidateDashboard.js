import React from 'react';
import { Card, Image } from 'react-bootstrap';
import '../css/HiredcandidateDashboard.css';
import { FaEllipsisH,FaCheckCircle ,FaExclamationCircle,FaRegCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom'

const HiredcandidateDashboard = () => {
    return (
        <div className="mx-4 px-4">
            <div className="row">
                <div className="col-md-6">
                    <Card className="mt-4">
                        <div className="header pl-4 py-3 d-flex justify-content-between">
                            <h6 className="bg-white PanelTitle text-dark font-weight-bold">Hired Candidates</h6>
                            <div className="text-muted dotIcon mr-4" >  <FaEllipsisH  size={25} /></div>
                        </div>
                        < hr className="my-0 mx-4" />
                        <Card.Body>
                            <div className="row ">
                                <div className="col-md-2">
                                    <Image src="../profile1.png" roundedCircle className="hiredImg" />
                                </div>
                                <div className="col-md-8 px-0">
                                   <Link to="/RequireterMainPage" className="mb-0 text-dark font-weight-bold"> Sheron Mathews </Link>

                                    <p className="mb-0 textSmall PanelTitle">10 mins ago</p>
                                    <p className="mb-1">UI Designer @ Infosys</p>
                                    </div>
                                <div className="col-md-2 p-0 text-right">
                                    <p className="hired-stl">Hired</p>
                                    <p className="mb-0 PanelTitle textSmall">Jazz Recruiters</p>
                                </div>

                            </div>
                            <hr className="pb-3 pt-2"  />
                            <div className="row ">
                                <div className="col-md-2">
                                    <Image src="../profile1.png" roundedCircle className="hiredImg" />
                                </div>
                                <div className="col-md-8 px-0">
                                   <Link to="/RequireterMainPage" className="mb-0 text-dark font-weight-bold"> Sheron Mathews </Link>

                                    <p className="mb-0 textSmall PanelTitle">10 mins ago</p>
                                    <p className="mb-1">UI Designer @ Infosys</p>
                                    </div>
                                <div className="col-md-2 p-0 text-right">
                                    <p className="hired-stl">Hired</p>
                                    <p className="mb-0 PanelTitle textSmall">Jazz Recruiters</p>
                                </div>

                            </div>
                           <hr className="pb-3 pt-2" />
                           <div className="row ">
                                <div className="col-md-2">
                                    <Image src="../profile1.png" roundedCircle className="hiredImg" />
                                </div>
                                <div className="col-md-8 px-0">
                                   <Link to="/RequireterMainPage" className="mb-0 text-dark font-weight-bold"> Sheron Mathews </Link>

                                    <p className="mb-0 textSmall PanelTitle">10 mins ago</p>
                                    <p className="mb-1">UI Designer @ Infosys</p>
                                    </div>
                                <div className="col-md-2 p-0 text-right">
                                    <p className="hired-stl">Hired</p>
                                    <p className="mb-0 PanelTitle textSmall">Jazz Recruiters</p>
                                </div>

                            </div>
                            <hr className="pb-2 pt-2" />
                       
                       
                        </Card.Body>
                    </Card>
                </div>
            
                <div className="col-md-6">
                    <Card className="mt-4">
                        <div className="header pl-4 py-3 d-flex justify-content-between">
                            <h6 className="bg-white PanelTitle font-weight-bold text-dark">Verification Status</h6>
                            <div className="text-muted dotIcon mr-4" ><FaEllipsisH size={25} /></div>
                        </div>
                        < hr className="my-0 mx-4" />
                        <Card.Body>
                            <div className="row ">
                            <div className="col-md-2">
                                    <Image src="../profile1.png" roundedCircle className="hiredImg" />
                                </div>
                                <div className="col-md-4 p-0">
                                <Link to="/RequireterMainPage" className="mb-0 text-dark font-weight-bold"> Sharon Mathews </Link>
                                    <p className="mb-0 textSmall  PanelTitle">10 mins ago</p>
                                    <p className="mb-1 textSmall">UI Designer @ Accenture</p>
                                    <p className="mb-1 textSmall  PanelTitle">Jazz Recruiter</p>
                                </div>
                                <div className="col-md-2 text-center p-0 pt-4">
                                    <p className="text-center textSmall  text-right mb-0">Documents</p>
                                    <FaCheckCircle size={25} className="text-success" />     
                                </div>
                                <div className="col-md-2 text-center p-0 pt-4">
                                    <p className="mb-0 textSmall text-right">Background</p>
                                    <FaExclamationCircle className="hold_icon" />
                                </div>
                                <div className="col-md-2 text-right pt-4">
                                    <p className="mb-0 textSmall ">Hired</p>
                                        <FaRegCircle size={20} className="mr-1"/>
                                </div>
                            </div>
                            <hr />
                            <div className="row ">
                            <div className="col-md-2">
                                    <Image src="../profile1.png" roundedCircle className="hiredImg" />
                                </div>
                                <div className="col-md-4 p-0">
                                   <Link to="/RequireterMainPage" className="mb-0 text-dark font-weight-bold"> Sheron Mathews </Link>

                                    <p className="mb-0 textSmall  PanelTitle">10 mins ago</p>
                                    <p className="mb-1 textSmall">UI Designer @ Accenture</p>
                                    <p className="mb-1 textSmall  PanelTitle">Jazz Recruiter</p>
                                </div>
                                <div className="col-md-2 text-center p-0 pt-4">
                                    <p className="text-center textSmall  text-right mb-0">Documents</p>
                                    <FaCheckCircle size={25} className="text-success" />     
                                </div>
                                <div className="col-md-2 text-center p-0 pt-4">
                                    <p className="mb-0 textSmall text-right">Background</p>
                                    <FaExclamationCircle className="hold_icon" />
                                </div>
                                <div className="col-md-2 text-right pt-4">
                                    <p className="mb-0 textSmall ">Hired</p>
                                    <FaRegCircle size={20} className="mr-1"/>
                                </div>
                            </div>
                            <hr />
                            <div className="row pb-1">
                            <div className="col-md-2">
                                    <Image src="../profile1.png" roundedCircle className="hiredImg" />
                                </div>
                                <div className="col-md-4 p-0">
                                   <Link to="/RequireterMainPage" className="mb-0 text-dark font-weight-bold"> Sheron Mathews </Link>

                                    <p className="mb-0 textSmall  PanelTitle">10 mins ago</p>
                                    <p className="mb-1 textSmall">UI Designer @ Accenture</p>
                                    <p className="mb-1 textSmall  PanelTitle">Jazz Recruiter</p>
                                </div>
                                <div className="col-md-2 text-center p-0 pt-4">
                                    <p className="text-center textSmall  text-right mb-0">Documents</p>
                                    <FaCheckCircle size={25} className="text-success" />     
                                </div>
                                <div className="col-md-2 text-center p-0 pt-4">
                                    <p className="mb-0 textSmall text-right">Background</p>
                                    <FaExclamationCircle className="hold_icon" />
                                </div>
                                <div className="col-md-2 text-right pt-4">
                                    <p className="mb-0 textSmall ">Hired</p>
                                    <FaCheckCircle size={25} className="text-success" />     
                                </div>
                            </div>
                            <hr />
                        </Card.Body>
                    </Card>
                </div>
            
            </div>
        </div>
    )
}
export default HiredcandidateDashboard;