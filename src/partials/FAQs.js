import React from 'react';

function FAQs() {
	return (
		<section className="relative">
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div
				className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0"
				aria-hidden="true"
			></div>

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-20">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
						<h2 className="h2 mb-4">FAQs</h2>
						<p className="text-xl text-gray-600">Got questions? We got you.</p>
					</div>

					{/* Items */}
					<div className="max-w-sm mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-1 items-start md:max-w-2xl lg:max-w-none">
						{/* 1st item */}
						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">
								Why Beam Butler?
							</h4>
							<p className="text-gray-600 text-center">
								Beam Butler is 100% automated and sends a Telegram broadcast
								within seconds of detecting an Enjin Beam QR code. With Beam
								Butler, there's no need to scan or upload a screenshot on the
								Enjin Wallet. All you have to do is click the broadcasted link
								to claim the airdrop.
							</p>
						</div>

						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">
								What happens if I transfer my Access Card to another address?
							</h4>
							<p className="text-gray-600 text-center">
								The new owner must send a message to Beam Butler Admin to claim
								a new invitation link. The previous owner will be removed from
								the Telegram channel.
							</p>
						</div>
						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">
								What happens if multiple people clicks an invitation link?
							</h4>
							<p className="text-gray-600 text-center">
								The invitation link sent by Beam Butler Admin expires after
								single-use. This prevents multiple people using the same Access
								Card.
							</p>
						</div>
						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">
								How many Twitter accounts does Beam Butler monitor?
							</h4>
							<p className="text-gray-600 text-center">
								Beam Butler works 24/7 and monitors more than 30 Enjin-related
								accounts on Twitter that could possibly drop QR codes.
							</p>
						</div>
						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">
								Will Beam Butler support future Enjin games and projects?
							</h4>
							<p className="text-gray-600 text-center">
								Whenever a new Enjin project or game is published, their Twitter
								handle is added to the accounts monitored by Beam Butler.
							</p>
						</div>
						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">
								Is Beam Butler made by Enjin?
							</h4>
							<p className="text-gray-600 text-center">
								Beam Butler is a service made by a third-party and not by Enjin.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FAQs;
