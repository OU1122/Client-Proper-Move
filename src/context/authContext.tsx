import { ReactNode, createContext, useEffect, useState } from "react";

interface User {
	id: string;
	username: string;
	email: string;
	avatar: string;
}

interface AuthContextType {
	currentUser: User | null;
	updateUser: React.Dispatch<React.SetStateAction<User | null>>;
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
	const [currentUser, setCurrentUser] = useState<string | null>(
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
