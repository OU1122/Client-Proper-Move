import apiRequest from "./apiRequest";
import { ProfilePostsResponse } from "./types";

export const singlePageLoader = async ({ request, params }) => {
	const res = await apiRequest("/posts/" + params.id);

	return res.data;
};

export const listPageLoader = async ({ request, params }) => {
	const query = request.url.split("?")[1];

	const res = await apiRequest("/posts?" + query);

	return res.data;
};

export const profilePageLoader = async (): Promise<ProfilePostsResponse> => {
	const res = await apiRequest("/user/profilePosts");

	return res.data;
};
