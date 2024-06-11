import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register: React.FC = () => {
	const [err, setErr] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const username = formData.get("username");
		const email = formData.get("email");
		const password = formData.get("password");

		try {
			const res = await axios.post(
				"http://localhost:8800/api/auth/register",
				{
					username,
					email,
					password,
				}
			);
			console.log(res.data);
			setErr(null);
			navigate("/login");
		} catch (error) {
			console.log(error);
			setErr(error.response.data.message);
		}
	};
	return (
		<div className="flex flex-col-reverse h-auto md:h-[70%] md:flex-row m-10  ">
			<div className="form w-full md:w-[60%] md:pr-[50px] pb-10 md:pb-0">
				<div className="flex flex-col items-center justify-center w-full h-full">
					<h1 className="text-xl font-bold mb-5 text-slate-700">
						Create an Account
					</h1>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-3 mb-3 ">
						<input
							name="username"
							className="rounded-lg px-4 py-2 border-2 border-slate-400"
							type="text"
							placeholder="Username"></input>
						<input
							className="rounded-lg px-4 py-2 border-2 border-slate-400"
							type="email"
							name="email"
							placeholder="Email"></input>
						<input
							className="rounded-lg px-4 py-2 border-2 border-slate-400"
							type="password"
							name="password"
							placeholder="Password"></input>
						<button
							type="submit"
							className="rounded-lg p-4 bg-yellow-300 font-semibold tracking-wide mt-2">
							Register
						</button>
					</form>
					{err && <span className="text-red-400">{err}</span>}
					<p className="underline text-slate-400">
						<Link to="/login">Already have an account?</Link>
					</p>
				</div>
			</div>
			<div className=" md:relative  h-full md:h-auto md:w-[40%] flex justify-center ">
				<img
					className="w-[300px] md:w-full md:absolute md:top-0 md:right-0"
					src="/bg.png"></img>
			</div>
		</div>
	);
};

export default Register;
