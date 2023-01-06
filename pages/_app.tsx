import {Space_Grotesk} from '@next/font/google';
import localFont from '@next/font/local';
import type { AppProps } from 'next/app';

/*yellow: #F8E9A1; pink: #F76C6C; lightBlue: #A8D0E6; blue: #374785; darkBlue: #24305E; white: #DAFFFF;*/
const SpaceGrotesk = Space_Grotesk({subsets: ['latin']})
const Mojangles = localFont({ src: '../public/fonts/Mojangles.ttf' })
const Nordic = localFont({ src: '../public/fonts/Nordic.ttf' })

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <style global jsx>{`
  html, body {
    font-family: ${SpaceGrotesk.style.fontFamily}, sans-serif;
    font-display: swap;
    padding: 0;
    margin: 0;
    background-color: #A8D0E6;
  }

  h1, h2, h3 , h4 {
    font-family: ${Nordic.style.fontFamily}, sans-serif;
    color: #F76C6C;
    font-display: swap;
  }
  
  ::-webkit-scrollbar {
    display: none;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
  }
  `}</style>
  <Component {...pageProps} />
  </>);
}