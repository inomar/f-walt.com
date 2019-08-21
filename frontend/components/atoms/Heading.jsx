import styled from 'styled-components';
import media from 'styled-media-query';

import { fontFamilyAntiqu } from './snippets';

const Title = styled.h2`
  ${fontFamilyAntiqu}
  text-align: center;
  font-size: 2rem;
  margin: 10px 0 20px;
  ${media.lessThan('medium')`
    margin: 0 0 10px;
  `};
`;

const Heading = ({title}) => (
  <Title>
    {title}
  </Title>
);

export default Heading;
