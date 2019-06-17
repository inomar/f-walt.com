import Layout from '../components/layout/Layout';
import UnderLayer from '../components/layout/Underlayer';

import Headers from '../components/layout/Headers';
import Ogp from '../components/molecules/Ogp';
import { biographyDescription } from '../config/constantes'

const Biography = () => {

  return (
    <Layout>
      <Headers pageTitle={'BIOGRAPHY'} pageDescription={biographyDescription} />
      <Ogp title={'BIOGRAPHY'} description={biographyDescription} />
      <UnderLayer title="BIOGRAPHY">
        <div className="container">
        </div>
      </UnderLayer>
    </Layout>
  )
}

export default Biography;
