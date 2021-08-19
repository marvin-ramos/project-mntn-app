import React from 'react'
import './styles.css';

const FooterContent = () => {
	return (
		<>
			<footer>
				<div className="footer-wrap">
					<div className="footer-links-container">
						<div className="footer-links-wrapper">
							<div className="footer-links-item-content">
								<h1 className="footer-link-h1">MNTN</h1>
								<h2 className="footer-link-h2">Get out there & discover your next slope, mountain & destination</h2>
								<p className="footer-link-p">Copyright 2019 MNTN, Inc, Terms & Privacy</p>
							</div>
						</div>
						<div className="footer-links-wrapper">
							<div className="footer-link-items">
								<h1 className="footer-link-title">More on The Blog</h1>
								<div className="footer-link">
									<ul>
										<li>
											<a href="/">About MNTN</a>
										</li>
										<li>
											<a href="/">Contributors & Writers</a>
										</li>
										<li>
											<a href="/">Write For us</a>
										</li>
										<li>
											<a href="/">Contact Us</a>
										</li>
										<li>
											<a href="/">Privacy Policy</a>
										</li>
									</ul>	
								</div>	
							</div>
							<div className="footer-link-items">
								<h1 className="footer-link-title">More on MNTN</h1>
								<div className="footer-link">
									<ul>
										<li>
											<a href="/">The Team</a>
										</li>
										<li>
											<a href="/">Jobs</a>
										</li>
										<li>
											<a href="/">Press</a>
										</li>
									</ul>	
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default FooterContent