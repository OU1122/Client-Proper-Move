import { useContext } from "react";
import SearchBox from "../components/searchBox";
import { AuthContext } from "../context/authContext";

const HomePage: React.FC = () => {
	const { currentUser } = useContext(AuthContext);

	return (
		<div className="flex flex-col-reverse sm:flex-row m-10  ">
			<div className="text-div w-full sm:w-[60%] md:pr-[50px]">
				<div className="relative">
					<h1 className="text-4xl font-bold leading-snug pt-10 sm:pt-24">
						Find Your Dream Place Faster Than You Can Say Zoopla
					</h1>
					<p className="pt-5">
						Unlock a new chapter - make home ownership make sense. Search
						our extensive and up-to-date database of listings below.
						Remember, you can contact the owner of the property directly
						with our integrated messaging tool.
					</p>

					<div className=" -z-50 bg-[#f8dbf1] absolute top-[-3rem] left-[25rem] h-[20rem] w-[20rem] rounded-full blur-[15rem]"></div>
				</div>

				<SearchBox />

				<div className="flex justify-between mt-5 flex-wrap gap-5 sm:gap-0">
					<div className="flex flex-col basis-1/3 p-2 ">
						<span className="font-bold text-4xl tracking-wider">16+</span>
						<span className=" text-lg font-normal">
							Years of Experience 💼
						</span>
					</div>
					<div className="flex flex-col basis-1/3 p-2">
						<span className="font-bold text-4xl tracking-wider ">
							200+
						</span>
						<span className=" font-normal text-lg">Awards Earned 🏆</span>
					</div>
					<div className="flex flex-col basis-1/3 p-2">
						<span className="font-bold text-4xl tracking-wider">
							1200+
						</span>
						<span className="text-lg font-normal">
							Properties Available 🏡
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
