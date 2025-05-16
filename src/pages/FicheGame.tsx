import { useLoaderData } from "react-router";
import styles from "./../styles/ficheGame.module.css";

function FicheGame() {
  const game = useLoaderData();

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
      <h1>Titre & Description</h1>
      <h2>{game.name}</h2>
      <div className={styles.gameDetailImageContainer}>
        <img className={styles.imgGame} src={game.background_image} alt="" />
      </div>
      <div className={styles.rating}>{starIcons}</div>
      <div className={styles.gameDetailContainer}>
        <div className="released">
          <h3>Date de sortie:</h3>
          <p>{game.released}</p>
        </div>
        <div className={styles.descriptionContainer}>
          <h3>Description</h3>
          <p className="description">{game.description_raw}</p>
          <h3>Developpeur</h3>
          {game.developers.map((developer) => (
            <p key={developer.id}>{developer.name}</p>
          ))}
          <h3>Plateformes</h3>
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
