import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router-dom';
import TopBar from './TopBar.js';
import history from './history.js';
import './App.css';

class MainPage extends Component {
	render() {
		return (
			<div className="AppDiv">
				<TopBar/>
			</div>
		);
	}
}

class App extends Component {
	render() {
		return (
			<Router history={history} >
				<div className="AppBackground">
					<Route exact path="/" component={MainPage} />
				</div>
			</Router>
		);
	}
}

export default App;