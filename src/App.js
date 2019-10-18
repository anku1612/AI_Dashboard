import React from 'react';
import Header from './pages/Header';
import ProfileSummary from './pages/ProfileSummary';
import Chartrow from './pages/Chartrow'

// import './App.css';
import Candidatesearch from './pages/Candidatesearch'

class App extends React.Component {
  render() {
    return <div >
      <Header />
      <ProfileSummary />
      <Chartrow />
      <Candidatesearch />
    </div>
  }
}
export default App;
