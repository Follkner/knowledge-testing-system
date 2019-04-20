import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx';
import { connect } from 'react-redux';
import './App.css';
import Header from '../Header/Header.jsx';
import Login from '../Login/Login.jsx';
import Registration from '../Registration/Registration.jsx';
import About from '../About/About.jsx';
import Tests from '../Tests/Tests.jsx';
import FullTest from '../Test/FullTest.jsx';
import logout from '../../actions/logout.js';

class App extends Component {
	componentDidMount() {
		if(!window.localStorage.users) window.localStorage.setItem("users", JSON.stringify({}));
	}

  	render() {
	    return (
	    	<Router>
		      	<div className="App">
		        	<Header isAuthorized = {this.props.isAuthorized} logout = {this.props.logout}/>
		      	</div>
		      	<Route exact path="/login" exact component={Login} />
		      	<Route exact path="/registration" component={Registration} />
		      	<Route exact path="/about" component={About} />
		      	<PrivateRoute exact authenticated={this.props.isAuthorized} path="/tests" component={Tests} />
		      	{/*<Route exact path="/tests" component={Tests} />*/}
				<PrivateRoute authenticated={this.props.isAuthorized} path="/tests/:id" component={FullTest} />

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