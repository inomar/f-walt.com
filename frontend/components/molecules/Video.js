import styled from 'styled-components';
import YouTube from 'react-youtube';

const MovieWrap = styled.div`
  position: relative;
  padding-bottom: 56.25%; /*アスペクト比 16:9の場合の縦幅*/
  height: 0;
  overflow: hidden;
  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const opts = {
  height: '480',
  width: '854',
  playerVars: {
    showinfo:0,
    rel: 0,
    controls: 2,
  },
};

const Video = ({videoId}) => {
  return (
    <MovieWrap key={videoId}>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
      />
    </MovieWrap>
  )
}

const onReady = (event) => {
  event.target.pauseVideo();
}


export default Video;