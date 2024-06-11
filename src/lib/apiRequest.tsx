import axios from "axios";

// ADD ENV path before deployment
const apiRequest = axios.create({
	baseURL: "http://localhost:8800/api",
	withCredentials: true,
});

export default apiRequest;
