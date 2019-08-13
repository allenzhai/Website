import React, { Component } from 'react';
import email from "../images/emailicon.svg";
import git from "../images/githubicon.png";
import linked from "../images/linkedinicon.png";

class Foot extends Component {
	render() {
		return (
			<h1 className="foot">
					<a className="icon" href="https://github.com/allenzhai" target = "_blank" rel="noopener noreferrer">
						<img className="icon-img" src={git} alt="" />
					</a>
					<a className="icon" href="mailto:allenzhai730@gmail.com" target = "_blank" rel="noopener noreferrer">
						<img className="icon-img" src={email} alt="" />
					</a>
					<a className="icon"href="https://www.linkedin.com/in/allenzhai/" target = "_blank" rel="noopener noreferrer">
						<img className="icon-img" src={linked} alt="" />
					</a>
			</h1>
		);
	}
}

export default Foot;
