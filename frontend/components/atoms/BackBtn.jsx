import Link from 'next/link';
import styled from 'styled-components';

const BackBtn = ({ path }) => (
  <Link href={path}>
    <a>
      <Back className="icon">
        <i className="fas fa-chevron-left" />
      </Back>
      back
    </a>
  </Link>
);

export default BackBtn;

const Back = styled.span`
  vertical-align: middle;
  font-size: .8rem;
`;