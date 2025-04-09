import { Link, Outlet } from "react-router-dom";
import { Category } from "../types";

type RootLayoutProps = {
	categories: Category[];
};

export default function RootLayout({ categories }: Readonly<RootLayoutProps>) {
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
