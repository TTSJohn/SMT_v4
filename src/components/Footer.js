import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import '../css/Footer.css';


class Footer extends Component {
	render() {
		return (
			<div>
            <div className='phantom' />
            <div className='style'>
            <Row>
            <div className='footerText'>
            <Col xs={8} sm={6}>
            	<p>Stamford Massage Therapy</p>
            </Col>
            <Col xs={8} sm={6}>
            	<Link to="/links">
            		<p>Links</p>
            	</Link>
            </Col>
          
            </div>
            </Row>
            </div>
        </div>
        
			);
		}
	}

export default Footer;