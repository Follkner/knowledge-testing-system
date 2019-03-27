import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css';

class Header extends Component {
	render() {
		return(
			<div className = "header">
				 <Link to="/">Login</Link>
				 <Link to="/about">About</Link>
				 <Link to="/tests">Tests</Link>
			</div>
		);
	}
}

export default Header;