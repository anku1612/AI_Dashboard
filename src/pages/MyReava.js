import React from 'react';
import '../css/MyRequirements.css';
import { Card, Image, InputGroup } from 'react-bootstrap';
import { FaEllipsisH, FaCircle, FaPaperPlane, FaPaperclip } from 'react-icons/fa';

const cardstyle = {
  background: "white",
  padding: "20px 20px 0px 20px"
}

export default function MyReava() {
  return (

    <div className="container-fluid">
      <div className="profile">
        <Card>
          <div style={cardstyle}>
            <div className="row d-flex req-skil-head">
              <div className="col-md-3">
                <p className="req"> My ReAVA   </p>
              </div>
              <div className="col-md-9 text-right" >
                <FaEllipsisH />
              </div>
            </div>

          </div>

          <Card.Body className="pt-2">
            <div className="req-skil-head">
              <div className="d-flex">
                <div className="col-md-3 p-0">
                  <div className="card-body d-flex p-2  pb-3 pt-3 reava">
                    <div className="col-md-3 p-2">
                      <Image src="../XYZ-01.jpg" roundedCircle className="img_req" />
                    </div>
                    <div className="col-md-7 p-2">
                      <p className="mb-0 text-dark font-weight-bold">Harikrishna</p>
                      <p className="mb-0 mail">02:25 PM  02/12/2019</p>
                      <p className="mb-0">Cognizant Technologies</p>
                    </div>
                    <div className="col-md-2 p-2">
                      <FaCircle className="circle_int" />
                    </div>
                  </div>

                  <div className="card-body d-flex p-2 pb-3 pt-3">
                    <div className="col-md-3 p-2">
                      <Image src="../XYZ-01.jpg" roundedCircle className="img_req" />
                    </div>
                    <div className="col-md-7 p-2">
                      <p className="mb-0 text-dark font-weight-bold">Harikrishna</p>
                      <p className="mb-0 mail">02:25 PM  02/12/2019</p>
                      <p className="mb-0">Accenture</p>
                    </div>
                    <div className="col-md-2 p-2">
                      <FaCircle className="circle_int" />
                    </div>
                  </div>
                  <div className="card-body d-flex p-2 pb-3 pt-3">
                    <div className="col-md-3 p-2">
                      <Image src="../XYZ-01.jpg" roundedCircle className="img_req" />
                    </div>
                    <div className="col-md-7 p-2">
                      <p className="mb-0 text-dark font-weight-bold">Harikrishna</p>
                      <p className="mb-0 mail">02:25 PM  02/12/2019</p>
                      <p className="mb-0">Cognizant Technologies</p>
                    </div>
                    <div className="col-md-2 p-2">
                      <FaCircle className="circle_int" />
                    </div>
                  </div>
                </div>
                <div className="col-md-9 p-0 bor-left">
                  <p className="text-reava">Harikrishna</p>
                
                  <div className="chat-back">

                    <div className="d-flex reava_inputtwo">

                      <input className="form-control input-stl" type="text" placeholder="Type your message here...." />
                      <Image src="../profile1.png" roundedCircle className="img-reava" />
                    </div>


                    <div className="d-flex reava_inputone">
                      <Image src="../profile1.png" roundedCircle className="img-reava" />
                      <input className="form-control" style={{'borderRadius':'10px'}} type="text" placeholder="Keep Up the good work" />
                    </div>

                
                  </div>
                  <div className="reava_chat">
                      <InputGroup className="">
                        <input className="form-control search" type="text" placeholder="Keep Up the good work" />
                        <FaPaperclip  style={{ color: "#717171",position: "absolute",right: "40px", top: "10px"}} />
                        <FaPaperPlane style={{ color: "#53d0f7", position: "absolute",right: "15px", top: "10px"}} />
                      </InputGroup>
                    </div>
                </div>
              </div>
            </div>

          </Card.Body>
        </Card>
      </div>
    </div>
  )


}

