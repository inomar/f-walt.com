import styled from 'styled-components';
import { fontFamilyAntiqu } from './snippets';

const Title = styled.h2`
  ${fontFamilyAntiqu}
  text-align: center;
  font-size: 2rem;
  margin: 10px 0;
`;

const Heading = ({title}) => (
  <Title>
    {title}
  </Title>
);

export default Heading;
