import React from "react";
import "./Header.css";

const Heading = function(props) {
  return <div className="header">{props.value}</div>;
};
export default Heading;
