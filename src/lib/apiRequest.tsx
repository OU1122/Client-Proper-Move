import axios from "axios";

const apiRequest = axios.create({
	baseURL: "https://api-proper-move.onrender.com/api",
	withCredentials: true,
});

apiRequest.interceptors.request.use(
	(config) => {
		const userDataString = localStorage.getItem("userData");

		if (userDataString) {
			const userData = JSON.parse(userDataString);

			if (userData && userData.token) {
				config.headers.Authorization = `Bearer ${userData.token}`;
			}
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default apiRequest;
