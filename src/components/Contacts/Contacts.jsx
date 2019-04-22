import React, { Component } from 'react';
import './Contacts.css';

class Contacts extends Component {
	render() {
		return(
			<div className = "contacts">
				<h1>You can contact us in the following ways:</h1>
				<div className="container contacts-container">
					<div className="contact">
						<p className="title">Phone number</p>
						<p>+380501844422</p>
					</div>

					<div className="contact">
						<p className="title">Email</p>
						<p>example@gmail.com</p>
					</div>

					<div className="contact">
						<p className="title">Social networks</p>
						<div>
							<p><a href="https://www.facebook.com/" target="_blank">Facebook</a></p>
							<p><a href="https://www.linkedin.com/" target="_blank">LinkedIn</a></p>
						</div>
					</div>	
				</div>

				<h2>Location on the map</h2>
				<iframe 
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.634786862565!2d30.449400315615737!3d50.4479029
					7947504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc26fd25e1e1%3A0xe9c8486538484580!2z0YPQuy4g0J
					DQutCw0LTQtdC80LjQutCwINCv0L3Qs9C10LvRjywgMjAsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1550702034868" 
					frameborder="0"  allowfullscreen>
				</iframe>
			</div>
		);
	}
}

export default Contacts;