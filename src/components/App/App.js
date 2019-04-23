import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx';
import { connect } from 'react-redux';
import './App.css';
import Header from '../Header/Header.jsx';
import Login from '../Login/Login.jsx';
import Registration from '../Registration/Registration.jsx';
import Contacts from '../Contacts/Contacts.jsx';
import Tests from '../Tests/Tests.jsx';
import FullTest from '../Test/FullTest.jsx';
import Main from '../Main/Main.jsx';
import logout from '../../actions/logout.js';

class App extends Component {
	componentDidMount() {
		if(!window.localStorage.users) window.localStorage.setItem("users", JSON.stringify([]));
	}

  	render() {
  		const { isAuthorized } = this.props;
	    return (
	    	<Router>
		      	<div className="App">
		      		<div className = "blurElem"></div>
		        	<Header isAuthorized = {isAuthorized} logout = {this.props.logout}/>
		      		<Route exact path="/" exact component={Main} />
		      		<Route exact path="/login" exact component={Login} />
		      		<Route exact path="/registration" component={Registration} />
		      		<Route exact path="/contacts" component={Contacts} />
					<PrivateRoute exact authenticated={isAuthorized} path="/tests" component={Tests} />
					<PrivateRoute authenticated={isAuthorized} path="/tests/:id" component={FullTest} />
				</div>
		    </Router>
	    );
  	}
}

const mapStateToProps = (state) => {
	return {
		isAuthorized: state.loginReducer.isAuthorized,
	}
}

const mapDispatchToProps = (dispatch) => { 
	return {
		logout: () => {
			dispatch(logout())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);