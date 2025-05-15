import { useFavorites } from "../components/FavoritesContext";
import CardGame from "../components/CardGame";
import GamepadW from "./../assets/images/gamepadW-svgrepo-com.svg";

import { Link } from "react-router";

const Favoris = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favContainer">
      <h1>Mes Favoris</h1>
      <div className="favBody">
        {favorites.length > 0 ? (
          favorites.map((game) => (
            <Link to={`/game-details/${game.id}`}>
              <CardGame key={game.id} game={game} />
            </Link>
          ))
        ) : (
          <div>
           <img className="gamepad" src={GamepadW} alt="" />
            <p className="nullFav">Aucun jeu dans les favoris.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favoris;
