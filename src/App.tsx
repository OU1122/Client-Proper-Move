import Navbar from "./components/navbar.tsx";
import HomePage from "./routes/homepage.tsx";

function App() {
	return (
		<div className="max-w-[1366px] mx-auto px-5 relative">
			<div className="absolute -z-50 bg-[#fcf5f3] right-0 w-[35%] h-screen grow-0"></div>
			<Navbar />
			<HomePage />
		</div>
	);
}

export default App;
