import { useState } from "react";
import{ Link } from "react-router";
import "./App.css";

import Accueil from "./pages/Accueil";
import Favoris from "./pages/Favoris";
import FicheGame from "./pages/FicheGame";

function App() {
  // const [currentLocation, setCurrentLocation] = useState("/");
  return (
    <>
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/Favoris">Favoris</Link>
    </nav>
    <main>???</main>
    </>
  );
}

export default App;
