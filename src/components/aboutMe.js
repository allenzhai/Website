import React, { Component } from 'react';

class AboutMe extends Component {
	render() {
		return (
				<h1 className = 'aboutMe'>
				<p className = 'pStyle1'> ABOUT ME </p>
				<div className = 'container'>
					<p className = 'pStyle4'> A goal-oriented undergraduate with proven skills in Python, Java, and C,
					seeking to contribute impactful ideas and solutions as a software engineer. </p>
					<p className = 'pStyle5'> Computer Language Skills: C, Java, Python, HTML, CSS, JavaScript </p>
					<p className = 'pStyle5'> Frameworks: PyQt, React </p>
					<div className = 'btn'>
						<a href = '/resume' className="resume" target = "_blank" rel="noopener noreferrer"> View Resume </a>
					</div>
				</div>
				</h1>
		);
	}
}

export default AboutMe;
