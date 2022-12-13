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
      <ArtStuff />
    </>
  );
};

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>
        <span className={styles.letter}>t</span>
        <span className={styles.letter}>h</span>
        <span className={styles.letter}>i</span>
        <span className={styles.letter}>e</span>
        <span className={styles.letter}>v</span>
        <span className={styles.letter}>e</span>
        <span className={styles.letter}>s</span>
        <wbr/>
        <span className={styles.letter}>H</span>
        <span className={styles.letter}>a</span>
        <span className={styles.letter}>v</span>
        <span className={styles.letter}>e</span>
        <span className={styles.letter}>n</span>
      </h1>
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

  // Desktop: 4.5vw, 22*14= 308circles, 100vw/64vw, 1vw left
  // Mobile: 12vw, 8*20= 160circles, 100vw/250vw, 4vw left

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
        className={styles.small}
        style={{left: `${location[0] + 15}px`, top: `${location[1] + 15}px`}}
        key={`s${location}`} />
      )
    });
    const medMapped = medLocations.map((location) => {
      return (
        <div
        className={styles.med}
        style={{left: `${location[0] + 7.5}px`, top: `${location[1] + 7.5}px`}}
        key={`m${location}`} />
      )
    });
    const bigMapped = bigLocations.map((location) => {
      return (
        <div
        className={styles.big}
        style={{left: `${location[0]}px`, top: `${location[1]}px`}}
        key={`b${location}`} />
      )
    });


  return (
    <div className={styles.ArtStuff} ref={ref}>
      <div className={styles.wrapper}>
      </div>
      <div className={styles.container}>
        {bigMapped}{medMapped}{smallMapped}
      </div>
    </div>
  )
}


export default Page;