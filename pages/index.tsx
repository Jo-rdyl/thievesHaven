import Head from 'next/head';
import styles from '../styles/index.module.scss';
import { useState, useRef, useEffect } from 'react';

const Page = () => {
  return (
    <>
      <Head>
        <title>thievesHaven</title>
      </Head>
      <Header />
      <p className={styles.one}>Hello World</p>
      <p className={styles.two}>Hello World</p>
      <p className={styles.three}>Hello <span>World</span></p>
      <p className={styles.four}>Hello <span>World</span></p>
      <p className={styles.five}>Hello World</p>
      <p className={styles.six}>Hello World</p>
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

  const locations = []
  for (let x = 22.5; x < dimensions.width; x += 45) {
    for (let y = 22.5; y < dimensions.height; y += 45) {
      locations.push([
        x - halfSpace[0],
        y - halfSpace[1]
      ])
    }
  }

  const smallPossibleLocations = [...locations];
  const medPossibleLocations = [...locations];
  const bigPossibleLocations = [...locations];
  const smallLocations = [];
  const medLocations = [];
  const bigLocations = [];
  const numberOfCircles = locations.length / 1.3;
  
  for (let i = locations.length - 1; i > numberOfCircles; i--) {
    let s = Math.trunc(Math.random() * i);
    let m = Math.trunc(Math.random() * i);
    let b = Math.trunc(Math.random() * i);

    smallLocations.push(smallPossibleLocations[s]);
    medLocations.push(medPossibleLocations[m]);
    bigLocations.push(bigPossibleLocations[b]);

    smallPossibleLocations.splice(s,1);
    medPossibleLocations.splice(m,1);
    bigPossibleLocations.splice(b,1);
    }

    const smallMapped = smallLocations.map((location) => {
      return (
        <div
        className={`${styles.circle} ${styles.small}`}
        style={{left: `${location[0] + 15}px`, top: `${location[1] + 15}px`}}/>
      )
    })
    const medMapped = medLocations.map((location) => {
      return (
        <div
        className={`${styles.circle} ${styles.med}`}
        style={{left: `${location[0] + 7.5}px`, top: `${location[1] + 7.5}px`}}/>
      )
    })
    const bigMapped = bigLocations.map((location) => {
      return (
        <div
        className={`${styles.circle} ${styles.big}`}
        style={{left: `${location[0]}px`, top: `${location[1]}px`}}/>
      )
    })


  return (
    <div className={styles.ArtStuff} ref={ref}>
        {bigMapped}{medMapped}{smallMapped}
    </div>
  )
}


export default Page;