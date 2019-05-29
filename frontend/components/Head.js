import styled from 'styled-components';

import { fontFamilyAntiqu } from './atoms/snippets';
import Color from './atoms/Color';
import { Container } from './atoms/shared';

export default() => (
  <header>
    <Brand>
      <img src="/static/logo.png" />
    </Brand>
    <Container className="container">
      <Nav>
        <NavItems>
          <NavItemLink>
            NEWS
          </NavItemLink>
          <NavItemLink>
            LIVE
          </NavItemLink>
          <NavItemLink>
            VIDEO
          </NavItemLink>
          <NavItemLink>
            MARCH
          </NavItemLink>
          <NavItemLink>
            BIOGRAPHY
          </NavItemLink>
          <NavItemLink>
            CONTACT
          </NavItemLink>
        </NavItems>
      </Nav>
    </Container>
  </header>
);

const Nav = styled.nav`
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Brand = styled.div`
  text-align: center;
  & img {
    height: 130px;
  }
`;

const NavItemLink = styled.a`
  ${fontFamilyAntiqu}
  font-size: 1.5rem;
  padding: 20px 0;
  line-height: 0.5;
`;