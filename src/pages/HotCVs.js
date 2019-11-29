import React from 'react';
import '../css/MyRequirements.css';
import { Card,Image, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FaEllipsisH, FaPhone, FaEnvelope, FaWhatsapp, FaCommentDots } from 'react-icons/fa';

const cardstyle = {
  background: "white",
  padding: "15px 20px 5px 20px"
}

const wtspstyle = {
  color: "#3ab948",
  width: "28px",
  height: "28px"
}
export default function HotCVs() {
  return (

    <div className="container-fluid">
      <div className="row profile d-flex">
        <div className="col-md-6" >
          <Card  >
          <div style={cardstyle}>
              <div className="row d-flex req-skil-head">
                <div className="col-md-9">
                  <p><span className="cv-header">Hot CV's / </span>
                  <span className="req-pro"> Ui Designer (3)</span>  </p>
                </div>
                <div className="col-md-3 p-0">
                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">
    <Form.Control as="select" className ="drp-cv">
      <option>Ui Designer</option>
      <option>Ui Developer</option>
      <option> Web Developer</option>
      <option> JS Developer</option>
     </Form.Control>
  </Form.Group>

                </div>
              </div>

            </div>

            <Card.Body className="pb-4 pt-2">
            <div className="card-body d-flex">
                                <div className="col-md-2 p-0">
                                    <Image src="../profile.jpg" roundedCircle className="img_emp" />
                                </div>
                                <div className="col-md-4 p-0 pt-1">
                                    <p className="mb-0 head-emp">Jimmy</p>
                                    <p className="mb-0 ">15 Yrs Exp.</p>
                                    <p className="mb-0 ">UI Designer @ Accenture</p>
                                </div>
                                <div className="col-md-2 p-0 pt-4">
                                    <p className="mb-0">Agency</p>
                                    <p className="mb-0">Jazz Recruiters</p>
                                </div>
                                <div className="col-md-2 pt-4 ml-4">
                                    <p className="mb-0">CTC</p>
                                    <p className="mb-0">18 Lacs</p>
                                </div>
                                <div className="col-md-2 pt-4">
                                    <p className="mb-0">Notice</p>
                                    <p className="mb-0">2 Months</p>
                                </div>
                                 </div>
                                
                                <div className="card-body d-flex">
                                <div className="col-md-2 p-0">
                                    <Image src="../profile1.png" roundedCircle className="img_emp" />
                                </div>
                                    <div className="col-md-4 p-0 pt-1">
                                    <p className="mb-0 head-emp">Tim Clark</p>
                                    <p className="mb-0 ">15 Yrs Exp.</p>
                                    <p className="mb-0 ">UI Designer @ Accenture</p>
                                </div>
                                <div className="col-md-2 p-0 pt-4">
                                    <p className="mb-0">Agency</p>
                                    <p className="mb-0">Jazz Recruiters</p>
                                </div>
                                <div className="col-md-2 pt-4 ml-4">
                                    <p className="mb-0">CTC</p>
                                    <p className="mb-0">18 Lacs</p>
                                </div>
                                <div className="col-md-2 pt-4">
                                    <p className="mb-0">Notice</p>
                                    <p className="mb-0">2 Months</p>
                                </div>
                                
                                </div>

                                <div className="card-body d-flex">
                                <div className="col-md-2 p-0">
                                    <Image src="../XYZ-01.jpg" roundedCircle className="img_emp" />
                                </div>
                                <div className="col-md-4 p-0 pt-1">
                                    <p className="mb-0 head-emp">Sarah Connor</p>
                                    <p className="mb-0 ">15 Yrs Exp.</p>
                                    <p className="mb-0 ">UI Designer @ Accenture</p>
                                </div>
                                <div className="col-md-2 p-0 pt-4">
                                    <p className="mb-0">Agency</p>
                                    <p className="mb-0">Jazz Recruiters</p>
                                </div>
                                <div className="col-md-2 pt-4 ml-4">
                                    <p className="mb-0">CTC</p>
                                    <p className="mb-0">18 Lacs</p>
                                </div>
                                <div className="col-md-2 pt-4">
                                    <p className="mb-0">Notice</p>
                                    <p className="mb-0">2 Months</p>
                                </div>
                                
                                </div>
                                <Link to="/" className="">  
                                <div className="card-body d-flex">
                                <div className="col-md-2 p-0">
                                    <Image src="../profile2.jpg" roundedCircle className="img_emp" />
                                </div>
                                <div className="col-md-4 p-0 pt-1">
                                    <p className="mb-0 head-emp">Samir cochar</p>
                                    <p className="mb-0 ">15 Yrs Exp.</p>
                                    <p className="mb-0 ">UI Designer @ Accenture</p>
                                </div>
                                <div className="col-md-2 p-0 pt-4">
                                    <p className="mb-0">Agency</p>
                                    <p className="mb-0">Jazz Recruiters</p>
                                </div>
                                <div className="col-md-2 pt-4 ml-4">
                                    <p className="mb-0">CTC</p>
                                    <p className="mb-0">18 Lacs</p>
                                </div>
                                <div className="col-md-2 pt-4">
                                    <p className="mb-0">Notice</p>
                                    <p className="mb-0">2 Months</p>
                                </div>
                                </div>
                                </Link> </Card.Body>
          </Card>


        </div>
        <div className="col-md-6" >
        <Card>
        <div style={cardstyle}>
              <div className="row d-flex req-skil-head">
                <div className="col-md-10">
                  <p className="cv-header"> Selected CV -Sarah Connor </p>
                </div>
                <div className="col-md-2 text-right">
                <FaEllipsisH />
                </div>
              </div>
          
<div className="pb-1 mb-1 pt-3 mt-2">
    <div className="d-flex justify-content-around " >
      <div className="row col-md-3 p-0">
      <Image src="../profile2.jpg" className="cv-pro-img"  />
       </div>
      <div className="row col-md-5">
       <span className="cv-title">UI DESIGNER</span>
       <p className="cv-user-det">Email: sarahconnor@gmail.com</p>
       <p className="cv-user-det">Mobile: +91 8978 868 888</p>
       <p className="cv-user-det">Professional Summary</p>
       </div>

      <div className="row col-md-4">
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
    </div> 
   

     <div className="d-flex justify-content-around" >
      <div className="row col-md-3">
      
       </div>
      <div className="row col-md-9 pr-0">
       <p className="cv-user-detail"> Around 2 years of experience in IT indusrty, Worked as a Jr. Data Analyst having good experience on SQL,MySQl, Python.</p>
       <p className="cv-user-detail"> Managed to Perform Data Analyst on Retails store domain-based data with Data manipulation, Data Visualization and ML (machine Learning Algorithms) for data accuracy in the models. </p>
       <p className="cv-user-detail"> Managed to Perform Data Analyst on Retails store domain-based data with Data manipulation, Data Visualization and ML (machine Learning Algorithms) for data accuracy in the models. </p>
      </div>

   
    </div>  
     </div>
</div>
</Card>



        </div>
      </div>
    </div>
  )


}

