import React, { Component } from 'react';
import { connect } from 'react-redux';
import login from '../../actions/login.js';
import './Login.css';
import { Redirect } from 'react-router-dom';

class Login extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		let login = document.getElementById("login").value;
		let password = document.getElementById("password").value;

		this.props.loginRequest(login, password);
	}

	render() {
		const {isLoading, isAuthorized, message} = this.props;

		if(isAuthorized) return <Redirect to='/' />;

		return(
			<div className = "container login">		
				{!isAuthorized ? 
					<React.Fragment>
						<h1>You can login if you already have an account.</h1>
						<div><input type = "text" id = "login" autoComplete = "off" placeholder = "Input login"/></div>
						<div><input type = "password" id = "password" autoComplete = "off" placeholder = "Input password"/></div>
						<div><button onClick = {this.handleClick}>Log in</button></div>
					</React.Fragment> 
					: null
				}
				
				{isLoading ? <h2>Wait, please...</h2>: <h2>{message}</h2>}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoading: state.loginReducer.isLoading,
		isAuthorized: state.loginReducer.isAuthorized,
		message: state.loginReducer.message,
	}
}

const mapDispatchToProps = (dispatch) => { 
	return {
		loginRequest: (username, password) => {
			dispatch(login(username, password))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);