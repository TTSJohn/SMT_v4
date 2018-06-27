import React, { Component } from 'react';
import { Grid, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SMTMap from './Map';
import '../css/Contact.css';

class Contact extends Component {
	render() {

		return (
			<Grid>
				<div className="contactText">
					<p>Stamford Massage Therapy</p>
					<p>Phone - (203) 290-1830</p>
					<p>Address - 555 Summer St, Stamford, CT 06901</p>
					<Image src="assets/SMT_GoogleMaps.png" className="mapImage" />
					<SMTMap 
					containerElement={<div style={{height:100+'%'}} />}
					mapElement={<div style={{height:100+'%'}} />} />
				</div>
			</Grid>
		
		
			);
	}
}

export default Contact;