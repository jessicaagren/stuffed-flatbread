export type CategorySlug = "cats" | "dogs" | "foods" | "interests";

export type Category = {
	slug: CategorySlug;
	name: string;
};

export type Item = {
	id: string;
	category: string;
	name: string;
	details: string;
};

export type Note = {
	id: string;
	title: string;
	details: string;
	date: Date;
};
