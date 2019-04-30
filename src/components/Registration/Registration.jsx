import React, { Component } from 'react';
import { connect } from 'react-redux';
import checkIn from '../../actions/registration.js';
import '../Login/Login.css';
import { loginValidate, emailValidate, passwordValidate} from '../../validator.js';

class Registration extends Component {

	constructor(props) {
		super(props);
		this.state = {
			login: "",
			email: "",
			password: "",
			repeatPassword: "",
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.onLoginChange = this.onLoginChange.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onPasswordRepeatChange = this.onPasswordRepeatChange.bind(this);
	}

	onSubmit() {
		const { login, email, password, repeatPassword } = this.state;
		this.props.checkIn(login, password, email);		
	}

	onLoginChange(e) {
		this.setState({login: e.target.value});
	}

	onEmailChange(e) {
		this.setState({email: e.target.value});
	}

	onPasswordChange(e) {
		this.setState({password: e.target.value});
	}

	onPasswordRepeatChange(e) {
		this.setState({repeatPassword: e.target.value});
	}

	render() {
		const { isLoading, message } = this.props;
		const { login, email, password, repeatPassword } = this.state;

		let isActive = (loginValidate(login) && emailValidate(email) && passwordValidate(password, repeatPassword)) ?
			"active" : "disable";

		let loginClass = loginValidate(login) ? "correct" : "incorrect";
		if(login === "") loginClass = "";

		let emailClass = emailValidate(email) ? "correct" : "incorrect";
		if(email === "") emailClass = "";

		let passwordClass = passwordValidate(password, repeatPassword) ? "correct" : "incorrect";
		if(password === "" || repeatPassword === "") passwordClass = "";

		return(
			<div className = "container login">
				<h1>You can register by filling out the form</h1>
				<div>
					<input onChange = {this.onLoginChange} type = "text" id = "login" 
						autoComplete = "off" placeholder = "Input login" className = {loginClass}/>
				</div>
				<div>
					<input onChange = {this.onEmailChange} type = "email" id = "email" autoComplete = "off" 
						placeholder = "Input email" className = {emailClass}/>
				</div>
				<div>
					<input onChange = {this.onPasswordChange} type = "password" id = "password" autoComplete = "off" 
						placeholder = "Input password" className = {passwordClass}/>
				</div>
				<div>
					<input onChange = {this.onPasswordRepeatChange} type = "password" id = "repeatPassword" autoComplete = "off" 
						placeholder = "Repeat password" className = {passwordClass}/>
				</div>
				<button onClick = {this.onSubmit} className = {isActive}>To register</button>

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
		checkIn: (username, password, email) => {
			dispatch(checkIn(username, password, email))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);