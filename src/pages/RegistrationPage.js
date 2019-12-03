import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col, Row, Image, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FileUpload } from 'primereact/fileupload';
import { Growl } from 'primereact/growl';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



class RegPage extends React.Component {
  constructor() {
    super();

    this.onUpload = this.onUpload.bind(this);
    this.onBasicUpload = this.onBasicUpload.bind(this);
    this.onBasicUploadAuto = this.onBasicUploadAuto.bind(this);
  }
  onUpload(event) {
    this.growl.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  }

  onBasicUpload(event) {
    this.growl.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  onBasicUploadAuto(event) {
    this.growl.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
  }
  render() {
    return (
      <div className="">
        <Navbar expand="lg" className="bor_stlreg">
          <Image src="../logo.png" className="logo_stl" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto links">
            </Nav>
            <Nav className="links">
              <Link to="/LoginPage" className="lan_page nav-link text-dark font-weight-bold">LogOut</Link>
              <Link to="/" className="lan_page nav-link text-dark font-weight-bold" >Help</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="p-5">
          <div className="reg_main">
            <div className="bor_stlreg pb-5">
            <h5>Easy Apply  </h5>
            <p> Choose an option to autocomplete your application. You can still fill your profile manually. </p>
            <div className="content-section implementation">
              <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="/*" maxFileSize={1000000} onUpload={this.onBasicUpload} chooseLabel="   Upload Your Resume" />
              <Growl ref={(el) => { this.growl = el; }}></Growl>
            </div>
            </div>

            <Form>

              <div className="py-4 my-0">
            <h4 className="">Personal Information</h4>
                <Row>
                  <Col md={3} className="pt-4 text-center p-0">
                    <Image src="../pfpImage.png" height="130px" width="130px" roundedCircle thumbnail className="mb-4" />
                    <div className="content-section implementation">
              <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="/*" maxFileSize={1000000} onUpload={this.onBasicUpload} chooseLabel="Change your Profile" />
              <Growl ref={(el) => { this.growl = el; }}></Growl>
            </div>
                  </Col>
                  <Col md={1}></Col>
                  <Col md={8}>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label className="float-left">First Name</Form.Label>
                        <span className="requiredStars float-left text-danger mx-1">*</span>
                        <Form.Control type="text" placeholder="Enter Last Name" required />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label className="float-left">Last Name</Form.Label>
                        <span className="requiredStars float-left text-danger mx-1">*</span>
                        <Form.Control type="text" placeholder="Enter Last Name" />
                      </Form.Group>

                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridMbNo">
                        <Form.Label className="float-left">Mobile Number</Form.Label>
                        <span className="requiredStars float-left text-danger mx-1">*</span>
                        <Form.Control type="number" placeholder="Enter Mobile Number" required />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="float-left">Email</Form.Label>
                        <span className="requiredStars float-left text-danger mx-1">*</span>
                        <Form.Control type="email" placeholder="Enter Email" required />
                      </Form.Group>

                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridTypeofIntw">
                        <Form.Label className="float-left">Type of Interviews Taken</Form.Label>
                        <span className="requiredStars float-left text-danger mx-1">*</span>
                        <Form.Control as="select" required>
                          <option>Select</option>
                          <option>Online</option>
                          <option>Phone</option>
                          <option>In-Person</option>

                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridIntwNo">
                        <Form.Label className="float-left">Number of Interviews Taken so far</Form.Label>
                        <span className="requiredStars float-left text-danger mx-1">*</span>
                        <Form.Control type="number" placeholder="Number of Interviews" required />
                      </Form.Group>

                    </Form.Row>
                    <Form.Row >

                      <Form.Group as={Col} controlId="formGridTypeofIntw" className="d-block ">
                        <div className="d-flex">
                          <InputGroup.Prepend className="w-25">
                            <Form.Control as="select" className=" ">
                              <option>Facebook</option>
                              <option>LinkedIn</option>
                              <option>Google+</option>
                              <option>Instagram</option>
                              <option>Twitter</option>

                            </Form.Control>
                          </InputGroup.Prepend>
                          <Form.Control type="url" placeholder="Enter URL" />
                        </div>

                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridRole">
                        <Form.Label className="float-left">Role</Form.Label>
                        <span className="requiredStars float-left text-danger mx-1">*</span>
                        <Form.Control type="text" placeholder="Role" required />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridDesignation">
                        <Form.Label className="float-left">Designation</Form.Label>
                        <span className="requiredStars float-left text-danger mx-1">*</span>
                        <Form.Control type="text" placeholder="Designation" required />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridCmpnyName">
                        <Form.Label className="float-left">Company Name</Form.Label>
                        <span className="requiredStars float-left text-danger mx-1">*</span>
                        <Form.Control type="text" placeholder="Company Name" required />
                      </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridDesignation">
                      <Form.Label className="float-left">Skills</Form.Label>
                      <span className="requiredStars float-left text-danger mx-1">*</span>
                      <Form.Control type="text" placeholder="Designation" required />
                    </Form.Group>

                    <Link to="/InterviewTimeSchedule" className="btn btn-primary rounded-pill" style={{ width: "130px" }}> Submit</Link>
                  </Col>
                </Row>
              </div>
            </Form>



          </div>





        </div>

      </div>
    );
  }
}

export default RegPage;