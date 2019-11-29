import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Image, ResponsiveEmbed } from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'
import '../css/HeaderStyle.css';
import { FaArrowRight } from 'react-icons/fa';



export default function LandingPage() {
  return (
    <div>
      <Navbar expand="lg" className="">
        <Image src="../Group 528.png" className="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto links">
            <Link to="/" className="nav-link lan_page" style={{ color: "#00aeef" }}>Home</Link>
            <Link to="/" className="nav-link lan_page">About</Link>
            <Link to="/" className="nav-link lan_page">Features</Link>
            <Link to="/" className="nav-link lan_page">Products</Link>
            <Link to="/" className="nav-link lan_page">Contact</Link>
            <Link to="#PricingPage" className="nav-link lan_page">Pricing</Link>
          </Nav>
          <Nav className="links">
            <Link to="/LoginPage" className="lan_page nav-link text-dark font-weight-bold">Login</Link>
            <Link to="/RPLogin" className="nav-link lan_page" style={{ color: "#00aeef" }}>Sign Up <FaArrowRight /></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="bg-white container-fluid d-flex pb-5">
        <div className="col-md-1"></div>
        <div className="col-md-5 pt-5 mt-5 pr-0">
          <ResponsiveEmbed aspectRatio="16by9">
            <embed type="image/svg+xml" src="../vdo1.mp4" />
          </ResponsiveEmbed>
        </div>
        <div className="col-md-6 pl-0">
          <Image src="../Group 529.png" className="" width="95%" />
          <Image src="../Group 532.png" className="float-right" width="10%" style={{ marginTop: "-90px", marginRight: "30px" }} />
        </div>
      </div>

      <div className="p-5">
        <div className="d-flex text-center">
          <div className="main col-md-3 p-0">
            <div className="p-4">
              <p> 14-Day Free Trial</p>
              <h1>$ 0 </h1>
              <h6>200 contacts/month</h6>
              <p>Your AI Sales Intern</p>
              <Link to="/" className="btn btn-primary rounded-pill" style={{ padding: "3px 17px" }}> SignUp Free</Link>
            </div>
          </div>
          <div className="col-md-3 p-0">
            <div className="p-4">
              <p>Pro</p>
              <h1>$ 500 </h1>
              <h6>4,000 contacts/month</h6>
              <p>Your AI Sales Assistant</p>
              <Link to="/" className="btn btn-primary rounded-pill" style={{ padding: "3px 20px" }}>Let's Talk</Link>
            </div>
          </div>
          <div className="main col-md-3 p-0">
            <div className="p-4">
              <p> Premium</p>
              <h1>$ 1,500</h1>
              <h6>15,000 contacts/month</h6>
              <p>Your AI Sales Rep</p>
              <Link to="/" className="btn btn-primary rounded-pill" style={{ padding: "3px 20px" }}>Let's Talk</Link>
            </div>
          </div>
          <div className="main col-md-3 p-0">
            <div className="p-4">
              <p>Enterprise</p>
              <h1>Custom </h1>
              <h6>15k+ contacts/month</h6>
              <p>Your AI Sales Partner</p>
              <Link to="/" className="btn btn-primary rounded-pill" style={{ padding: "3px 20px" }}>Let's Talk</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

