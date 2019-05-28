import styled from 'styled-components';

const Brand = styled.div`
  text-align: center;
  margin-top: 20px;
  & img {
    height: 100px;
  }
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
            <a className="navbar-item">
              NEWS
            </a>
            <a className="navbar-item">
              LIVE
            </a>
            <a className="navbar-item">
              VIDEO
            </a>
            <a className="navbar-item">
              MARCH
            </a>
            <a className="navbar-item">
              BIOGRAPHY
            </a>
            <a className="navbar-item">
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
);
