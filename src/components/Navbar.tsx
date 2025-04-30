import { Link } from "react-router";
import styles from "./../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.linksContainer}>
        <Link className={`${styles.link} ${styles.linkHome}`} to="/">
          <img
            src="src/assets/images/home-svgrepo-com.svg"
            alt="lien vers la page Accueil"
          />
        </Link>
        <Link className={`${styles.link} ${styles.linkFavorite}`} to="/favoris">
          <img
            src="src/assets/images/heart-svgrepo-com.svg"
            alt="lien vers la page Favoris"
          />
        </Link>
      </nav>

      <img
        className={styles.navbarLogo}
        src="src/assets/images/logov1.png"
        alt=""
      />
      <div className={styles.navbarSearchContainer}>
        <img
          className={styles.navbarPacman}
          src="src/assets/images/pacmanV1-svgrepo-com.svg"
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
