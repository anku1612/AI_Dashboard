import React from 'react';
import {BrowserRouter ,} from 'react-router-dom';
import ProfileSummary from './ProfileSummary';
import ResumeTimeline from './ResumeTimeline';
import Comment from './Comment';
import Chartrow from './Chartrow';


function Dashboard(){
  return(
    <BrowserRouter>
    <div >
      <ProfileSummary />
      <Chartrow />
      <ResumeTimeline />
      <Comment />
    </div>
    </BrowserRouter>
  )
}
export default Dashboard;
