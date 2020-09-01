import React from "react";
import { Slider } from "shards-react";


// import "bootstrap/dist/css/bootstrap.min.css";
// import "shards-ui/dist/css/shards.min.css"

export default class SliderCustomRange extends React.Component {
  constructor(props) {
    super(props);
    this.handleSlide = this.handleSlide.bind(this);
    this.state = { value: [250, 5000] };
  }

  handleSlide(e) {
    this.setState({
      value: [parseFloat(e[0]), parseFloat(e[1])]
    });
  }

  render() {
    return (
      <div>
        <p>SALARY : {JSON.stringify(this.state.value)}</p>
        <Slider
          connect
          onSlide={this.handleSlide}
          start={this.state.value}
          range={{ min: 0, max: 10000 }}
        />
      </div>
    );
  }
}
