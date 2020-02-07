import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="row content-footer-top align-middle">
        <div style={{  marginRight: "30px" }}>Stay Connected</div>
        <div><input type="text" placeholder="Your Email Address" /></div>
      </div>
    </div>
    <div className="row content-footer">

      <div className="columns small-12 medium-expand footer-column">
      <ul>
        <li>123 Street</li>
        <li>Suite ABC</li>
        <li>Somepartsod, Tennessee 37206</li>
      </ul>
      </div>
        <div className="columns small-12 medium-expand footer-column">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Announcements</li>
            <li>Contacts</li>
            <li>Sermons</li>
          </ul>
      </div>
      {/* <div className="columns small-12 medium-expand">
          footer extra information
      </div>  */}
      <div className="columns small-12 medium-expand">
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div> 

    </div>
  </footer>
);

export default Footer;