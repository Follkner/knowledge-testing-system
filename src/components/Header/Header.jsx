import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css';
import image from "../../images/user.png";

class Header extends Component {

	render() {
		return(
			<div className = "header">
			{this.props.isAuthorized? 
				<React.Fragment>
					<Link to="/">Home</Link>
					<Link to="/tests">Tests</Link>
					<Link to="/contacts">Contacts</Link>
					<Link to="/profile"><img src = {image}></img></Link>
					<button onClick = {this.props.logout}>Log out</button>
				</React.Fragment>

				: <React.Fragment>
					<Link to="/">Home</Link>
					<Link to="/login">Login</Link>
					<Link to="/registration">Registration</Link>
					<Link to="/contacts">Contacts</Link>
				</React.Fragment>
			}
			</div>
		);
	}
}

export default Header;