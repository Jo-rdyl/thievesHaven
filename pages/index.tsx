import Head from 'next/head';

// all components imported here
import Art from '../components/art';
import AboutUs from '../components/aboutus';
import Header from '../components/header';

console.log('%cHello, World!',
'color: #374785;\
background-color: #A8D0E6;\
font-size: 50px;\
text-shadow: 3px 3px #24305E;\
font-weight: bold;\
border: 3px solid #24305E;\
border-radius: 6px;\
padding: 5px 10px;');

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