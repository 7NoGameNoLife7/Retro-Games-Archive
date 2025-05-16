import { useFavorites } from "../components/FavoritesContext";
import CardGame from "../components/CardGame";
import GamepadW from "./../assets/images/gamepadW-svgrepo-com.svg";
import { Link } from "react-router";
import styles from "../styles/favoris.module.css";

const Favoris = () => {
  const { favorites } = useFavorites();

  return (
    <div className={styles.favContainer}>
      <h1>Mes Favoris</h1>
      <div className={styles.favBody}>
        {favorites.length > 0 ? (
          favorites.map((game) => (
            <Link to={`/game-details/${game.id}`}>
              <CardGame key={game.id} game={game} />
            </Link>
          ))
        ) : (
          <div>
           <img className={styles.gamePad} src={GamepadW} alt="" />
            <p className={styles.nullFav}>Aucun jeu dans les favoris.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favoris;
