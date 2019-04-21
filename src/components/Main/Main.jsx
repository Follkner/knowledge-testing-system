import React, { Component } from 'react';
import './Main.css';

let position = 0;

class Main extends Component {

	slider(e) {
		const slides = document.getElementsByClassName("slide");	
		const arrows = document.getElementsByClassName("arrow")

		for(let i = 0; i < slides.length; i++) {
			slides[i].classList.remove("active");
		}

		if(e.target.innerHTML == "next") {
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
		slides[position].style.paddingLeft = `-${position*130}px`;
	}

	render() {
		return(
			<div className = "container main-component">
				<h1>Component 'Main'</h1>
				<div id="carousel" className="carousel">
					<button className="arrow prev" onClick = {this.slider}>prev</button>
						<ul className="images">
        					<li className = "slide active"><img src="https://js.cx/carousel/1.png"/></li>
        					<li className = "slide"><img src="https://js.cx/carousel/2.png"/></li>
        					<li className = "slide"><img src="https://js.cx/carousel/3.png"/></li>
        					<li className = "slide"><img src="https://js.cx/carousel/4.png"/></li>
        					<li className = "slide"><img src="https://js.cx/carousel/5.png"/></li>
        					<li className = "slide"><img src="https://js.cx/carousel/6.png"/></li>
        					<li className = "slide"><img src="https://js.cx/carousel/7.png"/></li>
        					<li className = "slide"><img src="https://js.cx/carousel/8.png"/></li>
        					<li className = "slide"><img src="https://js.cx/carousel/9.png"/></li>
        					<li className = "slide"><img src="https://js.cx/carousel/10.png"/></li>
						</ul>
					<button className="arrow next" onClick = {this.slider}>next</button>
				</div>
			</div>
		);
	}
}

export default Main;