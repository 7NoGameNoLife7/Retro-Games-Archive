import styles from "./../styles/footer.module.css";
import RetroGameLogo from "./../assets/images/logov1.png";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img
        className={styles.footerLogo}
        src={RetroGameLogo}
        alt=""
      />
      <p className={styles.footerText}>© 2025 Bruno.D & Sébastien.A</p>
    </footer>
  );
};
export default Footer;
