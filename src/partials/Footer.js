import React, { useState } from 'react';
import Modal from '../utils/Modal';

function Hero() {
	const [videoModalOpen, setVideoModalOpen] = useState(false);

	return (
		<section className="relative">
			{/* Illustration behind hero content */}
			{/* <div
				className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
				aria-hidden="true"
			>
				<svg
					width="1360"
					height="578"
					viewBox="0 0 1360 578"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient
							x1="50%"
							y1="0%"
							x2="50%"
							y2="100%"
							id="illustration-01"
						>
							<stop stopColor="#FFF" offset="0%" />
							<stop stopColor="#EAEAEA" offset="77.402%" />
							<stop stopColor="#DFDFDF" offset="100%" />
						</linearGradient>
					</defs>
					<g fill="url(#illustration-01)" fillRule="evenodd">
						<circle cx="1232" cy="128" r="128" />
						<circle cx="155" cy="443" r="64" />
					</g>
				</svg>
			</div> */}

			<img
				src={require('../images/butler-pass.png').default}
				className="rounded shadow-xl"
				style={{
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: 100,
					marginBottom: -100,
				}}
				width="300"
				height="300"
				alt="Butler Pass"
			/>

			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				{/* Hero content */}
				<div className="pt-32 pb-12 md:pt-40 md:pb-20">
					{/* Section header */}
					<div className="text-center pb-12 md:pb-16">
						{/* <h1
							className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
							data-aos="zoom-y-out"
						>
							Never miss{' '}
							<span
								className="text-5xl md:text-6xl text-blue-100 font-extrabold leading-tighter tracking-tighter mb-4"
								data-aos="zoom-y-out"
							>
								Enjin Beam{' '}
							</span>
							airdrops
						</h1> */}
						<div className="max-w-3xl mx-auto">
							<p
								className="text-xl text-gray-600 mb-8"
								data-aos="zoom-y-out"
								data-aos-delay="150"
							>
								Don't miss out on Enjin Beam airdrops. Get your Butler Pass
								today.
							</p>
							<div
								className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
								data-aos="zoom-y-out"
								data-aos-delay="300"
							>
								<div>
									<a
										className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
										href="https://jumpnet.enjinx.io/eth/asset/7040000000000338"
									>
										Buy a Butler Pass
									</a>
								</div>

								{/* <div>
									<a
										className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
										href="#0"
									>
										Learn more
									</a>
								</div> */}
							</div>
						</div>
					</div>

					{/* Hero image */}
				</div>
			</div>
		</section>
	);
}

export default Hero;
