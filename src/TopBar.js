import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import logo from './logo.svg';
import './TopBar.css';
import history from './history.js';
import scrollToElement from 'scroll-to-element';
import firebase, {provider, auth} from './firebase.js';
import Paper from 'material-ui/Paper';

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


  componentDidMount() {
    window.addEventListener('scroll', (event) => {
          var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
          var D = document;

    var docheight = Math.max(D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight);
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var trackLength = docheight - winheight
    var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    console.log(pctScrolled + '% scrolled')
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
      <Paper className="TopBar">
        <div className="TopBarLogoDiv">
          <img
            className="TopBarLogo"
            src="zero5.png"
          />
        </div>
        <div className="TopBarButtonsDiv">
          <FlatButton 
            className="TopBarButton"
            style={{color: '#4d4d4d'}} 
            label="about us"
            onClick={() => scrollToElement('#about')}
          />
          <FlatButton 
            style={{color: '#4d4d4d'}} 
            label="contact us"
            onClick={() => scrollToElement('#contact')}
          />
          <FlatButton 
            style={{color: '#4d4d4d'}} 
            label="what we do"
            onClick={() => scrollToElement('#contact')}
          />
          ||
          <FlatButton
            style={{color: '#4d4d4d'}}
            label="garages"
            onClick={() => history.push('garages')}
          />
        </div>
      </Paper>
    );
  }
}

export default TopBar;
