import styled from 'styled-components';
import Link from 'next/link';

import Api from '../../lib/api';
import { liveFormater } from '../../lib/Formater';
import Layout from '../../components/layout/Layout';
import UnderLayer from '../../components/layout/Underlayer';
import LiveDetaile from '../../components/molecules/LiveDetaile';
import ShareButtons from '../../components/molecules/ShareButtons';
import { Url } from '../../config/constantes';
import BackBtn from '../../components/atoms/BackBtn';
import Headers from '../components/layout/Headers';
import Ogp from '../components/molecules/Ogp';

const Show = ({ live, path }) => (
  <Layout>
    <Headers pageTitle={live.title} pageDescription={live.description} />
    <Ogp title={live.title} description={live.description} image={live.image ? live.image.url : null} />
    <UnderLayer title="LIVE">
      <Container className="container">
        <LiveDetaile live={live} isShow={true} />
        <ShareButtons title={live.title} url={`${Url}${path}`} />
      </Container>
      <Center>
        <BackBtn path="/live" />
      </Center>
    </UnderLayer>
  </Layout>
);

Show.getInitialProps = async function(context, req) {
  const { id } = context.query;
  const { asPath } = context;
  const api = new Api();
  const live = await api.lives().id(id);
  return { live: liveFormater(live), path: asPath};
}


export default Show;

const Container = styled.div`
  margin-bottom: 50px;
`;

const Center = styled.div`
  text-align: center;
  margin: 0 0 20px;
`;