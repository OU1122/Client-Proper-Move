import React, { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
	const mobileMenuRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	const handleClickOutside = (event: MouseEvent) => {
		if (
			mobileMenuRef.current &&
			!mobileMenuRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.addEventListener("click", handleClickOutside);
		} else {
			document.removeEventListener("click", handleClickOutside);
		}

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [isOpen]);

	const handleMenuClick = (event: React.MouseEvent) => {
		event.stopPropagation();
		setIsOpen((prev) => !prev);
	};

	return (
		<nav className="relative flex justify-between py-8 font-normal transition-all ease-in  text-xl ">
			<div className="left flex">
				<div className="transition-all ease-in hover:scale-[1.05]">
					ProperMove
				</div>
				<ul className="hidden md:flex sm:ml-16 md:gap-3 lg:gap-8 ">
					<Link
						to="/"
						className="transition-all ease-in hover:scale-[1.05]">
						Home
					</Link>
					<Link
						to="/"
						className="transition-all ease-in hover:scale-[1.05]">
						About
					</Link>
					<Link
						to="/"
						className="transition-all ease-in hover:scale-[1.05]">
						Contact
					</Link>
					<Link
						to="/"
						className="transition-all ease-in hover:scale-[1.05]">
						Agents
					</Link>
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
					onClick={handleMenuClick}>
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
				ref={mobileMenuRef}
				id="mobile-menu"
				className={clsx(
					"hidden absolute top-0 -right-[400%] bg-black h-screen w-[60%] justify-center z-40 transition-all ease-in  duration-[400ms]",
					{ "!flex !right-0": isOpen }
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
