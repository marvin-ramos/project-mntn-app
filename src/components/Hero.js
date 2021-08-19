import React from 'react'
import './styles.css';

import HeroContent from './HeroContent';
import WorkContent from './WorkContent';
import FundContent from './FundContent';
import FooterContent from './FooterContent';

import Register from '../images/Register.jpg';
import Transact from '../images/Transact.jpg';
import Tracking from '../images/Tracking.jpg';
import Planting from '../images/Planting.jpg';

const Hero = () => {
	return (
		<>
			<section className='hero-section'>
				<div className="overlay"></div>
				<HeroContent />
				<WorkContent />
			</section>
			<FundContent />
        	<FooterContent />
		</>
	)
}

export default Hero