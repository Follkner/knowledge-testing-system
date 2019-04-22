import React, { Component } from 'react';
import DescTest from '../Test/DescTest.jsx';
import './Tests.css';

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
		this.sortData = this.sortData.bind(this);
	}

	componentDidMount() {

		fetch("http://localhost:3001/data")
			.then((res) => res.json())
			.then((data) => this.setState({ data, numberOfPages: Math.ceil(data.length/TESTS_PER_PAGE)}))
	}

	async clickOnPage(e) {
		document.getElementsByClassName("page")[this.state.currentPage].classList.remove("active");
		await this.setState({currentPage: +e.target.innerHTML-1});
		document.getElementsByClassName("page")[this.state.currentPage].classList.add("active");	
	}

	displayPages() {
		const pages = []
		for(let i = 0; i < this.state.numberOfPages; i++){
			let className = !(i===0)? "page" : "page active";
			pages.push(
				<div onClick = {this.clickOnPage} key = {i} className = {className}>
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

	sortData(e) {
		let sortArr;
		switch(e.target.value) {
			case "sort1":
				sortArr = this.state.data.sort((a, b) => {
					return a.id - b.id;
				});
				this.setState({data: sortArr});
				break;
			case "sort2":
				sortArr = this.state.data.sort((a, b) => {
					return a.tests.length - b.tests.length;
				});
				this.setState({data: sortArr});
				break;
			case "sort3":
				sortArr = this.state.data.sort((a, b) => {
					return b.tests.length - a.tests.length;
				});
				this.setState({data: sortArr});
				break;
		}
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
			<div className = "container tests">
				<h1>Available tests</h1>
				<div className = "container-form">
					<form>
						<input type = "text" placeholder = "Search..." id = "search-input"/>
						<input type = "submit" value = "Search" id = "search-button" onClick = {this.searchClick}/>
					</form>
					<select onChange = {this.sortData}>
						<option value = "sort1">Sort by order</option>
						<option value = "sort2">Sort by number of questions (ascending)</option>
						<option value = "sort3">Sort by number of questions (descending)</option>
					</select>
				</div>
				{!(!descTests.length && this.state.searchText)? descTests: <h2>Nothing found</h2>}
				<div className = "pages">
					{this.displayPages()}
				</div>
			</div>
		);
	}
}

export default Tests;