import React from 'react';
import {BrowserRouter , Route ,Switch} from 'react-router-dom';
import Header from './pages/Header';
import Dashboard from './pages/Dashboard';
import CandidateSearch from './pages/CandidateSearch';
import RequireterMainPage from './pages/RequireterMainPage';
import candidate_complete_profile from './pages/candidate_complete_profile';
import PanellistDashboard from './pages/PanellistDashboard'
import RecIntelligentSearch from './pages/RecruiterIntelligentSearch'
import HiredcandidateDashboard from './pages/HiredcandidateDashboard'
import Chartspage from './pages/Chartspage'
import Charttest from './pages/Charttest'
import MyRequirements from './pages/MyRequirements'
import ISearch from './pages/ISearch'
import HotCVs from './pages/HotCVs'
import MyReava from './pages/MyReava'
import InMail from './pages/InMail'
import SearchHeader from './pages/SearchHeader';
import './App.css';

function Apphome(){
  return(
    <BrowserRouter>
    <div >
      <Header />
      <SearchHeader/>
      <Switch> 
      <Route path="/Reqhome"  exact component={HiredcandidateDashboard} />
      <Route path="/CandidateSearch"  component={CandidateSearch} />
      <Route path="/Dashboard"  component={Dashboard} />
      <Route path="/RequireterMainPage"  component={RequireterMainPage} />
      <Route path="/candidate_complete_profile"  component={candidate_complete_profile} />
      <Route path="/panelList" component={PanellistDashboard} />
      <Route path="/RecIntelligentSearch" component={RecIntelligentSearch} /> 
      <Route path="/Chartspage" component={Chartspage} />
      <Route path="/Charttest" component={Charttest} />
      <Route path="/MyRequirements" component={MyRequirements} />
      <Route path="/ISearch" component={ISearch} />
      <Route path="/HotCVs" component={HotCVs} />
      <Route path="/MyReava" component={MyReava} />
      <Route path="/InMail" component={InMail} />
    </Switch>
 </div>
    </BrowserRouter>
  )
}
export default Apphome;
