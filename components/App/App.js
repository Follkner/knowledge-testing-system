import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from '../Header/Header.jsx';
import Login from '../Login/Login.jsx';
import About from '../About/About.jsx';
import Tests from '../Tests/Tests.jsx';

class App extends Component {
  	render() {
	    return (
	    	<Router>
		      	<div className="App">
		        	<Header/>
		      	</div>

		      	 <Route path="/" exact component={Login} />
		      	 <Route path="/about" exact component={About} />
		      	 <Route path="/tests" exact component={Tests} />
		    </Router>
	    );
  	}
}

export default App;