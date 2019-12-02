import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Image} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../css/HeaderStyle.css';
// import Calendar from './Calendar'


export default function InterviewTimeSchedule() {
  return (
    <div>
      <Navbar expand="lg" className="">
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
      <div className="bg-white container-fluid d-flex p-5">
       <div className="col-md-12">
         <p className="time_sch_stl">Please select 10 of Your Available Date and Timings for 
           Scheduling Interview in this month (Earn 500/- for each Interview)</p>
       </div>
       <div className="row">
         <div className="col-md-4">
         {/* <Calendar /> */}
         </div>
          <div className="col-md-8"></div>
       </div>

          </div>
</div>
 )
}


