export interface Post {
	id: string;
	title: string;
	price: number;
	images: string[];
	address: string;
	city: string;
	bedroom: number;
	bathroom: number;
	latitude: string;
	longitude: string;
	type: string;
	property: string;
	createdAt: string;
	userId: string;
}

export interface ProfilePostsResponse {
	userPosts: Post[];
	savedPosts: Post[];
}

export interface CardItem {
	id: number | string;
	title: string;
	images: string[];
	bedroom: number;
	bathroom: number;
	price: number;
	address: string;
	latitude: string | number;
	longitude: string | number;
	city?: string;
	createdAt?: string;
	property?: string;
	type?: string;
	userId?: string;
}
