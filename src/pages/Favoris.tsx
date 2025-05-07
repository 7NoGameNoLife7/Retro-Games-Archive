import { useFavorites } from "../components/FavoritesContext";
import CardGame from "../components/CardGame";

const Favoris = () => {
	const { favorites } = useFavorites();

	return (
		<div>
			{favorites.length > 0 ? (
				favorites.map((game) => <CardGame key={game.id} game={game} />)
			) : (
				<p>Aucun jeu dans les favoris.</p>
			)}
		</div>
	);
};

export default Favoris;
