import React from 'react';
import {BrowserRouter , Route ,Switch} from 'react-router-dom';
import Header from './pages/Header';
import Dashboard from './pages/Dashboard';
import CandidateSearch from './pages/CandidateSearch';


import './App.css';

function App(){
  return(
    <BrowserRouter>
    <div >
      <Header />
      <Switch>
      <Route path="/" exact component={CandidateSearch} />
      <Route path="/Dashboard" component={Dashboard} />
    </Switch>
    </div>
    </BrowserRouter>
  )
}
export default App;
