import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import './Profile.css';

class Profile extends Component {

	constructor(props){
		super(props);

		this.state = {
			data: [],
		}
	}
	componentDidMount() {
		const users = JSON.parse(window.localStorage.users)[this.props.id];

		const data = [];

		for(let prop in users.results) {

			const bufArray = users.results[prop].map((item, index) => {
				return(
					<div key = {index} className = "testResult">
						<p>{item.score}</p>
						<p>{item.time}</p>
						<p>{item.date}</p>
					</div>
				)
			});
			data.push(<h2 key = {prop}>{prop}</h2>);
			data.push(
				<div className = "testResult">
					<p>Score</p>
					<p>Time</p>
					<p>Date</p>
				</div>);
			data.push(bufArray);
		}

		this.setState({data});
	}

	render() {
		console.log(this.state.data)
		return(
			<div className = "container profile">
				<h1>Your test results</h1>		
				{this.state.data}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		id: state.loginReducer.id,
	}
}

export default connect(mapStateToProps)(Profile);