import moment from 'moment';
import styled from 'styled-components';
import media from 'styled-media-query';
import Link from 'next/link';

import MoreBtn from '../atoms/MoreBtn';
import { FullDate } from '../atoms/Date';

const LiveWrap = styled.div`
  padding: 10px 15px;
  font-weight: bold;
  ${media.lessThan('medium')`
    border: none;
  `}
  h3 {
    margin-bottom: 10px;
  }
  p, h3 {
    margin-top: 5px;
  }
`;

const Date = styled.time`
  color: #FFF;
  font-size: 1.5rem;
  & span {
    font-size: 2.3rem;
  }
`;
const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const MoreWrap = styled.div`
  text-align: right;
  padding-top: 10px;
  & a {
    color: #FFF;
  }
`;

const ArrowIcon = styled.span`
  vertical-align: middle;
  font-size: .8rem;
`;

const Live = (props) => {
  const { id, date, club, title, ticket, act, open, start } = props.live;
  const year = `${moment(date).format('YYYY')}`;
  const month_date = `${moment(date).format('MM/DD')}`;
  return (
    <LiveWrap>
      <FullDate date={date} />
      <div>
        <p>
          <i className="fas fa-cube"></i>&nbsp;
          {club}
        </p>
        <Title dangerouslySetInnerHTML={ {__html:title}} />
        <p>
          act: { act }
        </p>
        <p>ticket: {ticket}</p>
        <p>open: {open} &nbsp; start: {start}</p>
      </div>
      <MoreWrap>
        <MoreBtn path={`/live/${id}`} />
      </MoreWrap>
    </LiveWrap>
  )
}

export default Live;
