import { useEffect, useState } from 'react';
import Carousels from './components/Carousels';
import './App.css'
 
function App() {
    const [games, setGames] = useState([]);
    const API_KEY = "3f5ff275486a4c2db1f94dd4ad8036fd";
    
    const url = `https://api.rawg.io/api/games?key=${API_KEY}&dates=1950-01-01,2000-12-31&page_size=20&ordering=released`;

    useEffect(()=>{
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("data result", data);
                const newGames = data.results.slice(0, 5); // Prendre les 5 premiers jeux
                console.log(newGames, "newGames")
                setGames(newGames);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des données :", error);
            });
    }, []) 


    return (
        <div className="mainContainer">
            <h1>kikou</h1>
            <Carousels games={games}/>         
        </div>
    );
}

export default App;
