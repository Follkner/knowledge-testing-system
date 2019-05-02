import React, { Component } from 'react';
import './Main.css';
import slider1 from "../../images/slider1.jpg";
import slider2 from "../../images/slider2.jpg";
import slider3 from "../../images/slider3.jpg";

import img1 from "../../images/gallery/img1.png";
import img2 from "../../images/gallery/img2.jpg";
import img3 from "../../images/gallery/img3.jpg";
import img4 from "../../images/gallery/img4.png";
import img5 from "../../images/gallery/img5.jpg";
import img6 from "../../images/gallery/img6.jpg";
import img7 from "../../images/gallery/img7.jpg";
import img8 from "../../images/gallery/img8.png";
import img9 from "../../images/gallery/img9.jpg";


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
				<div id="carousel" className="carousel">
					<button className="arrow prev" onClick = {this.changeSlide}>{`<`}</button>
					<ul className="images">
						<li className = "slide active"><img src= {slider1}/>
							<div className = "desc">
								On the site you can find a lot of different tests.
							</div>
						</li>
						<li className = "slide"><img src= {slider2}/>
							<div className = "desc">
								You can take a test on any available topic and instantly know your result.
							</div>
						</li>
						<li className = "slide"><img src= {slider3}/>
							<div className = "desc">
								To do this, log in and go to the Tests menu.
							</div>
						</li>
					</ul>
					<button className="arrow next" onClick = {this.changeSlide}>></button>
				</div>

				<div className = "text">
					<h2>
						What can you expect from the site?
					</h2>
					<p>
						You can take tests regularly. To start right now, 
						you need to register or log in if you already have an account.
					</p>
					<p>
						You can find results about them in your profile. 
						The information includes the <span>test time</span>, the <span>result</span>, and 
						the <span>date</span> you took it. 
					</p>
					<p>
						You can sort and filter tests to select the one you want.
					</p>
					<p>
						The number of tests is constantly increasing. Also increases the number of topics.
						Some of them you can see below.
					</p>
				</div>

				<div className = "gallery">
					<div className = "topic">
						<img src= {img1} alt="photo"/>
						<h3>English</h3>
					</div>	
					<div className = "topic">
						<img src= {img2} alt="photo"/>
						<h3>Maths</h3>
					</div>	
					<div className = "topic">
						<img src= {img3} alt="photo"/>
						<h3>Programming</h3>
					</div>	
					<div className = "topic">
						<img src= {img4} alt="photo"/>
						<h3>Geography</h3>
					</div>	
					<div className = "topic">
						<img src= {img5} alt="photo"/>
						<h3>Chemistry</h3>
					</div>	
					<div className = "topic">
						<img src= {img6} alt="photo"/>
						<h3>Physics</h3>
					</div>
					<div className = "topic">
						<img src= {img7} alt="photo"/>
						<h3>Literature</h3>
					</div>
					<div className = "topic">
						<img src= {img8} alt="photo"/>
						<h3>Philosophy</h3>
					</div>
					<div className = "topic">
						<img src= {img9} alt="photo"/>
						<h3>Art</h3>
					</div>

				</div>

			</div>
		);
	}
}

export default Main;