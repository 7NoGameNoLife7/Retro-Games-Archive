import { Game } from "../types/game";
import styles from "../styles/cardGame.module.css";
interface CardGameProps {
	game: Game;
}

function CardGame({ game }: CardGameProps) {
	console.log(game);

	const defaultImage = "src/assets/images/fail-1776388_640.webp";

	const imageSrc = game.background_image ? game.background_image : defaultImage;
	return (
		<>
			<figure className={styles.displayGame}>
				<h3 className={styles.titleCard}>{game.name}</h3>
				<img className="carouselImage" src={imageSrc} alt={game.name} />
				<p>Note: {game.rating}</p>
			</figure>
		</>
	);
}

export default CardGame;
