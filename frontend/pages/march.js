import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import UnderLayer from '../components/layout/Underlayer';

import Headers from '../components/layout/Headers';
import Ogp from '../components/molecules/Ogp';
import { marchDescription } from '../config/constantes';

const March = () => {

  return (
    <Layout>
      <Headers pageTitle={'MARCH'} pageDescription={marchDescription} />
      <Ogp title={'MARCH'} description={marchDescription} />
      <UnderLayer title="MARCH">
        <section class="section">
          <div className="container">
            <Paragraph><iframe frameborder="0" height="480" width="320" src="https://fwaltstyle.shopselect.net/items/22916685/widget/large" ></iframe></Paragraph>
          </div>
        </section>
      </UnderLayer>
    </Layout>
  )
}

export default March;

const Paragraph = styled.p`
  text-align: center;
`;