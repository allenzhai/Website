import React from 'react';
import websiteImg from "../images/website.png";
import worldImg from "../images/203.png";
import remindImg from "../images/remind.png";
import discordImg from "../images/discord.png";
import robinImg from "../images/robin.png";
import psychifyIMG from "../images/psychify.png";


const Cards = props =>{
	return (
		<div className ="Projects">
			<p className = 'pStyle1'> PROJECTS </p>

			{/* Row 1*/}
			<div className="card-group">
				<a className="card" id="project" href="https://github.com/allenzhai/Robin-Discord-Assistant" target = "_blank" rel="noopener noreferrer">
					<img className="card-img" src={robinImg} alt="" />
					<div className="card-img-overlay">
						<h5 className="card-title">Robin Discord Assitant</h5>
						<p className="card-text">Created RESTful backend to existing API for Github API calls. Used this backend to create Robin over Discord platform along with unit tests. </p>
						<p className="card-text"><small>Javascript, Discord.js, Router, Heroku</small></p>
					</div>
				</a>
				<a className="card" id="project" href="https://github.com/allenzhai/Psychify" target = "_blank" rel="noopener noreferrer">
					<img className="card-img" src={psychifyIMG} alt="" />
					<div className="card-img-overlay">
						<h5 className="card-title">Psychify</h5>
						<p className="card-text">Worked with a team and Psychology students to produce user stories and implemented an online version of DSM-V.</p>
						<p className="card-text">Managed C.I through Travis and</p>
						<p className="card-text"><small>React, Javascript, Travis, Heroku, Jest, Sonarcloud</small></p>
					</div>
				</a>
				<a className="card" id="project" href="https://github.com/allenzhai/HealthBot" target = "_blank" rel="noopener noreferrer">
				<img className="card-img" src={discordImg} alt="" />
					<div className="card-img-overlay">
						<h5 className="card-title">Discord Health Bot</h5>
						<p className="card-text">Event driven bot that sends healthy reminders to a group of unhealthy gamers in a discord channel </p>
						<p className="card-text"><small>Java, JDA, Discord</small></p>
					</div>
				</a>
			</div>
			{/* Row 2*/}
			<div className="card-group">
				<a className="card" id="project" href="https://github.com/allenzhai/Remind-Me" target = "_blank" rel="noopener noreferrer">
					<img className="card-img" src={remindImg} alt="" />
					<div className="card-img-overlay">
						<h5 className="card-title">REMIND ME</h5>
						<p className="card-text">Coproduced an application through Xcode and implemented an account system through Firebase.</p>
						<p className="card-text">Built front end layout based on wireframes created by the design team.</p>
						<p className="card-text"><small>Swift, Firebase</small></p>
					</div>
				</a>
				<a className="card" id="project" href="https://github.com/allenzhai/Small-World-" target = "_blank" rel="noopener noreferrer">
					<img className="card-img" src={worldImg} alt="" />
					<div className="card-img-overlay">
						<h5 className="card-title">SMALL WORLD</h5>
						<p className="card-text">Created custom model images and formulated cohesive classes for smooth interactions between characters. </p>
						<p className="card-text"> Changed inital Single-Step pathing algorithm into A* pathing to make characters move smarter </p>
						<p className="card-text"><small>Java</small></p>
					</div>
				</a>
				<a className="card" id="project" href="https://github.com/allenzhai/Website" target = "_blank" rel="noopener noreferrer">
				<img className="card-img" src={websiteImg} alt="" />
					<div className="card-img-overlay">
						<h5 className="card-title">PERSONAL WEBSITE</h5>
						<p className="card-text">Designed and created an accessible portfolio using Bootstrap and React to display my personal projects and resume. </p>
						<p className="card-text"><small>HTML, CSS, JavaScript, React, Bootstrap</small></p>
					</div>
				</a>
			</div>
		</div>
	);
}

export default Cards;
