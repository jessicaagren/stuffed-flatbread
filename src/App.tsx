import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./routes/HomePage";
import CategoryPage from "./routes/CategoryPage";
import ItemDetailsPage from "./routes/ItemDetailsPage";
import { useState } from "react";
import { Item } from "./types";

/*
routes

	startsida med kategorier, klicka på kategori
	kategori kan vara en dynamisk route :categoryid
	kategori kan vara statisk men då måste vi uppdatera router här varje gång vi lägger till en kategori

	klicka in på bild bör vara dynamisk eftersom vi lägger till fler bilder

*/

function App() {
	const [cats, setCats] = useState<Item[]>([
		{
			id: "abc",
			category: "cat",
			name: "Bosse",
			details: "cute cat!",
		},
		{
			id: "wert",
			category: "cat",
			name: "Misse",
			details: "VERY cute cat!",
		},
	]);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootLayout />,
			children: [
				{ index: true, element: <HomePage /> },
				{
					path: "cats",
					element: <CategoryPage items={cats} />,
					children: [
						{
							path: "/cats/:itemid",
							element: <ItemDetailsPage items={cats} />,
						},
					],
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
