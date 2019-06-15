import styled from 'styled-components';

import Api from '../lib/api';
import Layout from '../components/layout/Layout';
import UnderLayer from '../components/layout/Underlayer';
import LiveDetaile from '../components/molecules/LiveDetaile';
import Pagination from '../components/atoms/Pagination';
import { newsFormater } from '../lib/Formater'
import NewsList from '../components/organisms/NewsList';

const News = ({ news }) => (
  <Layout>
    <UnderLayer title="NEWS">
      <div className="container">
        <section className="section">
          <NewsList news={news} />
        </section>
      </div>
    </UnderLayer>
  </Layout>
)

News.getInitialProps = async function(context) {
  const { page } = context.query;
  const api = new Api();
  const news = await api.news().perPage(10).page(page).orderby('date').order('desc');
  return { news: news.map(news => newsFormater(news)), paging: news._paging };
}

export default News;
