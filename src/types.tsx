export interface IReview {
	id: string;
	userId: string;
	text: string;
	rating: number;
}

export type TUser = {
	id: string;
	name: string;
	email: string;
}

export type IRestaurant = {
	id: string,
	name: string,
	description: string,
	img: string,
	menu: string[],
	reviews: string[],
}