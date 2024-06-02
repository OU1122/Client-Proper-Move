import SearchBox from "../components/searchBox";

const HomePage: React.FC = () => {
	return (
		<div className="flex flex-col-reverse sm:flex-row m-10  ">
			<div className="text-div w-full sm:w-[60%] pr-[50px]">
				<div>
					<h1 className="text-4xl font-bold leading-snug pt-10 sm:pt-32">
						Find Your Dream Place Faster Than You Can Say Zoopla
					</h1>
					<p className="pt-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Itaque illo dicta, esse ut aut repellat quisquam est accusamus
						doloribus harum explicabo nemo at. Atque, deleniti a dolorem
						enim quae non!
					</p>
				</div>

				<SearchBox />

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
			<div className=" sm:relative h-auto w-full sm:w-[40%] flex justify-center ">
				<img
					className="w-[300px] sm:w-full sm:absolute sm:top-0 sm:right-0"
					src="/bg.png"></img>
			</div>
		</div>
	);
};

export default HomePage;
