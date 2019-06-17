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
        <div className="container">
        </div>
      </UnderLayer>
    </Layout>
  )
}

export default March;