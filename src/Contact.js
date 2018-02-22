import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import './Contact.css';

class Contact extends Component {
	render() {
		return (
			<Paper className="ContactDiv">
				<div className="ContactUs">contact us.</div>
				<TextField
					style={{margin: 5, width: 'calc(100% * (1 / 3) - 10px)'}}
					hintText="Your Name"
				/>
				<TextField
					style={{margin: 5, width: 'calc(100% * (1 / 3) - 10px)'}}
					hintText="Your E-Mail"
				/>
				<TextField
					style={{margin: 5, width: 'calc(100% * (1 / 3) - 10px)'}}
					hintText="Subject"
				/> <br/>
				<TextField
					hintText="Write your e-mail here"
					style={{width: '100%', margin: 5}}
					multiLine={true}
				/>
			</Paper>
		);
	}
}

export default Contact;