import React from 'react';
import Header from './pages/Header';
import ProfileSummary from './pages/ProfileSummary';
import ResumeTimeline from './pages/ResumeTimeline';
import Chart from './pages/Chartrow';
import Candidatesearch from './pages/Candidatesearch';
import Comments from './pages/Comments';


import './App.css';

class App extends React.Component {
  render() {
    return <div>
      <Header />
      <ProfileSummary />
      {/* <Chartrow/> */}
      <ResumeTimeline />
      <Chart />
      <Candidatesearch />
      <Comments />
    </div>
  }
}
export default App;
