import React from 'react';
import '../css/MyRequirements.css';
import { Card} from 'react-bootstrap';
import { FaEllipsisH } from 'react-icons/fa';
import { Link , BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
const cardstyle = {
  background: "white",
  padding: "20px 20px 0px 20px"
}
const cardheadstl = {
  textAlign: "right",
}



export default function MyRequirements() {
  return (

    <div className="container-fluid">
      <div className="profile">
        <Card>
        <Router>
          <div style={cardstyle}>
            <div className="d-flex req-skil-head">
              <div className="col-md-2 req_stl">
                <Link to="/MyRequirements" className="req"> Requirements Client </Link>
              </div>
              <div className="col-md-1 p-0">
                <Link to="/skills" className="skill"> Skills </Link>
              </div>

              <div className="col-md-9" style={cardheadstl}>
                <FaEllipsisH />
              </div>
            </div>

          </div>
          
          <Switch>
          <Route path="/MyRequirements">
           <RequirementsClient/>
          </Route>
          <Route path="/skills">
           <Skills />
          </Route>
         
        </Switch>
           </Router>
       </Card>
      </div>
    </div>
  )


}
function RequirementsClient() {
  return (
    <Card.Body style={cardstyle} className="c_body">
    <div className="req-det">
      <div className="d-flex justify-content-around pt-2">
        <div className="col-md-1 pr-0">
          <p className="inf-stl">Infosys</p>
        </div>
        <div className="col-md-2">
          <p className="req-pro">Senior Java Programmer</p>
        </div>
        <div className="col-md-9">
          <p className="text-dark font-weight-bold text-right">Expiry: 3 days</p>
        </div>
      </div>

    </div>
    <div className="row d-flex  justify-content-around pt-3" >
      <div className="col-md-1">
        <p className="text-req">Location</p>
        <p className="text-req1">Hyderabad</p>
      </div>

      <div className="col-md-1">
        <p className="text-req">Visa status</p>
        <p className="text-req1">H1B</p>

      </div>
      <div className="col-md-1">
        <p className="text-req">Salary</p>
        <p className="text-req1">25 Lacs/CTC</p>
      </div>

      <div className="col-md-1">
        <p className="text-req">Experience</p>
        <p className="text-req1">3 Yrs</p>
      </div>
      <div className="col-md-1">
        <p className="text-req">Type</p>
        <p className="text-req1">Contract</p>

      </div>
      <div className="col-md-1">
        <p className="text-req">Duration</p>
        <p className="text-req1">2 Months</p>
      </div>
      <div className="col-md-1">
        <p className="text-req">Rate / USD</p>
        <p className="text-req1">200/Hr</p>
      </div>
      <div className="col-md-2">
        <p className="text-req">Interview Mode</p>
        <p className="text-req1">Face 2 Face</p>
      </div>

    </div>

    <div className="req-det">
      <div className="d-flex justify-content-around pt-2">
        <div className="col-md-3">
          <p className="inf-stl">Tata Cosultancy Service</p>
        </div>
        <div className="col-md-2">
          <p className="req-pro">Data Analyst</p>
        </div>
        <div className="col-md-7" >
          <p className="text-dark font-weight-bold text-right">Expiry: 00:45:05</p>
        </div>
      </div>

    </div>

    <div className="row d-flex  justify-content-around pt-3" >
      <div className="col-md-1">
        <p className="text-req">Location</p>
        <p className="text-req1">Hyderabad</p>
      </div>

      <div className="col-md-1">
        <p className="text-req">Visa status</p>
        <p className="text-req1">H1B</p>

      </div>
      <div className="col-md-1">
        <p className="text-req">Salary</p>
        <p className="text-req1">25 Lacs/CTC</p>
      </div>

      <div className="col-md-1">
        <p className="text-req">Experience</p>
        <p className="text-req1">3 Yrs</p>
      </div>
      <div className="col-md-1">
        <p className="text-req">Type</p>
        <p className="text-req1">Contract</p>

      </div>
      <div className="col-md-1">
        <p className="text-req">Duration</p>
        <p className="text-req1">2 Months</p>
      </div>
      <div className="col-md-1">
        <p className="text-req">Rate / USD</p>
        <p className="text-req1">200/Hr</p>
      </div>
      <div className="col-md-2">
        <p className="text-req">Interview Mode</p>
        <p className="text-req1">Face 2 Face</p>
      </div>

    </div>
  </Card.Body>


  );
}
function Skills() {
  return (
    <Card.Body style={cardstyle} className="c_body" >

<div className="row d-flex justify-content-around">
 <Link to=""><p className="python-skill">Python (1)</p> </Link>
<p className="multi-skill">Java (14)</p>
<p className="multi-skill">HTML (14)</p>
<p className="multi-skill">UI Developer (2)</p>
<p className="multi-skill">UX Developer (2)</p>
<p className="multi-skill">Java (14)</p>
<p className="multi-skill">HTML (14)</p>
<p className="multi-skill">UI Developer (2)</p>
<p className="multi-skill">UX Developer (2)</p>
<p className="multi-skill">HTML (14)</p>
</div>

<div className="row d-flex justify-content-around w-50">
<p className="multi-skill">UI Developer (2)</p>
<p className="multi-skill">Java (14)</p>
<p className="multi-skill">HTML (14)</p>
<p className="multi-skill">UI Developer (2)</p>

</div>


    <div className="req-det">
      <div className="d-flex justify-content-around pt-2">
        <div className="col-md-1">
          <p className="req-pro skill-pro">Infosys</p>
        </div>
        <div className="col-md-2 p-0">
          <p className="req-pro">Python Programmer</p>
        </div>
        <div className="col-md-9" >
          <p className="text-dark font-weight-bold text-right">Expiry: 00:45:05</p>
        </div>
      </div>

    </div>
    <div className="row d-flex  justify-content-around pt-3" >
      <div className="col-md-1">
        <p className="text-req">Location</p>
        <p className="text-req1">Hyderabad</p>
      </div>

      <div className="col-md-1">
        <p className="text-req">Visa status</p>
        <p className="text-req1">H1B</p>

      </div>
      <div className="col-md-1">
        <p className="text-req">Salary</p>
        <p className="text-req1">25 Lacs/CTC</p>
      </div>

      <div className="col-md-1">
        <p className="text-req">Experience</p>
        <p className="text-req1">3 Yrs</p>
      </div>
      <div className="col-md-1">
        <p className="text-req">Type</p>
        <p className="text-req1">Contract</p>

      </div>
      <div className="col-md-1">
        <p className="text-req">Duration</p>
        <p className="text-req1">2 Months</p>
      </div>
      <div className="col-md-1">
        <p className="text-req">Rate / USD</p>
        <p className="text-req1">200/Hr</p>
      </div>
      <div className="col-md-2">
        <p className="text-req">Interview Mode</p>
        <p className="text-req1">Face 2 Face</p>
      </div>

    </div>

    </Card.Body>

  );
}