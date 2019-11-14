import React from 'react';
import '../css/MyRequirements.css';
import { Card } from 'react-bootstrap';
import { FaEllipsisH, FaPhone, FaEnvelope, FaWhatsapp, FaCommentDots } from 'react-icons/fa';

const cardstyle = {
  background: "white",
  // display:"flex",
  padding: "20px 20px 0px 20px"
}

const wtspstyle = {
  color: "#3ab948",
  width: "28px",
  height: "28px"
}
export default function ISearch() {
  return (

    <div className="container-fluid">
      <div className="profile">
        <Card>

          <div style={cardstyle}>
            <div className="row d-flex req-skil-head">
              <div className="col-md-3">
                <p> <span className="req"> iNtelligent Search Results  </span> <span className="req1"> ( 4 Results ) </span>  </p>
              </div>
              <div className="col-md-7"></div>
              <div className="col-md-2 d-flex justify-content-around p-0">
              <p className="req-pro">Data Upload</p>
              <p className="req-pro">Edit</p>
                <FaEllipsisH />
              </div>
            </div>

          </div>

          <Card.Body style={cardstyle} className="c_body" >
            <div className="req-skil-head">
              <div className="d-flex justify-content-around">
                <div className="col-md-2">
                  <p className="req-pro inteli-search">Sharon Mathews</p>
                </div>
                <div className="col-md-2">
                  <p className="req-pro inteli-search">Senior Java Programmer</p>
                </div>
                <div className="col-md-2">
                  <p className="req-pro">Infosys</p>
                </div>
                <div className="col-md-6">

                </div>
              </div>
              <div className="d-flex justify-content-around pt-2" >
                <div className="row col-md-9 d-flex">
                  <div className="col-md-2 p-0">
                    <p className="text-req">Primary Skills</p>
                    <p className="text-req1">JAVA, PHP</p>
                  </div>
                  <div className="col-md-2 p-0">
                    <p className="text-req">Relocation</p>
                    <p className="text-req1">Hyd 20%, USA 100%</p>

                  </div>
                  <div className="col-md-2 p-0">
                    <p className="text-req">Location</p>
                    <p className="text-req1">Hyderabad</p>
                  </div>

                  <div className="col-md-2 p-0">
                    <p className="text-req">Notice period</p>
                    <p className="text-req1">2 Months</p>
                  </div>
                  <div className="col-md-2 p-0">
                    <p className="text-req">Current CTC</p>
                    <p className="text-req1">12 Lacs</p>

                  </div>
                  <div className="col-md-2 p-0">
                    <p className="text-req">Expected CTC</p>
                    <p className="text-req1">16 Lacs</p>
                  </div>
                </div>
                <div className="row col-md-1"></div>
                <div className="row col-md-2 p-0">
                  <div className="col-md-3">
                    <FaPhone className="hw" />
                  </div>
                  <div className="col-md-3">
                    <FaEnvelope className="hw" />
                  </div>
                  <div className="col-md-3">
                    <FaCommentDots className="hw" />
                  </div>
                  <div className="col-md-3">
                    <FaWhatsapp style={wtspstyle} />
                  </div>


                </div>
              </div>  </div>


              <div className="req-skil-head pt-3">
              <div className="d-flex justify-content-around">
                <div className="col-md-2">
                  <p className="req-pro inteli-search">Sharon Mathews</p>
                </div>
                <div className="col-md-2">
                  <p className="req-pro inteli-search">Senior Java Programmer</p>
                </div>
                <div className="col-md-2">
                  <p className="req-pro">Infosys</p>
                </div>
                <div className="col-md-6">

                </div>
              </div>
              <div className="d-flex justify-content-around pt-2" >
                <div className="row col-md-9 d-flex">
                  <div className="col-md-2 p-0">
                    <p className="text-req">Primary Skills</p>
                    <p className="text-req1">JAVA, PHP</p>
                  </div>
                  <div className="col-md-2 p-0">
                    <p className="text-req">Relocation</p>
                    <p className="text-req1">Hyd 20%, USA 100%</p>

                  </div>
                  <div className="col-md-2 p-0">
                    <p className="text-req">Location</p>
                    <p className="text-req1">Hyderabad</p>
                  </div>

                  <div className="col-md-2 p-0">
                    <p className="text-req">Notice period</p>
                    <p className="text-req1">2 Months</p>
                  </div>
                  <div className="col-md-2 p-0">
                    <p className="text-req">Current CTC</p>
                    <p className="text-req1">12 Lacs</p>

                  </div>
                  <div className="col-md-2 p-0">
                    <p className="text-req">Expected CTC</p>
                    <p className="text-req1">16 Lacs</p>
                  </div>
                </div>
                <div className="row col-md-1"></div>
                <div className="row col-md-2 p-0">
                  <div className="col-md-3">
                    <FaPhone className="hw" />
                  </div>
                  <div className="col-md-3">
                    <FaEnvelope className="hw" />
                  </div>
                  <div className="col-md-3">
                    <FaCommentDots className="hw" />
                  </div>
                  <div className="col-md-3">
                    <FaWhatsapp style={wtspstyle} />
                  </div>


                </div>
              </div>  </div>

              <div className="pt-3">
              <div className="d-flex justify-content-around">
                <div className="col-md-2">
                  <p className="req-pro inteli-search">Sharon Mathews</p>
                </div>
                <div className="col-md-2">
                  <p className="req-pro inteli-search">Senior Java Programmer</p>
                </div>
                <div className="col-md-2">
                  <p className="req-pro">Infosys</p>
                </div>
                <div className="col-md-6">

                </div>
              </div>
              <div className="d-flex justify-content-around pt-2" >
                <div className="row col-md-9 d-flex">
                  <div className="col-md-2 p-0">
                    <p className="text-req">Primary Skills</p>
                    <p className="text-req1">JAVA, PHP</p>
                  </div>
                  <div className="col-md-2 p-0">
                    <p className="text-req">Relocation</p>
                    <p className="text-req1">Hyd 20%, USA 100%</p>

                  </div>
                  <div className="col-md-2 p-0">
                    <p className="text-req">Location</p>
                    <p className="text-req1">Hyderabad</p>
                  </div>

                  <div className="col-md-2 p-0">
                    <p className="text-req">Notice period</p>
                    <p className="text-req1">2 Months</p>
                  </div>
                  <div className="col-md-2 p-0">
                    <p className="text-req">Current CTC</p>
                    <p className="text-req1">12 Lacs</p>

                  </div>
                  <div className="col-md-2 p-0">
                    <p className="text-req">Expected CTC</p>
                    <p className="text-req1">16 Lacs</p>
                  </div>
                </div>
                <div className="row col-md-1"></div>
                <div className="row col-md-2 p-0">
                  <div className="col-md-3">
                    <FaPhone className="hw" />
                  </div>
                  <div className="col-md-3">
                    <FaEnvelope className="hw" />
                  </div>
                  <div className="col-md-3">
                    <FaCommentDots className="hw" />
                  </div>
                  <div className="col-md-3">
                    <FaWhatsapp style={wtspstyle} />
                  </div>


                </div>
              </div>  </div>

          </Card.Body>
        </Card>
      </div>
    </div>
  )


}

