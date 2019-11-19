import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Image} from 'react-bootstrap';
import { Link} from 'react-router-dom'
import '../css/HeaderStyle.css';
import { FaCog ,FaEnvelope,FaBuffer,FaSistrix} from 'react-icons/fa';



const Header = () => {
  return( 
     <div className="header">
         <div className="sub_dev">
         <Navbar expand="lg" className="headtwo">
  <Link to="/Reqhome" className="navbar-brand active">Dashboard</Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto links active">
      <Link to="/MyRequirements" className="nav-link">My Requirement</Link>
      <Link to="/RecIntelligentSearch" className="nav-link">iSearch</Link>
      <Link to="/HotCVs" className="nav-link">Hot CV's</Link>
      <Link to="/MyReava" className="nav-link">My ReAVA</Link>
      <Link to="/InMail" className="nav-link">In-Mail</Link>
      <Link to="/panelList" className="nav-link">Panel List</Link>
    </Nav>
    <Nav>
 <Nav.Link href=""><FaSistrix className="icon"/> </Nav.Link>
<Nav.Link href="#memes">  <FaCog className="icon"/>  </Nav.Link>
<Nav.Link  href="#memes">  <FaEnvelope className="icon"/> </Nav.Link>
<Nav.Link  href="#memes">  <FaBuffer className="icon"/> </Nav.Link>
<Image src="../profile1.png" roundedCircle className="img_chat" />
</Nav>
  </Navbar.Collapse>
</Navbar>


</div>

     </div>  
  )

  
}
export default Header;
