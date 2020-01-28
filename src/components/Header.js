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
                <li><NavLink exact to="/" activeStyle={{ background: 'white' }}>Home</NavLink></li>
                <li><NavLink to="/announcements" activeClassName="actyMcActiveFace">Announcements</NavLink></li>
                <li><NavLink to="/contacts">Contacts</NavLink></li>
                <li><NavLink to="/sermons">Sermons</NavLink></li>
              </ul>
            </div>

            <div className="top-bar-right">
              <ul className="menu">
                <li><input type="search" placeholder="Search" /></li>
                <li><button type="button" className="button">Search</button></li>
              </ul>
            </div>
          </div>
      </div>
  </header>
);

export default Header;