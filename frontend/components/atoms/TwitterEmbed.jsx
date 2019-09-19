import { TwitterTimelineEmbed } from 'react-twitter-embed';
import styled from 'styled-components';

const TwitterEmbed = ({ screenName }) => (
  <TwitterTimelineEmbed
  sourceType="profile"
  screenName={screenName}
  theme="dark"
  transparent
  noFooter
  noScrollbar
  options={{height: 700, width: '100%'}}
/>
);

export default TwitterEmbed;
