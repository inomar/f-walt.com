import styled from 'styled-components';

import { TwitterIcon, InstagramIcon } from '../atoms/Icon';
import CopyRight from '../atoms/CopyRight';

import { twitterUrl, instagramUrl} from '../../static/test';

const Section = styled.section`
  border-top: 1px solid #FFF;
  padding: 20px 0;
`;

const Menu = styled.nav`
  display: flex;
  justify-content: center;
  vertical-align: middle;
`;

const Footer = () => {
  return (
    <Section>
      <div className="container">
        <footer>
          <Menu>
            <TwitterIcon url={twitterUrl} />
            <InstagramIcon url={instagramUrl} />
          </Menu>
          <CopyRight />
        </footer>
      </div>
    </Section>
  )
}

export default Footer;