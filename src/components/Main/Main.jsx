import React, { Component } from 'react';
import './Main.css';
import slider1 from "../../images/slider1.jpg";
import slider2 from "../../images/slider2.jpg";
import slider3 from "../../images/slider3.jpg";

let position = 0;

class Main extends Component {

	changeSlide(e) {
		const slides = document.getElementsByClassName("slide");	

		const arrowPrev = document.getElementsByClassName("arrow prev")[0];
		const arrowNext = document.getElementsByClassName("arrow next")[0];

		for(let i = 0; i < slides.length; i++) {
			slides[i].classList.remove("active");
		}

		(e.target.innerHTML === "&gt;") ? position++ : position--;

		(position === 0) ? arrowPrev.style.display = "none" : arrowPrev.style.display = "block";
		(position === slides.length-1) ? arrowNext.style.display = "none" : arrowNext.style.display = "block";

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
					<button className="arrow prev" onClick = {this.changeSlide}>{`<`}</button>
					<ul className="images">
						<li className = "slide active"><img src= {slider1}/></li>
						<li className = "slide"><img src= {slider2}/></li>
						<li className = "slide"><img src= {slider3}/></li>
					</ul>
					<button className="arrow next" onClick = {this.changeSlide}>></button>
				</div>
			</div>
		);
	}
}

export default Main;