import Head from 'next/head';
import styles from '../styles/index.module.scss';
import React, { useState } from 'react';


const Page = () => {
  return (
    <>
      <Head>
        <title>thievesHaven</title>
      </Head>
      <>
        <h1>Hello World!</h1>
        <p className={styles.one}>Hello <span>World</span></p>
        <p className={styles.two}>Hello <span>World</span></p>
        <p className={styles.three}>Hello <span>World</span></p>
        <p className={styles.four}>Hello <span>World</span></p>
        <Box />
      </>
    </div>
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