import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import selectTest from '../../actions/selectTest.js';

class DescTest extends Component {

	constructor(props) {
		super(props);
		this.handleclick = this.handleclick.bind(this);
	}

	handleclick() {
		const o ={};
		o.id = this.props.id;
		o.title = this.props.title;
		o.tests = this.props.tests;
		this.props.selectTest(o);
	}

	render() {
		return(
			<div className = "descTest">
				<h2>{this.props.title}</h2>
				<p>{`Total ${this.props.tests.length} questions`}</p>
				
				<Link onClick = {this.handleclick} to={`${window.location.pathname}/${this.props.title}`}>Read more</Link>	

			</div>
		);
	}

}

const mapDispatchToProps = (dispatch) => { 
	return {
		selectTest: (o) => {
			dispatch(selectTest(o))
		}
	}
}

export default connect(null, mapDispatchToProps)(DescTest);