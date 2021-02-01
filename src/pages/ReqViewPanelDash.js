import React from 'react';
import '../css/ReqViewPanelDash.css';
import Calendar from './Calendar'
import { Card, Image } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { FaEllipsisH, FaPhone, FaEnvelope, FaCommentDots, FaWhatsapp, FaVideo } from 'react-icons/fa';
import RPHeader from './RPHeader';

const cardstyle = {
  background: "white",
  padding: "20px 20px 0px 20px"
}
const wtspstyle = {
  color: "#3ab948",
  width: "28px",
  height: "28px"
}

export default function ReqViewPanelDash() {
  return (
    <div>
      <RPHeader />
      <div className="container-fluid">
        <div className="profile">
          <Card className="mb-4 cardstl">
            <div style={cardstyle}>
              <div className="row d-flex req-skil-head">
                <div className="col-md-10">
                  <p className="req"> PanelList Profile </p>
                </div>
                <div className="col-md-2 text-right">
                  <FaEllipsisH />
                </div>
              </div>

            </div>

            <Card.Body className="pl-0">
              <div className="row d-flex">
                <div className="col-md-3 d-flex align-items-center">
                  <div className="col-md-4">
                    <div className="panellistImg">
                      <Image src="../profile1.png" roundedCircle className="panellistImg" />
                    </div>
                  </div>
                  <div className="col-md-8 p-0">
                    <Link to="/PanellistDashboard">  <h6 className="mb-0 textColor">Sarrah Connor</h6></Link>
                    <p className="mb-0">JAVA, PHP</p>
                  </div>
                </div>
                <div className="col-md-3 d-flex align-items-center">
                  <div className="col-md-6">
                    <p className="pp_stl">Total Earnings</p>
                    <p className="mb-0 text-dark font-weight-bold">$ 3,000.00</p>
                  </div>
                  <div className='col-md-6 '>
                    <p className="pp_stl">Pending Invoices</p>
                    <p className="mb-0 text-dark font-weight-bold">22</p>
                  </div>
                </div>
                <div className="col-md-3 d-flex align-items-center">
                  <div className="col-md-6">
                    <p className="pp_stl">Total Interviews</p>
                    <p className="mb-0 text-dark font-weight-bold">22</p>
                  </div>
                  <div className='col-md-6 align-items-center'>
                    <p className="pp_stl">Reviews</p>
                    <p className="mb-0 text-dark font-weight-bold">22</p>
                  </div>
                </div>
                <div className="d-flex col-md-3 justify-content-around pt-3 pr-0">

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
            <div style={cardstyle}>
              <div className="row d-flex req-skil-head">
                <div className="col-md-10">
                  <p className="req"> PanelList Schedule </p>
                </div>
                <div className="col-md-2 text-right">
                  <FaEllipsisH />
                </div>
              </div>

            </div>

            <Card.Body className="pl-0">
              <div className="row d-flex ">
                <div className="col-md-3">
                  <Calendar />
                </div>
                <div className="col-md-9 pr-0">
                  <Router>
                    <div className="d-flex req-skil-head">
                      <div className="col-md-2 pan_stl">
                        <Link to="/ReqViewPanelDash" className="pan"> 17th October </Link>
                      </div>
                      <div className="col-md-2 text-center">
                        <Link to="/Week" className="skill"> Week </Link>
                      </div>
                      <div className="col-md-2">
                        <Link to="/Month" className="skill"> Month </Link>
                      </div>
                      <div className="col-md-6">
                      </div>
                    </div>
                    <Switch>
                      <Route path="/ReqViewPanelDash">
                        <October />
                      </Route>
                      <Route path="/Week">
                        <Week />
                      </Route>
                      <Route path="/Month">
                        <Month />
                      </Route>
                    </Switch>
                  </Router>
                </div>
              </div>
            </Card.Body>



          </Card>
        </div>
      </div>
    </div>
  )

}
function October() {
  return (
    <div className="custom-scrollbar">
      <div className="pt-3 pb-3 d-flex req-skil-head">
        <div className="col-md-3 p-0 pl-1 d-flex">
          <div className="col-md-3">
            <Image src="../XYZ-01.jpg" roundedCircle className="img_panel" />
          </div>
          <div className="col-md-9 p-0">
            <Link to="/Dashboard">
              <p className="ptextColor">Sarrah Connor</p></Link>
          </div>
        </div>

        <div className="col-md-8">
          <p>JAVA,PHP</p>
        </div>
        <div className="col-md-1 p-0">
          <p>02:00 PM</p>
        </div>

      </div>
      <div className="pt-3 pb-3 d-flex req-skil-head">
        <div className="col-md-3 p-0 pl-1 d-flex">
          <div className="col-md-3">
            <Image src="../XYZ-01.jpg" roundedCircle className="img_panel" />
          </div>
          <div className="col-md-9 p-0">
            <Link to="/Dashboard">
              <p className="ptextColor">Shanti</p></Link>
          </div>
        </div>

        <div className="col-md-8">
          <p>JAVA,PHP</p>
        </div>
        <div className="col-md-1 p-0">
          <p>02:00 PM</p>
        </div>

      </div>
      <div className="pt-3 pb-3 d-flex req-skil-head">
        <div className="col-md-3 p-0 pl-1 d-flex">
          <div className="col-md-3">
            <Image src="../XYZ-01.jpg" roundedCircle className="img_panel" />
          </div>
          <div className="col-md-9 p-0">
            <Link to="/Dashboard">
              <p className="ptextColor">RadhaKrishna</p></Link>
          </div>
        </div>

        <div className="col-md-8">
          <p>JAVA,PHP</p>
        </div>
        <div className="col-md-1 p-0">
          <p>02:00 PM</p>
        </div>
      </div>
      <div className="pt-3 pb-3 d-flex req-skil-head">
        <div className="col-md-3 p-0 pl-1 d-flex">
          <div className="col-md-3">
            <Image src="../XYZ-01.jpg" roundedCircle className="img_panel" />
          </div>
          <div className="col-md-9 p-0">
            <Link to="/Dashboard">
              <p className="ptextColor">RadhaKrishna</p></Link>
          </div>
        </div>

        <div className="col-md-8">
          <p>JAVA,PHP</p>
        </div>
        <div className="col-md-1 p-0">
          <p>02:00 PM</p>
        </div>
      </div>
      <div className="pt-3 pb-3 d-flex req-skil-head">
        <div className="col-md-3 p-0 pl-1 d-flex">
          <div className="col-md-3">
            <Image src="../XYZ-01.jpg" roundedCircle className="img_panel" />
          </div>
          <div className="col-md-9 p-0">
            <Link to="/Dashboard">
              <p className="ptextColor">RadhaKrishna</p></Link>
          </div>
        </div>

        <div className="col-md-8">
          <p>JAVA,PHP</p>
        </div>
        <div className="col-md-1 p-0">
          <p>02:00 PM</p>
        </div>
      </div>



    </div>

  )
}
function Week() {
  return (
    <div className="custom-scrollbar">
    <div className="pt-3 pb-3 d-flex req-skil-head">
      <div className="col-md-3 p-0 pl-1 d-flex">
        <div className="col-md-3">
          <Image src="../profile.jpg" roundedCircle className="img_panel" />
        </div>
        <div className="col-md-9 p-0">
          <Link to="/Dashboard">
            <p className="ptextColor">Sarrah Connor</p></Link>
        </div>
      </div>

      <div className="col-md-8">
        <p>JAVA,PHP</p>
      </div>
      <div className="col-md-1 p-0">
        <p>02:00 PM</p>
      </div>

    </div>
    <div className="pt-3 pb-3 d-flex req-skil-head">
      <div className="col-md-3 p-0 pl-1 d-flex">
        <div className="col-md-3">
          <Image src="../profile.jpg" roundedCircle className="img_panel" />
        </div>
        <div className="col-md-9 p-0">
          <Link to="/Dashboard">
            <p className="ptextColor">Shanti</p></Link>
        </div>
      </div>

      <div className="col-md-8">
        <p>JAVA,PHP</p>
      </div>
      <div className="col-md-1 p-0">
        <p>02:00 PM</p>
      </div>

    </div>
    <div className="pt-3 pb-3 d-flex req-skil-head">
      <div className="col-md-3 p-0 pl-1 d-flex">
        <div className="col-md-3">
          <Image src="../profile.jpg" roundedCircle className="img_panel" />
        </div>
        <div className="col-md-9 p-0">
          <Link to="/Dashboard">
            <p className="ptextColor">RadhaKrishna</p></Link>
        </div>
      </div>

      <div className="col-md-8">
        <p>JAVA,PHP</p>
      </div>
      <div className="col-md-1 p-0">
        <p>02:00 PM</p>
      </div>
    </div>
    <div className="pt-3 pb-3 d-flex req-skil-head">
      <div className="col-md-3 p-0 pl-1 d-flex">
        <div className="col-md-3">
          <Image src="../profile.jpg" roundedCircle className="img_panel" />
        </div>
        <div className="col-md-9 p-0">
          <Link to="/Dashboard">
            <p className="ptextColor">RadhaKrishna</p></Link>
        </div>
      </div>

      <div className="col-md-8">
        <p>JAVA,PHP</p>
      </div>
      <div className="col-md-1 p-0">
        <p>02:00 PM</p>
      </div>
    </div>
    <div className="pt-3 pb-3 d-flex req-skil-head">
      <div className="col-md-3 p-0 pl-1 d-flex">
        <div className="col-md-3">
          <Image src="../profile.jpg" roundedCircle className="img_panel" />
        </div>
        <div className="col-md-9 p-0">
          <Link to="/Dashboard">
            <p className="ptextColor">RadhaKrishna</p></Link>
        </div>
      </div>

      <div className="col-md-8">
        <p>JAVA,PHP</p>
      </div>
      <div className="col-md-1 p-0">
        <p>02:00 PM</p>
      </div>
    </div>



  </div>

  )
}
function Month() {
  return (
    <div className="custom-scrollbar">
    <div className="pt-3 pb-3 d-flex req-skil-head">
      <div className="col-md-3 p-0 pl-1 d-flex">
        <div className="col-md-3">
          <Image src="../profile1.png" roundedCircle className="img_panel" />
        </div>
        <div className="col-md-9 p-0">
          <Link to="/Dashboard">
            <p className="ptextColor">Sarrah Connor</p></Link>
        </div>
      </div>

      <div className="col-md-8">
        <p>JAVA,PHP</p>
      </div>
      <div className="col-md-1 p-0">
        <p>02:00 PM</p>
      </div>

    </div>
    <div className="pt-3 pb-3 d-flex req-skil-head">
      <div className="col-md-3 p-0 pl-1 d-flex">
        <div className="col-md-3">
          <Image src="../profile1.png" roundedCircle className="img_panel" />
        </div>
        <div className="col-md-9 p-0">
          <Link to="/Dashboard">
            <p className="ptextColor">Shanti</p></Link>
        </div>
      </div>

      <div className="col-md-8">
        <p>JAVA,PHP</p>
      </div>
      <div className="col-md-1 p-0">
        <p>02:00 PM</p>
      </div>

    </div>
    <div className="pt-3 pb-3 d-flex req-skil-head">
      <div className="col-md-3 p-0 pl-1 d-flex">
        <div className="col-md-3">
          <Image src="../profile1.png" roundedCircle className="img_panel" />
        </div>
        <div className="col-md-9 p-0">
          <Link to="/Dashboard">
            <p className="ptextColor">RadhaKrishna</p></Link>
        </div>
      </div>

      <div className="col-md-8">
        <p>JAVA,PHP</p>
      </div>
      <div className="col-md-1 p-0">
        <p>02:00 PM</p>
      </div>
    </div>
    <div className="pt-3 pb-3 d-flex req-skil-head">
      <div className="col-md-3 p-0 pl-1 d-flex">
        <div className="col-md-3">
          <Image src="../profile1.png" roundedCircle className="img_panel" />
        </div>
        <div className="col-md-9 p-0">
          <Link to="/Dashboard">
            <p className="ptextColor">RadhaKrishna</p></Link>
        </div>
      </div>

      <div className="col-md-8">
        <p>JAVA,PHP</p>
      </div>
      <div className="col-md-1 p-0">
        <p>02:00 PM</p>
      </div>
    </div>
    <div className="pt-3 pb-3 d-flex req-skil-head">
      <div className="col-md-3 p-0 pl-1 d-flex">
        <div className="col-md-3">
          <Image src="../XYZ-01.jpg" roundedCircle className="img_panel" />
        </div>
        <div className="col-md-9 p-0">
          <Link to="/Dashboard">
            <p className="ptextColor">RadhaKrishna</p></Link>
        </div>
      </div>

      <div className="col-md-8">
        <p>JAVA,PHP</p>
      </div>
      <div className="col-md-1 p-0">
        <p>02:00 PM</p>
      </div>
    </div>



  </div>
  )
}