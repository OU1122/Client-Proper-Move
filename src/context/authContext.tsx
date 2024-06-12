import { ReactNode, createContext, useEffect, useState } from "react";

interface AuthContextType {
	currentUser: string | null;
	updateUser: (data: string | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined
);

interface AuthContextProviderProps {
	children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
	children,
}) => {
	const [currentUser, setCurrentUser] = useState<string | null>(
		JSON.parse(localStorage.getItem("userData") || "null") || null
	);

	const updateUser = (data: string | null) => {
		setCurrentUser(data);
	};

	useEffect(() => {
		localStorage.setItem("userData", JSON.stringify(currentUser));
	}, [currentUser]);

	return (
		<AuthContext.Provider value={{ currentUser, updateUser }}>
			{children}
		</AuthContext.Provider>
	);
};
