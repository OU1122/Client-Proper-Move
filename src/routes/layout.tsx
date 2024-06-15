import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const Layout: React.FC = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

const RequireAuth: React.FC = () => {
	const { currentUser } = useContext(AuthContext);

	return !currentUser ? (
		<Navigate to="/login" />
	) : (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export { Layout, RequireAuth };
