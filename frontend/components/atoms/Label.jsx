import styled from 'styled-components';

export default ({label}) => (
  <Label className="label">{label}</Label>
)

const Label = styled.label`
  color: #FFF;
  text-align: left;
`;