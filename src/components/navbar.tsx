import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import clsx from "clsx";

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	console.log(isOpen);
	return (
		<nav className="relative flex justify-between py-8 font-medium transition-all ease-in  text-2xl ">
			<div className="left flex">
				<div className="transition-all ease-in hover:scale-[1.05]">
					ProperMove
				</div>
				<ul className="hidden md:flex sm:ml-7 md:gap-3 lg:gap-7 ">
					<a
						href="/"
						className="transition-all ease-in hover:scale-[1.05]">
						Home
					</a>
					<a
						href="/"
						className="transition-all ease-in hover:scale-[1.05]">
						About
					</a>
					<a
						href="/"
						className="transition-all ease-in hover:scale-[1.05]">
						Contact
					</a>
					<a
						href="/"
						className="transition-all ease-in hover:scale-[1.05]">
						Agents
					</a>
				</ul>
			</div>
			<div className="right flex  items-center gap-7  ">
				<div className="hidden md:block transition-all ease-in hover:scale-[1.05]">
					<a
						href="/"
						className="">
						Sign in
					</a>
				</div>
				<div className="hidden md:block transition-all ease-in hover:scale-[1.05]">
					<a
						href="/"
						className="bg-yellow-400 px-4 py-2 rounded-2xl">
						Sign up
					</a>
				</div>
				<div
					className="z-50 md:hidden"
					onClick={() => setIsOpen((prev) => !prev)}>
					<div
						id="mobile-menu-icon"
						className={clsx(
							"text-black text-3xl absolute right-0 top-8 pr-5",
							{ "!text-white": isOpen }
						)}>
						<FiMenu />
					</div>
				</div>
			</div>
			<div
				id="mobile-menu"
				className={clsx(
					"md:hidden absolute top-0 -right-[100%] flex bg-black h-screen w-[60%] justify-center z-40 transition-all ease-in  duration-[400ms]",
					{ "!right-0": isOpen }
				)}>
				<nav className="text-white leading-loose tracking-wide text-xl flex flex-col items-center justify-center gap-7 ">
					<a href="/">Home</a>
					<a href="/">About</a>
					<a href="/">Contact</a>
					<a href="/">Agents</a>
					<a href="/">Sign in</a>
					<a
						href="/"
						className="">
						Sign up
					</a>
				</nav>
			</div>
		</nav>
	);
};
export default Navbar;
