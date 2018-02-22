import React, {Component} from 'react';
import TopBar from './TopBar.js';
import Contact from './Contact.js';
import WhatWeDo from './WhatWeDo.js';
import './MainPage.css';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import ArrowDownward from 'material-ui-icons/ArrowDownward';

class MainPage extends Component {
	render() {
		return (
			<div className="AppDiv">
				<TopBar/>
				<Paper className="TaglineDiv">
					<div className="BigTextDiv">painless parking for today. <br/> autonomous valet for the future.</div>
					<div className="SmallTextDiv">automate. build. connect. done. easy.</div>
				</Paper>
				<WhatWeDo id="what"/>
				<Paper id="about" className="TaglineDiv">
					<div className="BigTextDiv">our story.</div>
					<div className="SmallTextDiv">zero5 started because we decided to stop putting up with the —. We are a young, ambitious, startup who wishes to bring a new technology to disrupt the outdated, unsexy parking market.</div>
				</Paper>
				<Contact id="contact"/>
				<div className="footer"><ArrowDownward/></div>
			</div>
		);
	}
}

export default MainPage;