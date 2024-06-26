import { useContext } from "react";
import { AuthContext, AuthContextType } from "../context/authContext";

const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthContextProvider");
	}
	return context;
};

export default useAuth;
