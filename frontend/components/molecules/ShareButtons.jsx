import styled from 'styled-components';

import { TwitterShareBtn, FacebookShareBtn } from '../../components/atoms/ShareBtn';

const ShareButtons = ({ url, title }) => (
  <Shares>
    <p>Share: </p>
    <TwitterShareBtn url={url} title={title} size={'fa-lg'} />
    <FacebookShareBtn url={url} size={'fa-lg'} />
  </Shares>
);

export default ShareButtons;

const Shares = styled.div`
  padding: 10px;
  display: flex;
  justify-content: left;
  & div {
    cursor: pointer;
    margin: 0 5px;
  }
`;
