export default function AboutSection() {

	const aboutData = [
		{
			id: 0,
			imagePath: "url(/images/you-order-we-deliver.jpg)",
			title: "You order, we deliver",
			subtitle: "Gently handle delivery process not a like others",
		},
		{
			id: 1,
			imagePath: "url(/images/global-shipping.jpg)",
			title: "Global Shipping",
			subtitle: "We take care of all taxes and customs processing for you",
		},
		{
			id: 2,
			imagePath: "url(/images/tajeer-card.jpg)",
			title: "Tajeer Card",
			subtitle: "This exclusive card will make you feel like an ancient Silk Road merchant",
		},
	];

  return (
    <>
      <div className="flex flex-col gap-12 px-8 py-6 bg-tjrpale mx-3 rounded-3xl">
		{aboutData.map((about) => (
			<div key={about.id} className={`flex flex-col ${about.id % 2 !== 0 ? `md:flex-row-reverse` : `md:flex-row`}  justify-between items-center gap-5`}>
				<div className="flex flex-col w-full md:w-1/2 gap-2">
					<div className="text-2xl text-white">
						{about.title}
					</div>
					<div className="text-lg text-white/60">
						{about.subtitle}
					</div>
				</div>
				<div className="w-full md:w-2/4 h-72 border border-tjryellow rounded-xl bg-cover bg-center" style={{ backgroundImage: about.imagePath }}></div>
			</div>
		))}
      </div>
    </>
  );
}
