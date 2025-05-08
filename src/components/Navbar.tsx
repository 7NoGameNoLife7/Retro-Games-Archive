import { Link } from "react-router";
import styles from "./../styles/navbar.module.css";
import HomeIcon from "./../assets/images/home-svgrepo-com.svg";
import Favorite from "./../assets/images/heart-svgrepo-com.svg";
import RetroGameLogo from "./../assets/images/logov1.png";
import PacMan from "./../assets/images/pacmanV1-svgrepo-com.svg";
import ImageRetro from "./../assets/images/retroimgV3.png";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
         <img
      className={styles.imageRetro}
      src={ImageRetro} alt="image retro" />
      <nav className={styles.linksContainer}>
        <Link className={`${styles.link} ${styles.linkHome}`} to="/">
          <img
            src={HomeIcon}
            alt="lien vers la page Accueil"
          />
          
        </Link>
        <Link className={`${styles.link} ${styles.linkFavorite}`} to="/favoris">
          <img
            src={Favorite}
            alt="lien vers la page Favoris"
          />
        </Link>
    </nav>

      <img
        className={styles.navbarLogo}
        src={RetroGameLogo}
        alt=""
      />
      <div className={styles.navbarSearchContainer}>
        <img
          className={styles.navbarPacman}
          src={PacMan}
          alt=""
        />
        <div className={styles.navbarInputContainer}>
          <input
            className={styles.navbarInput}
            type="text"
            name="search"
            id="search"
            minLength={2}
            maxLength={12}
            placeholder="Recherche"
          />

          <img
            src="src/assets/images/loupeV2-search-svgrepo-com.svg"
            alt=""
            className={styles.navbarMagnify}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
