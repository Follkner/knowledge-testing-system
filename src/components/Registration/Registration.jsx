import React, { Component } from 'react';

class Registration extends Component {

	constructor(props) {
		super(props);
		//this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		let login = document.getElementById("login").value;
		let password = document.getElementById("password").value;

		if(!window.localStorage[login]){
			window.localStorage.setItem(login, password);
		}else {
			console.log('error');
		}
	}

	render() {
		return(
			<div className = "registration">
				<h1>Component 'Registration'</h1>
				<input type = "text" id = "login" autoComplete = "off" placeholder = "Input login"/>
				<input type = "password" id = "password" autoComplete = "off" placeholder = "Input password"/>
				<button onClick = {this.handleClick}>To register</button>
			</div>
		);
	}
}

export default Registration;