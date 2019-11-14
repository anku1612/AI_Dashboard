import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import '../css/RecruiterIntelligentSearch.css';
import { FaSearch } from 'react-icons/fa';
import { FormControl } from 'react-bootstrap';

const RecruiterIntelligentSearch = () => {
    return (
        <div className="mx-4 px-4">
            <div>
                <Card className="mt-4  text-center">
                       <div className="intel-stl">
               <p className="intel-title">iNtelligent Search  </p>
                    <div className="linksearch w-25" textalign="center">
              <FormControl type="text" placeholder="Senior java Programmer" className="search mr-sm-2 text-teal" />
              <FaSearch className="icon-search" />
                       </div>
                    <div className="row d-flex pb-5">
                    <div className="col-md-3">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select" className="drp-cv">
                                    <option>Filter 1</option>
                                    <option>Ui Developer</option>
                                    <option> Web Developer</option>
                                    <option> JS Developer</option>
                                </Form.Control>
                            </Form.Group>
                                </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-3">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select" className="drp-cv">
                                    <option>Filter 2</option>
                                    <option>Ui Developer</option>
                                    <option> Web Developer</option>
                                    <option> JS Developer</option>
                                </Form.Control>
                            </Form.Group>
                                </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-3">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select" className="drp-cv">
                                    <option>Filter 2</option>
                                    <option>Ui Developer</option>
                                    <option> Web Developer</option>
                                    <option> JS Developer</option>
                                </Form.Control>
                            </Form.Group>
                                   </div>
                        </div>
                    <Button variant="primary rounded-pill" style={{width:"130px"}}>Search</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}
export default RecruiterIntelligentSearch;
