import Head from 'next/head';

// all components imported here
import Art from '../components/art';
import AboutUs from '../components/aboutus';
import Header from '../components/header';


const Home = () => {
  return (
    <>
      <Head>
        <title>pointyThieves</title>
      </Head>
      <>
        <Header />
        <Art />
        <AboutUs />
      </>
    </>
  );
};


export default Home;