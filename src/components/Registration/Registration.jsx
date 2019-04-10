import React, { Component } from 'react';
import { connect } from 'react-redux';
import checkIn from '../../actions/registration.js';

class Registration extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		let login = document.getElementById("login").value;
		let password = document.getElementById("password").value;

		this.props.checkIn(login, password);
	}

	render() {
		return(
			<div className = "registration">
				<h1>Component 'Registration'</h1>
				<input type = "text" id = "login" autoComplete = "off" placeholder = "Input login"/>
				<input type = "password" id = "password" autoComplete = "off" placeholder = "Input password"/>
				<button onClick = {this.handleClick}>To register</button>

				<h3>{this.props.isLoading? <h3>Wait, please...</h3>: null}</h3>
				<h3>{this.props.message}</h3>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoading: state.registrationReducer.isLoading,
		message: state.registrationReducer.message,
	}
}

const mapDispatchToProps = (dispatch) => { 
	return {
		checkIn: (username, password) => {
			dispatch(checkIn(username, password))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);