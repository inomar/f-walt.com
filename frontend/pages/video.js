import WPAPI from 'wpapi';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import UnderLayer from '../components/layout/Underlayer';
import { videoFormater } from '../lib/Formater';
import Movie from '../components/molecules/Movie';

const Video = ({ videos }) => {
  console.log(videos)
  return (
    <Layout>
      <UnderLayer title="VIDEO">
        <div className="container">
          <section className="section is-medium">
            <div className="columns is-multiline is-desktop">
              {
                videos && videos.map(video => {
                  return (
                    <div className="column is-one-third">
                      <Movie videoId={video.videoId} />
                    </div>
                  )
                })
              }
            </div>
          </section>
        </div>
      </UnderLayer>
    </Layout>
  )

}

Video.getInitialProps = async function() {
  const wp = new WPAPI({ endpoint: `${process.env.WP_URL}/wp-json` });
  wp.videos = wp.registerRoute('wp/v2', '/video/(?P<id>[0-9]+)');
  const videos = await wp.videos().perPage(10).orderby('date').order('desc');
  return { videos: videoFormater(videos) };
}

export default Video;
