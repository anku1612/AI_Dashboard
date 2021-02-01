import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Image ,Form} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import '../css/RPHeader.css';
import { FaCog ,FaEnvelope,FaBuffer,FaSearch} from 'react-icons/fa';



const Header = () => {
  return( 
     <div className="header">
         <div className="sub_dev">
         <Navbar expand="lg" className="RPhead pb-2">
  <Link to="/ReqViewPanelDash" className="navbar-brand links Nactive">Dashboard</Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto links">
      <Link to="/" className="nav-link newnav">My Activity</Link>
      <Link to="/" className="nav-link newnav">Summary</Link>
      <Link to="/" className="nav-link newnav">Personal Details</Link>
      <Link to="/" className="nav-link newnav">Skills at a Glance</Link>
      <Link to="/" className="nav-link newnav">Work History</Link>
      <Link to="/" className="nav-link newnav">Ask History</Link>
    </Nav>
    <Nav>
    <Form.Group className="mb-0 pt-2">
    <Form.Control type="text" placeholder="Search.." className="input_search mr-sm-2 "/>
   <span className="search_icon"> <FaSearch /></span> 
  </Form.Group>
<Nav.Link href="#memes">  <FaCog className="rpicon"/>  </Nav.Link>
<Nav.Link  href="#memes">  <FaEnvelope className="rpicon"/> </Nav.Link>
<Nav.Link  href="#memes">  <FaBuffer className="rpicon"/> </Nav.Link>
<Image src="../profile1.png" roundedCircle className="img_chat mt-1" />
</Nav>
  </Navbar.Collapse>
</Navbar>
</div>

     </div>  
  )

  
}
export default Header;
