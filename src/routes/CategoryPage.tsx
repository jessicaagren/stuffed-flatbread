import { Link, Outlet } from "react-router-dom";
import { Item } from "../types";

type CategoryPageProps = {
	items: Item[];
};

const CategoryPage = ({ items }: CategoryPageProps) => {
	return (
		<div>
			<h1>CategoryPage</h1>
			<p>en lista på alla katter:</p>
			<ul>
				{items.map((cat) => (
					<li key={cat.id}>
						<Link to={cat.id}>{cat.name}</Link>
					</li>
				))}
			</ul>
			<Outlet />
		</div>
	);
};

export default CategoryPage;
