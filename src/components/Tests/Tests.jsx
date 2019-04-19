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
			searchText: "",
		};

		this.displayPages = this.displayPages.bind(this);
		this.clickOnPage = this.clickOnPage.bind(this);
		this.searchClick = this.searchClick.bind(this);
	}

	componentDidMount() {
		fetch("http://localhost:3001/data")
			.then((res) => res.json())
			.then((data) => this.setState({ data, numberOfPages: Math.ceil(data.length/TESTS_PER_PAGE)}))
	}

	clickOnPage(e) {
		this.setState({currentPage: +e.target.innerHTML-1});
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

	searchClick(e) {
		e.preventDefault();
		let text = document.getElementById('search-input').value.toLowerCase();

		const arr = this.state.data.filter((item) => {
			return item.title.toLowerCase().includes(text);
		})

		this.setState({
			searchText: text, 
			numberOfPages: arr.length/TESTS_PER_PAGE, 
			currentPage:0,
		});
	}

	render() {
		const displayDescTests = (arr) => {
			return arr.slice(this.state.currentPage*TESTS_PER_PAGE, (this.state.currentPage+1)*TESTS_PER_PAGE);
		}

		const descTests = this.state.data? 
			displayDescTests(this.state.data.filter(i=>i.title.toLowerCase().includes(this.state.searchText))).map(
				(item, index) => {
					return (
						<DescTest key = {item.id} title = {item.title} tests = {item.tests} id = {item.id}/>
					)
				})
			: (<h2>Loading...</h2>);

		return(
			<div className = "tests">
				<h1>Component 'Tests'</h1>
				<form>
					<input type = "text" placeholder = "Search..." id = "search-input"/>
					<input type = "submit" value = "Search" id = "search-button" onClick = {this.searchClick}/>
				</form>
				
				{descTests}
				<div className = "pages">
					{this.displayPages()}
				</div>
			</div>
		);
	}
}

export default Tests;