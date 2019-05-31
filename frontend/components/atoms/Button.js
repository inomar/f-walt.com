import styled, { keyframes } from 'styled-components';

const Button = ({title}) => {
  return (
    <Btn type="button" className="button">
      {title}
    </Btn>
  )
}

export default Button;

const Btn = styled.button`
  font-size: 1rem;
  padding: 0 50px;
  background-color: transparent;
  border: 1px solid #FFF;
  color: #FFF;  
  &:hover {
    opacity: .8;
  }
`;
