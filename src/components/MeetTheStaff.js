import React, { Component } from 'react';
import { Grid, Image, Media, Row, Col } from 'react-bootstrap';
import '../css/MeetTheStaff.css';

class MeetTheStaff extends Component {
	render() {
		return (
			<div>
			<Image src="assets/massagePhoto.jpg" className="meetStaffImage" />
				<Grid>
					<Col xs={12} sm={8} smOffset={2}>
					<Image src="assets/moana.jpg" className="courtney-profile-pic" rounded />
					<h3>Courtney Slocum</h3>
					<p>Courtney Slocum is a New York State, Connecticut and Nationally Certified Massage Therapist. She is a New York native, and attended both The Swedish Institute and The Fingers Lakes School of Massage Therapy. In Private practice for over 9 years, Courtney is able to offer a unique massage experience to her clients. Some of the things that set her apart from other Massage Therapists is her ability to look at the body as a whole. Courtney performs Postural Assesments, Orthopedic Assesments, and some other testing techniques to help find the root cause of her clients pain. Specalizing in Neuromuscular Therapy has allowed Courtney to bring a true Medical experience to Stamford Massage Therapy. If Medical Massage is not what you're requiring, Courtney is also very skilled at Swedish Massage, Deep Tissue, Strength and Conditioning, and can help to provide relaxation for any client. </p>
					</Col>
				</Grid>
				<Grid>
					<Row className="employees">
						<Col xs={12} sm={4} className="employee-wrapper">
							<Image src="assets/indiana_jones.jpeg" rounded className="employee-profile-pic" />
							<h3>Employee 1</h3>
							<p>Lorem ipsum dolor sit amet, duis aliquid vis ei, ad salutatus signiferumque sea. Ei viris quando partiendo sit. Eos duis phaedrum ne, in ignota oportere accommodare est, at graecis nusquam singulis duo. Vis cu aliquam fastidii perfecto, has at habemus perpetua. Probatus inimicus dignissim eu mea.</p>
						</Col>
						<Col xs={12} sm={4} className="employee-wrapper">
							<Image src="assets/silviodante.jpg" rounded className="employee-profile-pic" />
							<h3>Employee 2</h3>
							<p>Lorem ipsum dolor sit amet, duis aliquid vis ei, ad salutatus signiferumque sea. Ei viris quando partiendo sit. Eos duis phaedrum ne, in ignota oportere accommodare est, at graecis nusquam singulis duo. Vis cu aliquam fastidii perfecto, has at habemus perpetua. Probatus inimicus dignissim eu mea.</p>
						</Col>
						<Col xs={12} sm={4} className="employee-wrapper">
							<Image src="assets/bootleg_shaggy.jpg" rounded className="employee-profile-pic" />
							<h3>Shaggy The Massage Dog</h3>
							<p>Lorem ipsum dolor sit amet, duis aliquid vis ei, ad salutatus signiferumque sea. Ei viris quando partiendo sit. Eos duis phaedrum ne, in ignota oportere accommodare est, at graecis nusquam singulis duo. Vis cu aliquam fastidii perfecto, has at habemus perpetua. Probatus inimicus dignissim eu mea.</p>
						</Col>
					</Row>
				</Grid>
			</div>
			);
	}
}

export default MeetTheStaff;