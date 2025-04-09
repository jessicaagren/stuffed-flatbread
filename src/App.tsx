import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./routes/HomePage";
import CategoryPage from "./routes/CategoryPage";
import ItemDetailsPage from "./routes/ItemDetailsPage";
import { useState } from "react";
import { Category, Item } from "./types";

/*
routes

	startsida med kategorier, klicka på kategori
	kategori kan vara en dynamisk route :categoryid
	kategori kan vara statisk men då måste vi uppdatera router här varje gång vi lägger till en kategori

	klicka in på bild bör vara dynamisk eftersom vi lägger till fler bilder

*/

function App() {
	const [categories, setCategories] = useState<Category[]>([
		{ name: "Cats", slug: "cats" },
		{ name: "Dogs", slug: "dogs" },
		{ name: "Foods", slug: "foods" },
	]);

	const [items, setItems] = useState<Item[]>([
		{
			id: "abc",
			category: "cats",
			name: "Bosse",
			details: "cute cat!",
		},
		{
			id: "wert",
			category: "cats",
			name: "Misse",
			details: "VERY cute cat!",
		},
		{
			id: "zxc",
			category: "dogs",
			name: "Rolf",
			details: "vov vov",
		},
		{
			id: "oiu",
			category: "foods",
			name: "Broccoli",
			details: "mums!",
		},
	]);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootLayout categories={categories} />,
			children: [
				{ index: true, element: <HomePage /> },
				{
					path: "/:category",
					element: <CategoryPage items={items} />,
					children: [
						{
							path: "/:category/:itemid",
							element: <ItemDetailsPage items={items} />,
						},
					],
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
