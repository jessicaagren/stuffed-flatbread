import { Link, Outlet, useParams } from "react-router-dom";
import { Item } from "../types";

type CategoryPageProps = {
	items: Item[];
};

const CategoryPage = ({ items }: CategoryPageProps) => {
	const params = useParams();

	const newItems = items.filter((item) => item.category === params.category);

	return (
		<div>
			<h1>CategoryPage</h1>
			<p>en lista på alla Items:</p>
			<ul>
				{newItems.map((cat) => (
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
