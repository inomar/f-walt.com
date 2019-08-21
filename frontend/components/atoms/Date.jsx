import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ja';


export const FullDate = ({ date }) => {
  const year = `${moment(date).format('YYYY')}`;
  const month_date = `${moment(date).format('MM/DD')}`
  return (
    <LiveDate className="large">{year}.<span className="large">{month_date}</span></LiveDate>
  )
};

export const DefaultDate = ({ date }) => {
  const year = `${moment(date).format('YYYY')}`;
  const month_date = `${moment(date).format('MM/DD')}`;
  const dd = `${moment(date).format('dd')}`;
  return (
    <LiveDate>{year}.<span>{month_date}</span><span>({dd})</span></LiveDate>
  )
};




const LiveDate = styled.time`
  color: #FFF;
  &.large {
    font-size: 1.5rem;
  }
  & .large {
    font-size: 2.3rem;
  }
`;