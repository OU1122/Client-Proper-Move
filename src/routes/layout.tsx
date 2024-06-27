import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import useAuth from "../lib/useAuth";

const Layout: React.FC = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

const RequireAuth: React.FC = () => {
	const currentUser = useAuth();

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
