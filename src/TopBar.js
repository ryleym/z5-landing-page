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
      scrolled: 0,
      show_buttons: true
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
    if (window.innerWidth < 650) {
      this.setState({show_buttons: false})
    }
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
            onClick={() => history.push('')}
          />
        </div>
        <div className="TopBarButtonsDiv">
        {
          this.state.show_buttons ?
          =
        }
          <FlatButton 
            className="TopBarButton"
            style={{color: '#4d4d4d'}} 
            // label="about us"
            onClick={() => scrollToElement('#about')}
          >about us</FlatButton>
          <FlatButton 
            className="TopBarButton"
            style={{color: '#4d4d4d'}}
            onClick={() => scrollToElement('#what')}
          >what we do</FlatButton>
          <FlatButton 
            style={{color: '#4d4d4d'}} 
            onClick={() => scrollToElement('#contact')}
          ><div>contact us</div></FlatButton>
          ||
          <FlatButton
            style={{color: '#4d4d4d'}}
            onClick={() => history.push('garages')}
          >garages</FlatButton>
        </div>
      </Paper>
    );
  }
}

export default TopBar;
