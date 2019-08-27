import React from 'react';
import websiteImg from "../images/website.png";
import worldImg from "../images/203.png";
import remindImg from "../images/remind.png";
import tttImg from "../images/TTT.png";
import toolsImg from "../images/tools.png";


const Cards = props =>{
	return (
		<div className ="Projects">
			<p className = 'pStyle1'> PROJECTS </p>

			{/* Row 1*/}
			<div className="card-group">
				<a className="card" id="project" href="https://github.com/allenzhai/Website" target = "_blank" rel="noopener noreferrer">
				<img className="card-img" src={websiteImg} alt="" />
					<div className="card-img-overlay">
						<h5 className="card-title">PERSONAL WEBSITE</h5>
						<p className="card-text">Designed and created an accessible portfolio using Bootstrap and React to display my personal projects and resume. </p>
						<p className="card-text"><small>HTML, CSS, JavaScript, React, Bootstrap</small></p>
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
				<a className="card" id="projecy" href="https://github.com/allenzhai/Remind-Me" target = "_blank" rel="noopener noreferrer">
					<img className="card-img" src={remindImg} alt="" />
					<div className="card-img-overlay">
						<h5 className="card-title">REMIND ME</h5>
						<p className="card-text">Coproduced an application through Xcode and implemented an account system through Firebase.</p>
						<p className="card-text">Built front end layout based on wireframes created by the design team.</p>
						<p className="card-text"><small>Swift, Firebase</small></p>
					</div>
				</a>
			</div>

			{/* Row 2*/}
			<div className="card-group">
				<a className="card" id="project" href="https://github.com/allenzhai/TicTacToe" target = "_blank" rel="noopener noreferrer">
				<img className="card-img" src={tttImg} alt="" />
					<div className="card-img-overlay">
						<h5 className="card-title">UNBEATABLE TIC TAC TOE</h5>
						<p className="card-text">Created a G.U.I using PyQt 5</p>
						<p className="card-text"> Learned and implemented the Minimax algorithm to make the best possible move for each turn</p>
						<p className="card-text"><small>Python, PyQt</small></p>
					</div>
				</a>
				<a className="card" id="project" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target = "_blank" rel="noopener noreferrer">
					<img className="card-img" src={toolsImg} alt="" />
					<div className="card-img-overlay">
					</div>
				</a>
				<a className="card" id="project" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target = "_blank" rel="noopener noreferrer">
					<img className="card-img" src={toolsImg} alt="" />
					<div className="card-img-overlay">
					</div>
				</a>
			</div>
		</div>
	);
}

export default Cards;
