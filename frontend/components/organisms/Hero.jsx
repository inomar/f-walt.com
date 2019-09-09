import styled from 'styled-components';
import media from 'styled-media-query';

import { Container } from '../atoms/style';

const HeroImage = styled.div`
  text-align: center;
  & img {
    width: 100%;
    height: 545px;
    object-fit: cover;
    ${media.lessThan("medium")`
      height: 350px;
    `}
  }
`;

const Hero = () => (
  <section>
    <Container className="container">
      <HeroImage>
        <img src="/static/main.jpg"/>
      </HeroImage>
    </Container>
  </section>
);

export default Hero;