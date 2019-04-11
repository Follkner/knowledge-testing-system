import React, { Component } from 'react';

class Test extends Component {

	constructor(props) {
		super(props);
		this.createTest = this.createTest.bind(this);
	}

	createTest(){
		let arr = [];
		arr = this.props.tests.map((item, index) => {
			return (
				<div key = {"" + this.props.id + index}>
					<h3>{item.question}</h3>
					{(item.correctAnswers.length == 1)? 
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

	render() {
		return(
			<div className = "test">
				<h2>{this.props.title}</h2>
				{this.createTest()}
				
			</div>
		);
	}
}

export default Test;