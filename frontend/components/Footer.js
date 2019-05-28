import styled from 'styled-components';

const InstagramIcon = styled.span`
`;

const Footer = () => {
  return (
    <section className="section">
      <div className="container">
        <footer>
          <div>
            <span className="icon has-text-info">
              <i class="fab fa-twitter"></i>
            </span>
            <InstagramIcon className="icon">
              <i class="fab fa-instagram"></i>
            </InstagramIcon>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer;