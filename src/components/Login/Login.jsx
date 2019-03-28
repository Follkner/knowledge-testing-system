import React, { Component } from 'react';

class Login extends Component {

	constructor(props) {
		super(props);
		//this.handleClick = this.handleClick.bind(this);

	}

	handleClick() {
		let login = document.getElementById("login").value;
		let password = document.getElementById("password").value;

		if(password == window.localStorage[login]) {
			console.log("success");
		}

	}

	render() {
		return(
			<div className = "login">
				<h1>Component 'Login'</h1>
				<input type = "text" id = "login" autoComplete = "off" placeholder = "Input login"/>
				<input type = "password" id = "password" autoComplete = "off" placeholder = "Input password"/>
				<button onClick = {this.handleClick}>Auto</button>
			</div>
		);
	}
}

export default Login;