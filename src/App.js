import React from 'react';
import Header from './pages/Header';
import ProfileSummary from './pages/ProfileSummary';
import './App.css';

class App extends React.Component {
  render() {
    return <div >
      <Header />
      <ProfileSummary />
    </div>
  }
}
export default App;
