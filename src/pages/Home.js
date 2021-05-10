import React from 'react';

import Header from '../partials/Header';
import Hero from '../partials/Hero';
import FeaturesHome from '../partials/Features';
import FAQs from '../partials/FAQs';
import About from '../partials/About';
import Contact from '../partials/Contact';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Home() {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			{/* <Header /> */}
			<main className="flex-grow">
				<Hero />
				{/* <FeaturesHome /> */}
				<About />
				<Contact />
				<FAQs />
				{/* <Newsletter /> */}
			</main>
			<Footer />
		</div>
	);
}

export default Home;
