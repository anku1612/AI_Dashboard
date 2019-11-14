import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FormControl } from 'react-bootstrap';
import '../css/HeaderStyle.css';
import { FaSearch } from 'react-icons/fa';



const SearchHeader = () => {
  return (
    <div className="header">
      <div className="sub_dev">
        <Navbar className="hello">
          <Navbar.Brand href="#home">
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="linksearch w-25" textalign="center">
              <FormControl type="text" placeholder="Senior java Programmer" className="search mr-sm-2 text-teal" />
              <FaSearch className="icon-search" />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )


}
export default SearchHeader;
