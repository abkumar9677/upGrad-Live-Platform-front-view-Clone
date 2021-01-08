import React from 'react';
import "./Footer.css";
const Footer = function(props) {
  return [
      <div className="footer">
        {'\u00A0'}
        <div style={{transform: 'translate(50px,-7px)'}}>
        <i className="fa fa-podcast" aria-hidden="true"></i>
         {'\u00A0'}{'\u00A0'}{props.value}</div>
        <button className="btn"> Join Now </button>
      </div>
  ];
};
export default Footer;