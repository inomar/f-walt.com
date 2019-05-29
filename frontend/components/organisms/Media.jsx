import styled from 'styled-components';

import { AppleMusicPlayer, SpotifyMusicPlayer }  from '../atoms/MusicPlayer';
import TwitterEmbed from '../atoms/TwitterEmbed';
import InstgramEmbed from '../atoms/InstagramEmbed';
import { Container } from '../atoms/Shared';

import { spotifyUri, twitterScreenName } from '../../static/test';

const Box = styled.div`
  border-radius: 2px;
  border: 1px solid #FFF;
  padding: 10px;
  width: 100%;
`;

const Media = () => {
  return (
    <section className="section is-medium">
      <Container className="container">
        <div className="tile is-ancestor">
          <div className="tile is-6 is-parent is-vertical">
            <article className="tile is-child">
              <Box>
                <SpotifyMusicPlayer uri={spotifyUri} />
              </Box>
            </article>
            <article className="tile is-child">
              <AppleMusicPlayer />
            </article>
          </div>
          <div className="tile is-6 is-parent">
            <article className="tile is-12">
              <Box>
                <TwitterEmbed screenName={twitterScreenName} />
              </Box>
            </article>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Media;