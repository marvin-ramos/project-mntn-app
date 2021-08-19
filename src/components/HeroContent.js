import React from 'react';
import './styles.css';
import { 
	FaRegWindowMinimize,
	FaFacebook,
	FaTwitterSquare,
	FaInstagram
} from "react-icons/fa";

const HeroContent = () => {
	return (
		<>
			<div className="hero-container">
				<p className="hero-sub-title">
					<span><FaRegWindowMinimize /></span> crypto.for.a.better.tomorrow
				</p>

				<div className="hero-title-container">
					<div className="follow-wrapper">
						<ul>
							<li className="follow-us"><a href="#">Follow</a></li>
							<li>
								<a href="#">
									<FaFacebook />
								</a>
							</li>
							<li>
								<a href="#">
									<FaTwitterSquare />
								</a>
							</li>
							<li>
								<a href="#">
									<FaInstagram />
								</a>
							</li>
						</ul>
					</div>
					<div className="hero-title-wrapper">
						<h1 className="hero-title-main">Reduce your carbon footprint by using crypto.</h1>
						<p className="hero-title-main-subtitle">Scroll Down <span><i class="fas fa-arrow-down"></i></span></p> 
					</div>
					<div className="start-wrapper">
						<ul>
							<li>
								<a href="#">Start</a>
							</li>
							<li>
								<a href="#">01</a>
							</li>
							<li>
								<a href="#">02</a>
							</li>
							<li>
								<a href="">03</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default HeroContent