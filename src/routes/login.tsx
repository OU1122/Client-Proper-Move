import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../lib/apiRequest";
import Button from "../components/button";
import useAuth from "../lib/useAuth";

const Login: React.FC = () => {
	const [err, setErr] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const navigate = useNavigate();
	const [inputType, setInputType] = useState("password");
	const { updateUser } = useAuth();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		setErr(null);
		const formData = new FormData(e.currentTarget);
		const username = formData.get("username");
		const password = formData.get("password");

		// FETCH USER
		try {
			const res = await apiRequest.post("/auth/login", {
				username,
				password,
			});

			// UPDATE LOCAL STORAGE

			updateUser(res.data);

			// NAVIGATE TO HP

			navigate("/");
		} catch (error) {
			if (error instanceof Error) {
				console.log(error);
				setErr(error.message);
			} else {
				setErr("An unexpected error occurred");
			}
		} finally {
			setIsLoading(false);
		}
	};

	const handleMouseDown = () => {
		setInputType("text");
	};

	const handleMouseUp = () => {
		setInputType("password");
	};

	return (
		<div className="flex flex-col-reverse h-auto md:h-[70%] md:flex-row m-10  ">
			<div className="form w-full md:w-[60%] md:pr-[50px] pb-10 md:pb-0">
				<div className="flex flex-col items-center justify-center w-full h-full">
					<h1 className="text-xl font-bold mb-5 text-slate-700">
						Welcome Back
					</h1>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-3 mb-3 ">
						<input
							name="username"
							className="rounded-lg px-4 py-2 border-2 border-slate-400"
							type="text"
							placeholder="Username"></input>
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
						<Button
							disabled={isLoading}
							type="submit">
							Login
						</Button>
					</form>
					{err && <span className="text-red-400">{err}</span>}
					<p className="underline text-slate-400">
						<Link to="/register">Don't have an account?</Link>
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

export default Login;
