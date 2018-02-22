import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router-dom';
import TopBar from './TopBar.js';
import history from './history.js';
import MainPage from './MainPage.js';
import './App.css';
import GaragePage from './GaragePage.js';

class App extends Component {
	render() {
		return (
			<Router history={history} >
				<div className="AppBackground">
					<Route exact path="/" component={MainPage} />
					<Route exact path="/garages" component={GaragePage} />
				</div>
			</Router>
		);
	}
}

export default App;