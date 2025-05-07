import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Game } from "../types/game";
import CardGame from "./CardGame";
import { Link } from "react-router";

const responsive = {
	largeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 6,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1615 },
		items: 5,
	},
	tablet: {
		breakpoint: { max: 1615, min: 1300 },
		items: 4,
	},
	tabletMini: {
		breakpoint: { max: 1300, min: 980 },
		items: 3,
	},
	phone: {
		breakpoint: { max: 980, min: 645 },
		items: 2,
	},
	phoneMini: {
		breakpoint: { max: 645, min: 0 },
		items: 1,
	},
};

interface CarouselsProps {
	games: Game[];
}

function Carousels({ games }: CarouselsProps) {
	return (
		<>
			{games && games.length > 0 ? (
				<Carousel responsive={responsive}>
					{games.map((game, index) => (
						<Link to={`/game-details/${game.id}`}>
							<CardGame
								key={index}
								game={game}
								style={{ height: "auto", width: "200px" }}
							/>
						</Link>
					))}
				</Carousel>
			) : (
				<p>Pas de jeu disponible</p>
			)}
		</>
	);
}

export default Carousels;
