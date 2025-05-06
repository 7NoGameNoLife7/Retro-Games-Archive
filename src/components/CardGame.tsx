import { useFavorites } from "../components/FavoritesContext";
import { Game } from "../types/game";
import styles from "../styles/cardGame.module.css";

interface CardGameProps {
	game: Game;
}

const CardGame = ({ game }: CardGameProps) => {
	const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
	const isFavorite = favorites.some((favGame) => favGame.id === game.id);

	const toggleFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (isFavorite) {
			removeFromFavorites(game.id);
		} else {
			addToFavorites(game);
		}
	};

	const defaultImage = "src/assets/images/fail-1776388_640.webp";
	const imageSrc = game.background_image ? game.background_image : defaultImage;

	const getStars = (rating: number) => {
		const maxStars = 5;
		const starPercentage = rating / 5;
		const fullStars = Math.round(starPercentage * maxStars);
		return {
			fullStars: fullStars,
			emptyStars: maxStars - fullStars,
		};
	};

	const { fullStars, emptyStars } = getStars(game.rating);

	const starIcons = Array.from({ length: fullStars }, (_, index) => (
		<span key={`full-${index}`} className={styles.starFull}>
			★
		</span>
	)).concat(
		Array.from({ length: emptyStars }, (_, index) => (
			<span key={`empty-${index}`} className={styles.starEmpty}>
				☆
			</span>
		)),
	);

	return (
		<figure className={styles.displayGame}>
			<h3 className={styles.titleCard}>{game.name}</h3>
			<img className="carouselImage" src={imageSrc} alt={game.name} />
			<div className={styles.ratingContainer}>
				<div className={styles.rating}>{starIcons}</div>
				<button onClick={toggleFavorite} className={styles.favoriteButton}>
					{isFavorite ? "❤" : "♡"}
				</button>
			</div>
		</figure>
	);
};

export default CardGame;
