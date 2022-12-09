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
      height: ref.current!['clientHeight'], width: ref.current!['clientWidth']
    });
  },[]);

  
  const leftoverSpace = {
    x: dimensions.width % 45, y: dimensions.height % 45
  }
  const usedSpace = {
    x: dimensions.width-leftoverSpace.x, y: dimensions.height-leftoverSpace.y
  }
  const numberOfCircles = {
    x: usedSpace.x / 45, y: usedSpace.y / 45
  }

  //create an array of possible locations
  const locations = []

  return (
    <div className={styles.ArtStuff} ref={ref}>
      <p>The width is {dimensions.width} and the height is {dimensions.height}</p>
      <p>The used up space is {usedSpace.x} horizontal and {usedSpace.y} vertical</p>
      <p>The number of circles is {numberOfCircles.x} horizontal and {numberOfCircles.y} vertical</p>
      <p>The remaining space is {leftoverSpace.x} horizontal and {leftoverSpace.y} vertical</p>
    </div>
  )
}


export default Page;