import React, { Component } from "react";
import "./style.css";
import { render } from "react-dom";
import Heading from "./components/Header.js";

// export default function App() {
class App extends Component {
  constructor() {
    super();
    var today = new Date(),
      time = today.getHours() + ":" + today.getMinutes();
    this.state = {
      currentTime: time
    };
  }
  render() {
    return (
      <fragment>
        <Heading value="upGrad" />
        <div className="time-slot">
          <i className="fa fa-clock-o clock" aria-hidden="true" />
          <span className="time"> {this.state.currentTime}</span>
          <span className="help"><span>Help <i class="fa fa-headphones head" aria-hidden="true"></i> </span>          
          <button className="leave">Leave</button>
          </span>
        </div>
      </fragment>
    );
  }
}

export default App;
