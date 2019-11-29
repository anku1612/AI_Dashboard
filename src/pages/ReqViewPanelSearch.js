import React from 'react';
import '../css/ReqViewPanelDash.css';
import { Card, Image } from 'react-bootstrap';
import { Link} from 'react-router-dom'
import {FaPhone, FaEnvelope, FaCommentDots, FaWhatsapp, FaVideo ,FaCalendarCheck ,FaCalendarTimes} from 'react-icons/fa';
import RPHeader from './RPHeader';
const wtspstyle = {
  color: "#3ab948",
  width: "28px",
  height: "28px"
}

export default function ReqViewPanelSearch() {
  return (
    <div>
      <RPHeader />
      <div className="container-fluid">
        <div className="profile">
          <Card className="cardstl">
            <Card.Body className="pl-0 pr-0">
              <div className="row d-flex">
                <div className="col-md-3 p-0 d-flex align-items-center">
                <div className="col-md-4 text-center">
                  <FaCalendarCheck size={22} style={{color:"#16b92c"}} className="mt-3" />
                  <p className="pt-2">This Week</p>
                </div>

                  <div className="col-md-3">
                    <div className="mb-4">
                      <Image src="../profile1.png" roundedCircle className="img_req" />
                    </div>
                  </div>
                  <div className="col-md-5 p-0">
                    <Link to="/Dashboard"> 
                     <p className="ptextColor font-weight-bold">Sarrah Connor</p></Link>
                    <p className="pp_stl">Primary Skills</p>
                    <p className="mb-0 text-dark font-weight-bold">JAVA, PHP</p>
                  </div>
                </div>
                <div className="col-md-1 pt-4">
                     <p className="pp_stl mt-3">Location</p>
                     <p className="mb-0 text-dark font-weight-bold">Hyderabad</p>
                  </div>
                <div className="col-md-3 pt-4 d-flex align-items-center">
                  <div className="col-md-6">
                    <p className="pp_stl mt-3">Total Earnings</p>
                    <p className="mb-0 text-dark font-weight-bold">$ 3,000.00</p>
                  </div>
                  <div className='col-md-6'>
                    <p className="pp_stl mt-3">Pending Invoices</p>
                    <p className="mb-0 text-dark font-weight-bold">22</p>
                  </div>
                </div>
                <div className="col-md-2 p-0 pt-4 d-flex align-items-center">
                  <div className="col-md-6 p-0">
                    <p className="pp_stl mt-3">Total Interviews</p>
                    <p className="mb-0 text-dark font-weight-bold">22</p>
                  </div>
                  <div className='col-md-6 p-0'>
                    <p className="pp_stl mt-3">Reviews</p>
                    <p className="mb-0 text-dark font-weight-bold">22</p>
                  </div>
                </div>
                <div className="d-flex col-md-3 justify-content-around pt-5">
                  <FaPhone className="hw" />
                  <FaVideo className="hw" />
                  <FaEnvelope className="hw" />
                  <FaCommentDots className="hw" />
                  <FaWhatsapp style={wtspstyle} />
                </div>
              </div>
            </Card.Body>
          </Card>
         
         
          <Card className="cardstl">
            <Card.Body className="pl-0 pr-0">
              <div className="row d-flex">
                <div className="col-md-3 p-0 d-flex align-items-center">
                <div className="col-md-4 text-center">
                  <FaCalendarTimes size={22} style={{color:"#e61212"}} className="mt-3" />
                  <p className="pt-2">This Week</p>
                </div>

                  <div className="col-md-3">
                    <div className="mb-4">
                      <Image src="../profile1.png" roundedCircle className="img_req" />
                    </div>
                  </div>
                  <div className="col-md-5 p-0">
                    <Link to="/Dashboard"> 
                     <p className="ptextColor font-weight-bold">Sarrah Connor</p></Link>
                    <p className="pp_stl">Primary Skills</p>
                    <p className="mb-0 text-dark font-weight-bold">JAVA, PHP</p>
                  </div>
                </div>
                <div className="col-md-1 pt-4">
                     <p className="pp_stl mt-3">Location</p>
                     <p className="mb-0 text-dark font-weight-bold">Hyderabad</p>
                  </div>
                <div className="col-md-3 pt-4 d-flex align-items-center">
                  <div className="col-md-6">
                    <p className="pp_stl mt-3">Total Earnings</p>
                    <p className="mb-0 text-dark font-weight-bold">$ 3,000.00</p>
                  </div>
                  <div className='col-md-6'>
                    <p className="pp_stl mt-3">Pending Invoices</p>
                    <p className="mb-0 text-dark font-weight-bold">22</p>
                  </div>
                </div>
                <div className="col-md-2 p-0 pt-4 d-flex align-items-center">
                  <div className="col-md-6 p-0">
                    <p className="pp_stl mt-3">Total Interviews</p>
                    <p className="mb-0 text-dark font-weight-bold">22</p>
                  </div>
                  <div className='col-md-6 p-0'>
                    <p className="pp_stl mt-3">Reviews</p>
                    <p className="mb-0 text-dark font-weight-bold">22</p>
                  </div>
                </div>
                <div className="d-flex col-md-3 justify-content-around pt-5">
                  <FaPhone className="hw" />
                  <FaVideo className="hw" />
                  <FaEnvelope className="hw" />
                  <FaCommentDots className="hw" />
                  <FaWhatsapp style={wtspstyle} />
                </div>
              </div>
            </Card.Body>
          </Card>
         
         
         
         
         
         
         
          
          </div>
      </div>
    </div>
  )


}
