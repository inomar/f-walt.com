import Head from 'next/head';

import { SiteTitle } from '../../config/constantes';
const Headers = ({ pageTitle, pageDescription }) => {

  return (
    <Head>
      <title>{pageTitle} - {SiteTitle}</title>
      <meta name="description" content={pageDescription} />
    </Head>
  )
}

export default Headers;
