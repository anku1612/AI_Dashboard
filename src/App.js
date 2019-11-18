import React from 'react';
import {BrowserRouter , Route ,Switch} from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import RSLogin from './pages/Req_suser_login'
import Reqhome from './App.test.js';
import './App.css';

function App(){
  return(
    <BrowserRouter>
    <div >
      <Switch> 
      <Route path="/"  exact  component={LoginPage} />
      <Route path="/RSLogin" exact  component={RSLogin} />
      <Route path="/Reqhome"   component={Reqhome} />
    </Switch>
 </div>
    </BrowserRouter>
  )
}
export default App;
