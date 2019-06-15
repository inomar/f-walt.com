import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const Button = ({title, href, as = null}) => {
  return (
    <Link href={href} as={as} >
      <Btn className="button">
        {title}
      </Btn>
    </Link>
  )
}

export default Button;

const Btn = styled.a`
  font-size: 1rem;
  padding: 0 50px;
  background-color: transparent;
  border: 1px solid #FFF;
  color: #FFF;  
  &:hover {
    opacity: .8;
  }
`;
