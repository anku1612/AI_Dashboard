/* eslint-disable no-undef */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../css/HeaderStyle.css';
import Calendar from './Calendar'



export default class InterviewTimeSchedule extends React.Component{
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
            <Link to="/LoginPage" className="lan_page nav-link text-dark font-weight-bold">LogOut</Link>
            <Link to="/" className="lan_page nav-link text-dark font-weight-bold" >Help</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="bg-white p-5">
        <div className="col-md-12 pb-5">
          <p className="time_sch_stl">Please select 10 of Your Available Date and Timings for
           Scheduling Interview in this month (Earn 500/- for each Interview)</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Calendar />
            <div className="pt-5">
            <div className="form-group w-75">
    <select className="form-control border px-3 py-2 " id="exampleFormControlSelect10">
    <option value="time">Select Time</option>
        <option value="9am">9.00 AM</option>
        <option value="9.30pm">9.30 AM</option>
        <option value="10am">10.00 AM</option>
        <option value="10.30am">10.30 AM</option>
        <option value="11am">11.00 AM</option>
        <option value="11.30am">11.30 AM</option>
        <option value="12pm">12.00 PM</option>
        <option value="12.30pm">12.30 PM</option>
        <option value="1pm">01.00 PM</option>
        <option value="1.30pm">01.30 PM</option>
        <option value="2pm">02.00 PM</option>
        <option value="2.30pm">02.30 PM</option>
        <option value="3pm">03.00 PM</option>
        <option value="3.30pm">03.30 PM</option>
        <option value="4pm">04.00 PM</option>
        <option value="4.30pm">04.30 PM</option>
        <option value="5pm">05.00 PM</option>
        <option value="5.30pm">05.30 PM</option>
        <option value="6pm">06.00 PM</option>
        <option value="6.30pm">06.30 PM</option>
        <option value="7pm">07.00 PM</option>
        <option value="7.30pm">07.30 PM</option>
        <option value="8pm">08.00 PM</option>
        <option value="8.30pm">08.30 PM</option>
        <option value="9pm">09.00 PM</option>
        <option value="9.30pm">09.30 PM</option>
        <option value="10pm">10.00 PM</option>
    </select>
  </div>

</div> 
            <div>
            </div>

          </div>
          <div className="col-md-8">
            <h5 className="mb-2">Schedule :</h5>
            <div className="chartt-scrollbar">
              <div className="time_sch_stl mt-3">
                <div className="d-flex">
                  <div className="col-md-6 d-flex justify-content-around">
                    <h6 className="text-dark">Date  : 01/12/2019</h6>
                    <h6 className="text-dark">Timing  :  03:15 PM - 3:45 PM </h6>
                  </div>
                  <div className="col-md-6 d-flex justify-content-around">
                    <h6 className="text-dark ">Mode of Interviews : </h6>
                    <Form.Group controlId="exampleForm.ControlSelect1" className="w-50 mb-0">
                      <Form.Control as="select" className="drp-cv">
                        <option>select</option>
                        <option>Telephonic</option>
                        <option>Video</option>
                      </Form.Control>
                    </Form.Group></div>
                </div>
                <div className="d-flex justify-content-around w-50 pr-5">

                </div>
              </div>

              <div className="time_sch_stl mt-3">
                <div className="d-flex">
                  <div className="col-md-6 d-flex justify-content-around">
                    <h6 className="text-dark">Date  : 01/12/2019</h6>
                    <h6 className="text-dark">Timing  :  03:15 PM - 3:45 PM </h6>
                  </div>
                  <div className="col-md-6 d-flex justify-content-around">
                    <h6 className="text-dark ">Mode of Interviews : </h6>
                    <Form.Group controlId="exampleForm.ControlSelect1" className="w-50 mb-0">
                      <Form.Control as="select" className="drp-cv">
                        <option>select</option>
                        <option>Telephonic</option>
                        <option>Video</option>
                      </Form.Control>
                    </Form.Group></div>
                </div>
                <div className="d-flex justify-content-around w-50 pr-5">

                </div>
              </div>
              <div className="time_sch_stl mt-3">
                <div className="d-flex">
                  <div className="col-md-6 d-flex justify-content-around">
                    <h6 className="text-dark">Date  : 01/12/2019</h6>
                    <h6 className="text-dark">Timing  :  03:15 PM - 3:45 PM </h6>
                  </div>
                  <div className="col-md-6 d-flex justify-content-around">
                    <h6 className="text-dark ">Mode of Interviews : </h6>
                    <Form.Group controlId="exampleForm.ControlSelect1" className="w-50 mb-0">
                      <Form.Control as="select" className="drp-cv">
                        <option>select</option>
                        <option>Telephonic</option>
                        <option>Video</option>
                      </Form.Control>
                    </Form.Group></div>
                </div>
                <div className="d-flex justify-content-around w-50 pr-5">

                </div>
              </div>
              <div className="time_sch_stl mt-3">
                <div className="d-flex">
                  <div className="col-md-6 d-flex justify-content-around">
                    <h6 className="text-dark">Date  : 01/12/2019</h6>
                    <h6 className="text-dark">Timing  :  03:15 PM - 3:45 PM </h6>
                  </div>
                  <div className="col-md-6 d-flex justify-content-around">
                    <h6 className="text-dark ">Mode of Interviews : </h6>
                    <Form.Group controlId="exampleForm.ControlSelect1" className="w-50 mb-0">
                      <Form.Control as="select" className="drp-cv">
                        <option>select</option>
                        <option>Telephonic</option>
                        <option>Video</option>
                      </Form.Control>
                    </Form.Group></div>
                </div>
                <div className="d-flex justify-content-around w-50 pr-5">

                </div>
              </div>

              <div className="time_sch_stl mt-3">
                <div className="d-flex">
                  <div className="col-md-6 d-flex justify-content-around">
                    <h6 className="text-dark">Date  : 01/12/2019</h6>
                    <h6 className="text-dark">Timing  :  03:15 PM - 3:45 PM </h6>
                  </div>
                  <div className="col-md-6 d-flex justify-content-around">
                    <h6 className="text-dark ">Mode of Interviews : </h6>
                    <Form.Group controlId="exampleForm.ControlSelect1" className="w-50 mb-0">
                      <Form.Control as="select" className="drp-cv">
                        <option>select</option>
                        <option>Telephonic</option>
                        <option>Video</option>
                      </Form.Control>
                    </Form.Group></div>
                </div>
                <div className="d-flex justify-content-around w-50 pr-5">

                </div>
              </div>

              <div className="time_sch_stl mt-3">
                <div className="d-flex">
                  <div className="col-md-6 d-flex justify-content-around">
                    <h6 className="text-dark">Date  : 01/12/2019</h6>
                    <h6 className="text-dark">Timing  :  03:15 PM - 3:45 PM </h6>
                  </div>
                  <div className="col-md-6 d-flex justify-content-around">
                    <h6 className="text-dark ">Mode of Interviews : </h6>
                    <Form.Group controlId="exampleForm.ControlSelect1" className="w-50 mb-0">
                      <Form.Control as="select" className="drp-cv">
                        <option>select</option>
                        <option>Telephonic</option>
                        <option>Video</option>
                      </Form.Control>
                    </Form.Group></div>
                </div>
                <div className="d-flex justify-content-around w-50 pr-5">

                </div>
              </div>



            </div>
          </div></div>
      </div>
    </div>
  )
}
}

