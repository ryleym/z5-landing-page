import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import logo from './logo.svg';
import './TopBar.css';
import history from './history.js';
import scrollToElement from 'scroll-to-element';
import firebase, {provider, auth} from './firebase.js';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logtext: 'Login'
    }
  }

  componentWillMount() {
  auth.onAuthStateChanged((user) => {
    if (user) {
      this.setState({ user });
      console.log(user)
      this.setState({logtext: 'Logout'})
    } 
  })
}

  handleLog() {
    if (this.state.user) {
      this.setState({user: null});
      this.setState({logtext: 'Login'});
    }
    else {
      auth.signInWithRedirect(provider);
      auth.getRedirectResult()
        .then((result) => {
          if (result.user) {
            this.setState({user: result.user});
            this.setState({logtext: 'Logout'});
          }
        });
    }
  }

  render() {
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
            onClick={() => scrollToElement('#about')}
          />
          <FlatButton 
            style={{color: 'white'}} 
            label="Contact"
         />
          {this.state.user
            ? 
              <FlatButton style={{color: 'white'}} label="Logout" onClick={this.handleLog.bind(this)}/> 
            :
              <FlatButton style={{color: 'white'}} label="Login" onClick={this.handleLog.bind(this)}/>
          }
          <Avatar>
            {
              this.state.user ? <div>{this.state.user.displayName[0]}</div> : <div>&zwnj;</div>
            }
          </Avatar>
        </div>
      </div>
    );
  }
}

export default TopBar;
