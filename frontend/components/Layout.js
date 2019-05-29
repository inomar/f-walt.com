import { createGlobalStyle } from 'styled-components';

import { fontFamily } from './atoms/snippets';
import Color from './atoms/Color';

import '../styles/style.scss';
import Head from 'next/head';
import Header from './Head';
import Footer from './Footer';

export default ({ children }) => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://use.typekit.net/rqc6rtq.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    </Head>
    <GlobalStyle />
    <Header />
    {children}
    <Footer />
  </div>
);


const GlobalStyle = createGlobalStyle`
  html,body {
    ${fontFamily}
    background: ${Color.BLACK};
    color: ${Color.WHITE};
  }
  a {
    color: ${Color.WHITE};
  }
`;