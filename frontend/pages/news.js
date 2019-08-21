import styled from 'styled-components';

import Api from '../lib/api';
import Layout from '../components/layout/Layout';
import UnderLayer from '../components/layout/Underlayer';
import Page from '../components/molecules/Pages';
import { newsFormater } from '../lib/Formater'
import NewsList from '../components/organisms/NewsList';
import Ogp from '../components/molecules/Ogp';
import Headers from '../components/layout/Headers';
import { newsDescription } from '../config/constantes';

const News = ({ news, paging }) => {
  const { totalPages } = paging;
  return (
    <Layout>
      <Headers pageTitle={'NEWS'} pageDescription={newsDescription} />
      <Ogp title={'NEWS'} description={newsDescription} />
      <UnderLayer title="NEWS">
        <div className="container">
          <section className="section">
            <NewsList news={news} />
          </section>
          <Page totalPages={totalPages} path="news" />
        </div>
      </UnderLayer>
    </Layout>
  );
}

News.getInitialProps = async function(context) {
  const { page } = context.query;
  const api = new Api();
  const news = await api.news().perPage(10).page(page).orderby('date').order('desc');
  return { news: news.map(news => newsFormater(news)), paging: news._paging };
}

export default News;
