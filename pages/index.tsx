import Head from 'next/head';
import styles from '../styles/index.module.scss';


const Page = () => {
  return (
    <div>
      <Head>
        <title>thievesHaven</title>
      </Head>
      <main className={styles.main}>
        <h1>Hello World!</h1>
        <p className={styles.one}>Hello <span>World</span></p>
        <p className={styles.two}>Hello <span>World</span></p>
        <p className={styles.three}>Hello <span>World</span></p>
        <p className={styles.four}>Hello <span>World</span></p>
      </main>
    </div>
  );
};



export default Page;