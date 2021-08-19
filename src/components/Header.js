import React from 'react';
import Logo from '../images/Logo.png';
import { FaAngleDoubleDown } from "react-icons/fa";
import './styles.css';

const Header = () => {
	return (
		<>
			<header>
				<div className="container">
					<input type="checkbox" className="check" />
					<div className="logo-container">
						<img className="logo" src={Logo} />
					</div>
					<div className="nav-btn">
						<div className="nav-links">
							<ul>
								<li className="nav-link">
									<a href="/">About Us</a>
								</li>
								<li className="nav-link">
									<a href="/">Projects</a>
								</li>
								<li className="nav-link">
									<a href="/">Services <FaAngleDoubleDown className="dropdown-icon"/></a>
									<div className="dropdown">
										<ul>
											<li className="dropdown-link">
												<a href="/">Become a Partner</a>
											</li>
											<li className="dropdown-link">
												<a href="/">Sponsor Us</a>
											</li>
											<div className="arrow"></div>
										</ul>
									</div>
								</li>
								<li className="nav-link">
									<a href="/">Join Us <FaAngleDoubleDown className="dropdown-icon"/></a>
									<div className="dropdown">
										<ul>
											<li className="dropdown-link">
												<a href="/">Member</a>
											</li>
											<li className="dropdown-link">
												<a href="/">Volunteer</a>
											</li>
											<li className="dropdown-link">
												<a href="/">Fundraise</a>
											</li>
											<div className="arrow"></div>
										</ul>
									</div>
								</li>
								<li className="nav-link">
									<a href="/">Updates <FaAngleDoubleDown className="dropdown-icon"/></a>
									<div className="dropdown">
										<ul>
											<li className="dropdown-link">
												<a href="/">Upcoming</a>
											</li>
											<li className="dropdown-link">
												<a href="/">Accomplishments</a>
											</li>
											<li className="dropdown-link">
												<a href="/">Stories</a>
											</li>
											<div className="arrow"></div>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="hamburger-menu-container">
						<div className="hamburger-menu">
							<div></div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header