import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
	return (
		<>
			<nav>
				<Link to="/">Home</Link> - <Link to="/cats">Cats</Link>
			</nav>
			<main>
				<Outlet />
			</main>
			<footer>Footer här sen</footer>
		</>
	);
}
