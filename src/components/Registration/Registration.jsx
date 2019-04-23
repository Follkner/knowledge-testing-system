import React, { Component } from 'react';
import { connect } from 'react-redux';
import checkIn from '../../actions/registration.js';
import '../Login/Login.css';

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
		const { isLoading, message } = this.props;
		return(
			<div className = "container login">
				<h1>You can register by filling out the form</h1>
				<div><input type = "text" id = "login" autoComplete = "off" placeholder = " Input login"/></div>
				<div><input type = "password" id = "password" autoComplete = "off" placeholder = " Input password"/></div>
				<button onClick = {this.handleClick}>To register</button>

				<h3>{isLoading? <h3>Wait, please...</h3>: null}</h3>
				<h3>{message}</h3>
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