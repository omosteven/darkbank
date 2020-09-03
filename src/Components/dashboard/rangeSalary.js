import React from "react";
import { Slider } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { useState, useEffect } from "react";

// export default class RangeSalary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleSlide = this.handleSlide.bind(this);
//     this.state = { value: [250, 5000] };

//   }

//   handleSlide(e) {

//     this.setState({
//       value: [parseFloat(e[0]), parseFloat(e[1])]
//     });
//   }

//   render() {
//     return (
//       <div>
//         <p> JOB SALARY IN DOLLARS: {JSON.stringify(this.state.value)} </p>
//         <Slider
//           connect
//           onSlide={this.handleSlide} className="slider"
//           start={this.state.value}
//           range={{ min: 0, max: 10000 }}
//         />
//       </div>
//     );
//   }
// }


const RangeSalary = (props) => {

    // super(props);
    // handleSlide = handleSlide.bind(this);
    // const state = { value: [250, 5000] };
    const [state,setState] = useState({ value: [250, 5000] })



 const handleSlide = (e) => {

    setState({
      value: [parseFloat(e[0]), parseFloat(e[1])]
    });
  }

    return (
      <div>
        <p> JOB SALARY IN DOLLARS: {JSON.stringify(state.value)} </p>
        <Slider
          connect
          onSlide={handleSlide} className="slider"
          start={state.value}
          range={{ min: 0, max: 10000 }}
        />
      </div>
    );
  }

export default RangeSalary;
