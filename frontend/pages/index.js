import fetch from 'isomorphic-unfetch';
import WPAPI from 'wpapi';

import Layout from '../components/Layout';
import Hero from '../components/organisms/Hero';
import News from '../components/organisms/News';
import Videos from '../components/organisms/Videos';
import Lives from '../components/organisms/Lives';
import Media from '../components/organisms/Media';

import { lives, videos } from '../static/test'; 

const Index = (props) => {
  const { news } = props;
  return (
    <Layout>
      <Hero />
      <News news={news} />
      <Lives lives={lives} />
      <Videos videos={videos} />
      <Media />
    </Layout>
  );
}

Index.getInitialProps = async function() {
  const wp = new WPAPI({ endpoint: `${process.env.WP_URL}/wp-json` });
  wp.news = wp.registerRoute('wp/v2', '/news/(?P<id>[0-9]+)');

  const data = await wp.news().perPage(3).orderby('date').order('desc');
  console.log(newsFormater(data))
  return { news: newsFormater(data) }
}

export default Index;

const newsFormater = (data) => {
  if (!data) return [];
  return data.map(item => {
    const { id, title, content, acf } = item;
    return {
      id,
      title: title.rendered,
      body: content.rendered,
      date: acf.publishedat,
    }
  })
}