import { AxiosRequestConfig } from "axios";
import apiRequest from "./apiRequest";
import { ProfilePostsResponse } from "./types";

export const singlePageLoader = async ({
	params,
}: {
	params: { id: string };
}) => {
	const res = await apiRequest("/posts/" + params.id);

	return res.data;
};

export const listPageLoader = async ({
	request,
}: {
	request: AxiosRequestConfig;
}) => {
	const query = request?.url?.split("?")[1];

	const res = await apiRequest("/posts?" + query);

	return res.data;
};

export const profilePageLoader = async (): Promise<ProfilePostsResponse> => {
	const res = await apiRequest("/user/profilePosts");

	return res.data;
};
