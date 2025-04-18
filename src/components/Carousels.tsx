import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardGame from './CardGame'; 
import { useState } from 'react';

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

function Carousels({games}){

    return(
        <>
            {
                games && games.length > 0 ? (
                    <Carousel responsive={responsive}>
                            {games.map((game, index) => (
                                // <CardGame key={index} game={game} />
                                <img className="Img" src={game.background_image} alt={game.name} key={index} style={{height: "auto", width: "200px" }} />
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