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
		      	 <Route path="/" exact component={Login} />
		      	 <Route path="/registration" component={Registration} />
		      	 <Route path="/about" component={About} />
		      	 <PrivateRoute authenticated={this.props.isAuthorized} path="/tests" component={Tests} />
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