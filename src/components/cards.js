import React from 'react';
import websiteImg from "../images/website.png";
import worldImg from "../images/203.png";
import remindImg from "../images/remind.png";

const Cards = props =>{
	return (
		<div className ="Projects">
			<p className = 'pStyle1'> PROJECTS </p>

			{/* Row 1*/}
			<div className="card-group">
				<a className="card" id="card1" href="http://www.allenzhai.tk" target = "_blank" rel="noopener noreferrer">
				<img className="card-img" src={websiteImg} alt="" />
					<div className="card-img-overlay">
						<h5 className="card-title">PERSONAL WEBSITE</h5>
						<p className="card-text">Designed and coded an accessible platform using bootstrap to display personal projects and resume. Utilized Github to host a free domain</p>
						<p className="card-text"><small>HTML, CSS, JavaScript, React, Bootstrap</small></p>
					</div>
				</a>
				<a className="card" id="card2" href="https://github.com/allenzhai/Small-World-" target = "_blank" rel="noopener noreferrer">
					<img className="card-img" src={worldImg} alt="" />
					<div className="card-img-overlay">
						<h5 className="card-title">SMALL WORLD</h5>
						<p className="card-text">Created custom model images and formulated cohesive class structures for smooth interactions between characters. </p>
						<p className="card-text"><small>Java</small></p>
					</div>
				</a>
				<a className="card" id="card3" href="https://github.com/allenzhai/Remind-Me" target = "_blank" rel="noopener noreferrer">
					<img className="card-img" src={remindImg} alt="" />
					<div className="card-img-overlay">
						<h5 className="card-title">REMIND ME</h5>
						<p className="card-text">Coproduced an application as lead developer through Xcode and implemented an account system through Firebase.Built front end layout based on wireframes created by the design team.</p>
						<p className="card-text"><small>Swift, Firebase</small></p>
					</div>
				</a>
			</div>

			{/* Row 2*/}
			<div className="card-group">
				<a className="card" id="card2" href="https://github.com/allenzhai/Small-World-" target = "_blank" rel="noopener noreferrer">
					<img className="card-img" src={worldImg} alt="" />
					<div className="card-img-overlay">
						<h5 className="card-title">SMALL WORLD</h5>
						<p className="card-text">Created custom model images and formulated cohesive class structures for smooth interactions between characters. </p>
						<p className="card-text"><small>Java</small></p>
					</div>
				</a>
				<a className="card" id="card1" href="http://www.allenzhai.tk" target = "_blank" rel="noopener noreferrer">
				<img className="card-img" src={websiteImg} alt="" />
					<div className="card-img-overlay">
						<h5 className="card-title">PERSONAL WEBSITE</h5>
						<p className="card-text">Designed and coded an accessible platform using bootstrap to display personal projects and resume. Utilized Github to host a free domain</p>
						<p className="card-text"><small>HTML, CSS, JavaScript, React, Bootstrap</small></p>
					</div>
				</a>
				<a className="card" id="card3" href="https://github.com/allenzhai/Remind-Me" target = "_blank" rel="noopener noreferrer">
					<img className="card-img" src={remindImg} alt="" />
					<div className="card-img-overlay">
						<h5 className="card-title">REMIND ME</h5>
						<p className="card-text">Coproduced an application as lead developer through Xcode and implemented an account system through Firebase.Built front end layout based on wireframes created by the design team.</p>
						<p className="card-text"><small>Swift, Firebase</small></p>
					</div>
				</a>
			</div>
		</div>
	);
}

export default Cards;
