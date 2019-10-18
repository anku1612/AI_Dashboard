import React from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import Piechart from "./Piechart"
import AnyChart from '../../node_modules/anychart-react/dist/anychart-react.min.js'


const Chartrow = () => {
    return (
        <div className="mt-5 mx-4">
            <Row>
                {/* Domain */}
                <Col md="3">
                    <div className="card">
                        <h6 className="card-header bg-white">Domain</h6>
                        <div className="card-body">
                            <AnyChart
                                type="bar"
                                data={[1, 2, 3, 4]}
                            // title="Simple pie chart"
                            />
                        </div>
                    </div>
                </Col>
                {/* CV */}
                <Col md="3">
                    <div className="card">
                        <h6 className="card-header  bg-white">CV-Summarization Charts</h6>
                        <div className="card-body">
                           
                        </div>
                    </div>
                </Col>
                {/* Skills */}
                <Col md="3">
                    <div className="card">
                        <h6 className="card-header  bg-white">Skills</h6>
                        <div className="card-body">
                            <h6 className="card-title">Special title treatment</h6>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </Col>
                {/* Designation */}
                <Col md="3">
                    <div className="card">
                        <h6 className="card-header  bg-white">Designation/Roles</h6>
                        <div className="card-body">
                            <h5 className="card-title">Special</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md="6">
                    <div className="card">
                        <h6 className="card-header bg-white">Career Progress</h6>
                        <div className="card-body">
                            <h5 className="card-title">Chart</h5>
                        
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="card">
                        <h6 className="card-header  bg-white">Weightage</h6>
                        <div className="card-body">
                            <div className="my-2">
                                <p className="card-title my-0">Resume</p>
                                <ProgressBar variant="success" now={60} label="60" />
                            </div>
                            <div className="my-2">
                                <p className="card-title my-0">Screening</p>
                                <ProgressBar variant="success" now={80} label="80" />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="card">
                        <h6 className="card-header bg-white">Education / certifications</h6>
                        <div className="card-body">
                            <p className="card-title mb-1">Education</p>
                            <Row>
                                <Col md="6" className="font-weight-bold small">
                                    <div>MTECH</div>
                                    <div>IIT</div>
                                    <div className="font-weight-light">2012-2015</div>
                                </Col>
                                <Col md="6" className="font-weight-bold small">
                                    <div>BTECH</div>
                                    <div>NIT</div>
                                    <div className="font-weight-light">2008-2012</div>
                                </Col>
                            </Row>
                            <hr />
                            <p className="card-title mb-1">Certification</p>
                            <Row>
                                <Col md="6" className="font-weight-bold small">
                                    <div>Diploma In Graphics</div>
                                    <div className="font-weight-light">2012-2015</div>
                                </Col>
                                <Col md="6" className="font-weight-bold small">
                                    <div>Diploma In Graphics</div>
                                    <div className="font-weight-light">2008-2012</div>
                                </Col>
                            </Row>

                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default Chartrow;
