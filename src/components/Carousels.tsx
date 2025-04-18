import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Game } from '../types/game';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

interface CarouselsProps {
    games: Game[]
}

function Carousels({games}: CarouselsProps){
    return(
        <>
            {
                games && games.length > 0 ? (
                    <Carousel responsive={responsive}>
                            {games.map((game, index) => (
                                // <CardGame key={index} game={game} />
                                <img className="carouselImage" src={game.background_image} alt={game.name} key={index} style={{height: "auto", width: "200px" }} />
                            ))} 
                    </Carousel>
                ) : (
                    <p>Pas de jeu disponible</p>
                )
            }
        </>
    )
}

export default Carousels;