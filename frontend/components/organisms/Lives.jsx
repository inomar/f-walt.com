import styled from 'styled-components';
import media from 'styled-media-query';

import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Live from '../molecules/Live';
import { Container } from '../atoms/style';

const Wrap = styled.div`
  background: url(/static/background.jpg) no-repeat center center / cover;
  background-attachment: fixed;
  & .wrapColor {
    background-color: rgba(0,0,0,.5);
  }
`

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
    <Wrap>
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
    </Wrap>
  )
};

export default Lives;
