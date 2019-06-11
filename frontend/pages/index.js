import Layout from '../components/layout/Layout';
import Hero from '../components/organisms/Hero';
import News from '../components/organisms/News';
import Videos from '../components/organisms/Videos';
import Lives from '../components/organisms/Lives';
import Media from '../components/organisms/Media';

import Api from '../lib/api';

import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { WP_URL } = publicRuntimeConfig

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
  const api = new Api();
  const news = await api.news().perPage(3).orderby('date').order('desc');
  const lives = await api.lives().perPage(3).orderby('date').order('desc');
  const videos = await api.videos().perPage(3).orderby('date').order('desc');
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