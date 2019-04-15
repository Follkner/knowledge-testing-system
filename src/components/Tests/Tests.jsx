import React, { Component } from 'react';
import DescTest from '../Test/DescTest.jsx';

class Tests extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: null,
		};
	}

	componentDidMount() {
		fetch("http://localhost:3001/data")
			.then((res) => res.json())
			.then((data) => this.setState({ data }));
	}

	render() {
		const arr = this.state.data? this.state.data.map((item, index) => {
			return (
				<DescTest key = {item.id} title = {item.title} tests = {item.tests} id = {item.id}/>
			)
		}): (<h2>Loading...</h2>);

		return(
			<div className = "tests">
				<h1>Component 'Tests'</h1>
				{arr}
			</div>
		);
	}
}

export default Tests;