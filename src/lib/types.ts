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

export interface SinglePagePost {
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
	postDetail: PostDetail;
	user: User;
	isSaved: boolean;
}
interface PostDetail {
	id: string;
	desc: string;
	utilities: string;
	pet: string;
	income: string;
	size: number;
	school: number;
	bus: number;
	restaurant: number;
	postId: string;
}
interface User {
	username: string;
	avatar: string;
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

export interface SearchParams {
	type: string;
	city: string;
	property: string;
	minPrice: number | string;
	maxPrice: number | string;
	bedroom: number | string;
}

export type ButtonProps = {
	onClick?: () => void;
	children: React.ReactNode;
	disabled?: boolean;
	to?: string;
	images?: string[];
} & React.ComponentPropsWithoutRef<"button">;

export interface MapItem {
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
