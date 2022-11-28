import Head from 'next/head';
import styles from '../styles/index.module.scss';
import React, { useState } from 'react';
import * as d3 from 'd3';


const Page = () => {
  return (
    <div>
      <Head>
        <title>thievesHaven</title>
      </Head>
      <>
        <h1>Hello World!</h1>
        <Box />
        <D3 />
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
          setPhase(phase + 1)
        }
      }}></div>
    </>
  )
}

const D3 = () => {
  return (
    <div id='container'></div>
  );
};


d3.select('#container').append('p').text("This is written by d3");


export default Page;