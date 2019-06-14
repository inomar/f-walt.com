import Link from 'next/link';
import styled from 'styled-components';

const BackBtn = ({ path }) => (
  <Link href={path}>
    <a>
      <BackIcon className="fas fa-chevron-left" />
      Back
    </a>
  </Link>
);

export default BackBtn;

const BackIcon = styled.i`
  margin-right: 5px;
`;