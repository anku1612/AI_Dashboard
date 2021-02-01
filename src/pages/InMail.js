import React from 'react';
import '../css/MyRequirements.css';
import '../css/mail.css';
import { Card } from 'react-bootstrap';
import { FaEllipsisH, FaCheck, FaEnvelope, FaPaperPlane, FaEnvelopeOpen, FaTrash ,FaStar,FaPaperclip} from 'react-icons/fa';

const cardstyle = {
  background: "white",
  padding: "20px 20px 0px 20px"
}


export default function InMail() {
  return (

    <div className="container-fluid">
      <div className="profile">
        <Card>

          <div style={cardstyle}>
            <div className="row d-flex req-skil-head">
              <div className="col-md-10">
                <p className="req"> In-Mail  </p>
              </div>
              <div className="col-md-2 text-right">
                <FaEllipsisH />
              </div>
            </div>

          </div>

          <Card.Body className="p-3">
            <div className="req-skil-head">
              <div className="row d-flex justify-content-around w-50">
                <p className="multi-skill">Account Manager</p>
                <p className="multi-skill">Client</p>
                <p className="python-skill">Candidate</p>
                <p className="multi-skill">Requiements</p>
                <p className="multi-skill">Interviews</p>

              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-1 p-0">
                <div className="mail-fir">
                <FaEnvelope size={40} style={{color:"#1474e5", marginBottom:"40px"}}/>
                <FaPaperPlane size={40}  style={{color:"#b1b1b1", marginBottom:"40px"}}  />
                <FaEnvelopeOpen size={40}   style={{color:"#b1b1b1", marginBottom:"40px"}} />
                <FaTrash size={40} style={{color:"#b1b1b1", marginBottom:"40px"}} />
              </div>  
                </div>
              <div className="col-md-11 p-0">
                <div className="row mail-sec">
                  <div className="col-md-2 p-0 d-flex justify-content-around">   
                   <FaCheck style={{color:"#b1b1b1"}} /> 
                  <FaStar style={{color:"#b1b1b1"}} />
                  <FaTrash style={{color:"#b1b1b1"}} /> 
                  <p> Jazz Recruiters </p></div>

                <p> Crafted with love to help desiners build great mobile apps quickly </p>
                <FaPaperclip />
            <p>10 mins ago</p> 
                </div>

                <div className="row mail-sec">
                  <div className="col-md-2 p-0 d-flex justify-content-around">   
                  <FaCheck style={{color:"#b1b1b1"}} /> 
                  <FaStar style={{color:"#b1b1b1"}} />
                  <FaTrash style={{color:"#b1b1b1"}} /> 
                  <p> Jazz Recruiters </p></div>

                <p> Crafted with love to help desiners build great mobile apps quickly </p>
                <FaPaperclip />
            <p>10 mins ago</p> 
                </div>

                <div className="row mail-sec">
                  <div className="col-md-2 p-0 d-flex justify-content-around">   
                  <FaCheck style={{color:"#b1b1b1"}} /> 
                  <FaStar style={{color:"#b1b1b1"}} />
                  <FaTrash style={{color:"#b1b1b1"}} /> 
                  <p> Jazz Recruiters </p></div>

                <p> Crafted with love to help desiners build great mobile apps quickly </p>
                <FaPaperclip />
            <p>10 mins ago</p> 
                </div>

                <div className="row mail-sec">
                  <div className="col-md-2 p-0 d-flex justify-content-around">   
                  <FaCheck style={{color:"#b1b1b1"}} /> 
                  <FaStar style={{color:"#b1b1b1"}} />
                  <FaTrash style={{color:"#b1b1b1"}} /> 
                  <p> Jazz Recruiters </p></div>

                <p> Crafted with love to help desiners build great mobile apps quickly </p>
                <FaPaperclip />
            <p>10 mins ago</p> 
                </div>

                <div className="row mail-sec">
                  <div className="col-md-2 p-0 d-flex justify-content-around">   
                  <FaCheck style={{color:"#b1b1b1"}} /> 
                  <FaStar style={{color:"#b1b1b1"}} />
                  <FaTrash style={{color:"#b1b1b1"}} /> 
                  <p> Jazz Recruiters </p></div>

                <p> Crafted with love to help desiners build great mobile apps quickly </p>
                <FaPaperclip />
            <p>10 mins ago</p> 
                </div>

                <div className="row mail-sec">
                  <div className="col-md-2 p-0 d-flex justify-content-around">   
                  <FaCheck style={{color:"#b1b1b1"}} /> 
                  <FaStar style={{color:"#b1b1b1"}} />
                  <FaTrash style={{color:"#b1b1b1"}} /> 
                  <p> Jazz Recruiters </p></div>

                <p> Crafted with love to help desiners build great mobile apps quickly </p>
                <FaPaperclip />
            <p>10 mins ago</p> 
                </div>

                </div>   
                  </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )


}

