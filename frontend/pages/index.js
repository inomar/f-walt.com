import Layout from '../components/Layout';
import Hero from '../components/organisms/Hero';
import News from '../components/organisms/News';
import Videos from '../components/organisms/Videos';
import Lives from '../components/organisms/Lives';
import Media from '../components/organisms/Media';

import { lives, videos, news } from '../static/test'; 


export default () => (
    <Layout>
      <Hero />
      <News news={news} />
      <Lives lives={lives} />
      <Videos videos={videos} />
      <Media />
    </Layout>
);
