import styled from 'styled-components';
import media from 'styled-media-query';
import moment from 'moment';
import Link from 'next/link';

const Topic = ({ topic, isShow }) => {
  const { id, date, title } = topic;
  const published_at = `${moment(date).format('YYYY.MM.DD')}`;
  return (
    <Content>
      <div className="columns">
        <PublishedAt className="column is-2">{published_at}</PublishedAt>
        <p className="column is-10">
          <Link href={`/news/${id}`}>
            <a>{title}</a>
          </Link>
        </p>
      </div>
    </Content>
  )
}

export default Topic;

const Content = styled.div`
  border-bottom: 1px solid #FFF;
  padding-bottom: 5px;
  margin-bottom: 30px;
`;

const PublishedAt = styled.time`
  ${media.lessThan('medium')`
    padding-top: 0;
    padding-bottom: 0;
  `}
`;