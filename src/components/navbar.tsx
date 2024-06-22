import React, { useState, useRef, useEffect, useContext } from "react";
import { FiMenu } from "react-icons/fi";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar: React.FC = () => {
	const mobileMenuRef = useRef<HTMLDivElement | null>(null);
	const [isOpen, setIsOpen] = useState<false | true>(false);

	const { currentUser } = useContext(AuthContext);

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
		<nav className="relative flex justify-between items-center py-6 font-normal transition-all ease-in  text-xl ">
			<div className="left flex">
				<div className="flex items-center justify-center">
					<Link to="/">
						<span className="font-bold tracking-wide text-emerald-500">
							Proper Move
						</span>
					</Link>
				</div>
				<ul className="hidden md:flex sm:ml-16 md:gap-3 lg:gap-8 ">
					<Link
						to="/"
						className="transition-all ease-in hover:underline hover:bg-gray-100/85 rounded-lg px-1 py-1 underline-offset-2  decoration-emerald-500">
						Home
					</Link>
					<Link
						to="/list?type=buy&city=&property=apartment&minPrice=0&maxPrice=0&bedroom=1"
						className="transition-all ease-in hover:underline hover:bg-gray-100/85 rounded-lg px-1 py-1 underline-offset-2  decoration-emerald-500">
						Buy
					</Link>
					<Link
						to="list?type=rent&city=&property=apartment&minPrice=0&maxPrice=0&bedroom=1"
						className="transition-all ease-in hover:underline hover:bg-gray-100/85 rounded-lg px-1 py-1 underline-offset-2  decoration-emerald-500">
						Rent
					</Link>
					<Link
						to="/"
						className="transition-all ease-in hover:underline hover:bg-gray-100/85 rounded-lg px-1 py-1 underline-offset-2  decoration-emerald-500">
						Agents
					</Link>
				</ul>
			</div>
			<div className="right flex  items-center gap-7  ">
				{!currentUser ? (
					<>
						<div className="hidden md:block transition-all ease-in hover:scale-[1.05]">
							<Link
								to="/login"
								className="">
								Sign in
							</Link>
						</div>
						<div className="hidden md:block transition-all ease-in hover:scale-[1.05]">
							<Link
								to="/register"
								className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-2xl text-white">
								Sign up
							</Link>
						</div>
					</>
				) : (
					<div className="flex flex-row gap-4 pr-10 md:pr-2 items-center justify-center">
						<Link to="/profile">
							<div className="flex flex-row gap-4 py-2 px-4 bg-white rounded-lg hover:shadow-md ease-in transition-all">
								<img
									className=" w-8 h-8 rounded-full object-cover"
									src={currentUser.avatar || "/avatar.jpg"}></img>

								<span className="hidden md:block">
									{currentUser.username}
								</span>
							</div>
						</Link>
						<Link
							className="relative hidden md:block bg-emerald-500 hover:bg-emerald-600 transition-all hover:shadow-md ease-in px-4 py-2 rounded-lg"
							to="/profile">
							<span className="text-white">Profile</span>
							<div
								className="flex items-center justify-center text-sm w-5 h-5 text-white absolute -top-1 -right-1 rounded-full bg-red-500
						">
								3
							</div>
						</Link>
					</div>
				)}

				<div
					className="z-50 md:hidden"
					onClick={handleMenuClick}>
					<div
						id="mobile-menu-icon"
						className={clsx(
							"text-black text-3xl absolute right-0 top-7 pr-5",
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
