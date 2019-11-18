import React from 'react';
import '../css/Reglogin.css';
import { Form ,Image  } from 'react-bootstrap';
import {FaEnvelope ,FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom'



export default function LoginPage() {
    return (
      
       <div className="container-login100" >
         
         <div className="page_stl">
     <div className="text-center pb-3"> <p  className="req_login_head"><span className="font-weight-bold">Login </span>Page</p>
           <Image src="../Rectangle 2.png" style={{marginTop:"-15px"}}  /></div>

         <Form className="pb-3">
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="mail_lbl">YOUR E-MAIL</Form.Label>
    <Form.Control type="email" placeholder="Enter email" className="input_stl"/>
   <span className="mail_icon"> <FaEnvelope /></span> 

  </Form.Group>

  <Form.Group controlId="formBasicPassword" className="pb-3">
    <Form.Label  className="mail_lbl">PASSWORD</Form.Label>
    <Form.Control type="password" placeholder="Password"  className="input_stl"/>
    <span className="pwd_icon"> <FaLock /></span> 
  </Form.Group>
    <Link to="/RSLogin"  className="btn_login"> LOG IN </Link>
</Form>
<div className="text-center pt-3">
<p className="">OR</p>
<Image src="../Ico Google+.png" className="pb-5"  />


<p className="">Copyright @ 2019. The Recruiter </p> </div>
         </div>

          </div>
      
  );
};




