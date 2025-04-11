import { useParams } from "react-router-dom";
import { useItemContext } from "../contexts/ItemContext";

const ItemDetailsPage = () => {
	const { state } = useItemContext();
	const params = useParams();

	const item = state.filter((item) => item.id === params.itemid);

	if (item.length === 0) return <div>Inget item hittat.</div>;

	return (
		<div>
			<h2>ItemDetailsPage</h2>
			<div>
				{item.length > 0 && (
					<>
						<p>Name: {item[0].name}</p>
						<p>Details: {item[0].details}</p>
					</>
				)}
			</div>
		</div>
	);
};

export default ItemDetailsPage;
