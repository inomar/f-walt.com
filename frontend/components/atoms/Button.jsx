import styled, { css } from 'styled-components';
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

export const ButtonClick = ({ title, func, type = 'button'}) => {
  return (
    <Btn className="button" onClick={func} type={type}>
      {title}
    </Btn>
  );
};

export const ButtonSubmit = ({ title }) => {
  return (
    <BtnB className="button" type="submit">
      {title}
    </BtnB>
  );
};

export default Button;

const BtnStyle = css`
  font-size: 1rem;
  padding: 0 50px;
  background-color: transparent;
  border: 1px solid #FFF;
  color: #FFF;  
  &:hover {
    opacity: .8;
  }
`;

const Btn = styled.a`
  ${BtnStyle}
`;

const BtnB = styled.button`
  ${BtnStyle}
`;
