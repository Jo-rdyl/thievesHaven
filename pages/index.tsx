import Head from 'next/head';
import styles from '../styles/index.module.scss';
import ArtStuff from '../components/artStuff';


const Home = () => {
  return (
    <>
      <Head>
        <title>pointyThieves</title>
      </Head>
      <Header />
      <ArtStuff />
      <AboutUs />
    </>
  );
};


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


function AboutUs() {
  function aboutPerson(props: any) {
    return (
      <div>
      </div>
    )
  }

  return (
    <section className={styles.AboutUs}>
    </section>
  )
}


export default Home;