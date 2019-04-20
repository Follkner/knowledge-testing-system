import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './BreadCrumbs.css';

class BreadCrumbs extends Component {

	constructor(props){
		super(props);
		this.state = {
			breadCrumbs: null,
		}
	}

	componentDidMount() {
		let pathname = window.location.pathname;
		const pathsArray = pathname.replace(/%20/g, " ").split("/");
		pathsArray.shift();

		let position = 1;
		const breadCrumbs = pathsArray.map((item, index) => {
			let firstIndex = pathname.indexOf("/", position);
			let pathLink = pathname.substring(firstIndex, 0);
			position += firstIndex;
			return (
				<li key = {index}><Link className = "breadCrumb" to = {`${pathLink}`}>{item}</Link></li>
			)
		})

		this.setState({breadCrumbs});
	}

	render() {
		return(
			<div className = "breadCrumbs">
				<ul>
					{this.state.breadCrumbs}
				</ul>
			</div>
		);
	}
}

export default BreadCrumbs;