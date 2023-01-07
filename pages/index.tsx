import Head from 'next/head';

// all components imported here (in order ideally)
import Header from '../components/header';
import Art from '../components/art';
import AboutUs from '../components/aboutus';
import Weather from '../components/weather';

console.log('%cHello, World!',
'color: #F76C6C;\
background-color: #F8E9A1;\
font-size: 50px;\
font-weight: bold;\
border-radius: 6px;\
padding: 5px 10px;');

const Home = () => {
  return (
    <>
      <Head>
        <title>pointyThieves</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <>
        <Header />
        <Art />
        <AboutUs />
        <Weather />
      </>
    </>
  );
};


export default Home;