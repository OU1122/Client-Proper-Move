import { createContext, useEffect, useState } from "react";

interface User {
	id: string;
	username: string;
	email: string;
	avatar: string;
}

export interface AuthContextType {
	currentUser: User | null;
	updateUser: (data: User | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined
);

interface AuthContextProviderProps {
	children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
	children,
}) => {
	const [currentUser, setCurrentUser] = useState<User | null>(
		JSON.parse(localStorage.getItem("userData") || "null") || null
	);

	const updateUser = (data: User | null) => {
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
