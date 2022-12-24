import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.Header}>
      <h1>
        <span className={styles.letter}>p</span>
        <span className={styles.letter}>o</span>
        <span className={styles.letter}>i</span>
        <span className={styles.letter}>n</span>
        <span className={styles.letter}>t</span>
        <span className={styles.letter}>y</span>
        <wbr/>
        <span className={styles.letter}>T</span>
        <span className={styles.letter}>h</span>
        <span className={styles.letter}>i</span>
        <span className={styles.letter}>e</span>
        <span className={styles.letter}>v</span>
        <span className={styles.letter}>e</span>
        <span className={styles.letter}>s</span>
      </h1>
    </header>
  );
};

export default Header;