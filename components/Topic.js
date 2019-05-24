import styled from 'styled-components';

const News = styled.div`

`;

const Date = styled.time`

`;

const Content = styled.div`
  border-bottom: 1px solid #FFF;
  padding-bottom: 5px;
  margin-bottom: 30px;
`;

const Topic = ({date, content}) => {
  return (
    <Content>
      <div className="columns">
        <time className="column is-2">{date}</time>
        <span className="column is-10">{content}</span>
      </div>
    </Content>
  )
}

export default Topic;