import React, { Component } from 'react';
import './Main.css';
import slider1 from "../../images/slider1.jpg";
import slider2 from "../../images/slider2.jpg";
import slider3 from "../../images/slider3.jpg";

let position = 0;

class Main extends Component {

	slider(e) {
		const slides = document.getElementsByClassName("slide");	
		const arrows = document.getElementsByClassName("arrow")

		for(let i = 0; i < slides.length; i++) {
			slides[i].classList.remove("active");
		}

		if(e.target.innerHTML == "&gt;") {
			position++;
		} else {
			position--;
		}

		for(let i = 0; i < arrows.length; i++) {
			arrows[i].style.display = "block";
		}

		if(position===0 || position===slides.length-1) {
			e.target.style.display = "none";
		}

		slides[position].classList.add("active");
	}

	componentWillUnmount() {
		position = 0;
	}

	render() {
		return(
			<div className = "container main-component">
				<h1>You can take a test on any available topic and instantly know your result.</h1>
				<div id="carousel" className="carousel">
					<button className="arrow prev" onClick = {this.slider}>{`<`}</button>
						<ul className="images">
							<li className = "slide active"><img src= {slider1}/></li>
							<li className = "slide"><img src= {slider2}/></li>
							<li className = "slide"><img src= {slider3}/></li>
						</ul>
					<button className="arrow next" onClick = {this.slider}>></button>
				</div>
			</div>
		);
	}
}

export default Main;