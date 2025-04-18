import { Game } from "../types/game";
import styles from "../styles/cardGame.module.css";

interface CardGameProps {
	game: Game;
}

function CardGame({ game }: CardGameProps) {
	console.log(game);
	return (
		<>
			<figure className={styles.displayGame}>
				<h1>{game.name}</h1>
				<img
					className="carouselImage"
					src={game.background_image}
					alt={game.name}
				/>
			</figure>
		</>
	);
}

export default CardGame;
