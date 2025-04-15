import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardGame from './components/CardGame'; // Assurez-vous d'importer correctement votre composant CardGame

const fakeJeux = [
    { name: "plop", background_image: "url_de_votre_image" }
];

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

function App() {
    const API_KEY = "3f5ff275486a4c2db1f94dd4ad8036fd";
    const [games, setGames] = useState(fakeJeux);
    const url = `https://api.rawg.io/api/games?key=${API_KEY}&dates=1950-01-01,2000-12-31&page_size=40&ordering=released`;

    const getGames = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("data result", data);
                const newGames = data.results.slice(0, 5); // Prendre les 5 premiers jeux
                setGames(newGames);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des données :", error);
            });
    };

    return (
        <div className="App">
            <Carousel responsive={responsive}>
                {games.map((game, index) => (
                    <CardGame key={index} game={game} />
                ))}
            </Carousel>
            <button type="button" onClick={getGames}>Get Games</button>
        </div>
    );
}

export default App;
