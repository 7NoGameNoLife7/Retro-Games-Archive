import styles from "./../styles/footer.module.css";
import RetroGameLogo from "./../assets/images/logov1.png";
import Joystick from "./../assets/images/joystickW-svgrepo-com.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.footerLogo} src={RetroGameLogo} alt="" />
      <p className={styles.footerText}>
        <span>© 2025 </span>
        <a className={styles.liens}
          href="https://www.linkedin.com/in/bruno-deschamps-75345512a"
          target="_blank"
        >
          Bruno.D
        </a>
        <span>  &  </span>
        <a href="https://www.linkedin.com/in/sebastien-allegros-162ba6242/"
        target="_blank">
          Sebastien.A
        </a>
      </p>

      <img className={styles.footerjoystick} src={Joystick} alt="" />
    </footer>
  );
};
export default Footer;
