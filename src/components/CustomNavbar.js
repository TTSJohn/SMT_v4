import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/CustomNavbar.css';

class CustomNavbar extends Component {
	render() {
		return (
			<Navbar default collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">Stamford Massage Therapy</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
						<NavItem>
							Phone - (203) 290-1830
						</NavItem>
							<NavItem eventKey={1} componentClass={Link} href="/" to="/" className="editNavText">
							Welcome
						</NavItem>
							<NavItem eventKey={2} componentClass={Link} href="/meetthestaff" to="/meetthestaff">
							Meet The Staff
						</NavItem>
							<NavItem eventKey={3} componentClass={Link} href="/testimonials" to="/testimonials">
							Testimonials
						</NavItem>
							<NavItem eventKey={4} componentClass={Link} href="/contact" to="/contact">
							Contact Us
						</NavItem>
						</Nav>
					</Navbar.Collapse>
			</Navbar>
			);
	}
}

export default CustomNavbar;