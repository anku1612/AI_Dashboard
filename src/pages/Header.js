import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FormControl,Image } from 'react-bootstrap';
import '../css/HeaderStyle.css';
import { FaCog ,FaEnvelope,FaBuffer,} from 'react-icons/fa';

// const NavbarStyle={
// background :"#"
// }

const Header = () => {
  return(
      
     <div className="header">
         <div className="sub_dev">
 <Navbar className="hello">
  <Navbar.Brand  href="#home">
  <Image src="../Achyutas SoftLogo.png" className="img_achy" />
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="links w-50" textalgn="center">
      <FormControl type="text" placeholder="Search "  className="mr-sm-2 text-teal" />
    </Nav>
<Nav>
<Nav.Link eventKey={4} href="#memes"> <div className="icon"> <FaCog/></div>  </Nav.Link>
<Nav.Link eventKey={4} href="#memes"> <div className="icon"> <FaEnvelope/></div>  </Nav.Link>
<Nav.Link eventKey={4} href="#memes"> <div className="icon"> <FaBuffer/></div>  </Nav.Link>
</Nav>
    

  </Navbar.Collapse>
</Navbar>
</div>
<Navbar variant="light" className="headtwo"> 
    <Nav  className="links">
      <Nav.Link href="#home" active>DASHBOARD</Nav.Link>
      <Nav.Link href="#features">MY ACTIVITY</Nav.Link>
      <Nav.Link href="#pricing">SUMMARY</Nav.Link>
      <Nav.Link href="#pricing">PERSONAL DETAILS</Nav.Link>
      <Nav.Link href="#pricing">SKILLS AT A GLANCE</Nav.Link>
      <Nav.Link href="#pricing">WORK HISTORY</Nav.Link>
      <Nav.Link href="#pricing">ASK REAVA</Nav.Link>
    </Nav>
   
  </Navbar>
     </div>  
  )

  
}
export default Header;
