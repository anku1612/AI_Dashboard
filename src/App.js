import React from 'react';
import {BrowserRouter , Route ,Switch} from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import RPLogin from './pages/RPLogin'
import LandingPage from './pages/LandingPage'
import RegistrationPage from './pages/RegistrationPage'
import PanelPage from './pages/PanelPage'
import InterviewTimeSchedule from './pages/InterviewTimeSchedule'
import Reqhome from './App.test.js';
import Candidatehome   from './App.test.js';
import panelList   from './App.test.js';
import PanellistDashboard   from './App.test.js';
import CandidateSearch   from './App.test.js';
import MyRequirements from './App.test.js';
import RecIntelligentSearch from './App.test.js';
import ISearch from './App.test.js';
import HotCVs from './App.test.js';
import MyReava from './App.test.js';
import InMail from './App.test.js';
import HiredMemDash from './App.test.js';
import RPHeader from './pages/RPHeader';
import ReqViewPanelDash from './pages/ReqViewPanelDash';
import ReqViewPanelSearch from './pages/ReqViewPanelSearch';
import './App.css';
function App(){
  return(
    <BrowserRouter>
    <div >
      <Switch> 
      <Route path="/"  exact  component={LandingPage} />
      <Route path="/PanelPage"  exact  component={PanelPage} />
      <Route path="/InterviewTimeSchedule"  exact  component={InterviewTimeSchedule} />
      <Route path="/RegistrationPage"  exact  component={RegistrationPage} />
      <Route path="/LoginPage"  exact  component={LoginPage} />
      <Route path="/RPLogin" exact  component={RPLogin} />
      <Route path="/Reqhome"   component={Reqhome} />
      <Route path="/Candidatehome"  component={Candidatehome} />
      <Route path="/CandidateSearch"  component={CandidateSearch} />
      <Route path="/MyRequirements"  component={MyRequirements} />
      <Route path="/RecIntelligentSearch"  component={RecIntelligentSearch} />
      <Route path="/ISearch" component={ISearch} />
      <Route path="/HotCVs" component={HotCVs} />
      <Route path="/MyReava" component={MyReava} />
      <Route path="/InMail" component={InMail} />
      <Route path="/HiredMemDash"  component={HiredMemDash} />
      <Route path="/RPHeader"  component={RPHeader} />
      <Route path="/ReqViewPanelDash"  component={ReqViewPanelDash} />
      <Route path="/ReqViewPanelSearch"  component={ReqViewPanelSearch} />
      <Route path="/panelList" component={panelList} />
      <Route path="/PanellistDashboard" component={PanellistDashboard} />

      
    </Switch>
 </div>
    </BrowserRouter>
  )
}
export default App;
