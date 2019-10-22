import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../css/RecruiterIntelligentSearch.css';
import { FaEllipsisV,FaPhone,FaEnvelope,FaWhatsapp,FaCommentDots } from 'react-icons/fa';

const RecruiterIntelligentSearch = () => {
    return (
        <div className="mx-4 px-4">
            <div className="row">
                <Card className="mt-4 w-100">
                    <div className="header pl-4 py-3 d-flex">
                        <div className="col-md-6 d-flex">
                            <h6 className="bg-white PanelTitle font-weight-bold">iNtelligent Search Results    </h6>
                            <h6 className="PanelTitle"> &nbsp; &nbsp; (3 Results)</h6>
                        </div>
                        <div className="col-md-4">
                            &nbsp;
                        </div>
                        <div className="col-md-2 align-right d-flex">
                            <Link to =" " className="textColor">Data Upload</Link>
                            <Link to=" " className="textColor">&nbsp; | &nbsp;</Link>
                            <Link to=" " className="textColor"> Edit</Link>
                            <div className="text-muted dotIcon ml-2" ><FaEllipsisV size={25} /></div>
                        </div>
                    </div>
                    < hr className="my-0 mx-4" />
                    <Card.Body>
                        <div className="row py-2 px-2">
                            <div className=" d-flex mb-1 pl-4 justify-content-around">
                                <Link to=" " className="textColor px-2 m-auto headerText">Sharon Mathews</Link>
                                <p className="textColor px-2 m-auto">|</p>
                                <Link to=" " className="textColor px-2 m-auto headerText"> Senior Java programmer </Link>
                                <p className="textColor px-2 m-auto">|</p>
                                <Link to=" " className="textColor px-2 m-auto headerText">Infosys</Link>
                            </div>
                            <div className="col-md-12 pl-4 d-flex justify-content-around">
                                <div className="col-md-1 px-0">
                                    <p className="mb-0 smallText">Primary Skills</p>
                                    <p className="font-weight-bold  PanelTitle smallText mb-0">JAVA,PHP</p>
                                </div>
                                <div className="col-md-2 px-0 pl-4">
                                    <p className="mb-0 smallText">Relocation</p>
                                    <p className="font-weight-bold  PanelTitle smallText mb-0">Hyd 20%, USA 100%</p>
                                </div>
                                <div className="col-md-1 px-0">
                                    <p  className="mb-0 smallText">Location</p>
                                    <p className="font-weight-bold  PanelTitle smallText mb-0">Hyderabad</p>
                                </div>
                                <div className="col-md-1 px-0">
                                    <p className="mb-0 smallText">Notice Period</p>
                                    <p className="font-weight-bold  PanelTitle smallText mb-0">2 Months</p>
                                </div>
                                <div className="col-md-2 pl-4">
                                    <p className="mb-0 smallText">Current CTC</p>
                                    <p className="font-weight-bold  PanelTitle smallText mb-0">INR 2,00,000</p>
                                </div>
                                <div className="col-md-2 px-0">
                                    <p className="mb-0 smallText">Expected CTC</p>
                                    <p className="font-weight-bold  PanelTitle smallText mb-0">INR 2,30,000</p>
                                </div>
                                <div className="col-md-2 d-flex justify-content-around">
                                    <Link to=" " className="dotIcon  PanelTitle "><FaPhone size={25} /></Link>
                                    <Link to=" " className="dotIcon  PanelTitle"><FaEnvelope size={25} /></Link>
                                    <Link to=" " className="dotIcon  PanelTitle"><FaCommentDots size={25} /></Link>
                                    <Link to=" " className="text-success"><FaWhatsapp size={25} /></Link>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row py-2 px-2">
                            <div className=" d-flex mb-1 pl-4 justify-content-around">
                                <Link to=" " className="textColor px-2 m-auto headerText">Sharon Mathews</Link>
                                <p className="textColor px-2 m-auto">|</p>
                                <Link to=" " className="textColor px-2 m-auto headerText"> Senior Java programmer </Link>
                                <p className="textColor px-2 m-auto">|</p>
                                <Link to=" " className="textColor px-2 m-auto headerText">Infosys</Link>
                            </div>
                            <div className="col-md-12 pl-4 d-flex justify-content-around">
                                <div className="col-md-1 px-0">
                                    <p className="mb-0 smallText">Primary Skills</p>
                                    <p className="font-weight-bold  PanelTitle smallText mb-0">JAVA,PHP</p>
                                </div>
                                <div className="col-md-2 pl-4">
                                    <p className="mb-0 smallText">Relocation</p>
                                    <p className="font-weight-bold  PanelTitle smallText mb-0">Hyd 20%, USA 100%</p>
                                </div>
                                <div className="col-md-1 px-0">
                                    <p  className="mb-0 smallText">Location</p>
                                    <p className="font-weight-bold  PanelTitle smallText mb-0">Hyderabad</p>
                                </div>
                                <div className="col-md-1 px-0">
                                    <p className="mb-0 smallText">Notice Period</p>
                                    <p className="font-weight-bold  PanelTitle smallText mb-0">2 Months</p>
                                </div>
                                <div className="col-md-2 pl-4">
                                    <p className="mb-0 smallText">Current CTC</p>
                                    <p className="font-weight-bold  PanelTitle smallText mb-0">INR 2,00,000</p>
                                </div>
                                <div className="col-md-2 px-0">
                                    <p className="mb-0 smallText">Expected CTC</p>
                                    <p className="font-weight-bold  PanelTitle smallText mb-0">INR 2,30,000</p>
                                </div>
                                <div className="col-md-2 d-flex justify-content-around">
                                    <Link to=" " className="dotIcon  PanelTitle "><FaPhone size={25} /></Link>
                                    <Link to=" " className="dotIcon  PanelTitle"><FaEnvelope size={25} /></Link>
                                    <Link to=" " className="dotIcon  PanelTitle"><FaCommentDots size={25} /></Link>
                                    <Link to=" " className="text-success"><FaWhatsapp size={25} /></Link>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row py-2 px-2">
                            <div className=" d-flex mb-1 pl-4 justify-content-around">
                                <Link to=" " className="textColor px-2 m-auto headerText">Sharon Mathews</Link>
                                <p className="textColor px-2 m-auto">|</p>
                                <Link to=" " className="textColor px-2 m-auto headerText"> Senior Java programmer </Link>
                                <p className="textColor px-2 m-auto">|</p>
                                <Link to=" " className="textColor px-2 m-auto headerText">Infosys</Link>
                            </div>
                            <div className="col-md-12 pl-4 d-flex justify-content-around">
                                <div className="col-md-1 px-0">
                                    <p className="mb-0 smallText">Primary Skills</p>
                                    <p className="font-weight-bold  PanelTitle smallText mb-0">JAVA,PHP</p>
                                </div>
                                <div className="col-md-2 pl-4">
                                    <p className="mb-0 smallText">Relocation</p>
                                    <p className="font-weight-bold  PanelTitle smallText mb-0">Hyd 20%, USA 100%</p>
                                </div>
                                <div className="col-md-1 px-0">
                                    <p  className="mb-0 smallText">Location</p>
                                    <p className="font-weight-bold  PanelTitle smallText mb-0">Hyderabad</p>
                                </div>
                                <div className="col-md-1 px-0">
                                    <p className="mb-0 smallText">Notice Period</p>
                                    <p className="font-weight-bold  PanelTitle smallText mb-0">2 Months</p>
                                </div>
                                <div className="col-md-2 pl-4">
                                    <p className="mb-0 smallText">Current CTC</p>
                                    <p className="font-weight-bold  PanelTitle smallText mb-0">INR 2,00,000</p>
                                </div>
                                <div className="col-md-2 px-0">
                                    <p className="mb-0 smallText">Expected CTC</p>
                                    <p className="font-weight-bold  PanelTitle smallText mb-0">INR 2,30,000</p>
                                </div>
                                <div className="col-md-2 d-flex justify-content-around">
                                    <Link to=" " className="dotIcon  PanelTitle "><FaPhone size={25} /></Link>
                                    <Link to=" " className="dotIcon  PanelTitle"><FaEnvelope size={25} /></Link>
                                    <Link to=" " className="dotIcon  PanelTitle"><FaCommentDots size={25} /></Link>
                                    <Link to=" " className="text-success"><FaWhatsapp size={25} /></Link>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            </div>
    )
}
export default RecruiterIntelligentSearch;
