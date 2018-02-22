import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import './Contact.css';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subject: null,
			sender: null,
			message: null,
			name: null,
		}
	}

	send_mail() {
		console.log(this.state);
		fetch('http://127.0.0.1:5000/mail', {
			method: 'POST',
			// mode: 'no-cors',
			headers: {
        		'Content-Type': 'application/json',
    		},
			body: JSON.stringify({
				sender: this.state.sender,
				message: this.state.message
			})
		})
			.then((response) => console.log(response));
	}

	render() {
		return (
			<Paper className="ContactDiv">
				<div className="ContactUs">contact us.</div>
				<TextField
					style={{margin: 5, width: 'calc(100% * (1 / 3) - 10px)'}}
					hintText="your name"
					onChange={(event, name) => this.setState({name})}
				/>
				<TextField
					style={{margin: 5, width: 'calc(100% * (1 / 3) - 10px)'}}
					hintText="your e-mail"
					onChange={(event, sender) => this.setState({sender})}
				/>
				<TextField
					style={{margin: 5, width: 'calc(100% * (1 / 3) - 10px)'}}
					hintText="subject"
					onChange={(event, subject) => this.setState({subject})}
				/> <br/>
				<TextField
					hintText="your message"
					style={{width: '100%', margin: 5}}
					multiLine={true}
					onChange={(event, message) => this.setState({message})}
				/> <br/>
				<FlatButton label="Send" onClick={this.send_mail.bind(this)}/>
			</Paper>
		);
	}
}

export default Contact;