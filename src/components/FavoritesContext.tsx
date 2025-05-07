import { createContext, useContext, useState, ReactNode } from "react";
import { Game } from "../types/game";

interface FavoritesContextType {
	favorites: Game[];
	addToFavorites: (game: Game) => void;
	removeFromFavorites: (gameId: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
	undefined,
);

interface FavoritesProviderProps {
	children: ReactNode;
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
	const [favorites, setFavorites] = useState<Game[]>([]);

	const addToFavorites = (game: Game) => {
		setFavorites((prevFavorites) => [...prevFavorites, game]);
	};

	const removeFromFavorites = (gameId: number) => {
		setFavorites((prevFavorites) =>
			prevFavorites.filter((game) => game.id !== gameId),
		);
	};

	return (
		<FavoritesContext.Provider
			value={{ favorites, addToFavorites, removeFromFavorites }}
		>
			{children}
		</FavoritesContext.Provider>
	);
};

export const useFavorites = (): FavoritesContextType => {
	const context = useContext(FavoritesContext);
	if (!context) {
		throw new Error("useFavorites must be used within a FavoritesProvider");
	}
	return context;
};
