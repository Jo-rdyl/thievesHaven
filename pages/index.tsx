import Head from 'next/head';
import styles from '../styles/index.module.scss';
import React, { useState } from 'react';
import MyButton from './button';


const Page = () => {
  return (
    <div>
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
        <MyButton/>
      </>
    </div>
  );
};

const Box = () => {
  const [phase,setPhase] = useState(0);

  return (
    <>
      <div style={{borderRadius: `${phase}%`}} className={styles.box} onMouseOver={() => {
        if (phase == 50) {
          setPhase(phase - 50)
        } else {
          setPhase(phase + 12.5)
        }
      }}></div>
    </>
  )
}


export default Page;