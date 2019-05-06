import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Feedback.css';

class Feedback extends Component {

	sendEmail(e) {
		e.preventDefault();

		let name = document.getElementById("name").value;
		let email = document.getElementById("email").value;
		let message = document.getElementById("message").value;

		let xhr = new XMLHttpRequest();
		xhr.open("POST", '/serverName', true);
		xhr.setRequestHeader("Content-Type", "application/json");

		xhr.send(JSON.stringify({
			name,
			email,
			message,
		}));

	}

	render() {
		return(
			<div className = "container feedback">
				<div className="description">
					<h1>Feedback form</h1>	
				</div>

				<form className="form-feedback">
					<div>
						<label htmlFor="name">Input your name
							<input type="text" placeholder="Name" id="name"/>
						</label>
					</div>				
					
					<div>
						<label htmlFor="mail">Input your email
							<input type="mail" placeholder="Email" id="email"/>
						</label>
					</div>
								
					<div>
						<label htmlFor="message">Your comment
							<textarea placeholder="Comment" id="message"></textarea>
						</label>
					</div>

					<div>
						<input onClick = {this.sendEmail} id = "submit" type="submit" value = "Send"/>
					</div>
								
				</form>
			</div>
		)
	}
	
}

export default Feedback;