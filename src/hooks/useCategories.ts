import { useState } from "react";
import { Category } from "../types";

const useCategories = () => {
	const [categories] = useState<Category[]>([
		{ name: "Cats", slug: "cats" },
		{ name: "Dogs", slug: "dogs" },
		{ name: "Foods", slug: "foods" },
	]);

	return { categories };
};

export default useCategories;
