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
      <h1>theivesHaven</h1>
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
      height: ref.current!['clientHeight'],
      width: ref.current!['clientWidth']
    });
  },[]);

  const halfSpace = [
    (dimensions.width % 45) / 2, (dimensions.height % 45) / 2
  ]

  //create an array of possible locations
  const locations = []
  for (let x = 22.5; x < dimensions.width; x += 45) {
    for (let y = 22.5; y < dimensions.height; y += 45) {
      locations.push([
        x + halfSpace[0],
        y + halfSpace[1]
      ])
    }
  }

  const mapped = locations.map((location) => <li>{location[0]} {location[1]}</li>)

  return (
    <div className={styles.ArtStuff} ref={ref}>
      <ol>{mapped}</ol>
    </div>
  )
}


export default Page;