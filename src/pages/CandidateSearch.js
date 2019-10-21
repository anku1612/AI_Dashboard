import React from 'react';
import { Card,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import '../css/CandidateSearch.css';


const CandidateSearch = () => {
  return (
    <Card className="candidateSearch p-2 font-weight-bold mx-4 mt-4">
      <Card.Header className="bg-white">Candidate Search</Card.Header>
      <Card.Body className="p-2">    
        <div className="col-12 rowodd d-flex p-0">
                <div className="col-md-3">
                    <Card className="my_card" style={{ width: '20.1rem' }}>
                        <Card.Body className="profle_info pl-2 pb-1">
                            <div className="profile d-flex pt-0">
                                <div className="pro_image">
                                    <Image src="../profile1.png" roundedCircle className="img_pro" />
                                </div>
                                <div className="my_pro pl-2">
                                <Link to="/Dashboard" className="profile_name mb-0 pl-4"> Sharon Mathews </Link>
                                    
                                    <p className="mb-0 pl-4">Senior Java Developer @ infosys</p>
                                    <div className="exp_adj_main d-flex pb-3">
                                        <div className="exp_adj">
                                            <p className="mb-0 pl-4 my_exp">Exp:</p>
                                        </div>
                                        <div className="exp_adj">
                                            <p className="mb-0 pl-2">26 Years</p>
                                        </div>
                                    </div>
                                    <div className="my_icons pl-3 d-flex">
                                        <div>
                                            <p className="resume pr-3 pl-2">Resume</p>
                                        </div>
                                        <p className="px-1 mb-0">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z">
                                                </path>
                                            </svg>
                                        </p>
                                        <p className="px-1 mb-0">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z">
                                                </path>
                                            </svg>
                                        </p>
                                        <p className="px-1 mb-0">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M640 51.2l-.3 12.2c-28.1.8-45 15.8-55.8 40.3-25 57.8-103.3 240-155.3 358.6H415l-81.9-193.1c-32.5 63.6-68.3 130-99.2 193.1-.3.3-15 0-15-.3C172 352.3 122.8 243.4 75.8 133.4 64.4 106.7 26.4 63.4.2 63.7c0-3.1-.3-10-.3-14.2h161.9v13.9c-19.2 1.1-52.8 13.3-43.3 34.2 21.9 49.7 103.6 240.3 125.6 288.6 15-29.7 57.8-109.2 75.3-142.8-13.9-28.3-58.6-133.9-72.8-160-9.7-17.8-36.1-19.4-55.8-19.7V49.8l142.5.3v13.1c-19.4.6-38.1 7.8-29.4 26.1 18.9 40 30.6 68.1 48.1 104.7 5.6-10.8 34.7-69.4 48.1-100.8 8.9-20.6-3.9-28.6-38.6-29.4.3-3.6 0-10.3.3-13.6 44.4-.3 111.1-.3 123.1-.6v13.6c-22.5.8-45.8 12.8-58.1 31.7l-59.2 122.8c6.4 16.1 63.3 142.8 69.2 156.7L559.2 91.8c-8.6-23.1-36.4-28.1-47.2-28.3V49.6l127.8 1.1.2.5z">
                                            </path>
                                            </svg>
                                        </p>
                                        <p className="px-1 mb-0 pl-3">
                                            <img className="my_img" alt="" src="https://img.icons8.com/color/48/000000/linkedin-circled.png"></img>
                                        </p>
                                        <p className="px-0 mb-0">
                                            <img className="my_imgs" alt="" src="https://img.icons8.com/color/48/000000/whatsapp.png"></img>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-8 my_col pr-0">
                    <div className="col-md-12 p-0">
                    <Card className="my_card">
                        <div className=" prfile_content">
                            <div className="col-md-3 skillSet">
                            <Card.Body className="my_card_body">Primary Skills</Card.Body>
                        <p className="subSkill mb-2">JAVA,PHP</p>
                            </div>
                            <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Role</Card.Body>
                        <p className="subSkill mb-2">Project Manager</p>
                        </div>
                        <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Current CTC</Card.Body>
                        <p className="subSkill mb-2">INR 2,00,000</p>
                        </div>
                        <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Expected CTC</Card.Body>
                        <p className="subSkill mb-2">INR 2,30,000</p>
                        </div>
                        <div className="col-md-3 p-0 skillSet">
                        <Card.Body className="my_card_body">Email</Card.Body>
                        <p className="subSkill mb-2">hello@gamil.com</p>
                        </div>
                        </div>
                    </Card>
                    </div>
                    <div className="col-md-12 p-0">
                    <Card className="my_card">
                        <div className=" prfile_content">
                            <div className="col-md-3 skillSet">
                            <Card.Body className="my_card_body">Notice Period</Card.Body>
                        <p className="subSkill mb-2">2 Months</p>
                            </div>
                            <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Visa</Card.Body>
                        <p className="subSkill mb-2">H1B</p>
                        </div>
                        <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Location</Card.Body>
                        <p className="subSkill mb-2">Hyderabad</p>
                        </div>
                        <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Employed</Card.Body>
                        <p className="subSkill mb-2">Agency</p>
                        </div>
                        <div className="col-md-3 p-0 skillSet">
                        <Card.Body className="my_card_body">Phone</Card.Body>
                        <p className="subSkill mb-2">+91-897-847-8546</p>
                        </div>
                        </div>
                    </Card>
                    </div>
                </div>
                <div className="col-md-1 my_col pl-0">
                    <Card className="my_card">
                        {/* <Card.Body>This is some</Card.Body> */}
                        <img className="my_fa_icons" alt="" src="https://img.icons8.com/dotty/50/000000/phone.png"></img>
                        <img className="my_fa_icons" alt="" src="https://img.icons8.com/color/48/000000/send-mass-email.png"></img>
                        <img className="my_fa_icons" alt="" src="https://img.icons8.com/ultraviolet/40/000000/delete-message.png"></img>
                    </Card>
                </div>
            </div>
      </Card.Body>
      <Card.Body className="p-2">    
        <div className="col-12 d-flex p-0">
                <div className="col-md-3 ">
                    <Card className="my_card" style={{ width: '20.1rem'}}>
                        <Card.Body className="profle_info pl-2 pb-1">
                            <div className="profile d-flex pt-0">
                                <div className="pro_image">
                                    <Image src="../profile1.png" roundedCircle className="img_pro" />
                                </div>
                                <div className="my_pro pl-2">
                                    <Link to="/Dashboard" className="profile_name mb-0 pl-4"> Sharon Mathews </Link>
                                    <p className="mb-0 pl-4">Senior Java Developer @ infosys</p>
                                    <div className="exp_adj_main d-flex pb-3">
                                        <div className="exp_adj">
                                            <p className="mb-0 pl-4 my_exp">Exp:</p>
                                        </div>
                                        <div className="exp_adj">
                                            <p className="mb-0 pl-2">26 Years</p>
                                        </div>
                                    </div>
                                    <div className="my_icons pl-3 d-flex">
                                        <div>
                                            <p className="resume pr-3 pl-2">Resume</p>
                                        </div>
                                        <p className="px-1 mb-0">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z">
                                                </path>
                                            </svg>
                                        </p>
                                        <p className="px-1 mb-0">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z">
                                                </path>
                                            </svg>
                                        </p>
                                        <p className="px-1 mb-0">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M640 51.2l-.3 12.2c-28.1.8-45 15.8-55.8 40.3-25 57.8-103.3 240-155.3 358.6H415l-81.9-193.1c-32.5 63.6-68.3 130-99.2 193.1-.3.3-15 0-15-.3C172 352.3 122.8 243.4 75.8 133.4 64.4 106.7 26.4 63.4.2 63.7c0-3.1-.3-10-.3-14.2h161.9v13.9c-19.2 1.1-52.8 13.3-43.3 34.2 21.9 49.7 103.6 240.3 125.6 288.6 15-29.7 57.8-109.2 75.3-142.8-13.9-28.3-58.6-133.9-72.8-160-9.7-17.8-36.1-19.4-55.8-19.7V49.8l142.5.3v13.1c-19.4.6-38.1 7.8-29.4 26.1 18.9 40 30.6 68.1 48.1 104.7 5.6-10.8 34.7-69.4 48.1-100.8 8.9-20.6-3.9-28.6-38.6-29.4.3-3.6 0-10.3.3-13.6 44.4-.3 111.1-.3 123.1-.6v13.6c-22.5.8-45.8 12.8-58.1 31.7l-59.2 122.8c6.4 16.1 63.3 142.8 69.2 156.7L559.2 91.8c-8.6-23.1-36.4-28.1-47.2-28.3V49.6l127.8 1.1.2.5z">
                                            </path>
                                            </svg>
                                        </p>
                                        <p className="px-1 mb-0 pl-3">
                                            <img className="my_img" alt="" src="https://img.icons8.com/color/48/000000/linkedin-circled.png"></img>
                                        </p>
                                        <p className="px-0 mb-0">
                                            <img className="my_imgs" alt="" src="https://img.icons8.com/color/48/000000/whatsapp.png"></img>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-8 my_col pr-0">
                    <div className="col-md-12 p-0">
                    <Card className="my_card">
                        <div className=" prfile_content">
                            <div className="col-md-3 skillSet">
                            <Card.Body className="my_card_body">Primary Skills</Card.Body>
                        <p className="subSkill mb-2">JAVA,PHP</p>
                            </div>
                            <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Role</Card.Body>
                        <p className="subSkill mb-2">Project Manager</p>
                        </div>
                        <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Current CTC</Card.Body>
                        <p className="subSkill mb-2">INR 2,00,000</p>
                        </div>
                        <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Expected CTC</Card.Body>
                        <p className="subSkill mb-2">INR 2,30,000</p>
                        </div>
                        <div className="col-md-3 p-0 skillSet">
                        <Card.Body className="my_card_body">Email</Card.Body>
                        <p className="subSkill mb-2">hello@gamil.com</p>
                        </div>
                        </div>
                    </Card>
                    </div>
                    <div className="col-md-12 p-0">
                    <Card className="my_card">
                        <div className=" prfile_content">
                            <div className="col-md-3 skillSet">
                            <Card.Body className="my_card_body">Notice Period</Card.Body>
                        <p className="subSkill mb-2">2 Months</p>
                            </div>
                            <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Visa</Card.Body>
                        <p className="subSkill mb-2">H1B</p>
                        </div>
                        <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Location</Card.Body>
                        <p className="subSkill mb-2">Hyderabad</p>
                        </div>
                        <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Employed</Card.Body>
                        <p className="subSkill mb-2">Agency</p>
                        </div>
                        <div className="col-md-3 p-0 skillSet">
                        <Card.Body className="my_card_body">Phone</Card.Body>
                        <p className="subSkill mb-2">+91-897-847-8546</p>
                        </div>
                        </div>
                    </Card>
                    </div>
                </div>
                <div className="col-md-1 my_col pl-0">
                    <Card className="my_card">
                        {/* <Card.Body>This is some</Card.Body> */}
                        <img className="my_fa_icons" alt="" src="https://img.icons8.com/dotty/50/000000/phone.png"></img>
                        <img className="my_fa_icons" alt="" src="https://img.icons8.com/color/48/000000/send-mass-email.png"></img>
                        <img className="my_fa_icons" alt="" src="https://img.icons8.com/ultraviolet/40/000000/delete-message.png"></img>
                    </Card>
                </div>
            </div>
      </Card.Body>
      <Card.Body className="p-2">    
        <div className="col-12 d-flex p-0">
                <div className="col-md-3 ">
                    <Card className="my_card" style={{width: '20.1rem' }}>
                        <Card.Body className="profle_info pl-2 pb-1">
                            <div className="profile d-flex pt-0">
                                <div className="pro_image">
                                    <Image src="../profile1.png" roundedCircle className="img_pro" />
                                </div>
                                <div className="my_pro pl-2">
                                <Link to="/Dashboard" className="profile_name mb-0 pl-4"> Sharon Mathews </Link>
                                    <p className="mb-0 pl-4">Senior Java Developer @ infosys</p>
                                    <div className="exp_adj_main d-flex pb-3">
                                        <div className="exp_adj">
                                            <p className="mb-0 pl-4 my_exp">Exp:</p>
                                        </div>
                                        <div className="exp_adj">
                                            <p className="mb-0 pl-2">26 Years</p>
                                        </div>
                                    </div>
                                    <div className="my_icons pl-3 d-flex">
                                        <div>
                                            <p className="resume pr-3 pl-2">Resume</p>
                                        </div>
                                        <p className="px-1 mb-0">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z">
                                                </path>
                                            </svg>
                                        </p>
                                        <p className="px-1 mb-0">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z">
                                                </path>
                                            </svg>
                                        </p>
                                        <p className="px-1 mb-0">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M640 51.2l-.3 12.2c-28.1.8-45 15.8-55.8 40.3-25 57.8-103.3 240-155.3 358.6H415l-81.9-193.1c-32.5 63.6-68.3 130-99.2 193.1-.3.3-15 0-15-.3C172 352.3 122.8 243.4 75.8 133.4 64.4 106.7 26.4 63.4.2 63.7c0-3.1-.3-10-.3-14.2h161.9v13.9c-19.2 1.1-52.8 13.3-43.3 34.2 21.9 49.7 103.6 240.3 125.6 288.6 15-29.7 57.8-109.2 75.3-142.8-13.9-28.3-58.6-133.9-72.8-160-9.7-17.8-36.1-19.4-55.8-19.7V49.8l142.5.3v13.1c-19.4.6-38.1 7.8-29.4 26.1 18.9 40 30.6 68.1 48.1 104.7 5.6-10.8 34.7-69.4 48.1-100.8 8.9-20.6-3.9-28.6-38.6-29.4.3-3.6 0-10.3.3-13.6 44.4-.3 111.1-.3 123.1-.6v13.6c-22.5.8-45.8 12.8-58.1 31.7l-59.2 122.8c6.4 16.1 63.3 142.8 69.2 156.7L559.2 91.8c-8.6-23.1-36.4-28.1-47.2-28.3V49.6l127.8 1.1.2.5z">
                                            </path>
                                            </svg>
                                        </p>
                                        <p className="px-1 mb-0 pl-3">
                                            <img className="my_img" alt="" src="https://img.icons8.com/color/48/000000/linkedin-circled.png"></img>
                                        </p>
                                        <p className="px-0 mb-0">
                                            <img className="my_imgs" alt="" src="https://img.icons8.com/color/48/000000/whatsapp.png"></img>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-8 my_col pr-0">
                    <div className="col-md-12 p-0">
                    <Card className="my_card">
                        <div className=" prfile_content">
                            <div className="col-md-3 skillSet">
                            <Card.Body className="my_card_body">Primary Skills</Card.Body>
                        <p className="subSkill mb-2">JAVA,PHP</p>
                            </div>
                            <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Role</Card.Body>
                        <p className="subSkill mb-2">Project Manager</p>
                        </div>
                        <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Current CTC</Card.Body>
                        <p className="subSkill mb-2">INR 2,00,000</p>
                        </div>
                        <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Expected CTC</Card.Body>
                        <p className="subSkill mb-2">INR 2,30,000</p>
                        </div>
                        <div className="col-md-3 p-0 skillSet">
                        <Card.Body className="my_card_body">Email</Card.Body>
                        <p className="subSkill mb-2">hello@gamil.com</p>
                        </div>
                        </div>
                    </Card>
                    </div>
                    <div className="col-md-12 p-0">
                    <Card className="my_card">
                        <div className=" prfile_content">
                            <div className="col-md-3 skillSet">
                            <Card.Body className="my_card_body">Notice Period</Card.Body>
                        <p className="subSkill mb-2">2 Months</p>
                            </div>
                            <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Visa</Card.Body>
                        <p className="subSkill mb-2">H1B</p>
                        </div>
                        <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Location</Card.Body>
                        <p className="subSkill mb-2">Hyderabad</p>
                        </div>
                        <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Employed</Card.Body>
                        <p className="subSkill mb-2">Agency</p>
                        </div>
                        <div className="col-md-3 p-0 skillSet">
                        <Card.Body className="my_card_body">Phone</Card.Body>
                        <p className="subSkill mb-2">+91-897-847-8546</p>
                        </div>
                        </div>
                    </Card>
                    </div>
                </div>
                <div className="col-md-1 my_col pl-0">
                    <Card className="my_card">
                        {/* <Card.Body>This is some</Card.Body> */}
                        <img className="my_fa_icons" alt="" src="https://img.icons8.com/dotty/50/000000/phone.png"></img>
                        <img className="my_fa_icons" alt="" src="https://img.icons8.com/color/48/000000/send-mass-email.png"></img>
                        <img className="my_fa_icons" alt="" src="https://img.icons8.com/ultraviolet/40/000000/delete-message.png"></img>
                    </Card>
                </div>
            </div>
      </Card.Body>
      <Card.Body className="p-2">    
        <div className="col-12 d-flex p-0">
                <div className="col-md-3 ">
                    <Card className="my_card" style={{ width: '20.1rem'}}>
                        <Card.Body className="profle_info pl-2 pb-1">
                            <div className="profile d-flex pt-0">
                                <div className="pro_image">
                                    <Image src="../profile1.png" roundedCircle className="img_pro" />
                                </div>
                                <div className="my_pro pl-2">
                                <Link to="/Dashboard" className="profile_name mb-0 pl-4"> Sharon Mathews </Link>
                                    <p className="mb-0 pl-4">Senior Java Developer @ infosys</p>
                                    <div className="exp_adj_main d-flex pb-3">
                                        <div className="exp_adj">
                                            <p className="mb-0 pl-4 my_exp">Exp:</p>
                                        </div>
                                        <div className="exp_adj">
                                            <p className="mb-0 pl-2">26 Years</p>
                                        </div>
                                    </div>
                                    <div className="my_icons pl-3 d-flex">
                                        <div>
                                            <p className="resume pr-3 pl-2">Resume</p>
                                        </div>
                                        <p className="px-1 mb-0">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z">
                                                </path>
                                            </svg>
                                        </p>
                                        <p className="px-1 mb-0">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z">
                                                </path>
                                            </svg>
                                        </p>
                                        <p className="px-1 mb-0">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M640 51.2l-.3 12.2c-28.1.8-45 15.8-55.8 40.3-25 57.8-103.3 240-155.3 358.6H415l-81.9-193.1c-32.5 63.6-68.3 130-99.2 193.1-.3.3-15 0-15-.3C172 352.3 122.8 243.4 75.8 133.4 64.4 106.7 26.4 63.4.2 63.7c0-3.1-.3-10-.3-14.2h161.9v13.9c-19.2 1.1-52.8 13.3-43.3 34.2 21.9 49.7 103.6 240.3 125.6 288.6 15-29.7 57.8-109.2 75.3-142.8-13.9-28.3-58.6-133.9-72.8-160-9.7-17.8-36.1-19.4-55.8-19.7V49.8l142.5.3v13.1c-19.4.6-38.1 7.8-29.4 26.1 18.9 40 30.6 68.1 48.1 104.7 5.6-10.8 34.7-69.4 48.1-100.8 8.9-20.6-3.9-28.6-38.6-29.4.3-3.6 0-10.3.3-13.6 44.4-.3 111.1-.3 123.1-.6v13.6c-22.5.8-45.8 12.8-58.1 31.7l-59.2 122.8c6.4 16.1 63.3 142.8 69.2 156.7L559.2 91.8c-8.6-23.1-36.4-28.1-47.2-28.3V49.6l127.8 1.1.2.5z">
                                            </path>
                                            </svg>
                                        </p>
                                        <p className="px-1 mb-0 pl-3">
                                            <img className="my_img" alt="" src="https://img.icons8.com/color/48/000000/linkedin-circled.png"></img>
                                        </p>
                                        <p className="px-0 mb-0">
                                            <img className="my_imgs" alt="" src="https://img.icons8.com/color/48/000000/whatsapp.png"></img>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-8 my_col pr-0">
                    <div className="col-md-12 p-0">
                    <Card className="my_card">
                        <div className=" prfile_content">
                            <div className="col-md-3 skillSet">
                            <Card.Body className="my_card_body">Primary Skills</Card.Body>
                        <p className="subSkill mb-2">JAVA,PHP</p>
                            </div>
                            <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Role</Card.Body>
                        <p className="subSkill mb-2">Project Manager</p>
                        </div>
                        <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Current CTC</Card.Body>
                        <p className="subSkill mb-2">INR 2,00,000</p>
                        </div>
                        <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Expected CTC</Card.Body>
                        <p className="subSkill mb-2">INR 2,30,000</p>
                        </div>
                        <div className="col-md-3 p-0 skillSet">
                        <Card.Body className="my_card_body">Email</Card.Body>
                        <p className="subSkill mb-2">hello@gamil.com</p>
                        </div>
                        </div>
                    </Card>
                    </div>
                    <div className="col-md-12 p-0">
                    <Card className="my_card">
                        <div className=" prfile_content">
                            <div className="col-md-3 skillSet">
                            <Card.Body className="my_card_body">Notice Period</Card.Body>
                        <p className="subSkill mb-2">2 Months</p>
                            </div>
                            <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Visa</Card.Body>
                        <p className="subSkill mb-2">H1B</p>
                        </div>
                        <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Location</Card.Body>
                        <p className="subSkill mb-2">Hyderabad</p>
                        </div>
                        <div className="col-md-2 p-0 skillSet">
                        <Card.Body className="my_card_body">Employed</Card.Body>
                        <p className="subSkill mb-2">Agency</p>
                        </div>
                        <div className="col-md-3 p-0 skillSet">
                        <Card.Body className="my_card_body">Phone</Card.Body>
                        <p className="subSkill mb-2">+91-897-847-8546</p>
                        </div>
                        </div>
                    </Card>
                    </div>
                </div>
                <div className="col-md-1 my_col pl-0">
                    <Card className="my_card">
                        {/* <Card.Body>This is some</Card.Body> */}
                        <img className="my_fa_icons" alt="" src="https://img.icons8.com/dotty/50/000000/phone.png"></img>
                        <img className="my_fa_icons" alt="" src="https://img.icons8.com/color/48/000000/send-mass-email.png"></img>
                        <img className="my_fa_icons" alt="" src="https://img.icons8.com/ultraviolet/40/000000/delete-message.png"></img>
                    </Card>
                </div>
            </div>
      </Card.Body>
    </Card>
  )
}
export default CandidateSearch;
