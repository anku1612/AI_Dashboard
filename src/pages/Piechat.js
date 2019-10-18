// import React from 'react';
// import { Row, Col, ProgressBar } from 'react-bootstrap';
// import AnyChart from '../../node_modules/anychart-react/dist/anychart-react.min.js'
// // import Piechart from "./Piechart"
// // import {anyhart} from 'anychart-react'
// import '../css/ProfileSummary.css';



// const complexSettings = {
//     type: 'row',
//     data: "infosys,1\nCognizant,2\nAccenture,5\nCyient,10, value:#637166",
//     xAxis: [1, {
//       orientation: 'right',
//       enabled: true,
//       labels: {
//         format: '{%Value}{decimalPoint:\\,}',
//         fontColor: 'red'
//       }
//     }],
//     legend: {
//       layout:"",
//       padding: 0,
//       position:"left",
//       itemsLayout:"vertical-expandable"
//     },
//     lineMarker: {
//       value: 4.5
//     }
//   };

  

  
// const Chartrow = () => {
//     return (
//         <div className="mt-5 mx-4">
//             <Row>
//             <Col md="3">
//                     <div className="card">
//                         <h6 className="card-header  bg-white">Skills</h6>
//                         <div className="card-body d-flex item_align">
//                            <div className="col-md-5 my-3">
//                                <p className="mb-1">Java</p>
//                                <p className="mb-1">HTML</p>
//                                <p className="mb-1">UL Design</p>
//                                <p className="mb-1">PYTHON</p>
//                                <p className="mb-1">CSS</p>
//                                <p className="mb-1">Angular JS</p>
//                            </div>
//                            <div className="col-md-3 my-3">
//                            <p className="mb-1">10 Yrs</p>
//                            <p className="mb-1">10 Yrs</p>
//                            <p className="mb-1">10 Yrs</p>
//                            <p className="mb-1">10 Yrs</p>
//                            <p className="mb-1">10 Yrs</p>
//                            <p className="mb-1">10 Yrs</p>
//                            </div>
//                            <div className="col-md-4 my-3">
//                                <p className="mb-1">2016-19</p>
//                                <p className="mb-1">2016-19</p>
//                                <p className="mb-1">2016-19</p>
//                                <p className="mb-1">2016-19</p>
//                                <p className="mb-1">2016-19</p>
//                                <p className="mb-1">2016-19</p>
//                            </div>
//                         </div>
//                     </div>
//                 </Col>
//                 <Col md="3">
//                     <div className="card">
//                         <h6 className="card-header bg-white">Domain</h6>
//                         <div className="card-body">
//                         <AnyChart {...complexSettings} type="pie"/>
                        
//                         </div>
//                     </div>
//                 </Col>
//                 <Col md="3">
//                     <div className="card">
//                         <h6 className="card-header  bg-white">CV-Summarization Charts</h6>
//                         <div className="card-body">
                       
//                         </div>
//                     </div>
//                     </Col>
              
//                     <Col md="3">
//                     <div className="card">
//                         <h6 className="card-header  bg-white">Designation/Roles</h6>
//                         <div className="card-body">
//                             <h5 className="card-title">Special</h5>
//                             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                         </div>
//                     </div>
//                 </Col>
//             </Row>
//             <Row className="mt-5">
//                 <Col md="6">
//                     <div className="card">
//                         <h6 className="card-header bg-white">Career Progress</h6>
//                         <div className="card-body">
//                             <h5 className="card-title">Chart</h5>
//                             <p className="card-text"></p>
//                         </div>
//                     </div>
//                 </Col>
//                 <Col md="3">
//                     <div className="card">
//                         <h6 className="card-header  bg-white">Weightage</h6>
//                         <div className="card-body">
//                             <div className="my-2">
//                             <p className="card-title my-0">Resume</p>
//                             <ProgressBar variant="success" now={60} label="60" />
//                             </div>
//                             <div className="my-2">
//                             <p className="card-title my-0">Screening</p>
//                             <ProgressBar variant="success" now={80} label="80" />
//                             </div>
//                         </div>
//                     </div>
//                 </Col>
//                 <Col md="3">
//                     <div className="card">
//                         <h6 className="card-header  bg-white">Education / certifications</h6>
//                         <div className="card-body">
//                             <p className="card-title mb-1">Education</p>
//                             <Row>
//                             <Col md="6" className="font-weight-bold small">
//                             <div>MTECH</div>
//                             <div>IIT</div>
//                             <div className="font-weight-light">2012-2015</div>
//                             </Col>
//                             <Col md="6" className="font-weight-bold small">
//                             <div>BTECH</div>
//                             <div>NIT</div>
//                             <div className="font-weight-light">2008-2012</div>
//                             </Col>
//                             </Row>
//                             <hr/>
//                             <p className="card-title mb-1">Certification</p>
//                             <Row>
//                             <Col md="6" className="font-weight-bold small">
//                             <div>Diploma In Graphics</div>
//                             <div className="font-weight-light">2012-2015</div>
//                             </Col>
//                             <Col md="6" className="font-weight-bold small">
//                             <div>Diploma In Graphics</div>
//                             <div className="font-weight-light">2008-2012</div>
//                             </Col>
//                             </Row>
                            
//                         </div>
//                     </div>
//                 </Col>
//             </Row>

//         </div>
//     )
// }

// export default Chartrow;
