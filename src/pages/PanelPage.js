import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Image} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../css/HeaderStyle.css';
import { FaPlus } from 'react-icons/fa';




export default function LandingPage() {
  return (
    <div>
      <Navbar expand="lg" className="">
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
         <h2 className="mb-4">Members and Earn as well</h2>
         <span className="p-button p-fileupload-choose p-component p-button-text-icon-left mb-5">
           <span className="p-button-icon-left pi pi-plus"><FaPlus/></span>
         <span className="p-button-text p-clickable">Upload Your Resume</span>
         <input type="file" accept="image/*" style={{display:"inline"}} /></span>
         <p className="">OR</p>
           <div>
               <Image src="../Ico Google+.png" className=""  /> </div>
       </div>
      <div className="col-md-6 pl-0">
         <Image src="../Group 529.png" className="" width="95%" />
       </div>      </div>
</div>
 )
}


