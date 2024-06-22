import { createContext, useEffect, useState, useCallback } from "react";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();

function UploadWidget({ uwConfig, setState }) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const loadScript = () => {
			// Check if the script is already loaded
			if (!document.getElementById("uw")) {
				// If not loaded, create and load the script
				const script = document.createElement("script");
				script.setAttribute("async", "");
				script.setAttribute("id", "uw");
				script.src = "https://upload-widget.cloudinary.com/global/all.js";
				script.addEventListener("load", () => setLoaded(true));
				document.body.appendChild(script);
			} else {
				// If already loaded, update the state
				setLoaded(true);
			}
		};

		loadScript();
	}, []);

	const initializeCloudinaryWidget = useCallback(() => {
		if (loaded && window.cloudinary) {
			const myWidget = window.cloudinary.createUploadWidget(
				uwConfig,
				(error, result) => {
					if (!error && result && result.event === "success") {
						console.log("Done! Here is the image info: ", result.info);
						setState((prev) => [...prev, result.info.secure_url]);
					}
				}
			);

			myWidget.open();
		}
	}, [loaded, uwConfig, setState]);

	return (
		<CloudinaryScriptContext.Provider value={{ loaded }}>
			<button
				id="upload_widget"
				className="leading-loose  bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-md ease-in px-4 py-2  transition-all rounded-lg"
				onClick={initializeCloudinaryWidget}
				disabled={!loaded}>
				Upload
			</button>
		</CloudinaryScriptContext.Provider>
	);
}

export default UploadWidget;
export { CloudinaryScriptContext };
