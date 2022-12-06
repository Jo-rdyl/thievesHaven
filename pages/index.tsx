import Head from 'next/head';
import styles from '../styles/index.module.scss';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';


const Page = () => {
  return (
    <>
      <Head>
        <title>thievesHaven</title>
      </Head>
      <Header />
      <p className={styles.one}>Hello <span>World</span></p>
      <p className={styles.two}>Hello <span>World</span></p>
      <p className={styles.three}>Hello <span>World</span></p>
      <p className={styles.four}>Hello <span>World</span></p>
      <ArtStuff />
    </>
  );
};

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>Hello World!</h1>
    </header>
  );
};

const ArtStuff = () => {
  const [dimensions,setDimensions] = useState({
    height: 0,
    width: 0,
  });
  const ref = useRef(null);

  useEffect(() => {
    setDimensions({
      height: ref.current!['clientHeight'], width: ref.current!['clientWidth']
    });
  });

  return (
    <div className={styles.ArtStuff} ref={ref}>
      <p>The height is {dimensions.height} and the width is {dimensions.width}</p>
    </div>
  )
}


export default Page;