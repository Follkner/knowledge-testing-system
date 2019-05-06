import React, { Component } from 'react';
import { connect } from 'react-redux';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs.jsx';
import './FullTest.css';

class FullTest extends Component {

	constructor(props) {
		super(props);
		this.createTest = this.createTest.bind(this);
		this.startTest = this.startTest.bind(this);
		this.finishTest = this.finishTest.bind(this);
		this.showResults = this.showResults.bind(this);

		this.state = {
			isStart: false,
			isFinish: false,
			idInterval: null,
			isUpdate: true,
		}
	}

	createTest(){
		const arr = this.props.tests.map((item, index) => {
			return (
				<div className = "test" key = {`${this.props.id}${index}`}>
					<h3>{item.question}</h3>
					{(item.type === "radio")? 
						item.answers.map((item, i) => {
							return (
								<div key = {"" + index + i}>
									<input type="radio" id={`${this.props.id}${index}${i}`} name={`name${index}`} 
										value = {item}/>
									<label htmlFor={`${this.props.id}${index}${i}`}>{item}</label>
								</div>
							)
						})

						:item.answers.map((item, i) => {
							return (
								<div key = {"" + index + i}>
									<input type="checkbox" id={`${this.props.id}${index}${i}`} name={item}/>
									<label htmlFor={`${this.props.id}${index}${i}`}>{item}</label>
								</div>
							)
						})
					}
		
				</div>
			)
		})

		return arr;
	}

	outputTime(str){
		return ("0"+str).slice(-2);
	}

	startTest() {
		this.setState({
			isStart: true,
			isFinish: false,
			isUpdate: !this.state.isUpdate,
		});

		document.getElementById("results").innerHTML = "";
		document.getElementById("timer").innerHTML = `0:00:00`;
		document.getElementById("tests-container").style.display = `block`;

		let time = 0;

		let interval = setInterval(() => {

			time++;

			let hours = Math.floor(time / 3600);
			let minutes = Math.floor((time % (60 * 60)) / (60));
			let seconds = Math.floor(time % 60);

			document.getElementById("timer").innerHTML =`${hours}:${this.outputTime(minutes)}:${this.outputTime(seconds)}`;

		}, 1000);

		this.setState({idInterval: interval});
	}

	finishTest() {
		const tests = document.getElementsByClassName("test");

		const answers = [];

		for(let i = 0; i < tests.length; i++){
			const inputs = Array.from(document.getElementsByTagName("input")).filter((item) => {
				return item.parentNode.parentNode == tests[i];
			});

			const buf = []

			inputs.forEach((item) => {
				buf.push(item);
			})

			answers.push(buf);
		}
		
		clearInterval(this.state.idInterval);
		
		fetch(`http://localhost:3001/answers/${this.props.testId}`)
			.then((res) => res.json())
			.then((data) => {
				
				const correctAnswers = data.answers;

				let score = 0;

				for(let i = 0; i < answers.length; i++){
					let index = 0;
					let flag = true;
					for(let j = 0; j < answers[i].length; j++) {
						answers[i][j].disabled = "disabled";
						if(answers[i][j].nextSibling.innerHTML == correctAnswers[i][index]) {
							answers[i][j].nextSibling.style.background = "green";
							index = index + 1;
							if(!answers[i][j].checked) flag = false;
						} else if(answers[i][j].checked) {
							flag = false;
							answers[i][j].nextSibling.style.background = "red";
						}
					}
					if(flag) {
						score++;
						answers[i][0].parentNode.parentNode.style.border = "2px solid green";
					} else {
						answers[i][0].parentNode.parentNode.style.border = "2px solid red";
					}
				}

				const d = new Date();
				const strDate = `
					${this.outputTime(d.getDate())}.${this.outputTime(d.getMonth()+1)}.${d.getFullYear()} 
					${this.outputTime(d.getHours())}:${this.outputTime(d.getMinutes())}
				`;
				const strScore = `${score} / ${answers.length}`;

				const users = JSON.parse(window.localStorage.users);
				const userResults = JSON.parse(window.localStorage.users).results;

				const { userId, testId, title } = this.props;

				if(!users[userId].results[`${title}`]) users[userId].results[`${title}`] = [];

				if(users[userId].results[`${title}`].length > 9) users[userId].results[`${title}`].shift();

				users[userId].results[`${title}`].push({
					score: strScore,
					date: strDate,
					time: document.getElementById("timer").innerHTML,
				})

				window.localStorage.setItem("users", JSON.stringify([...users]));

				document.getElementById("results").innerHTML = `Your score: ${strScore}`;

				this.setState({
					isStart: false,
					isFinish: true,
					idInterval: null,
				});

			})

			document.getElementById("tests-container").style.display = "none";
	}

	showResults() {
		const testsContainer = document.getElementById("tests-container");
		testsContainer.style.display = (testsContainer.style.display === "block") ?  "none" : "block";
	}

	componentWillUnmount() {
		clearInterval(this.state.idInterval);
	}

	render() {
		return(	
			<div className = "container fullTest">
				<BreadCrumbs/>
				<h2>{this.props.title}</h2>
				<div id = "timer"></div>
				<div id = "results"></div>
				{this.state.isFinish? <button onClick = {this.showResults}>Show/hide results</button> : null}
				<div id = "tests-container">
					{((this.state.isStart || this.state.isFinish) && this.state.isUpdate)? this.createTest() : null}					
					{((this.state.isStart || this.state.isFinish) && !this.state.isUpdate)? this.createTest() : null}					
				</div>
				{this.state.isStart? <button onClick = {this.finishTest}>Finish test</button>
					: <button onClick = {this.startTest}>Start test</button>}	

			</div>		
		);
	}

}

const mapStateToProps = (state) => {
	return {
		userId: state.loginReducer.id,
		testId: state.testReducer.id,
		title: state.testReducer.title,
		tests: state.testReducer.tests,
	}
}

export default connect(mapStateToProps)(FullTest);