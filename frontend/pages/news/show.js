import styled from 'styled-components';

import Api from '../../lib/api';
import { newsFormater } from '../../lib/Formater';
import Layout from '../../components/layout/Layout';
import UnderLayer from '../../components/layout/Underlayer';
import Headers from '../../components/layout/Headers';
import Ogp from '../../components/molecules/Ogp';
import ShareButtons from '../../components/molecules/ShareButtons';
import { Url } from '../../config/constantes';
import BackBtn from '../../components/atoms/BackBtn';
import { FullDate } from '../../components/atoms/Date';

const Show = ({ news, path }) => (
  <Layout>
    <Headers pageTitle={news.title} pageDescription={news.body} />
    <Ogp title={news.title} description={news.body} />
    <UnderLayer title="NEWS">
      <Container className="container">
        <Section className="section">
          <FullDate date={news.date} />
          <Title>{news.title}</Title>
          <Content dangerouslySetInnerHTML={{ __html: news.body }} />
        </Section>
        <ShareButtons title={news.title} url={`${Url}${path}`} />
      </Container>
      <Center>
        <BackBtn path="/news" />
      </Center>
    </UnderLayer>
  </Layout>
);

Show.getInitialProps = async function(context, req) {
  const { id } = context.query;
  const { asPath } = context;
  const api = new Api();
  const news = await api.news().id(id);
  return { news: newsFormater(news), path: asPath};
}


export default Show;

const Container = styled.div`
  margin-bottom: 50px;
`;

const Center = styled.div`
  text-align: center;
  margin: 0 0 20px;
`;

const Section = styled.section`
  border-top: 1px solid #FFF;
  border-bottom: 1px solid #FFF;
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
`;

const Content = styled.div`
  padding: 10px 0;
`;