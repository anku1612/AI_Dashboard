import React from 'react';
import {BrowserRouter ,} from 'react-router-dom';
import ProfileSummary from './ProfileSummary';



function Dashboard(){
  return(
    <BrowserRouter>
    <div >
      <ProfileSummary />

    </div>
    </BrowserRouter>
  )
}
export default Dashboard;
