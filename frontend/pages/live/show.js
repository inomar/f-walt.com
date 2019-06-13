import styled from 'styled-components';
import Link from 'next/link';

import Api from '../../lib/api';
import { liveFormater } from '../../lib/Formater';
import Layout from '../../components/layout/Layout';
import UnderLayer from '../../components/layout/Underlayer';
import LiveDetaile from '../../components/molecules/LiveDetaile';

const Show = ({ live }) => (
  <Layout>
    <UnderLayer title="LIVE">
      <Container className="container">
        <LiveDetaile live={live} isShow={true} />
        <Link href="/live">
          <a>Back</a>
        </Link>
      </Container>
    </UnderLayer>
  </Layout>
);

Show.getInitialProps = async function(context) {
  const { id } = context.query;
  const api = new Api();
  const live = await api.lives().id(id);
  return { live: liveFormater(live) };
}


export default Show;

const Container = styled.div`
  margin-bottom: 50px;
`;