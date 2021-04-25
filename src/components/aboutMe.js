import React, { Component } from 'react';

class AboutMe extends Component {
	render() {
		return (
			<h1 className = 'aboutMe'>
				<p className = 'pStyle1'> ABOUT ME </p>
				<div className="card-group" id="aboutMe">
					<p className="card" id="aboutMeCards1">

					</p>
					<p className="card" id="aboutMeCards2">
							<p className = 'pStyle4'> I am currently a senior at Cal Poly SLO and about to complete my bachelors in computer science. 
							I enjoy learning and tackling new challenges head on with a plan. In my free time, I play Valorant and Teamfight Tactics. </p>
							<p className = 'pStyle5'> Computer Language Skills: C, Java, Python, HTML, CSS, JavaScript </p>
							<p className = 'pStyle5'> Frameworks: PyQt, React </p>
							<div className = 'btn'>
								<a href = "https://drive.google.com/file/d/16pw58mm5yi-bKcJLgETh_WKD4u6OFG1t/preview" width="100%" height="100%" className="resume" target = "_blank" rel="noopener noreferrer"> View Resume </a>
							</div>
					</p>
				</div>
			</h1>
		);
	}
}

export default AboutMe;
