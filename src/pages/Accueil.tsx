import Carousels from "../components/Carousels";
import "../App.css";
import { useState, useEffect } from "react";
import { Genre } from "../types/genre";
import styles from "../styles/accueil.module.css";

function Accueil() {
  const [games, setGames] = useState({});
  const API_KEY = import.meta.env.VITE_API_KEY;
  const url = `https://api.rawg.io/api/games?key=${API_KEY}&dates=1950-01-01,2000-12-31&page_size=20&ordering=released&genres=`;

  useEffect(() => {
    const fetchGames = async (genre: Genre) => {
      try {
        const response = await fetch(`${url}${genre}`);
        const data = await response.json();
        setGames((prevGames) => ({
          ...prevGames,
          [genre]: data.results.slice(0, 20), // Prendre les 20 premiers jeux
        }));
      } catch (error) {
        console.error(
          `Erreur lors de la récupération des données pour ${genre}:`,
          error
        );
      }
    };

    // Fetch games for each genre
    for (const genre in Genre) {
      fetchGames(Genre[genre as keyof typeof Genre]);
    }
  }, []);

  return (
    <div className={styles.mainContainer}>
      <h1>Nos Suggestions</h1>
      {Object.values(Genre).map((genre) => (
        <section key={genre}>
          <div className={styles.genreTitleContainer}>
            <h2 className={styles.genreTitle}>
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </h2>
          </div>
          <Carousels games={games[genre]} />
        </section>
      ))}
    </div>
  );
}

export default Accueil;
