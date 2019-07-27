import React, { createRef, Component } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Link from 'next/link';

import { FullDate, DefaultDate } from '../atoms/Date';
import ImageLightBox from '../atoms/ImageLightBox';
import MoreBtn from '../atoms/MoreBtn';

class LiveDetaile extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.child.current.onOpen();
  };

  render() {
    const { live, isShow } = this.props;
    const { id, title, body, date, start, open, club, ticket, ticketType, ticketSource, act, contact, image } = live;
    return (
      <LiveWrap id={id}>
        <div className="liveContent">
        <FullDate date={date} />
        <Title dangerouslySetInnerHTML={{ __html: title }} />
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
          isShow && body && <Content title={'内容'} body={
            <div dangerouslySetInnerHTML={{__html : body}} />
          } />
        }
        {
          isShow && image && <Image src={image.url} onClick={this.onClick} />
        }
        {
          !isShow && (
            <MoreWrap>
              <MoreBtn path={`/live/${id}`} />
            </MoreWrap>
          )
        }
        </div>
      {
        isShow && image && <ImageLightBox image={image.url} ref={this.child} />
      }
      </LiveWrap>
    );
  }
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
`;

const Image = styled.img`
  margin-top: 20px;
  border: 1px solid #FFF;
  padding: 2px;
  width: 100px;
  height: auto;
  cursor: pointer;
`;

const MoreWrap = styled.p`
  padding: 20px 0 0;
`;