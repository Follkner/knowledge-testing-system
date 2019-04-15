import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css';

class Header extends Component {

	render() {
		return(
			<div className = "header">
			{this.props.isAuthorized? 
				<React.Fragment>
					<Link to="/about">About</Link>
					<Link to="/tests">Tests</Link>
					<button onClick = {this.props.logout}>Log out</button>
				</React.Fragment>

				: <React.Fragment>
					<Link to="/">Login</Link>
					<Link to="/registration">Registration</Link>
					<Link to="/about">About</Link>
				</React.Fragment>
			}
			</div>
		);
	}
}

export default Header;