// 🥙

import {
	createContext,
	Dispatch,
	useContext,
	useMemo,
	useReducer,
} from "react";
import { Item } from "../types";

// typa upp contexten / vårt globala state
type ItemContextType = {
	state: Item[];
	dispatch: Dispatch<ItemReducerAction>;
};

// skapa contexten
const ItemContext = createContext<ItemContextType | null>(null);

// typa upp reducerns action, ItemReducerAction
type ItemReducerAction =
	| { type: "RESET" }
	| { type: "ADD"; payload: Item }
	| { type: "DELETE"; payload: string }
	| { type: "EDIT"; payload: { id: string; item: Item } };

// skapa reducer-funktionen
const itemReducer = (state: Item[], action: ItemReducerAction) => {
	switch (action.type) {
		case "RESET":
			return [];
		case "ADD":
			return [...state, action.payload];
		case "DELETE":
			return state.filter((item) => item.id !== action.payload);
		default:
			return state;
	}
};

// skapa vårt första state
const initialItems: Item[] = [
	{
		id: "abc",
		category: "cats",
		name: "Bosse",
		details: "cute cat!",
	},
	{
		id: "wert",
		category: "cats",
		name: "Misse",
		details: "VERY cute cat!",
	},
	{
		id: "zxc",
		category: "dogs",
		name: "Rolf",
		details: "vov vov",
	},
	{
		id: "oiu",
		category: "foods",
		name: "Broccoli",
		details: "mums!",
	},
	{
		id: "ofof",
		category: "dogs",
		name: "Linus",
		details: "Lars hund",
	},
];

// skapa provider-komponenten
export const ItemContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [state, dispatch] = useReducer(itemReducer, initialItems);

	const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

	return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};

// paketera contexten i en custom hook
export const useItemContext = (): ItemContextType => {
	const context = useContext(ItemContext);
	if (!context)
		throw new Error(
			"You are consuming the context from outside the provider!"
		);
	return context;
};
