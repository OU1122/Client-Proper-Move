import SearchBox from "../components/searchBox";
import ShapedImage from "../components/shapedImage";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
	return (
		<div className="relative flex flex-col-reverse md:flex-row m-5 sm:m-6  ">
			<div className="px-4 text-div w-full md:w-[60%] md:pr-[50px] mt-[150px] md:mt-0">
				<div className="relative">
					<h1 className="text-4xl font-bold leading-snug pt-10">
						Find Your Dream Place Faster Than You Can Say Zoopla
					</h1>
					<p className="pt-5">
						Unlock a new chapter - make home ownership make sense. Search
						our extensive and up-to-date database of listings below.
						Remember, you can contact the owner of the property directly
						with our integrated messaging tool.
					</p>
				</div>

				<SearchBox />

				<div className="flex justify-between mt-5 flex-wrap gap-1 md:gap-3 pb-10">
					<div className="flex flex-col w-[30%] p-0 md:p-2 flex-wrap">
						<span className="font-bold text-xl md:text-4xl tracking-wider">
							16+
						</span>
						<span className=" text-lg font-normal w-full">
							Years of Experience 💼
						</span>
					</div>
					<div className="flex flex-col w-[30%] p-0 md:p-2">
						<span className="font-bold text-xl md:text-4xl tracking-wider ">
							200+
						</span>
						<span className=" font-normal text-lg">Awards Earned 🏆</span>
					</div>
					<div className="flex flex-col w-[30%] p-0 md:p-2">
						<span className="font-bold text-xl md:text-4xl tracking-wider">
							1200+
						</span>
						<span className="text-lg font-normal">
							Properties Available 🏡
						</span>
					</div>
				</div>
			</div>
			<div className="relative h-auto  w-full md:w-[40%] flex justify-center">
				<Link to="https://proper-move.netlify.app/list?type=buy&city=&property=house&minPrice=0&maxPrice=0&bedroom=1">
					<div className="absolute top-0 left-0 md:left-10 ">
						<ShapedImage
							size="normal"
							imgUrl="/r1.png"
						/>
					</div>
				</Link>
				<Link to="https://proper-move.netlify.app/list?type=buy&city=&property=house&minPrice=0&maxPrice=0&bedroom=1">
					<div className="absolute top-0 left-16 md:top-[150px] md:left-[120px]">
						<ShapedImage
							size="big"
							imgUrl="/img2.jpeg"
						/>
					</div>
				</Link>

				<Link to="https://proper-move.netlify.app/list?type=buy&city=&property=house&minPrice=0&maxPrice=0&bedroom=1">
					<div className="absolute top-0 left-32 md:top-[400px] md:left-[300px] ">
						<ShapedImage
							size="normal"
							imgUrl="/img3.jpeg"
						/>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
