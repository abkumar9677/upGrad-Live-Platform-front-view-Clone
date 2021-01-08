import React from "react";
import "./Header.css";

const Heading = function(props) {
  return [
    <div>
      <div className="header">{props.value}</div>
    </div>
  ];
};
export default Heading;
