import { Game } from '../types/game';

interface CardGameProps {
	game: Game
}

function CardGame({ game }: CardGameProps) {
    console.log(game);
	return (
        <>
            <figure className="DisplayGame">  
                <h1>{game.name}</h1>
                <img className="carouselImage" src={game.background_image} alt={game.name} />
            </figure>
        </>
	);
}

export default CardGame;