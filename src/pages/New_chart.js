import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  state = {
    dataPie: {
      datasets: [
        {
          data: [80, 5, 3, 69, 5, 10, 20, 50, 6, 20],
          backgroundColor: [
             "#F7464A",
              "#3977a9",
              "#0db91d",
              "#ffc655",
              "#fe756d",
              "#b19dff",
              "#ffb8e1",
              "#d1d1d1",
              "#f77ca4",
              "#7af5f8",
          ],
          hoverBackgroundColor: [
            "#F7464A",
            "#3977a9",
            "#0db91d",
            "#ffc655",
            "#fe756d",
            "#b19dff",
            "#ffb8e1",
            "#d1d1d1",
            "#f77ca4",
            "#7af5f8",
          ]
        }
      ],
    //   labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"]

    }
  }

  render() {
    return (
      <MDBContainer>
        <Pie data={this.state.dataPie} options={{ responsive: true }} width={700} height={760} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;


























// import React from 'react';
// import Chart from 'react-google-charts';


// class amChart extends React.Component {

//     render() {
//         return (
//             <Chart
              
//                 chartType="PieChart"
//                 loader={<div>Loading Chart</div>}
//                 data={[
//                     ['Task', 'Hours per Day'],
//                     ['Work', 11],
//                     ['Eat', 2],
//                     ['Commute', 2],
//                     ['Watch TV', 2],
//                     ['Sleep', 7],
//                 ]}
//                 options={{
//                     title: 'My Daily Activities',
//                     // Just add this option
//                     pieHole: 0.4,
//                 }}
//                 rootProps={{ 'data-testid': '3' }}
//             />
//         )
//     }

// }
// export default amChart;
