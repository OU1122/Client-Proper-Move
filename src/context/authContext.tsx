import { createContext, useEffect, useState } from "react";

interface User {
	userData: UserData;
}
interface UserData {
	id: string;
	username: string;
	email: string;
	avatar: string;
}

/* interface Token {
	token: string;
} */

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
	/* 	const [currentToken, setCurrentToken] = useState<Token | null>(
		JSON.parse(localStorage.getItem("token") || "null") || null
	); */

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
