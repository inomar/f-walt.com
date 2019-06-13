import styled from 'styled-components';
import media from 'styled-media-query';

import { fontFamilyAntiqu } from '../atoms/snippets';

const Underlayer = (props) => {
  const { title, children } = props;
  return (
    <React.Fragment>
      <Section>
        <Title>
          {title}
        </Title>
      </Section>
      <div>
        {children}
      </div>
    </React.Fragment>
  )
}

export default Underlayer;

const Section = styled.div`
  padding: 100px 1.5em;
  ${media.lessThan("medium")`
    padding: 20px 1.5em;
  `}
`;

const Title = styled.h1`
  ${fontFamilyAntiqu}
  font-size: 42px;
  text-align: center;
`;
