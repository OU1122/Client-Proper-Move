const HomePage: React.FC = () => {
	return (
		<div className="flex w-full h-screen mt-20 ">
			<div className="text-div w-[60%] pr-[50px]">
				<div>
					<h1 className="text-4xl font-bold leading-snug pt-32">
						Find Your Dream Place Faster Than You Can Say Zoopla
					</h1>
					<p className="pt-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Itaque illo dicta, esse ut aut repellat quisquam est accusamus
						doloribus harum explicabo nemo at. Atque, deleniti a dolorem
						enim quae non!
					</p>
				</div>
				<div>Searchbox</div>
				<div className="flex justify-between mt-10 flex-wrap gap-5 sm:gap-0">
					<div className="flex flex-col basis-1/3 ">
						<span className="font-bold text-4xl tracking-wider">16+</span>
						<span className=" text-lg font-light">
							Years of Experience
						</span>
					</div>
					<div className="flex flex-col basis-1/3">
						<span className="font-bold text-4xl tracking-wider">
							200+
						</span>
						<span className=" font-light text-lg">Awards Earned</span>
					</div>
					<div className="flex flex-col basis-1/3">
						<span className="font-bold text-4xl tracking-wider">
							1200+
						</span>
						<span className="text-lg font-light">
							Flats Ready for Purchase
						</span>
					</div>
				</div>
			</div>
			<div className="img-div relative grow w-[40%] ">
				<img
					className="w-full absolute top-0 right-0"
					src="/bg.png"></img>
			</div>
		</div>
	);
};

export default HomePage;
