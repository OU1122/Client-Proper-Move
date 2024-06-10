const Register: React.FC = () => {
	return (
		<div className="flex flex-col-reverse sm:flex-row m-10  ">
			<div className="form w-full sm:w-[60%] md:pr-[50px]">
				<div className="flex flex-col items-center justify-center w-full h-full">
					<h1 className="text-xl font-bold mb-5 text-slate-700">
						Create an Account
					</h1>
					<form className="flex flex-col gap-3 mb-3 ">
						<input
							className="rounded-lg px-4 py-2 border-2 border-slate-400"
							type="text"
							placeholder="Username"></input>
						<input
							className="rounded-lg px-4 py-2 border-2 border-slate-400"
							type="email"
							placeholder="Email"></input>
						<input
							className="rounded-lg px-4 py-2 border-2 border-slate-400"
							type="password"
							placeholder="Password"></input>
						<button
							type="submit"
							className="rounded-lg p-4 bg-yellow-300 font-semibold tracking-wide mt-2">
							Register
						</button>
					</form>
					<p className="underline text-slate-400">
						Already have an account?
					</p>
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

export default Register;
