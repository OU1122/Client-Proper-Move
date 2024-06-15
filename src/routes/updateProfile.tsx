import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import apiRequest from "../lib/apiRequest";
import UploadWidget from "../components/uploadWidget";

const UpdateProfile: React.FC = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error();
	}

	const { currentUser, updateUser } = context;
	const [error, setError] = useState<string | null>(null);
	const [avatar, setAvatar] = useState<string | null>(currentUser.avatar);
	const [status, setStatus] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus(null);

		//EXTRACT FORM INPUTS
		const formData = new FormData(e.currentTarget);

		const { username, password, email } = Object.fromEntries(formData);

		try {
			const res = await apiRequest.put(`/user/${currentUser?.id}`, {
				username,
				password,
				email,
				avatar,
			});

			// UPDATE USER CONTEXT WITH RETURNED DATA
			updateUser(res.data);
			setStatus("Profile updated succesfully");
		} catch (error) {
			console.log(error);
			setStatus("Profile update failed, please try again");
		}
	};

	return (
		<div className="flex flex-col-reverse h-auto md:h-[70%] md:flex-row m-10  ">
			<div className="form w-full md:w-[60%] md:pr-[50px] pb-10 md:pb-0">
				<div className="flex flex-col items-center justify-center w-full h-full">
					<h1 className="text-xl font-bold mb-5 text-slate-700">
						Update Your Profile Below
					</h1>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-3 mb-3 ">
						<input
							name="username"
							defaultValue={currentUser?.username}
							className="rounded-lg px-4 py-2 border-2 border-slate-400"
							type="text"
							placeholder="Username"></input>
						<input
							name="email"
							defaultValue={currentUser?.email}
							className="rounded-lg px-4 py-2 border-2 border-slate-400"
							type="email"
							placeholder="Email"></input>

						<input
							className="rounded-lg px-4 py-2 border-2 border-slate-400"
							type="password"
							name="password"
							placeholder="Password"></input>
						{status ? <span>{status}</span> : null}

						<button
							type="submit"
							className="rounded-lg p-4 bg-yellow-300 font-semibold tracking-wide mt-2">
							Update
						</button>
					</form>

					<p className="underline text-slate-400"></p>
				</div>
			</div>
			<div className=" md:relative  h-full md:h-auto md:w-[40%] flex items-center justify-center ">
				<div className="md:relative flex items-center justify-center flex-col gap-4 mb-5 md:mb-0">
					<img
						className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] md:mb-0  rounded-full md:translate-x-16"
						src={avatar || "/avatar.jpg"}></img>
					<div className="bottom-4 left-[90px] md:-bottom-[75px]  md:translate-x-16">
						<UploadWidget
							uwConfig={{
								cloudName: "dhvucfza0",
								uploadPreset: "real_estate_preset",
								multiple: false,
								maxImageFileSize: 1000000,
								folder: "avatar",
							}}
							setAvatar={setAvatar}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateProfile;
