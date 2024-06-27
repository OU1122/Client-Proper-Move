import { useState } from "react";
import apiRequest from "../lib/apiRequest";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UploadWidget from "../components/uploadWidget";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";

const NewPost: React.FC = () => {
	const [value, setValue] = useState<string>("");
	const [images, setImages] = useState<string[]>([]);
	const [error, setError] = useState<string | null>(null);

	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError(null);

		//EXTRACT FORM INPUTS
		const formData = new FormData(e.currentTarget);
		const inputs = Object.fromEntries(formData);
		console.log(inputs);
		try {
			const res = await apiRequest.post("/posts", {
				postData: {
					title: inputs.title as string,
					price: parseInt(inputs.price as string),
					address: inputs.address,
					city: inputs.city,
					bedroom: parseInt(inputs.bedrooms as string),
					bathroom: parseInt(inputs.bathrooms as string),
					images: images,
					type: inputs.type,
					property: inputs.property,
					latitude: parseInt(inputs.latitude as string),
					longitude: parseInt(inputs.longitude as string),
				},
				postDetail: {
					desc: value,
					utilities: inputs.utilities,
					pet: inputs.pet,
					income: inputs.income,
					size: parseInt(inputs.size as string),
					school: parseInt(inputs.school as string),
					bus: parseInt(inputs.bus as string),
					restaurant: parseInt(inputs.restaurant as string),
				},
			});
			navigate("/" + res.data.id);
		} catch (error) {
			console.log(error);
			setError("Make sure all fields are filled in correctly");
		}
	};

	return (
		<div className="flex flex-col-reverse h-auto md:h-[70%] md:flex-row m-10   ">
			<div className="form w-full md:w-[60%] pb-10 md:pb-0 overflow-y-auto">
				<div className="flex flex-col items-center justify-centers ">
					<h1 className="text-xl font-bold mb-5 text-slate-700">
						Add New Listing
					</h1>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-3 mb-3 ">
						<div className="gap-2 grid grid-cols-3">
							<div className="flex flex-col">
								<label
									htmlFor="title"
									className="text-xs">
									Title
								</label>
								<input
									name="title"
									id="title"
									className="rounded-lg px-4 py-2 border-2 border-slate-400"
									type="text"
									placeholder=""></input>
							</div>
							<div className="flex flex-col">
								<label
									htmlFor="price"
									className="text-xs">
									Price
								</label>
								<input
									name="price"
									id="price"
									className="rounded-lg px-4 py-2 border-2 border-slate-400"
									type="number"
									placeholder=""></input>
							</div>

							<div className="flex flex-col">
								<label
									htmlFor="address"
									className="text-xs">
									Address
								</label>
								<input
									name="address"
									id="address"
									className="rounded-lg px-4 py-2 border-2 border-slate-400"
									type="text"
									placeholder=""></input>
							</div>
						</div>
						<div className="">
							<ReactQuill
								theme="snow"
								onChange={setValue}
								value={value}
							/>
						</div>

						<div className="gap-2 grid grid-cols-3">
							<div className="flex flex-col">
								<label
									htmlFor="city"
									className="text-xs">
									City
								</label>
								<input
									name="city"
									id="city"
									className="rounded-lg px-4 py-2 border-2 border-slate-400"
									type="text"
									placeholder=""></input>
							</div>
							<div className="flex flex-col">
								<label
									htmlFor="bedrooms"
									className="text-xs">
									Number of Bedrooms
								</label>
								<input
									min={1}
									name="bedrooms"
									id="bedrooms"
									className="rounded-lg px-4 py-2 border-2 border-slate-400"
									type="number"
									placeholder=""></input>
							</div>

							<div className="flex flex-col">
								<label
									htmlFor="bathrooms"
									className="text-xs">
									Number of Bathrooms
								</label>
								<input
									min={1}
									name="bathrooms"
									id="bathrooms"
									className="rounded-lg px-4 py-2 border-2 border-slate-400"
									type="number"
									placeholder=""></input>
							</div>
						</div>

						<div className="gap-2 grid grid-cols-3">
							<div className="flex flex-col">
								<label
									htmlFor="type"
									className="text-xs">
									Type
								</label>
								<select
									id="type"
									name="type"
									className=" rounded-lg px-4 py-2 border-2 border-slate-400">
									<option value="rent">Rent</option>
									<option value="buy">Buy</option>
								</select>
							</div>
							<div className="flex flex-col">
								<label
									htmlFor="latitude"
									className="text-xs">
									Latitude
								</label>
								<input
									min={0}
									name="latitude"
									className="rounded-lg px-4 py-2 border-2 border-slate-400"
									type="number"
									placeholder=""></input>
							</div>

							<div className="flex flex-col">
								<label
									htmlFor="longitude"
									className="text-xs">
									Longitude
								</label>
								<input
									min={0}
									name="longitude"
									className="rounded-lg px-4 py-2 border-2 border-slate-400"
									type="number"
									placeholder=""></input>
							</div>
						</div>
						<div className="gap-2 grid grid-cols-3">
							<div className="flex flex-col">
								<label
									htmlFor="property"
									className="text-xs">
									Property
								</label>
								<select
									id="property"
									name="property"
									className=" rounded-lg px-4 py-2 border-2 border-slate-400">
									<option value="apartment">Apartment</option>
									<option value="house">House</option>
									<option value="condo">Condo</option>
									<option value="land">Land</option>
								</select>
							</div>
							<div className="flex flex-col">
								<label
									htmlFor="utilities"
									className="text-xs">
									Utilities Policy
								</label>
								<select
									id="utilities"
									name="utilities"
									className=" rounded-lg px-4 py-2 border-2 border-slate-400">
									<option value="owner">Owner is responsible</option>
									<option value="renter">Renter is responsible</option>
								</select>
							</div>

							<div className="flex flex-col">
								<label
									htmlFor="pet"
									className="text-xs">
									Pets
								</label>
								<select
									id="pet"
									name="pet"
									className=" rounded-lg px-4 py-2 border-2 border-slate-400">
									<option value="allowed">Allowed</option>
									<option value="not-allowed">Not Allowed</option>
								</select>
							</div>
						</div>
						<div className="gap-2 grid grid-cols-3">
							<div className="flex flex-col">
								<label
									htmlFor="income"
									className="text-xs">
									Income Policy
								</label>
								<input
									name="income"
									id="income"
									className="rounded-lg px-4 py-2 border-2 border-slate-400"
									type="text"
									placeholder="e.g. deposit required.."></input>
							</div>
							<div className="flex flex-col">
								<label
									htmlFor="size"
									className="text-xs">
									Total Size (m²)
								</label>
								<input
									name="size"
									id="size"
									className="rounded-lg px-4 py-2 border-2 border-slate-400"
									type="number"
									placeholder=""></input>
							</div>

							<div className="flex flex-col">
								<label
									htmlFor="school"
									className="text-xs">
									School Distance (meters)
								</label>
								<input
									name="school"
									id="school"
									className="rounded-lg px-4 py-2 border-2 border-slate-400"
									type="number"
									placeholder=""></input>
							</div>
						</div>
						<div className="gap-2 grid grid-cols-3 ">
							<div className="flex flex-col">
								<label
									htmlFor="restaurant"
									className="text-xs">
									Closest Restaurant (meters)
								</label>
								<input
									name="restaurant"
									id="restaurant"
									className="rounded-lg px-4 py-2 border-2 border-slate-400"
									type="number"
									placeholder=""></input>
							</div>
							<div className="flex flex-col ">
								<label
									htmlFor="bus"
									className="text-xs">
									Bus Stop Distance (meters)
								</label>
								<input
									name="bus"
									id="bus"
									className="rounded-lg px-4 py-2 border-2 border-slate-400"
									type="number"
									placeholder=""></input>
							</div>
							<div className="flex items-end justify-center">
								<Button
									disabled={images.length < 1 ? true : false}
									images={images}
									type="submit">
									Add Listing
								</Button>
							</div>
							{/* <button
								disabled={images.length < 1 ? true : false}
								type="submit"
								className={`rounded-lg p-4 bg-yellow-300 font-semibold tracking-wide mt-2 ${
									images.length < 1
										? "bg-gray-300 cursor-not-allowed"
										: ""
								}`}>
								Add Listing
							</button> */}
						</div>
						{error && (
							<span className="text-center text-red-400">{error}</span>
						)}
					</form>

					<p className="underline text-slate-400"></p>
				</div>
			</div>
			<div className=" md:relative  h-full md:h-auto md:w-[40%] flex items-center justify-center md:translate-x-20 ">
				<div className="md:relative flex items-center justify-center flex-col gap-4 mb-5 md:mb-0">
					<div className="flex flex-row flex-wrap gap-4 max-w-[280px] items-center justify-center">
						{images &&
							images.map((image) => (
								<div className="">
									<img
										className="w-20 h-20 object-cover rounded-lg"
										src={image}></img>
								</div>
							))}
					</div>
					<UploadWidget
						uwConfig={{
							cloudName: "dhvucfza0",
							uploadPreset: "real_estate_preset",
							multiple: true,
							folder: "listing",
						}}
						setState={setImages}
					/>
				</div>
			</div>
		</div>
	);
};

export default NewPost;
