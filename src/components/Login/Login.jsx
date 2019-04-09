import React, { Component } from 'react';
import { connect } from 'react-redux';
import login from '../../actions/login.js';

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

		return(
			<div className = "login">
				{!isAuthorized ? 
					<React.Fragment>
						<h1>Component 'Login'</h1>
						<input type = "text" id = "login" autoComplete = "off" placeholder = "Input login"/>
						<input type = "password" id = "password" autoComplete = "off" placeholder = "Input password"/>
						<button onClick = {this.handleClick}>Log in</button>
					</React.Fragment> 
					: null
				}
				
				{isLoading ? <h2>Loading...</h2>: <h2>{message}</h2>}
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