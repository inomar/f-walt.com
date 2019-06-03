import styled from 'styled-components';

import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Live from '../molecules/Live';
import { Container } from '../atoms/Shared';

const Wrap = styled.div`
  background: url(/static/top.jpg) no-repeat center center / cover;
  background-attachment: fixed;
  & .wrapColor {
    background-color: rgba(0,0,0,.5);
  }
`

const Lives = ({ lives }) => {
  
  return (
    <Wrap>
      <section className="section is-medium wrapColor">
        <Container className="container">
          <Heading title="LIVE" />
          <div className="columns">
            {
              lives && lives.map(live => (
                <div className="column">
                  <Live key={live.id} live={live} />
                </div>
              ))
            }
          </div>
          <div className="u-text-align">
            <Button title="Show All" />
          </div>
        </Container>
      </section>
    </Wrap>
  )
};

export default Lives;
