import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css';
import image from "../../images/user.png";

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showProfileMenu: false,
		};

		this.onProfileClick = this.onProfileClick.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	onProfileClick() {
		this.setState({showProfileMenu: !this.state.showProfileMenu})
	}

	componentDidMount() {
		document.addEventListener('click', this.handleClickOutside, false);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside, false);
		this.setState({showProfileMenu: false})
	}

	handleClickOutside(e) {
		if(e.target === document.getElementById('profile')) return;
		if(e.target === document.getElementById('show-menu')) return;
		if(e.target === document.getElementsByClassName('lines')[0]) return;
		this.setState({showProfileMenu: false});
		document.getElementById("show-menu").checked = false;
	}

	render() {
		return(
			<div className = "header">

			<nav className="mobile-menu">
				<label htmlFor="show-menu" className="show-menu"><div className="lines"></div></label>
				<input type="checkbox" id="show-menu"/>
				<ul className="menu-ul">
				{this.props.isAuthorized? 
					<React.Fragment>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/tests">Tests</Link></li>
					<li><Link to="/contacts">Contacts</Link></li>
					<li><Link to="/feedback">Feedback</Link></li>
					<li><Link to ="/profile">Profile</Link></li>
					<li><div className = "item" onClick = {this.props.logout}>Log out</div></li>
					</React.Fragment>

					:

					<React.Fragment>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/registration">Registration</Link></li>
					<li><Link to="/contacts">Contacts</Link></li>
					<li><Link to="/feedback">Feedback</Link></li>
					</React.Fragment>

				}
				</ul>
			</nav>

			{this.props.isAuthorized? 
				<nav className = "full-menu">
					<ul className = "menu">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/tests">Tests</Link></li>
					<li>
						<div>Contact us</div>
						<ul>
							<li><Link to="/contacts">Contacts</Link></li>
							<li><Link to="/feedback">Feedback</Link></li>
						</ul>
					</li>
					<div className = "profile">
						<img id = "profile" src = {image} onClick = {this.onProfileClick}></img>
						{this.state.showProfileMenu?
						<div className = "dropdown-menu">
							<div className = "item"><Link to = "/profile">Profile</Link></div>
							<div className = "item" onClick = {this.props.logout}>Log out</div>
						</div>
						: null}
					</div>
					</ul>
				</nav>

				: <nav className = "full-menu">
					<ul className = "menu">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/login">Login</Link></li>
						<li><Link to="/registration">Registration</Link></li>
						<li>
							<div>Contact us</div>
							<ul>
								<li><Link to="/contacts">Contacts</Link></li>
								<li><Link to="/feedback">Feedback</Link></li>
							</ul>
						</li>
					</ul>
				</nav>
			}
			</div>
		);
	}
}

export default Header;