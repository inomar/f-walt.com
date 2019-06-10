import WPAPI from 'wpapi';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import UnderLayer from '../components/layout/Underlayer';
import LiveDetaile from '../components/molecules/LiveDetaile';
import Pagination from '../components/atoms/Pagination';
import { liveFormater } from '../lib/Formater'

const Contact = () => {
  
  return (
    <Layout>
      <UnderLayer title="CONTACT">
        <div className="container">
        </div>
      </UnderLayer>
    </Layout>
  )

}

export default Contact;
