/* eslint-disable no-template-curly-in-string */
import React, {Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Form, Col, Row, Image,Button, Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../css/HeaderStyle.css';
import { GoogleLogin } from 'react-google-login';
import { FileUpload } from 'primereact/fileupload';
import { Growl } from 'primereact/growl';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'

export default class google extends Component {
  state = {
    isLoggedIn: false,
    givenName: '',
    familyName: '',
    imageUrl:'',
    googleId:'',
  };
  responseGoogle = response => {
    console.log(response);
    this.setState({
      // isLoggedIn: true,
      // givenName: response.givenName,
      // familyName: response.familyName,
      // email: response.email,
      // imageUrl:"response.profileObj.imageUrl",
      givenName:response.profileObj.givenName,
      familyName: response.profileObj.familyName,
      email:response.profileObj.email,
      imageUrl:response.profileObj.imageUrl,
    })
  }
  
  handleOnChange(value) {
    this.setState({ phone: value })
  }
  constructor(props, context) {
		super(props, context);
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.state = {
			show: false,
		};
	}
	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
	// }
	// componentDidMount() {
		fetch(`http://api.recruiter.achyutas.com/otp?mobileNo=${this.state.phone}`, {
			method: 'POST',
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
        return response.json()
			}).then(json => {
				this.setState({
					user:json
				});
      });
      		this.setState({ show: true });
	}
  render() {
    let gcontent;
    if (this.state.isLoggedIn) {
      gcontent = (
        <div>  
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
            <Form>
              <div className="">
                <h4 className="">Personal Information</h4>
                <Row>
                  <Col md={3} className="pt-4 text-center p-0">
                    <Image src={this.state.imageUrl} height="130px" width="130px" roundedCircle thumbnail className="mb-4" />
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
                        <Form.Control type="text" defaultValue={this.state.givenName} required />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label className="float-left">Last Name</Form.Label>
                        <span className="requiredStars float-left text-danger mx-1">*</span>
                        <Form.Control type="text" defaultValue={this.state.familyName} />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group className="col-md-5" controlId="formGridMbNo">
                      <Form.Label className="float-left">Mobile Number</Form.Label>
                        <span className="float-left text-danger mx-1">*</span>
                        <br/>
                        <br/>
                      <PhoneInput style={{marginTop:"-15px !important"}} defaultCountry={'in'} value={this.state.phone} required /> 
                      {/* onChange={this.state.handleOnChange}  */}
                      </Form.Group>
                      <Form.Group className="col-md-1" controlId="" style={{paddingTop:"35px"}}>
                      <Button variant="primary" onClick={this.handleShow} className="btn-sm btnotp">Get OTP</Button>
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Body> <Form.Label className="float-left">OTP</Form.Label>
        <Form.Control type="number" /></Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
            </Button>
						<Button variant="primary" onClick={this.handleClose}>
							Save
            </Button>
					</Modal.Footer>
				</Modal>
        </Form.Group>
      
                      
                      {/* <Button onClick={() => setSmShow(true)}>Varify</Button>

      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <Form.Label className="float-left">OTP</Form.Label>
        <Form.Control type="text" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.state.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.state.handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal> */}

                      <Form.Group className="col-md-6" controlId="formGridEmail">
                        <Form.Label className="float-left">Email</Form.Label>
                        <span className="requiredStars float-left text-danger mx-1">*</span>
                        <Form.Control type="email" defaultValue={this.state.email} className="w-100" required />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <div className="content-section implementation">
                <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="/*" maxFileSize={1000000} onUpload={this.onBasicUpload} chooseLabel="   Upload Your Resume" />
                <Growl ref={(el) => { this.growl = el; }}></Growl>
                  </div>  <Link to="/" className="ml-5">Skip</Link>
                   </Form.Row>
                   <br/>
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
                            <Form.Control type="text" placeholder="LinkedIn" className="w-25"/>
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
      )
    } else {
      gcontent = (
        <div>
          <Navbar expand="lg" className="bor_stlreg">
            <Image src="../logo.png" className="logo_stl" />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto links">
              </Nav>
              <Nav className="links">
                <Link to="/LoginPage" className="lan_page nav-link text-dark font-weight-bold">Login</Link>
                <Link to="/" className="nav-link lan_page" style={{ color: "#00aeef" }}>Register</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="bg-white container-fluid d-flex pb-5">
            <div className="col-md-1"></div>
            <div className="col-md-5 pt-5 mt-5 pr-0">
              <h2 className="mb-4">Want to join a Term of Quality Panel</h2>
              <h2 className="mb-5">Members and Earn as well</h2>
              <div>
                <GoogleLogin
                  clientId="698566757398-kqs9ob7nlfkqje1r165af4g0l2u25348.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />
              </div>
            </div>
            <div className="col-md-6 pl-0">
              <Image src="../Group 529.png" className="" width="95%" />
            </div>
          </div>
        </div>
      );
    }
    return <div>{gcontent}</div>

  }
}




// const PanelPage = () =>{
//   const [name, setName] = useState("");
//   const [email,setEmail] = useState("");


//   const responseGoogle = response => {
//     setName(response.profileObj.name);
//     setEmail(response.profileObj.email);
//     console.log(response);
//   }

//   return (
//     <div>
//       <Navbar expand="lg" className="bor_stlreg">
//         <Image src="../logo.png" className="logo_stl" />
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto links">
//           </Nav>
//           <Nav className="links">
//             <Link to="/LoginPage" className="lan_page nav-link text-dark font-weight-bold">Login</Link>
//             <Link to="/" className="nav-link lan_page" style={{ color: "#00aeef" }}>Register</Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       <div className="bg-white container-fluid d-flex pb-5">
//         <div className="col-md-1"></div>
//         <div className="col-md-5 pt-5 mt-5 pr-0">
//         <h2 className="mb-4">Want to join a Term of Quality Panel</h2>
//          <h2 className="mb-5">Members and Earn as well</h2>
//            <div>
//               <GoogleLogin
//     clientId="698566757398-kqs9ob7nlfkqje1r165af4g0l2u25348.apps.googleusercontent.com"
//     buttonText="Login"
//     onSuccess={responseGoogle}
//     onFailure={responseGoogle}
//     cookiePolicy={'single_host_origin'}
//   />
//        <p>{name}</p>
//                 <p>{email}</p>

//                </div>
//        </div>
//       <div className="col-md-6 pl-0">
//          <Image src="../Group 529.png" className="" width="95%" />
//        </div>      </div>


// </div>
//  )
// }

// export default PanelPage;

