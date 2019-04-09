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

class App extends Component {
  	render() {
	    return (
	    	<Router>
		      	<div className="App">
		        	<Header isAuthorized = {this.props.isAuthorized}/>
		      	</div>

		      	 <Route path="/" exact component={Login} />
		      	 <Route path="/registration" component={Registration} />
		      	 <Route path="/about" component={About} />
		      	 {/*<Route path="/tests" exact component={Tests} />*/}
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

export default connect(mapStateToProps)(App);