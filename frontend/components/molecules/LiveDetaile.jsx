import styled from 'styled-components';
import media from 'styled-media-query';
import Link from 'next/link';
import { FullDate, DefaultDate } from '../atoms/Date';

const LiveDetaile = ({ live, isShow }) => {
  const { id, title, body, date, start, open, club, ticket, ticketType, ticketSource, act, contact, image } = live;
  return (
    <LiveWrap id={id}>
      <div className="liveContent">
      <FullDate date={date} />
      <Title>{title}</Title>
      { 
        club && <Content title={'場所'} body={club} />
      }
      {
        date && <Content title={'日時'} body={
        <div>
          <DefaultDate date={date} />
          <p>open: {open ? open : '-' }&nbsp; start: {start ? start : '-' }</p>
        </div>
      } />
      }
      {
        ticket && <Content title={'料金'} body={
          <div>
            {ticketType ? `${ticketType}` : '' } &yen;{ticket}（税込み）
          </div>
        } />
      }
      {
        act && <Content title={'出演者'} body={act} />
      }
      { 
        isShow && ticketSource && <Content style="ticketContent" title={'チケット'} body={
          <a href={ticketSource} target="_blank" >{ticketSource}</a>
        } />
      }
      { 
        isShow && contact && <Content title={'お問い合わせ'} body={contact} />
      }
      {
        isShow && body && <div dangerouslySetInnerHTML={{__html : body}} />
      }
      {
        isShow && image && <img src={image.url} />
      }
      {
        !isShow && (
          <p>
            <Link href={`/live/${id}`}>
              <a>more</a>
            </Link>
          </p>
        )
      }
      </div>
    </LiveWrap>
  )
}

const Content = ({ title, body, style }) => {
  return (
    <ContentLine className={style ? style : ''}>
      <dt>【{title}】</dt>
      <dd>{body}</dd>
    </ContentLine>
  )
}

export default LiveDetaile;

const LiveWrap = styled.section`
  &:first-child {
    border-top: 1px solid #FFF;
  }
  & .liveContent {
    padding: 40px 20px;
    border-bottom: 1px solid #FFF;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  ${media.lessThan('medium')`
    font-size: 1.8em;
  `}
`;

const ContentLine = styled.dl`
  margin-top: 10px;
  &.ticketContent {
    margin: 35px 0;
  }
`