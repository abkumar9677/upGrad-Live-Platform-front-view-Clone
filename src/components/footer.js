import React from 'react';
import "./Footer.css";
const Footer = function(props) {
  return [
    <div>
      <div className="footer">{props.value}</div>
    </div>
  ];
};
export default Footer;