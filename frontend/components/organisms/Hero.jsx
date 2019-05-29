import styled from 'styled-components';

import { Container } from '../atoms/Shared';

const HeroImage = styled.div`
  text-align: center;
  & img {
    width: 100%;
    height: 545px;
    object-fit: cover;
  }
`;

const Hero = () => (
  <section>
    <Container className="container">
      <HeroImage>
        <img src="/static/top.jpg"/>
      </HeroImage>
    </Container>
  </section>
);

export default Hero;