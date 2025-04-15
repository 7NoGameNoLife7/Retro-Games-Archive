import { useState } from "react";
import "./App.css";
import CardGame from "./components/CardGame";

const fakeJeux = {
    name: "plop",
}

function App() {
    const API_KEY = "3f5ff275486a4c2db1f94dd4ad8036fd"
    const [game, setGame] = useState(fakeJeux);
    const url = `https://api.rawg.io/api/games?key=${API_KEY}&dates=1950-01-01,2000-12-31&page_size=40&ordering=released`
    const getGame = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("data result", data);
                setGame(data.results[15]);
            })
        };
        
    return (
        <div className="App">
            <CardGame game={game} />
            <button type="button" onClick={getGame}>Get Game</button>
        </div>
    );
}

export default App
