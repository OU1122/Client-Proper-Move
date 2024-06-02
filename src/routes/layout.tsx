import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export const Layout: React.FC = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default Layout;
