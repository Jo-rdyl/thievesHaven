import { useState, useRef, useEffect } from 'react';
import styles from '../styles/artStuff.module.scss'

function ArtStuff() {
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
  ];

  const locations = [];

  for (let x = 0; x < dimensions.width - 45; x += 45) {
    for (let y = 0; y < dimensions.height - 45; y += 45) {
      locations.push([
        x + halfSpace[0],
        y + halfSpace[1]
      ])
    }
  }

  const smallLocations = locations.map((location) => [location[0] + 15, location[1] + 15]);
  const medLocations = locations.map((location) => [location[0] + 7.5, location[1] + 7.5]);
  const bigLocations = [...locations];
  const numberOfCircles = locations.length * 0.25;
  
  for (let i = locations.length - 1; i > numberOfCircles; i--) {
    smallLocations.splice(Math.trunc(Math.random() * i),1);
    medLocations.splice(Math.trunc(Math.random() * i),1);
    bigLocations.splice(Math.trunc(Math.random() * i),1);
  }

  smallLocations.pop(); medLocations.pop(); bigLocations.pop();

  const smallMapped = smallLocations.map((location) => {
    return (
      <div
      className={styles.small}
      style={{left: `${location[0]}px`, top: `${location[1]}px`}}
      key={`s${location}`} />
    )
  });
  const medMapped = medLocations.map((location) => {
    return (
      <div
      className={styles.med}
      style={{left: `${location[0]}px`, top: `${location[1]}px`}}
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

export default ArtStuff;