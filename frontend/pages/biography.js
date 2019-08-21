import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import UnderLayer from '../components/layout/Underlayer';


import Headers from '../components/layout/Headers';
import Ogp from '../components/molecules/Ogp';
import { biographyDescription } from '../config/constantes'
import Api from '../lib/api';

const Biography = ({ biography }) => {

  return (
    <Layout>
      <Headers pageTitle={'BIOGRAPHY'} pageDescription={biographyDescription} />
      <Ogp title={'BIOGRAPHY'} description={biographyDescription} />
      <UnderLayer title="BIOGRAPHY">
        <section class="section">
          <div className="container">
            <div dangerouslySetInnerHTML={{__html: biography}} />
          </div>
        </section>
      </UnderLayer>
    </Layout>
  )
}

Biography.getInitialProps = async function(context, req) {
  const api = new Api();
  const biography = await api.endpoint.posts().id(1);
  return { biography: biography.content.rendered } 
}

export default Biography;

