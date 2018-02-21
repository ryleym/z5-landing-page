import React, {Component} from 'react';
import TopBar from './TopBar.js';
import './MainPage.css';
import {Card, CardTitle, CardText} from 'material-ui/Card';

class MainPage extends Component {
	render() {
		return (
			<div className="AppDiv">
				<TopBar/>
				<Card>
					<CardTitle title="zero5" subtitle="About Us"/>
					<CardText className="AboutText">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</CardText>
				</Card>
			</div>
		);
	}
}

export default MainPage;