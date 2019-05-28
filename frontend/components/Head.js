import styled from 'styled-components';

import { fontFamilyAntiqu } from './atoms/snippets';

const Brand = styled.div`
  text-align: center;
  margin-top: 20px;
  & img {
    height: 100px;
  }
`;

const NavItemLink = styled.a`
  ${fontFamilyAntiqu}
  font-size: 1.2rem;
`;

export default() => (
  <header>
    <Brand>
      <img src="/static/logo.png" />
    </Brand>
    <div className="container">
      <nav className="navbar is-dark l-layoutHeader" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start l-layoutHeader__nav">
            <NavItemLink className="navbar-item">
              NEWS
            </NavItemLink>
            <NavItemLink className="navbar-item">
              LIVE
            </NavItemLink>
            <NavItemLink className="navbar-item">
              VIDEO
            </NavItemLink>
            <NavItemLink className="navbar-item">
              MARCH
            </NavItemLink>
            <NavItemLink className="navbar-item">
              BIOGRAPHY
            </NavItemLink>
            <NavItemLink className="navbar-item">
              CONTACT
            </NavItemLink>
          </div>
        </div>
      </nav>
    </div>
  </header>
);
