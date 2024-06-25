import Card from "../components/card";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import apiRequest from "../lib/apiRequest";
import { AuthContext } from "../context/authContext";
import Button from "../components/button";

const ProfilePage: React.FC = () => {
	const navigate = useNavigate();
	const [chatIsOpen, setChatIsOpen] = useState<null | true>(null);
	const { currentUser, updateUser } = useContext(AuthContext);
	const userPosts = useLoaderData();

	const handleLogout = async () => {
		try {
			await apiRequest.post("/auth/logout");
			updateUser(null);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-col md:flex-row full h-[calc(100%-96px)] pb-5">
			<div className="flex flex-col left w-full md:w-[65%] px-4 mb-7 md:mb-0">
				<div className="myList flex justify-between items-center mb-4 pb-4 border-b-2">
					<h2 className="text-xl  ">My Listings & Saved Properties</h2>
					<Button to="/add-post">Add New Listing</Button>
					{/* <Link
						className="leading-loose px-4 py-2 bg-yellow-300 rounded-lg"
						to="/add-post">
						Add New Listing
					</Link> */}
				</div>
				<div className="wrapper flex flex-col pr-[10px] gap-5 overflow-y-scroll ">
					{userPosts.userPosts.length === 0 ? (
						<h2>Your property listings will show here.</h2>
					) : (
						userPosts.userPosts.map((item) => (
							<Card
								key={item.id}
								post={item}
							/>
						))
					)}

					{userPosts.savedPosts.length === 0 ? (
						<h2 className="text-xl">
							Your saved properties will show here.
						</h2>
					) : (
						<>
							<h2 className="text-xl pb-4 border-b-2">
								Saved Properties
							</h2>
							{userPosts.savedPosts.map((item) => (
								<Card
									key={item.id}
									post={item}
								/>
							))}
						</>
					)}
				</div>
			</div>
			<div className="relative right w-full h-full md:w-[35%] sm:mt-0 pl:0 md:pl-6 pb-10 md:pb-6 pr-1">
				<div className="absolute -top-2 -left-10 w-screen h-full md:hidden -z-50 bg-[#fcf5f3]"></div>
				<div className="flex flex-col gap-8 bg-white rounded-lg p-4">
					<div className="flex flex-row justify-between items-center flex-wrap gap-4 lg:gap-0">
						<h2 className="text-xl ">User Information</h2>
						<div className="flex justify-between items-center flex-wrap">
							<Button to={`/update-profile/${currentUser.id}`}>
								Update Profile
							</Button>
						</div>
					</div>
					<div className="flex flex-row justify-between flex-wrap gap-4 lg:gap-0">
						<div className="flex  flex-col gap-4">
							<div className="flex flex-row gap-4 py-1 items-center">
								<h2 className="text-sm">Avatar:</h2>
								<img
									className="w-8 h-8 rounded-full object-cover"
									src={currentUser.avatar || "/avatar.jpg"}></img>
							</div>
							<div className="flex flex-row gap-2 py-1 ">
								<h2 className="text-sm">Username:</h2>
								<span className="font-semibold text-sm">
									{currentUser.username}
								</span>
							</div>
							<div className="flex flex-row gap-2 py-1">
								<h2 className="text-sm">E-mail:</h2>
								<span className="font-semibold text-sm">
									{currentUser.email}
								</span>
							</div>
						</div>
						<div className="self-end">
							<Button
								type="button"
								onClick={handleLogout}>
								Logout
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
