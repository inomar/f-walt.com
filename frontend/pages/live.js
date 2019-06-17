import WPAPI from 'wpapi';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import UnderLayer from '../components/layout/Underlayer';
import LiveDetaile from '../components/molecules/LiveDetaile';
import Pages from '../components/molecules/Pages';
import { liveFormater } from '../lib/Formater';
import Api from '../lib/api';
import { liveDescription } from '../config/constantes';
import Headers from '../components/layout/Headers';
import Ogp from '../components/molecules/Ogp';

const Live = ({ lives, paging }) => {
  const { totalPages } = paging;
  return (
    <Layout>
      <Headers pageTitle={'LIVE'} pageDescription={liveDescription} />
      <Ogp title={'LIVE'} description={liveDescription} />
      <UnderLayer title="LIVE">
        <div className="container">
          {
            lives && lives.map(item => <LiveDetaile live={item} />)
          }
          <Pages totalPages={totalPages} path={'live'} />
        </div>
      </UnderLayer>
    </Layout>

  )
}

Live.getInitialProps = async function(context) {
  const { page } = context.query;
  const api = new Api();
  const lives = await api.lives().perPage(10).page(page).orderby('date').order('desc');
  return { lives: lives.map(live => liveFormater(live)), paging: lives._paging };
}

export default Live;
