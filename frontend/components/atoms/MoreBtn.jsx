import Link from 'next/link';
import styled from 'styled-components';

const MoreBtn = ({ path }) => (
  <Link href={path}>
    <a>
      more
      <More className="icon">
        <i className="fas fa-chevron-right" />
      </More>
    </a>
  </Link>
);

export default MoreBtn;

const More = styled.span`
  vertical-align: middle;
  font-size: .8rem;
`;
