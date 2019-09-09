import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import UnderLayer from '../components/layout/Underlayer';

import Headers from '../components/layout/Headers';
import Ogp from '../components/molecules/Ogp';
import { marchDescription } from '../config/constantes';
import Button from '../components/atoms/Button';

import { ShopUrl } from '../config/constantes';


const items = [
  {
    id: 22916685, 
  },
  {
    id: 22917227,
  },
  {
    id: 22917591,
  },
  {
    id: 22937125,
  }
];

const March = () => {

  return (
    <Layout>
      <Headers pageTitle={'MARCH'} pageDescription={marchDescription} />
      <Ogp title={'MARCH'} description={marchDescription} />
      <UnderLayer title="MARCH">
        <section class="section">
          <div className="container">
            <Paragraph>
              <div className="columns">
                {
                  items && items.map(item => (
                    <div className="column">
                      <Iframe frameborder="0" height="480" width="320" src={`https://fwaltstyle.shopselect.net/items/${item.id}/widget/large`} />
                    </div>
                  ))
                }
              </div>
              <p><a href={ShopUrl} target="_blank">GO TO SHOP SITE</a></p>
            </Paragraph>
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

const Iframe = styled.iframe`
  height: 480px;
`;