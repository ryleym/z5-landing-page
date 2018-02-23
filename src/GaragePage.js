import React, {Component} from 'react';
import TopBar from './TopBar.js';
import Contact from './Contact.js';
import WhatWeDo from './WhatWeDo.js';
import './MainPage.css';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import ArrowDownward from 'material-ui-icons/ArrowDownward';
import './GaragePage.css';

class GaragePage extends Component {
	render() {
		return (
			<div className="AppDiv">
				<TopBar/>
				<div className="GaragePage">
				<Paper className="GarageSidebar">
				a
				</Paper>
				<Paper className="GarageContent">
				a
				</Paper>
				</div>
			</div>
		);
	}
}

export default GaragePage;