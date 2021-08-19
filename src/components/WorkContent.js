import React from 'react';
import './styles.css';

const WorkContent = () => {
	return (
		<>
			<div className="how-it-works-container">
				<div className="how-it-works-wrapper">
					<div className="how-it-works-items">
						<div className="how-it-works-img register">
							<h1 className="how-it-works-title">Register</h1>
						</div>
						<div className="how-it-works-items-description">
							<p>Register your existing Bitcoin Wallet Address</p>
						</div>
					</div>
					<div className="how-it-works-items">
						<div className="how-it-works-img transact">
							<h1 className="how-it-works-title">Transact</h1>
						</div>
						<div className="how-it-works-items-description">
							<p>Make transactions using the registered Bitcoin Wallet</p>
						</div>
					</div>
					<div className="how-it-works-items">
						<div className="how-it-works-img tracking"> 
							<h1 className="how-it-works-title">Tracking</h1>
						</div>
						<div className="how-it-works-items-description">
							<p>Coinserves will track down your transactions using the registered Bitcoin Wallet</p>
						</div>
					</div>
					<div className="how-it-works-items">
						<div className="how-it-works-img planting">
							<h1 className="how-it-works-title">Planting</h1>
						</div>
						<div className="how-it-works-items-description">
							<p>Coinserves will plant trees based on the corresponding number of transactions you make</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default WorkContent