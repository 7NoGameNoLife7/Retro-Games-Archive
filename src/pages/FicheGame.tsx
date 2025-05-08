import { useLoaderData } from "react-router";
import styles from "./../styles/ficheGame.module.css";

function FicheGame() {
  const game = useLoaderData();
  console.log("game", game);

  const getStars = (rating: number) => {
    const maxStars = 5;
    const starPercentage = rating / 5;
    const fullStars = Math.round(starPercentage * maxStars);
    return {
      fullStars: fullStars,
      emptyStars: maxStars - fullStars,
    };
  };

  const { fullStars, emptyStars } = getStars(game.rating);

  const starIcons = Array.from({ length: fullStars }, (_, index) => (
    <span key={`full-${index}`} className={styles.starFull}>
      ★
    </span>
  )).concat(
    Array.from({ length: emptyStars }, (_, index) => (
      <span key={`empty-${index}`} className={styles.starEmpty}>
        ☆
      </span>
    ))
  );

  return (
    <>
      <h1>{game.name}</h1>
      <div className={styles.gameDetailImageContainer}>
        <img className={styles.imgGame} src={game.background_image} alt="" />
      </div>
      <div className={styles.rating}>{starIcons}</div>
      <div className={styles.gameDetailContainer}>
        <div className="released">
          <h2>Date de sortie:</h2>
          <p>{game.released}</p>
          {/* <div className={styles.devContainer}></div> */}
        </div>
        <div className={styles.descriptionContainer}>
          <h2>Description</h2>
          <p className="description">{game.description_raw}</p>
          <h2>Developpeur</h2>
          {game.developers.map((developer) => (
            <p key={developer.id}>{developer.name}</p>
          ))}
          <h2>Plateformes</h2>
          {game.platforms.map((platform) => (
            <p key={platform.platform.id}>{platform.platform.name}</p>
          ))}
        </div>
      </div>
      <div className={styles.favoriteButton}></div>
    </>
  );
}

export default FicheGame;
