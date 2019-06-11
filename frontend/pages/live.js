import WPAPI from 'wpapi';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import UnderLayer from '../components/layout/Underlayer';
import LiveDetaile from '../components/molecules/LiveDetaile';
import Pagination from '../components/atoms/Pagination';
import { liveFormater } from '../lib/Formater';
import Api from '../lib/api';

const lives = [
  {
    id: 1,
    title: 'ライブタイトル',
    date: '2019-06-08 00:00:00',
  },{
    id: 2,
    title: 'ライブタイトル2',
    date: '2019-06-08 00:12:00',
    open: '12:00',
    start: '13:00',
    club: '新宿アンチノック',
    ticket: 2000,
    ticketType: 'スタンディング', 
    ticketSource: 'https://t.pia.jp/', 
    act: 'メタリカ/スラッsy', 
    contact: 'こちらまで',
    detail: '<a href="https://futurewoods.co.jp">こちら</a>'
  },
];

const Live = ({ lives, paging }) => {
  const { _paging } = lives;
  const { totalPages } = paging;
  return (
    <Layout>
      <UnderLayer title="LIVE">
        <div className="container">
          {
            lives && lives.map(item => <LiveDetaile live={item} />)
          }
          <Pages>
            <Pagination totalPage={totalPages} />
          </Pages>
        </div>
      </UnderLayer>
    </Layout>

  )
}

Live.getInitialProps = async function() {
  const api = new Api();
  const lives = await api.lives().perPage(10).orderby('date').order('desc');
  return { lives: liveFormater(lives), paging: lives._paging };
}

export default Live;

const Pages = styled.div`
  margin: 10px 0 20px;
`;