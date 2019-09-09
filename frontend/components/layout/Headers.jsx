import Head from 'next/head';

import { SiteTitle } from '../../config/constantes';
const Headers = ({ pageTitle, pageDescription, children }) => {

  return (
    <Head>
      <title>{pageTitle} - {SiteTitle}</title>
      <meta name="description" content={pageDescription} />
      {children}
    </Head>
  )
}

export default Headers;
