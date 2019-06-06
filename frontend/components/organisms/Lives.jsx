import styled from 'styled-components';
import media from 'styled-media-query';
import { Parallax, Background } from 'react-parallax';

import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Live from '../molecules/Live';
import { Container } from '../atoms/style';

const LiveWrap = styled.div`
  .Live {
    border-left: 1px solid #FFF;
    &:last-child {
      border-right: 1px solid #FFF;
    }
    ${media.lessThan('medium')`
      border: none;
      border-bottom: 1px solid #FFF;
      &:last-child {
        border: none;
      }
    `}
  }
`;

const Lives = ({ lives }) => {
  
  return (
    <Parallax
      bgImage={'/static/background.jpg'}
      bgImageAlt="fwalt live"
      strength={500}
      contentClassName="u-bg__filter"
      bgImageStyle={{ objectFit: 'cover' }}
    >
      <section className="section is-medium wrapColor">
        <Container className="container">
          <Heading title="LIVE" />
          <LiveWrap className="columns">
            {
              lives && lives.map(live => (
                <div className="column Live">
                  <Live key={live.id} live={live} />
                </div>
              ))
            }
          </LiveWrap>
          <div className="u-text-align">
            <Button title="Show All" />
          </div>
        </Container>
      </section>
    </Parallax>
  )
};

export default Lives;
