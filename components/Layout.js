import '../styles/style.scss';
import Head from 'next/head';
import Header from './Head';
import Footer from './Footer';

export default ({ children }) => (
  <div>
    <Head>
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
);
