import React from 'react';
import { Row, Col ,Button ,Image} from 'react-bootstrap';
import { Pie, } from '../../node_modules/react-chartjs-2/es/index'
import {FaPencilAlt,FaPaperPlane, FaSearch,FaEllipsisV,FaCheck,FaExclamationCircle,FaCircle,FaRegEnvelope,FaPaperclip,FaRegCheckCircle,FaStar, FaRegTrashAlt} from 'react-icons/fa';
import '../css/RequireterMainPage.css';


class Welcome extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'React',
            lineData: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Old User",
                    backgroundColor: '#08AEEA',
                    borderColor: '#08AEEA',
                    data: [0, 10, 5, 14, 30, 40, 55],
                }]
            },

            pieData: {
                labels: ["January", "February", "March", "April", "May"],
                datasets: [{
                    backgroundColor: ['rgba(255, 0, 0, 0.7)',
                        'rgba(255, 100, 50, 0.7)',
                        'rgba(10, 100, 200, 0.7)',
                        'rgba(20, 110, 250, 0.7)',
                        'rgba(50, 210, 350, 0.7)',
                        'rgba(255, 100, 255, 0.7)',
                        'rgba(250, 200, 10, 0.7)'],
                    borderColor: ['rgba(255, 0, 0, 0.7)',
                        'rgba(255, 100, 50, 0.7)',
                        'rgba(10, 100, 200, 0.7)',
                        'rgba(20, 110, 250, 0.7)',
                        'rgba(50, 210, 350, 0.7)',
                        'rgba(255, 100, 255, 0.7)',
                        'rgba(250, 200, 10, 0.7)'],
                    data: [25, 10, 5, 14, 30, 40, 55],
                }]
            },

            pieChartOptions: {
                maintainAspectRatio: true,
                legend: {
                    position: 'right',
                }
            },
            dataFlow: {
                datasets: [{
                    backgroundColor: ['rgba(255, 0, 0, 0.7)',
                        'rgba(255, 100, 50, 0.7)',
                        'rgba(10, 100, 200, 0.7)',
                        'rgba(20, 110, 250, 0.7)',
                        'rgba(50, 210, 350, 0.7)',
                        'rgba(255, 100, 255, 0.7)',
                        'rgba(250, 200, 10, 0.7)'],
                    borderColor: ['rgba(255, 0, 0, 0.7)',
                        'rgba(255, 100, 50, 0.7)',
                        'rgba(10, 100, 200, 0.7)',
                        'rgba(20, 110, 250, 0.7)',
                        'rgba(50, 210, 350, 0.7)',
                        'rgba(255, 100, 255, 0.7)',
                        'rgba(250, 200, 10, 0.7)'],
                    data: [25,],
                }]
            },
        };
    }
  render() {
        return (
            <div className="mt-5 mx-4">
                <Row>
                    <Col md="3">
                        <div className="card">
                        <div className="bg-white py-3 px-1 d-flex card-header ">
                <div className="col-md-6">
                    <h6 className="font-weight-bold head">Top 10</h6>
                </div>
                <div className="col-md-6 d-flex">
                    <div className="col-md-7">
                        <h6 className="float-right"><FaSearch /></h6>
                    </div>
                    <div className="col-md-5">
                        <h6 className="float-right"><FaEllipsisV /></h6>
                    </div>
                </div>
            </div>
            <div className="bg-white p-2 d-flex card-header ">
                <div className="">
                <Button variant="outline-primary rounded-pill" className="btn-req">Req 1</Button>
                    </div>
                    <div className="">
                <Button variant="outline-primary rounded-pill" className="btn-req reqstyle">Req 1</Button>
                    </div>
                    <div className="">
                <Button variant="outline-primary rounded-pill" className="btn-req">Req 1</Button>
                    </div>
                    <div className="">
                <Button variant="outline-primary rounded-pill" className="btn-req">Req 1</Button>
                    </div>
            </div>
                    <div className="card-body d-flex">
                        <div className="col-md-2 p-0">
                        <Image src="../profile1.png" roundedCircle className="img_req" />
                        </div>
                        <div className="col-md-6 p-0 ml-3">
<p className="mb-0 pc">Sharon Mathews </p>
<p className="mb-0 ">UI Designer</p>
<p className="mb-0 pc">10 mins ago</p>
</div>
                        <div className="col-md-3 p-0 sec">
                        <p className="UsreName mb-0">100%</p>
                        <p className="mb-0 mat pc">match</p>
                        </div>

                        <div className="col-md-1 p-0 mt-3">
                        <FaEllipsisV />
                        </div> </div>

                        <div className="card-body d-flex">
                        <div className="col-md-2 p-0">
                        <Image src="../profile1.png" roundedCircle className="img_req" />
                        </div>
                        <div className="col-md-6 p-0 ml-3">
<p className="mb-0 pc">Sharon Mathews </p>
<p className="mb-0 ">UI Designer</p>
<p className="mb-0 pc">10 mins ago</p>
</div>
                        <div className="col-md-3 p-0 sec">
                        <p className="UsreName mb-0">100%</p>
                        <p className="mb-0 mat pc">match</p>
                        </div>

                        <div className="col-md-1 p-0 mt-3">
                        <FaEllipsisV />
                        </div> </div>

                        <div className="card-body d-flex">
                        <div className="col-md-2 p-0">
                        <Image src="../profile1.png" roundedCircle className="img_req" />
                        </div>
                        <div className="col-md-6 p-0 ml-3">
<p className="mb-0 pc">Sharon Mathews </p>
<p className="mb-0 ">UI Designer</p>
<p className="mb-0 pc">10 mins ago</p>
</div>
                        <div className="col-md-3 p-0 sec">
                        <p className="UsreName mb-0 ">100%</p>
                        <p className="mb-0 mat pc">match</p>
                        </div>

                        <div className="col-md-1 p-0 mt-3">
                        <FaEllipsisV />
                        </div> </div>

                        <div className="card-body d-flex">
                        <div className="col-md-2 p-0">
                        <Image src="../profile1.png" roundedCircle className="img_req" />
                        </div>
                        <div className="col-md-6 p-0 ml-3">
<p className="mb-0 pc">Sharon Mathews </p>
<p className="mb-0">UI Designer</p>
<p className="mb-0 pc">10 mins ago</p>
</div>
                        <div className="col-md-3 p-0 sec">
                        <p className="UsreName mb-0">100%</p>
                        <p className="mb-0 mat pc">match</p>
                        </div>

                        <div className="col-md-1 p-0 mt-3">
                        <FaEllipsisV />
                        </div> </div>
                         </div>
                    </Col>

       <Col md="6">
                        <div className="card">
                        <div className="bg-white py-3 px-1 d-flex card-header ">
                <div className="col-md-5 d-flex">
                    <div className="col-md-7">
                    <h6 className="font-weight-bold head">Live Actions</h6>
                    </div>
                    <div className="col-md-2">
                        <h6 className="float-right"><FaEllipsisV /></h6>
                    </div>
                </div>
                <div className="col-md-7">
                    <h6 className="float-right"><FaEllipsisV /></h6>
                    
                </div>
            </div>
                          
                          
                            <div className="card-body">
                            <Pie data={this.state.pieData} options={this.state.pieChartOptions} 
                            width={1000} height={600} redraw />
                            </div>
                        </div>
                    </Col>
            
                    <Col md="3">
                        <div className="card">
                        <div className="bg-white py-3 px-1 d-flex card-header ">
                <div className="col-md-11 d-flex">
                    <div className="col-md-10">
                    <h6 className="font-weight-bold head">Live Screening Status</h6>
                    </div>
                    <div className="col-md-1">
                        <h6 className="float-right"><FaEllipsisV /></h6>
                    </div>
                </div>
                <div className="col-md-1">
                    <h6 className="float-right"><FaEllipsisV /></h6>
                    
                </div>
            </div>
                  <div className="">
                        <Image src="../XYZ-01.jpg" style={{width: "100%"}} />
                        </div>
                        <div className="card-body pb-0">
                        
<p className="UserName mb-0">Daniel Howard </p>
<p className="mb-0">UI Designer </p>
<p className="pc">Infosys Pvt Ltd</p>
</div>
<div className="card-body">
<FaCheck className="right_icon" /> 
< div className="dot_icon"  />
<FaCheck className="right_icon"  />
< div className="dotone_icon"  />
 <FaCheck className="right_icon"  /> 
 < div className="dottwo_icon"  />
 <FaExclamationCircle className="hold_icon" />
 < div className="dotthree_icon"  />
 <FaCircle className="circle_icon" />

      
                        </div>
                        <div className="card-body p-0">
                        <p className="float-right pr-4">NEXT</p>
                        </div>
                        </div>
                    </Col>
                </Row>


                <Row className="mt-4 mb-5">
                    <Col md="9">
                        <div className="card">
                        <div className="bg-white py-3 px-1 d-flex card-header ">
                <div className="col-md-9 "> 
                    <h6 className="font-weight-bold head">In-Mail</h6> 
                </div>
                <div className="col-md-3">
                    <h6 className="float-right"><FaEllipsisV /></h6> 
                </div>
            </div>
            <div className="bg-white p-3 d-flex card-body">
                <div className="d-flex justify-content-around">
                <div className="">
                <Button variant="outline-primary rounded-pill" className="mail_btn">Account Manager</Button>
                    </div>
                    <div className="">
                <Button variant="outline-primary rounded-pill" className="mail_btn" active>Client</Button>
                    </div>
                    <div className="">
                <Button variant="outline-primary rounded-pill" className="mail_btn reqstyle">candidate</Button>
                    </div>
                    <div className="">
                <Button variant="outline-primary rounded-pill" className="mail_btn">Requiements</Button>
                    </div>
                    <div className="">
                <Button variant="outline-primary rounded-pill" className="mail_btn">Interviews</Button>
                    </div>
                    </div>
            </div>
          
            <div className="bg-white p-2 d-flex card-body">

<div className="col-md-2"><p className="mb-0"><FaRegEnvelope style={{width:"60px", height:"50px", color:"#64c9f3"}}/></p>
<p className="mb-0" style={{color:"#64c9f3",marginLeft:"12px"}}>Inbox</p>
</div>
<div className="col-md-7">
<p className="mb-0 mail">Sarah Connors</p>
<p className="mb-0" style={{color:"#717171", fontWeight:"bold"}}>Sub UI Designer <FaPaperclip /></p>
<p className="mb-0 mail">Crafted with love to help Designer
 build great mobile apps quickly. crafted with
  love to help Designer build great mobile apps 
  quickly.</p>


</div>

<div className="col-md-2">
    <p className="mail" style={{textAlign:"right"}}>10 mins ago</p>
</div>
<div className=" mail_icons" >
   <div> <FaRegCheckCircle /></div>
   <div> <FaStar /></div>
   <div> <FaRegTrashAlt /></div>

   
</div>

            </div>

            <div className="bg-white p-2 d-flex card-body">

<div className="col-md-2"><p className="mb-0"><FaPaperPlane style={{width:"50px", height:"40px"}}/></p>
<p className="mb-0" style={{marginLeft:"12px"}}>sent</p>
</div>
<div className="col-md-7">
<p className="mb-0 mail">Sarah Connors</p>
<p className="mb-0" style={{color:"#717171", fontWeight:"bold"}}>Sub UI Designer <FaPaperclip /></p>
<p className="mb-0 mail">Crafted with love to help Designer
 build great mobile apps quickly. crafted with
  love to help Designer build great mobile apps 
  quickly.</p>


</div>

<div className="col-md-2">
    <p className="mail" style={{textAlign:"right"}}>10 mins ago</p>
</div>
<div className=" mail_icons" >
   <div> <FaRegCheckCircle /></div>
   <div> <FaStar /></div>
   <div> <FaRegTrashAlt /></div>

   
</div>

            </div>

            <div className="bg-white p-2 d-flex card-body">

<div className="col-md-2"><p className="mb-0">
    <FaPencilAlt style={{width:"50px", height:"40px"}}/></p>
<p className="mb-0" style={{marginLeft:"12px"}}>Draft</p>
</div>
<div className="col-md-7">
<p className="mb-0 mail">Sarah Connors</p>
<p className="mb-0" style={{color:"#717171", fontWeight:"bold"}}>Sub UI Designer <FaPaperclip /></p>
<p className="mb-0 mail">Crafted with love to help Designer
 build great mobile apps quickly. crafted with
  love to help Designer build great mobile apps 
  quickly.</p>


</div>

<div className="col-md-2">
    <p className="mail" style={{textAlign:"right"}}>10 mins ago</p>
</div>
<div className=" mail_icons" >
   <div> <FaRegCheckCircle /></div>
   <div> <FaStar /></div>
   <div> <FaRegTrashAlt /></div>

   
</div>

            </div>

            <div className="bg-white p-2 d-flex card-body">

<div className="col-md-2"><p className="mb-0">
    <FaRegTrashAlt style={{width:"50px", height:"40px"}}/></p>
<p className="mb-0" style={{marginLeft:"12px"}}>Delete</p>
</div>

  </div>
</div>
                    </Col>
                 
                 
                 
                    <Col md="3">
                        <div className="card">
                        <div className="bg-white py-3 px-1 d-flex card-header ">
                <div className="col-md-9 "> 
                    <h6 className="font-weight-bold head">Hire Analytics</h6> 
                </div>
                <div className="col-md-3">
                    <h6 className="float-right"><FaEllipsisV /></h6> 
                </div>
            </div>
                            <div className="card-body pb-4 pt-1">
                                <div className="my-2">
                                    <div className="adjest_items d-flex  pb-5 pt-5">
                                        <Col md="6 hlo">
                                            {/* <Pie data={this.state.dataFlow} height={350} /> */}
                                            <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="90" cy="90" r="80" stroke="#e5e6fa" fill="#beeb5d" strokeWidth="15" />
                                            </svg>
                                            <svg version="1.1" id="line_2" xmlns="http://www.w3.org/2000/svg"
                                             x="0px" y="0px" width="30px" height="80px" xml="preserve">
                                                 <path className="path-vert" fill="#333333" strokeWidth="3"
                                                  stroke="#333333" d="M30 0 v600 400"/>
                                            </svg>
                                            <div className="resume_screen">
                                            <p className="card-title my-0">Resume</p>
                                            <p className="per_bar">90%</p>
                                            </div>
                                      
                                        </Col>
                                        <Col md="6">
                                            <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="90" cy="90" r="80" stroke="#e5e6fa" fill="#efbb70" 
                                                strokeDasharray=" 1000" animation="draw1 5s linear alternate" strokeWidth="15" />
                                            </svg>
                                            <svg version="1.1" id="line_2" xmlns="http://www.w3.org/2000/svg"
                                             x="0px" y="0px" width="30px" height="80px" xml="preserve">
                                                 <path className="path-vert" fill="#333333" strokeWidth="3"
                                                  stroke="#333333" d="M30 0 v600 400"/>
                                            </svg>
                                            <div className="resume_screen">
                                            <p className="card-title my-0">Screening</p>
                                            <p className="per_bar">75%</p>
                                            </div>
                                          
                                        </Col>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
            
                </Row>


                <Row className="mt-4 mb-5">
                    <Col md="6">
                        <div className="card">
                        <div className="bg-white py-3 px-1 d-flex card-header ">
                <div className="col-md-9"> 
                    <h6 className="font-weight-bold head">Interview scheduler</h6> 
                </div>
                <div className="col-md-3">
                    <h6 className="float-right"><FaEllipsisV /></h6> 
                </div>
            </div>
 <div className="bg-white p-2 d-flex card-body">
 </div>




 
</div>
                    </Col>
                 
                    <Col md="3">
                        <div className="card">
                        <div className="bg-white py-3 px-1 d-flex card-header ">
                <div className="col-md-9 "> 
                    <h6 className="font-weight-bold head">Interview Status</h6> 
                </div>
                <div className="col-md-3">
                    <h6 className="float-right"><FaEllipsisV /></h6> 
                </div>
            </div>
            <div className="bg-white p-1  card-body">
              <div className="d-flex">  <div className="col-md-7">
              <p className="mb-0" style={{color:"#717171", fontWeight:"bold"}}>Sankar</p>
<p className="mb-0" >UI Developer </p>
<p className="mb-0 mail">@ Cognizant Technologies</p>
<p>Jazz Requireters</p>
                </div>
                <div className="col-md-5 int_status">
                <p className="mb-0" style={{color:"#717171"}}>Status</p>
<p className="mb-0 success">Successful</p>
<p className="mb-0 mail">10 mins ago</p>
</div> </div>
 </div>

 <div className="bg-white p-1  card-body">
              <div className="d-flex">  <div className="col-md-7">
              <p className="mb-0" style={{color:"#717171", fontWeight:"bold"}}>Sankar</p>
<p className="mb-0" >UI Developer </p>
<p className="mb-0 mail">@ Cognizant Technologies</p>
<p>Jazz Requireters</p>
                </div>
                <div className="col-md-5 int_status">
                <p className="mb-0" style={{color:"#717171"}}>Status</p>
<p className="mb-0 success">Successful</p>
<p className="mb-0 mail">10 mins ago</p>
</div> </div>
 </div>

 <div className="bg-white p-1  card-body">
              <div className="d-flex">  <div className="col-md-7">
              <p className="mb-0" style={{color:"#717171", fontWeight:"bold"}}>Sankar</p>
<p className="mb-0" >UI Developer </p>
<p className="mb-0 mail">@ Cognizant Technologies</p>
<p>Jazz Requireters</p>
                </div>
                <div className="col-md-5 int_status">
                <p className="mb-0" style={{color:"#717171"}}>Status</p>
<p className="mb-0 success">Successful</p>
<p className="mb-0 mail">10 mins ago</p>
</div> </div>
 </div>

 <div className="bg-white p-1  card-body">
              <div className="d-flex">  <div className="col-md-7">
              <p className="mb-0" style={{color:"#717171", fontWeight:"bold"}}>Sankar</p>
<p className="mb-0" >UI Developer </p>
<p className="mb-0 mail">@ Cognizant Technologies</p>
<p>Jazz Requireters</p>
                </div>
                <div className="col-md-5 int_status">
                <p className="mb-0" style={{color:"#717171"}}>Status</p>
<p className="mb-0 success">Successful</p>
<p className="mb-0 mail">10 mins ago</p>
</div> </div>
 </div>
                        </div>
                    </Col>
                  
                 
                    <Col md="3">
                        <div className="card">
                        <div className="bg-white py-3 px-1 d-flex card-header ">
                <div className="col-md-9 "> 
                    <h6 className="font-weight-bold head">Live Interviews</h6> 
                </div>
                <div className="col-md-3">
                    <h6 className="float-right"><FaEllipsisV /></h6> 
                </div>
            </div>
                            <div className="card-body pb-4 pt-1">
                                <div className="my-2">
                                    <div className="adjest_items d-flex  pb-5 pt-5">
                                      
                                         
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
            
                </Row>




            </div>
        )
    }
}
export default Welcome;
