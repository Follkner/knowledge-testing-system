import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import selectTest from '../../actions/selectTest.js';
import './DescTest.css';

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
		const { title, tests } = this.props;
		return(
			<div className = "descTest">
				<h2>{title}</h2>
				<p>{`Total ${tests.length} questions`}</p>	
				<Link onClick = {this.handleclick} to={`${window.location.pathname}/${title}`}>Read more</Link>	
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