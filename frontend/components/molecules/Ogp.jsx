import Head from 'next/head';
import { withRouter } from 'next/router';

import { SiteTitle, Description, TwitterScreenName, Logo_black, Logo_white, Url } from '../../config/constantes';

const Ogp = ({ router, title, description, image }) => {
  const { pathname, asPath } = router;
  const type = pathname === '/' ? 'website' : 'article';
  const siteUrl = pathname === '/' ? Url : `${Url}${asPath}`;
  const ImageUrl = `${Url}${Logo_black}`;
  return (
    <Head>
      <meta property="og:title" content={title || SiteTitle} />
      <meta property="og:description" content={description || Description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SiteTitle} />
      <meta property="og:image" content={image || ImageUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={`@${TwitterScreenName}`} />
    </Head>
  );
};

export default withRouter(Ogp);
