import styled from 'styled-components';

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
    <div className="container">
      <HeroImage>
        <img src="/static/top.jpg"/>
      </HeroImage>
    </div>
  </section>
);

export default Hero;