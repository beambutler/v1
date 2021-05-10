import React from 'react';

function Contact() {
	return (
		<section className="relative">
			{/* Illustration behind content */}
			<div
				className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
				aria-hidden="true"
			></div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-20">
					{/* Section header */}
					{/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
						<h2 className="h2 mb-4">How to activate Butler Pass</h2>
						<p className="text-xl text-gray-600" data-aos="zoom-y-out">
							Upon purchase of Beam Butler Butler Pass, send a message on to
							@beambutleradmin on Telegram using the link below for your
							invitation link.
						</p>
					</div> */}

					{/* Testimonials */}
					<div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
						<div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
							{/* Testimonial */}
							<div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
								<div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
									<img
										className="relative rounded-full"
										src={require('../images/beam-butler.jpg').default}
										width="96"
										height="96"
										alt="Testimonial 01"
									/>
								</div>
								<blockquote className="text-xl font-medium mb-4">
									To redeem your invitation link, send your wallet address and a
									screenshot of Butler Pass NFT in your Enjin Wallet to
									@beambutleradmin on Telegram. Please allow up to 24 hours for
									a response.
								</blockquote>
								<cite className="block font-bold text-lg not-italic mb-1">
									@beambutleradmin
								</cite>
								<div className="text-gray-600">
									<a
										className="text-blue-600 hover:underline"
										href="https://telegram.me/beambutleradmin"
									>
										Send message
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
