import styled from 'styled-components';
import YouTube from 'react-youtube';

const MovieWrap = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: 'hidden';
  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;


const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1,
  },
};

const Movie = () => {
  return (
    <MovieWrap>
      <YouTube
        videoid="2g811Eo7K8U"
        opts={opts}
        onReady={onReady}
      />
    </MovieWrap>
  )
}

const onReady = (event) => (
  event.target.pauseVideo()
);

export default Movie;