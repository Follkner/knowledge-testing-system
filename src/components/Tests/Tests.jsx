import React, { Component } from 'react';
import DescTest from '../Test/DescTest.jsx';

const TESTS_PER_PAGE = 3;

class Tests extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: null,
			numberOfPages: 0,
			currentPage: 0,
		};

		this.displayPages = this.displayPages.bind(this);
		this.clickOnPage = this.clickOnPage.bind(this);
	}

	componentDidMount() {
		fetch("http://localhost:3001/data")
			.then((res) => res.json())
			.then((data) => this.setState({ data, numberOfPages: Math.ceil(data.length/TESTS_PER_PAGE)}))
	}

	clickOnPage(e) {
		this.setState({currentPage: +e.target.innerHTML-1})
	}

	displayPages() {
		const pages = []
		for(let i = 0; i < this.state.numberOfPages; i++){
			pages.push(
				<div onClick = {this.clickOnPage} key = {i} className = "page">
					{i+1}
				</div>
			)
		}
		return pages;
	}

	render() {
		const displayDescTests = (arr) => {
			return arr.slice(this.state.currentPage*TESTS_PER_PAGE, (this.state.currentPage+1)*TESTS_PER_PAGE);
		}

		const arr = this.state.data? displayDescTests(this.state.data).map((item, index) => {
			return (
				<DescTest key = {item.id} title = {item.title} tests = {item.tests} id = {item.id}/>
			)
		}): (<h2>Loading...</h2>);

		return(
			<div className = "tests">
				<h1>Component 'Tests'</h1>
				{arr}
				<div className = "pages">
					{this.displayPages()}
				</div>
			</div>
		);
	}
}

export default Tests;