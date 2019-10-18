import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AnyChart from '../../node_modules/anychart-react/dist/anychart-react.min.js'
import { Pie, Line } from '../../node_modules/react-chartjs-2/es/index'
import '../css/ProfileSummary.css';

class Welcome extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'React',
            lineData: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Old User",
                    backgroundColor: '#08AEEA',
                    borderColor: '#08AEEA',
                    data: [0, 10, 5, 14, 30, 40, 55],
                }]
            },

            pieData: {
                labels: ["January", "February", "March", "April", "May"],
                datasets: [{
                    backgroundColor: ['rgba(255, 0, 0, 0.7)',
                        'rgba(255, 100, 50, 0.7)',
                        'rgba(10, 100, 200, 0.7)',
                        'rgba(20, 110, 250, 0.7)',
                        'rgba(50, 210, 350, 0.7)',
                        'rgba(255, 100, 255, 0.7)',
                        'rgba(250, 200, 10, 0.7)'],
                    borderColor: ['rgba(255, 0, 0, 0.7)',
                        'rgba(255, 100, 50, 0.7)',
                        'rgba(10, 100, 200, 0.7)',
                        'rgba(20, 110, 250, 0.7)',
                        'rgba(50, 210, 350, 0.7)',
                        'rgba(255, 100, 255, 0.7)',
                        'rgba(250, 200, 10, 0.7)'],
                    data: [25, 10, 5, 14, 30, 40, 55],
                }]
            },

            pieChartOptions: {
                maintainAspectRatio: true,
                legend: {
                    position: 'left',
                }
            },
            dataFlow: {
                datasets: [{
                    backgroundColor: ['rgba(255, 0, 0, 0.7)',
                        'rgba(255, 100, 50, 0.7)',
                        'rgba(10, 100, 200, 0.7)',
                        'rgba(20, 110, 250, 0.7)',
                        'rgba(50, 210, 350, 0.7)',
                        'rgba(255, 100, 255, 0.7)',
                        'rgba(250, 200, 10, 0.7)'],
                    borderColor: ['rgba(255, 0, 0, 0.7)',
                        'rgba(255, 100, 50, 0.7)',
                        'rgba(10, 100, 200, 0.7)',
                        'rgba(20, 110, 250, 0.7)',
                        'rgba(50, 210, 350, 0.7)',
                        'rgba(255, 100, 255, 0.7)',
                        'rgba(250, 200, 10, 0.7)'],
                    data: [25,],
                }]
            },
        };
    }






    render() {
        const complexSettings = {
            type: 'row',
            data: "infosys,1\nCognizant,2\nAccenture,5\nCyient,10, value:#637166",
            xAxis: [1, {
                orientation: 'right',
                enabled: true,
                labels: {
                    format: '{%Value}{decimalPoint:\\,}',
                    fontColor: 'red'
                }
            }],
            legend: {
                layout: "",
                padding: 0,
                position: "left",
                itemsLayout: "vertical-expandable"
            },
            lineMarker: {
                value: 4.5
            }
        }
        return (
            <div className="mt-5 mx-4">
                <Row>
                    <Col md="3">
                        <div className="card">
                            <h6 className="card-header  bg-white">Skills</h6>
                            <div className="card-body d-flex item_align">
                                <div className="col-md-5 my-3">
                                    <p className="mb-1">Java</p>
                                    <p className="mb-1">HTML</p>
                                    <p className="mb-1">UL Design</p>
                                    <p className="mb-1">PYTHON</p>
                                    <p className="mb-1">CSS</p>
                                    <p className="mb-1">Angular JS</p>
                                </div>
                                <div className="col-md-3 my-3">
                                    <p className="mb-1">10 Yrs</p>
                                    <p className="mb-1">10 Yrs</p>
                                    <p className="mb-1">10 Yrs</p>
                                    <p className="mb-1">10 Yrs</p>
                                    <p className="mb-1">10 Yrs</p>
                                    <p className="mb-1">10 Yrs</p>
                                </div>
                                <div className="col-md-4 my-3">
                                    <p className="mb-1">2016-19</p>
                                    <p className="mb-1">2016-19</p>
                                    <p className="mb-1">2016-19</p>
                                    <p className="mb-1">2016-19</p>
                                    <p className="mb-1">2016-19</p>
                                    <p className="mb-1">2016-19</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="card">
                            <h6 className="card-header bg-white">Domain</h6>
                            <div className="card-body">
                                <AnyChart {...complexSettings} type="pie" />
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="card">
                            <h6 className="card-header  bg-white">CV-Summarization Charts</h6>
                            <div className="card-body">
                                <Pie data={this.state.pieData} options={this.state.pieChartOptions} width={1000} height={580} redraw />
                            </div>
                        </div>
                    </Col>

                    <Col md="3">
                        <div className="card">
                            <h6 className="card-header  bg-white">Designation/Roles</h6>
                            <div className="card-body">
                                {/* <h5 className="card-title">Special</h5> */}
                                <Pie data={this.state.pieData} options={this.state.pieChartOptions} width={1000} height={580} redraw />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col md="6">
                        <div className="card">
                            <h6 className="card-header bg-white">Career Progress</h6>
                            <div className="card-body">
                                <Line data={this.state.lineData} width={1000} height={332} redraw />
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="card">
                            <h6 className="card-header  bg-white">Weightage</h6>
                            <div className="card-body pb-4 pt-1">
                                <div className="my-2">
                                    <div className="adjest_items d-flex  pb-5 pt-5">
                                        <Col md="6 hlo">
                                            {/* <Pie data={this.state.dataFlow} height={350} /> */}
                                            <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="90" cy="90" r="80" stroke="#e5e6fa" fill="#beeb5d" strokeWidth="15" />
                                            </svg>
                                            <svg version="1.1" id="line_2" xmlns="http://www.w3.org/2000/svg"
                                             x="0px" y="0px" width="30px" height="80px" xml="preserve">
                                                 <path className="path-vert" fill="#333333" strokeWidth="3"
                                                  stroke="#333333" d="M30 0 v600 400"/>
                                            </svg>
                                            <div className="resume_screen">
                                            <p className="card-title my-0">Resume</p>
                                            <p className="per_bar">90%</p>
                                            </div>
                                      
                                        </Col>
                                        <Col md="6">
                                            <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="90" cy="90" r="80" stroke="#e5e6fa" fill="#efbb70" 
                                                strokeDasharray=" 1000" animation="draw1 5s linear alternate" strokeWidth="15" />
                                            </svg>
                                            <svg version="1.1" id="line_2" xmlns="http://www.w3.org/2000/svg"
                                             x="0px" y="0px" width="30px" height="80px" xml="preserve">
                                                 <path className="path-vert" fill="#333333" strokeWidth="3"
                                                  stroke="#333333" d="M30 0 v600 400"/>
                                            </svg>
                                            <div className="resume_screen">
                                            <p className="card-title my-0">Screening</p>
                                            <p className="per_bar">75%</p>
                                            </div>
                                          
                                        </Col>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="card">
                            <h6 className="card-header  bg-white">Education / certifications</h6>
                            <div className="card-body">
                                <p className="card-title mb-1">Education</p>
                                <Row>
                                    <Col md="6" className="font-weight-bold small col-md-6 pb-0 pb-1">
                                        <div>MTECH</div>
                                        <div>IIT</div>
                                        <div className="font-weight-light">2012-2015</div>
                                    </Col>
                                    <Col md="6" className="font-weight-bold small col-md-6 pb-0 pb-1">
                                        <div>BTECH</div>
                                        <div>NIT</div>
                                        <div className="font-weight-light">2008-2012</div>
                                    </Col>
                                </Row>
                                <hr />
                                <p className="card-title mb-1">Certification</p>
                                <Row>
                                    <Col md="6" className="font-weight-bold small pb-0 pb-1">
                                        <div>Diploma In Graphics</div>
                                        <div className="font-weight-light">2012-2015</div>
                                    </Col>
                                    <Col md="6" className="font-weight-bold small pb-0 pb-1">
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
}
export default Welcome;
