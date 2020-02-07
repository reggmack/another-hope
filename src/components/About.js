import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Switch, 
  Redirect, 
  NavLink } from 'react-router-dom';
  import Beliefs from './Beliefs';
  import Mission from './Mission';
  import Staff from './Staff';
 
  const About = ({match}) => (
    <div className="content">
      <h3 className="red">About Us</h3>
      <hr />
      <ul className="menu sub-nav">
        <li><NavLink to={`${match.url}/beliefs`}>What We Believe</NavLink></li>
        <li><NavLink to={`${match.url}/mission`}>Our Mission</NavLink></li>
        <li><NavLink to={`${match.url}/staff`}>Staff</NavLink></li>
      </ul>
      

      {/* Write routes here... */}
      
        <Route exact path={match.path} 
                    render={ () => <Redirect to={`${match.path}/beliefs`} /> } />       
        <Route path={`${match.path}/beliefs`} 
              render={ () => <Beliefs /> } />         
        <Route path={`${match.path}/mission`} 
              render={ () => <Mission /> } />     
        <Route path={`${match.path}/staff`} 
              render={ () => <Staff /> } />
    </div>
  );


export default About;