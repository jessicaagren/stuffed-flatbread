import { useParams } from "react-router-dom";
import { Item } from "../types";

type ItemDetailsPageProps = {
	items: Item[];
};
const ItemDetailsPage = ({ items }: ItemDetailsPageProps) => {
	const params = useParams();
	console.log(params);

	const item = items.filter((item) => item.id === params.itemid);

	return (
		<div>
			<h2>ItemDetailsPage</h2>
			<div>
				{item.length > 0 && (
					<>
						<p>Name:{item[0].name}</p>
						<p>Details:{item[0].details}</p>
					</>
				)}
			</div>
		</div>
	);
};

export default ItemDetailsPage;
