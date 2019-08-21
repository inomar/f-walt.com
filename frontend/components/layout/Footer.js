import styled from 'styled-components';

import { TwitterIcon, InstagramIcon } from '../atoms/Icon';
import CopyRight from '../atoms/CopyRight';

import { TwitterUrl, InstagramUrl} from '../../config/constantes';

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
            <TwitterIcon url={TwitterUrl} />
            <InstagramIcon url={InstagramUrl} />
          </Menu>
          <CopyRight />
        </footer>
      </div>
    </Section>
  )
}

export default Footer;