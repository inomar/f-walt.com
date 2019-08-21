import styled from 'styled-components';

import Pagination from '../atoms/Pagination';

const Pages = ({ totalPages, path }) => (
  <Page>
    <Pagination totalPage={totalPages} path={path} />
  </Page>
);

export default Pages;

const Page = styled.div`
  margin: 10px 0 40px;
`;