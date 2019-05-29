import moment from 'moment';
import styled from 'styled-components';

const LiveWrap = styled.div`
  border-left: 1px solid #FFF;
  padding: 10px 15px;
  font-weight: bold;
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
  const { date, live_house, title, ticket, acts, open, start } = props.live;
  const year = `${moment(date).format('YYYY')}`;
  const month_date = `${moment(date).format('MM/DD')}`;
  const live_open = `${moment(open).format('HH:mm')}`;
  const live_start = `${moment(start).format('HH:mm')}`;
  return (
    <LiveWrap>
      <Date>{year}.<span>{month_date}</span></Date>
      <div>
        <p>{live_house}</p>
        <Title>{title}</Title>
        <p>
          acts: { acts && acts.join('/')}
        </p>
        <p>ticket: ¥{ticket}</p>
        <p>open: {live_open} start: {live_start}</p>
      </div>
      <MoreWrap>
        <a href="#">more <ArrowIcon className="icon"><i class="fas fa-chevron-right"></i></ArrowIcon></a>
      </MoreWrap>
    </LiveWrap>
  )
}

export default Live;
