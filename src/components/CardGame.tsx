import { Game } from "../types/game";
import styles from "../styles/cardGame.module.css";

interface CardGameProps {
	game: Game;
}

function CardGame({ game }: CardGameProps) {
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
		<>
			<figure className={styles.displayGame}>
				<h3 className={styles.titleCard}>{game.name}</h3>
				<img className="carouselImage" src={imageSrc} alt={game.name} />
				<div className={styles.rating}>{starIcons}</div>
			</figure>
		</>
	);
}

export default CardGame;
