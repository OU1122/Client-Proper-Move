import axios from "axios";

const apiRequest = axios.create({
	baseURL: "https://propermove.azurewebsites.net/api",
	withCredentials: true,
});

export default apiRequest;
