import React from 'react';
import styled from 'styled-components';

import Topic from '../molecules/Topic';


const NewsList = ({ news }) => {
  return (
    <React.Fragment>
      {
        news && news.map(item => (
          <NewsWrap key={item.id}>
            <Topic topic={item} isShow={true} />
          </NewsWrap>
        ))
      }
    </React.Fragment>
  );
};

export default NewsList;

const NewsWrap = styled.div`
  margin-bottom: 50px;
`;