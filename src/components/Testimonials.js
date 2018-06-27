import React, { Component } from 'react';
import { Grid, Carousel, Row, Col, Image } from 'react-bootstrap';
import '../css/Testimonials.css';

class Testimonials extends Component {
	render() {
		return (
			<Grid>
				<Carousel>
				  <Carousel.Item>
				    <Image width={2000} height={500} alt="2000x500" src="assets/massagePhoto4.jpg" />
				    <Carousel.Caption className="editText">
				      <h3 className="slideOne">First slide label</h3>
				      <p className="slideOne">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <Image width={2000} height={500} alt="2000x500" src="assets/massagePhoto2.jpeg" />
				    <Carousel.Caption className="editText">
				      <h3>Second slide label</h3>
				      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <Image width={2000} height={200} alt="2000x500" src="assets/massagePhoto3.jpeg" />
				    <Carousel.Caption className="editText">
				      <h3>Third slide label</h3>
				      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				</Carousel>
			</Grid>
			);
	}
}

export default Testimonials;