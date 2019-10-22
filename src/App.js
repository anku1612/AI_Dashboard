import React from 'react';
import {BrowserRouter , Route ,Switch} from 'react-router-dom';
import Header from './pages/Header';
// import ProfileSummary from './pages/ProfileSummary';
// import ResumeTimeline from './pages/ResumeTimeline';
// import Chart from './pages/Chartrow';
// import Candidatesearch from './pages/Candidatesearch';
// import Comments from './pages/Comments';
import Dashboard from './pages/Dashboard';
import CandidateSearch from './pages/CandidateSearch';
import PanellistDashboard from './pages/PanellistDashboard'
import RecruiterIntelligentSearch from './pages/RecruiterIntelligentSearch'
import HiredcandidateDashboard from './pages/HiredcandidateDashboard'
import './App.css';

function App(){
  return(
    <BrowserRouter>
    <div >
      <Header />
      <HiredcandidateDashboard />
      <RecruiterIntelligentSearch />
      <PanellistDashboard />
      <Switch>
      <Route path="/" exact component={CandidateSearch} />
      <Route path="/Dashboard" component={Dashboard} />
    </Switch>
    </div>
    </BrowserRouter>
  )
}
export default App;
