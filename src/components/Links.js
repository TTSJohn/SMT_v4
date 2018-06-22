import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import '../css/Links.css';

class Links extends Component {
	render() {
		return (
			<Grid>
			<div className="linksText">
			<h3 className="linksText">Links Page</h3>
			<ul>
			<li className="linksText">Link to College</li>
				<ul>
					<li className="linksText">Description Goes Here</li>
				</ul>
			<li className="linksText">Link to Certification</li>
				<ul>
					<li className="linksText">Description Goes Here</li>
				</ul>
			<li className="linksText">Link to Anything</li>
				<ul>
					<li className="linksText">Description Goes Here</li>
				</ul>
			<li className="linksText">Link to Anything</li>
				<ul>
					<li className="linksText">Description Goes Here</li>
				</ul>
			</ul>
			</div>
			</Grid>
			);
	}
}

export default Links;