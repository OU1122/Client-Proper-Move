import apiRequest from "./apiRequest";
import { ProfilePostsResponse, SinglePagePost, Post } from "./types";
import { LoaderFunctionArgs } from "react-router-dom";

export const singlePageLoader: (
	args: LoaderFunctionArgs<{ id: string }>
) => Promise<SinglePagePost> = async ({ params }) => {
	const res = await apiRequest("/posts/" + params.id);

	return res.data;
};

export const listPageLoader: (
	args: LoaderFunctionArgs<{ request: { url: string } }>
) => Promise<Post[]> = async ({ request }) => {
	const query = request?.url?.split("?")[1];

	const res = await apiRequest("/posts?" + query);

	return res.data;
};

export const profilePageLoader = async (): Promise<ProfilePostsResponse> => {
	const res = await apiRequest("/user/profilePosts");

	return res.data;
};
