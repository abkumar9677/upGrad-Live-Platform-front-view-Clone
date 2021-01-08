import React, { Component } from "react";
import "./Middle.css";
// import ReactDOM from "react-dom";
class Middle extends Component {
  render() {
    return (
      <fragment>
        <br />
        <div className="mid-screen">
          <div className="agenda">
            <div className="head">
              <span>Showcase : Live Platform Clone </span>
              <br />
              <br />
              <span>by Abhishek Kumar</span>
            </div>
            <hr />
            <ul>
              <h4>Agenda</h4>
              <li>For Practice Reasons.</li>
              <li>For Revising some concept.</li>
            </ul>
          </div>
          <div className="agenda2" style={{ float: "right" }}>
            <div className="head">
              <p>
                "This work is only done for practice
                <br />
                <br /> purpose to furnish my ReactJS basic concepts."
                <br />
                <br />
                "This whole view is of the upGrad live platform.
                <br /> And I daily take lectures on this platform."
              </p>
            </div>
          </div>
        </div>
      </fragment>
    );
  }
}
export default Middle;
