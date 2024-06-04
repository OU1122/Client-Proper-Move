import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div className="max-w-[1366px] mx-auto px-5 relative h-screen">
			<div className="hidden absolute md:block -z-50 bg-[#fcf5f3] right-0 w-[35%] h-screen grow-0"></div>
			<App />
		</div>
	</React.StrictMode>
);
