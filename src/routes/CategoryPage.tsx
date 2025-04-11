import { Link, Outlet, useParams } from "react-router-dom";
import { useItemContext } from "../contexts/ItemContext";

const CategoryPage = () => {
	const { state } = useItemContext();
	const params = useParams();

	const newItems = state.filter((item) => item.category === params.category);

	const swedishCategory = () => {
		switch (params.category) {
			case "cats":
				return "katter";
			case "dogs":
				return "hundar";
			case "foods":
				return "matsaker";
		}
	};

	return (
		<div>
			<h1>CategoryPage</h1>
			<p>en lista på alla {swedishCategory()}:</p>
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
