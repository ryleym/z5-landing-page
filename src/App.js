import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router-dom';
import TopBar from './TopBar.js';
import history from './history.js';

class Login extends Component {
	render() {
		return (
			<div>Login</div>
		);
	}
}

class MainPage extends Component {
	render() {
		return (
			<div >
			<TopBar/>
				<div style={{height: '100px'}}>
					asdf
				</div>
				<div style={{height: '100px'}}>
					asdf
				</div><div style={{height: '100px'}}>
					asdf
				</div><div style={{height: '100px'}}>
					asdf
				</div><div style={{height: '100px'}}>
					asdf
				</div><div style={{height: '100px'}}>
					asdf
				</div>
			</div>
		);
	}
}

class App extends Component {
	render() {
		return (
			<Router history={history} >
				<div>
					<Route exact path="/" component={MainPage} />
					<Route exact path="/login" component={Login} />
				</div>
			</Router>
		);
	}
}

export default App;