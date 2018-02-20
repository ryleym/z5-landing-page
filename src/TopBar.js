import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import logo from './logo.svg';
import './TopBar.css';
import history from './history.js';

class TopBar extends Component {
  render() {
    var right_element = (
      <div>
        <FlatButton 
          style={{color: 'white'}} 
          label="About"
        />
        <FlatButton 
          style={{color: 'white'}} 
          label="Contact"
        />
        <FlatButton 
          style={{color: 'white'}} 
          label="Login"
          onClick={() => history.push('/login')}
        />
      </div>
    );
    return (
      <div className="TopBar">
        <div className="TopBarLogoDiv">
          <img
            className="TopBarLogo"
            src="zero5.png"
          />
        </div>
        <div className="TopBarButtonsDiv">
          <FlatButton 
            className="TopBarButton"
            style={{color: 'white'}} 
            label="About"
          />
          <FlatButton 
            style={{color: 'white'}} 
            label="Contact"
         />
          <FlatButton 
            style={{color: 'white'}} 
            label="Login"
            onClick={() => history.push('/login')}
          />
        </div>
      </div>
    );
  }
}

export default TopBar;
