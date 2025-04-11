import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./routes/HomePage";
import CategoryPage from "./routes/CategoryPage";
import ItemDetailsPage from "./routes/ItemDetailsPage";
import { ItemContextProvider } from "./contexts/ItemContext";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootLayout />,
			children: [
				{ index: true, element: <HomePage /> },
				{
					path: "/:category",
					element: <CategoryPage />,
					children: [
						{
							path: "/:category/:itemid",
							element: <ItemDetailsPage />,
						},
					],
				},
			],
		},
	]);

	return (
		<ItemContextProvider>
			<RouterProvider router={router} />
		</ItemContextProvider>
	);
}

export default App;
