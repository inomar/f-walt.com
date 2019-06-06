import styled from 'styled-components';
import media from 'styled-media-query';
import moment from 'moment';


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

const Topic = ({ topic }) => {
  const { date, title } = topic;
  const published_at = `${moment(date).format('YYYY.MM.DD')}`;
  return (
    <Content>
      <div className="columns">
        <PublishedAt className="column is-2">{published_at}</PublishedAt>
        <p className="column is-10">{title}</p>
      </div>
    </Content>
  )
}

export default Topic;
