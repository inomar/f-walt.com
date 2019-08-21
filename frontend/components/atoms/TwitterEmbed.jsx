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
  options={{height: 400}}
/>
);

export default TwitterEmbed;
