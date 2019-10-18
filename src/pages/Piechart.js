import React from 'react';
import ReactDOM from 'react-dom'
// import AnyChart from '../node_modules/anychart-react/dist/anychart-react.min.js'
import AnyChart from '../../node_modules/anychart-react/dist/anychart-react.min.js'
// import './App.css';

function Piechart() {
// AnyChart.getCredits().setEnabled(false);
  return (
ReactDOM.render(
  <AnyChart
      type="pie"
      data={[1,2,3,4]}
      // title="Simple pie chart"
  />
  , document.getElementById('root')
  )
  )}
export default Piechart;