import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col, CardGroup, Container, CardImg, Card } from 'react-bootstrap';
import { FormControl, Image, } from 'react-bootstrap';
// import '../css/HeaderStyle.css';
import '../css/Candidatesearch.css';
import { FaVideo, FaBullhorn, FaWikipediaW, FaEnvelope, FaPhone, FaRocketchat } from 'react-icons/fa';


const profileImg = {
  height: "100px",
  width: "100px",
}
const candidateSearch = {
  border: "none",
}
const Candidatesearch = () => {
  return (
    <Card className="candidateSearch mt-4 w-100" style={candidateSearch}>
      <Card.Header className="bg-white">Candidate Search</Card.Header>
      <Card.Body>
        <Row className="mx-2">
          <CardGroup className="w-100">
            <Card className="col-md-4 d-flex">
              <Card.Body className="d-flex justify-content-around">
                <Card.Img style={profileImg} className="rounded-circle" src="../profile1.png" />
                <Card.Text>
                  <div>
                    <h5 className="text-primary mb-2 font-weight-bold">Sharon Mathews</h5>
                    <p className="mb-0">Senior java Programmer @infosys</p>
                    <p className="mb-3"><span className="font-weight-bold">Exp:</span> 20 years</p>
                    <div className="d-flex">
                      <p className="font-weight-bold">Resume</p>
                      <div className="d-flex">
                        <p className="px-2"><FaVideo /></p>
                        <p className="px-2"><FaBullhorn /></p>
                        <p className="px-2"> <FaWikipediaW /></p></div>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="col-md-7">
              <Card.Body className="py-1">
                <Row className="d-flex py-1 mb-1 justify-content-around">
                 <div className="mb-1">
                   <p className="font-weight-bold mb-0">Primary skills</p>
                   <p>Java,PHP</p>
                 </div>
                 <div className="mb-1">
                 <p className="font-weight-bold mb-0">Role</p>
                   <p>Project Manager</p>
                 </div>
                 <div className="mb-1">
                 <p className="font-weight-bold mb-0">Current CTC</p>
                   <p>INR 2,00,000/-</p>
                 </div>
                 <div className="mb-1">
                 <p className="font-weight-bold mb-0">Expected CTC</p>
                   <p>INR 2,80,000/-</p>
                 </div>
                 <div className="mb-1">
                 <p className="font-weight-bold mb-0">Email</p>
                   <p>vishaldilwale@gmail.com</p>
                 </div>
                </Row>
                <hr className="my-1" />
                <Row className="d-flex mb-1  justify-content-around">
                 <div>
                   <p className="font-weight-bold mb-0">Notice Period</p>
                   <p>2 Months</p>
                 </div>
                 <div>
                 <p className="font-weight-bold mb-0">Visa</p>
                   <p>HB</p>
                 </div>
                 <div>
                 <p className="font-weight-bold mb-0">Location</p>
                   <p>Hyderabad</p>
                 </div>
                 <div>
                 <p className="font-weight-bold mb-0">Employed</p>
                   <p>Agency</p>
                 </div>
                 <div>
                 <p className="font-weight-bold mb-0">Phone</p>
                   <p>+91-951-838-7602</p>
                 </div>
                </Row>
              </Card.Body>
            </Card>
            <Card className="col-md-1">
              <Card.Body className="px-0">
                <div className="align-items-center">
                  <div eventKey={4} className="icon fa-2x"> <FaPhone className="fa-2x" /></div>
                  <div eventKey={4} className="icon fa-2x"> <FaEnvelope /></div>
                  <div eventKey={4} className="icon fa-2x"> <FaRocketchat /></div>
                </div>
              </Card.Body>
            </Card>
          </CardGroup>
        </Row>
      </Card.Body>
    </Card>
  )
}
export default Candidatesearch;
