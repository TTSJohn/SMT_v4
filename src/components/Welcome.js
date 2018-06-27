import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import '../css/Welcome.css'

class Welcome extends Component {
	render() {
		return (
			<Grid>
				<Jumbotron>
					<h2 className="jumboText">Welcome to Stamford Massage Therapy</h2>
					<p className="jumboText2">The Massage Therapy Provider You Can Trust</p>
				</Jumbotron>
				<Row>
					<Col xs={12} sm={6}>
						<Image width={300} height={200} src="assets/massageWelcomeRightFacing.jpg" className="welcomeImageOne" />
					</Col>
					<Col xs={12} sm={6}>
						<div className="welcomeText">
						<p>Throughout the years I have been in business, Stamford Massage Therapy has become the preferred massage therapy provider for many people in the area. Situated in Stamford, CT I am a sports massage therapist offering</p>
						<ul>
						 <li>Lymphatic Drainage</li> <li>Deep Tissue Massage</li> <li>Trigger Point Therapy</li> <li>Aromatherapy</li> <li>And More Massage Modalities</li> <p>With me as your trusted therapist you will receive countless benefits, some of which you find here.</p>
				        </ul>
				        <p>Recent studies showcase that such therapies can help you deal with</p>
				        <ul>
				         <li>Chronic Pain</li> <li>Heal Injuries</li> <li>Stress Relief</li>
				         </ul>
						</div>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={8}>
						<div className="welcomeText2">
				        <p>Why choose my studio and services?</p>
				        <p>In business for more than 10 years, my massage therapy office has professionally served many people with different conditions. What makes me a unique Licensed Massage Therapist has more to it than the guaranteed pain and stress relieving effect of each session I provide. I also offer reasonable rates, honest advice, and check in with all of my clients post session.</p>				        
        				</div>
        			</Col>
        			<Col xs={12} sm={4}>
        				<Image src="assets/massageWelcomeLeftFacing.jpeg" />
        			</Col>
        		</Row>		
			</Grid>
			);
	}
}

export default Welcome;