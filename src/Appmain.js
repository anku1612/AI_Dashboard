import React from 'react';
import {BrowserRouter , Route ,Switch} from 'react-router-dom';
import Reqlogin from './pages/Reqlogin'
import './App.css';

function App(){
  return(
    <BrowserRouter>
    <div >
      <Switch> 
      <Route path="/"   component={Reqlogin} />
    </Switch>
 </div>
    </BrowserRouter>
  )
}
export default App;
