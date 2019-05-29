import styled from 'styled-components';

import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Video from '../molecules/Video';

const Videos = ({ videos }) => {
  return (
    <section className="section is-medium">
      <div className="container">
        <Heading title="VIDEO" />
        <div className="columns">
          {
            videos && videos.map(video => (
              <div className="column" >
                <Video videoId={video.videoId} />
              </div>
            ))
          }
        </div>
        <div className="u-text-align">
            <Button title="Show All" />
          </div>
      </div>
    </section>
  )
};

export default Videos;
