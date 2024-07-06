import { useState } from "react";

import apiRequest from "../lib/apiRequest";
import UploadWidget from "../components/uploadWidget";
import Button from "../components/button";
import useAuth from "../lib/useAuth";

const UpdateProfile: React.FC = () => {
	const { currentUser, updateUser } = useAuth();
	const [avatar, setAvatar] = useState<string[]>([]);
	const [status, setStatus] = useState<string | null>(null);
	const [inputType, setInputType] = useState("password");
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus(null);

		//EXTRACT FORM INPUTS
		const formData = new FormData(e.currentTarget);

		const { username, password, email } = Object.fromEntries(formData);

		try {
			const res = await apiRequest.put(`/user/${currentUser?.userData.id}`, {
				username,
				password,
				email,
				avatar: avatar![0],
			});

			// UPDATE USER CONTEXT WITH RETURNED DATA
			updateUser(res.data);
			setStatus("Profile updated succesfully");
		} catch (error) {
			console.log(error);
			setStatus("Profile update failed, please try again");
		}
	};

	const handleMouseDown = () => {
		setInputType("text");
	};

	const handleMouseUp = () => {
		setInputType("password");
	};
	console.log(currentUser);

	return (
		<div className="flex flex-col-reverse h-auto md:h-[70%] md:flex-row m-10  ">
			<div className="form w-full md:w-[60%] md:pr-[50px] pb-10 md:pb-0">
				<div className="flex relative flex-col items-center justify-center w-full h-full">
					<h1 className="text-xl font-bold mb-5 text-slate-700">
						Update Your Profile Below
					</h1>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-3 mb-3 ">
						<input
							name="username"
							defaultValue={currentUser?.userData.username}
							className="rounded-lg px-4 py-2 border-2 border-slate-400"
							type="text"
							placeholder="Username"></input>
						<input
							name="email"
							defaultValue={currentUser?.userData.email}
							className="rounded-lg px-4 py-2 border-2 border-slate-400"
							type="email"
							placeholder="Email"></input>

						<div className="relative">
							<input
								className="rounded-lg px-4 py-2 border-2 border-slate-400"
								type={inputType}
								name="password"
								placeholder="Password"></input>
							<div
								className="absolute top-[9px] right-[8px] cursor-pointer"
								onMouseDown={handleMouseDown}
								onMouseUp={handleMouseUp}>
								<img
									className="w-6 h-6"
									src="/display-pw.png"></img>
							</div>
						</div>
						{status ? <span>{status}</span> : null}

						<Button type="submit">Update</Button>
					</form>

					<p className="underline text-slate-400"></p>
					<div className=" -z-50 bg-[#bfd8c9] absolute top-[12rem] left-[-15rem] h-[20rem] w-[20rem] rounded-full blur-[13rem]"></div>
					<div className=" -z-50 bg-[#f8dbf1] absolute top-[-3rem] left-[25rem] h-[20rem] w-[20rem] rounded-full blur-[15rem]"></div>
				</div>
			</div>
			<div className=" md:relative  h-full md:h-auto md:w-[40%] flex items-center justify-center ">
				<div className="md:relative pb-5 flex items-center justify-center flex-col gap-4 mb-5 md:mb-0">
					<img
						className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] md:mb-0  rounded-full md:translate-x-16 object-cover border-2 border-emerald-600 border-opacity-50"
						src={currentUser!.userData.avatar || "/avatar.jpg"}></img>
					<div className="bottom-4 left-[90px] md:-bottom-[75px]  md:translate-x-16">
						<UploadWidget
							uwConfig={{
								cloudName: "dhvucfza0",
								uploadPreset: "real_estate_preset",
								multiple: false,
								maxImageFileSize: 1000000,
								folder: "avatar",
							}}
							setState={setAvatar}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateProfile;
