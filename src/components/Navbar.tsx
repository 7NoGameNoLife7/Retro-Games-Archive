import styles from "./../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <ul className={styles.linksContainer}>
        <li className={`${styles.link} ${styles.linkHome}`}>
          <img src="src/assets/images/home-svgrepo-com.svg" alt="" />
        </li>
        <li className={`${styles.link} ${styles.linkFavorite}`}>
          <img src="src/assets/images/heart-svgrepo-com.svg" alt="" />
        </li>
      </ul>
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
            placeholder="Recherche" />
          
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
