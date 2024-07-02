import axios from "axios";

const apiRequest = axios.create({
	baseURL: "http://propermove.azurewebsites.net/api",
	withCredentials: true,
});

export default apiRequest;
