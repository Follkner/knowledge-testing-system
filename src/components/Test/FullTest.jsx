import React, { Component } from 'react';
import { connect } from 'react-redux';

class FullTest extends Component {

	constructor(props) {
		super(props);
		this.createTest = this.createTest.bind(this);
		this.startTest = this.startTest.bind(this);
		this.finishTest = this.finishTest.bind(this);

		this.state = {
			isStart: false,
			idInterval: null,
		}
	}

	createTest(){
		const arr = this.props.tests.map((item, index) => {
			return (
				<div className = "test" key = {"" + this.props.id + index}>
					<h3>{item.question}</h3>
					{(item.type === "radio")? 
						item.answers.map((item, i) => {
							return (
								<div key = {"" + index + i}>
									<input type="radio" id={"" + this.props.id + index + i} name={`name${index}`} 
										value = {item}/>
									<label htmlFor={"" + this.props.id + index + i}>{item}</label>
								</div>
							)
						})

						:item.answers.map((item, i) => {
							return (
								<div key = {"" + index + i}>
									<input type="checkbox" id={"" + this.props.id + index + i} name={item}/>
									<label htmlFor={"" + this.props.id + index + i}>{item}</label>
								</div>
							)
						})
					}
		
				</div>
			)
		})

		return arr;
	}

	startTest() {
		this.setState({isStart: true});

		let time = 0;

		const outputTime =(str) => {
			return ("0"+str).slice(-2);
		}

		let interval = setInterval(() => {

			time++;

			let hours = Math.floor(time / 3600);
			let minutes = Math.floor((time % (60 * 60)) / (60));
			let seconds = Math.floor(time % 60);

			document.getElementById("timer").innerHTML = `Time: ${hours}:${outputTime(minutes)}:${outputTime(seconds)}`;

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
				if(item.checked) buf.push(item.nextSibling.innerHTML);
			})

			answers.push(buf);
		}
		
		clearInterval(this.state.idInterval);
		
		fetch(`http://localhost:3001/answers/${this.props.id}`)
			.then((res) => res.json())
			.then((data) => {
				
				const correctAnswers = data.answers;

				let score = 0;

				for(let i = 0; i < answers.length; i++){
					if(answers[i].length === correctAnswers[i].length){
						let flag = true;
						for(let j = 0; j < answers[i].length; j++){
							if(!(answers[i][j] == correctAnswers[i][j])) flag = false;
						}
						if(flag) score++;
					}
				}

				document.getElementById("results").innerHTML = `Your score: ${score} / ${answers.length}`;

				this.setState({
					isStart: false,
					idInterval: null,
				});

			})
	}

	componentWillUnmount() {
		clearInterval(this.state.idInterval);
	}

	render() {

		return(	
			<div className = "test-full">
				<h2>{this.props.title}</h2>
				<div id = "timer"></div>
				<div id = "results"></div>
				{this.state.isStart? this.createTest(): null}
				{this.state.isStart? <button onClick = {this.finishTest}>Finish test</button>
					: <button onClick = {this.startTest}>Start test</button>}
			
			</div>		
		);
	}

}

const mapStateToProps = (state) => {
	return {
		id: state.testReducer.id,
		title: state.testReducer.title,
		tests: state.testReducer.tests,
	}
}

export default connect(mapStateToProps)(FullTest);