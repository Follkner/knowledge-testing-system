import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css';
import image from "../../images/user.png";

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showMenu: false,
		};

		this.onProfileClick = this.onProfileClick.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	onProfileClick() {
		this.setState({showMenu: !this.state.showMenu})
	}

	componentDidMount() {
		document.addEventListener('click', this.handleClickOutside, false);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside, false);
		this.setState({showMenu: false})
	}

	handleClickOutside(e) {
		if(e.target === document.getElementById('profile')) return;
		this.setState({showMenu: false});
	}

	render() {
		return(
			<div className = "header">
			{this.props.isAuthorized? 
				<React.Fragment>
					<Link to="/">Home</Link>
					<Link to="/tests">Tests</Link>
					<Link to="/contacts">Contacts</Link>
					<div className = "profile">
						<img id = "profile" src = {image} onClick = {this.onProfileClick}></img>
						{this.state.showMenu?
						<div className = "dropdown-menu">
							<div className = "item"><Link to = "/profile">Profile</Link></div>
							<div className = "item" onClick = {this.props.logout}>Log out</div>
						</div>
						: null}
					</div>
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