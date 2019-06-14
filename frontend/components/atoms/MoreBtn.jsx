import Link from 'next/link';
import styled from 'styled-components';

const MoreBtn = ({ path }) => (
  <Link href={path}>
    <a>
      more
      <MoreIcon className="fas fa-chevron-right" />
    </a>
  </Link>
);

export default MoreBtn;

const MoreIcon = styled.i`
  margin-left: 5px;
`;
