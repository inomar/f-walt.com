import styled from 'styled-components';

const Icon = styled.span`
  font-size: 2rem;
`;

const TwitterIcon = styled(Icon)`
  color: #00aced;
`;

const InstagramIcon = styled(Icon)`
  background: -webkit-linear-gradient(0deg, #ACB6E5, #86FDE8);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  svg * {
  fill: url(#rg);
}
`;

const Section = styled.section`
  border-top: 1px solid #FFF;
  padding: 20px 0;
`;

const Menu = styled.div`
  justify-content: center;
`;

const CopyRight = styled.p`
  text-align: center;
  color: #e3e3e3;
  font-size: 0.8rem;
`;

const Footer = () => {
  return (
    <Section>
      <div className="container">
        <footer>
          <nav className="navbar is-black">
            <Menu className="navbar-menu">
              <div className="navbar-item"> 
                <TwitterIcon className="icon has-text-info">
                  <i class="fab fa-twitter"></i>
                </TwitterIcon>
              </div>
              <div className="navbar-item">
                <InstagramIcon className="icon">
                  <svg width="0" height="0">
                    <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                      <stop stopColor="#fdf497" offset="0" />
                      <stop stopColor="#fdf497" offset="0.05" />
                      <stop stopColor="#fd5949" offset="0.45" />
                      <stop stopColor="#d6249f" offset="0.6" />
                      <stop stopColor="#285AEB" offset="0.9" />
                    </radialGradient>
                  </svg>
                  <i class="fab fa-instagram" ariaHidden="true"></i>
                </InstagramIcon>
              </div>
            </Menu>
          </nav>
          <div>
            <CopyRight>Copyright ©️ F.Walt. All Rights Reserved.</CopyRight>
          </div>
        </footer>
      </div>
    </Section>
  )
}

export default Footer;