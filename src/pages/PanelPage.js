import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Image} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../css/HeaderStyle.css';
import { FaGoogle } from 'react-icons/fa';
// import {FileUpload} from 'primereact/fileupload';
// import {Growl} from 'primereact/growl';








class PanelPage extends React.Component{
  constructor() {
    super();
    
    this.onUpload = this.onUpload.bind(this);
    this.onBasicUpload = this.onBasicUpload.bind(this);
    this.onBasicUploadAuto = this.onBasicUploadAuto.bind(this);
}

onUpload(event) {
    this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
}

onBasicUpload(event) {
    this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
}

onBasicUploadAuto(event) {   
    this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
}
render() {
  return (
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
         {/* <span className="p-button p-fileupload-choose p-component p-button-text-icon-left mb-5">
           <span className="p-button-icon-left pi pi-plus"><FaPlus/></span>
         <span className="p-button-text p-clickable">Upload Your Resume</span>
         <input type="file" accept="image/*" /></span> */}

                  <div>
                {/* <div className="content-section implementation">
                    <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="/*" maxFileSize={1000000} onUpload={this.onBasicUpload} chooseLabel="   Upload Your Resume" />
                    <Growl ref={(el) => { this.growl = el; }}></Growl>
                </div> */}
            </div>

                    
         {/* <p className="w-50 text-center mb-4 mt-3">OR</p> */}
           <div>
              <p>Login With 
              <Link to="/RegistrationPage"> <FaGoogle size={18} style={{color:"#dc493d"}} className="ml-4" /></Link>
              </p> 
              <div class="g-signin2" data-onsuccess="onSignIn"></div>
               </div>
       </div>
      <div className="col-md-6 pl-0">
         <Image src="../Group 529.png" className="" width="95%" />
       </div>      </div>
</div>
 )
}

}
export default PanelPage;

// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }