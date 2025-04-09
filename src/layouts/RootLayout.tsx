import { Link, Outlet } from "react-router-dom";
import useCategories from "../hooks/useCategories";

export default function RootLayout() {
	const { categories } = useCategories();

	return (
		<>
			<nav>
				<Link to="/">Home</Link>
				{categories.map((category) => (
					<Link key={category.slug} to={category.slug}>
						{category.name}
					</Link>
				))}
			</nav>
			<main>
				<Outlet />
			</main>
			<footer>Footer här sen</footer>
		</>
	);
}
