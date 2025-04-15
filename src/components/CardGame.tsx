interface CardGameProps {
	game: {
        name: string,
        background_image: string,
    }
}
    


function CardGame({ game }: CardJeuxProps) {
    console.log(game);
	return (
        <>

            <figure className="DisplayGame">  
                <h1>{game.name}</h1>
                <img className="Img" src={game.background_image} alt={game.name} />
            </figure>
        </>
	);
}

export default CardGame;