import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div>
        <div className="title-bar" data-responsive-toggle="responsive-menu" data-hide-for="medium">
          <button className="menu-icon" type="button" data-toggle="responsive-menu"></button>
          <div className="title-bar-title">Menu</div>
        </div>

        <div className="top-bar" id="responsive-menu" data-sticky-container data-sticky data-options="marginTop: 0" style={{ width: "100%", marginTop: "0px" }}>
            <div className="top-bar-left">
              <ul className="dropdown menu" data-dropdown-menu>
                <li className="menu-text">Site Title</li>
                
              </ul>
            </div>

            <div className="top-bar-middle">
              <ul className="menu main-nav">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/announcements">Announcements</NavLink></li>
                <li><NavLink to="/contacts">Contacts</NavLink></li>
                <li><NavLink to="/sermons">Sermons</NavLink></li>
              </ul>
            </div>

            <div className="top-bar-right">
                <i className="material-icons icn-error">account_circle</i>
            </div>
          </div>
      </div>
  </header>
);

export default Header;