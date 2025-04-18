import styles from "./../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img
        className={styles.footerLogo}
        src="src/assets/images/logov1.png"
        alt=""
      />
      <p className={styles.footerText}>© 2025 Bruno.D & Sébastien.A</p>
    </footer>
  );
};
export default Footer;
