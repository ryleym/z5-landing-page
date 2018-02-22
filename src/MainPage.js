import React, {Component} from 'react';
import TopBar from './TopBar.js';
import Contact from './Contact.js';
import WhatWeDo from './WhatWeDo.js';
import './MainPage.css';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import ArrowDownward from 'material-ui-icons/ArrowDownward';

class MainPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			scrolled: 0
		}
	}

	componentWillMount() {
		window.addEventListener('scroll', (event) => {
      		var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
      		var D = document;
      		var docheight = Math.max(D.body.scrollHeight, D.documentElement.scrollHeight,
        		D.body.offsetHeight, D.documentElement.offsetHeight,
        		D.body.clientHeight, D.documentElement.clientHeight);
      		var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
      		var trackLength = docheight - winheight
      		var pctScrolled = Math.floor(scrollTop/trackLength * 100)
      		this.setState({scrolled: pctScrolled});
    })
	}

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
				{
					this.state.scrolled != 100
					?
						<div className="footer"><ArrowDownward/></div>
					:
						<div style={{opacity: .0}}className="footer"><ArrowDownward/></div>
				}
			</div>
		);
	}
}

export default MainPage;