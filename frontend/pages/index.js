import fetch from 'isomorphic-unfetch';
import WPAPI from 'wpapi';

import Layout from '../components/Layout';
import Hero from '../components/organisms/Hero';
import News from '../components/organisms/News';
import Videos from '../components/organisms/Videos';
import Lives from '../components/organisms/Lives';
import Media from '../components/organisms/Media';

const Index = (props) => {
  const { news, lives, videos } = props;
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
  wp.lives = wp.registerRoute('wp/v2', '/live/(?P<id>[0-9]+)');
  wp.videos = wp.registerRoute('wp/v2', '/video/(?P<id>[0-9]+)');

  const news = await wp.news().perPage(3).orderby('date').order('desc');
  const lives = await wp.lives().perPage(3).orderby('date').order('desc');
  const videos = await wp.videos().perPage(3).orderby('date').order('desc');
  return { news: newsFormater(news), lives: liveFormater(lives), videos: videoFormater(videos) }
}

export default Index;

const newsFormater = (data) => {
  if (!data) return [];
  return data.map(item => {
    const { id, title, content, date } = item;
    return {
      id,
      title: title.rendered,
      body: content.rendered,
      date: date,
    }
  })
}

const liveFormater = (data) => {
  if (!data) return [];
  return data.map(item => {
    const { id, title, content, acf, date } = item;
    const { act, club, ticket, start, open } = acf;
    return {
      id,
      title: title.rendered,
      body: content.rendered,
      club,
      act,
      ticket,
      start,
      open,
      date,
    }
  })
}

const videoFormater = (data) => {
  if (!data) return [];
  return data.map(item => {
    const { videoid } = item.acf;
    return {
      videoId: videoid,
    }
  })
}