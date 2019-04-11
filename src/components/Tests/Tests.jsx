import React, { Component } from 'react';
import Test from '../Test/Test.jsx';
import { data } from '../../constants/data.js';

class Tests extends Component {

	render() {
		const arr = data.map((item, index) => {
			return (
				<Test key = {item.id} title = {item.title} tests = {item.tests} id = {item.id}/>
			)
		});
		return(
			<div className = "tests">
				<h1>Component 'Tests'</h1>
				{arr}
			</div>
		);
	}
}

export default Tests;