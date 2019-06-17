import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import UnderLayer from '../components/layout/Underlayer';
import { videoFormater } from '../lib/Formater';
import Movie from '../components/molecules/Movie';
import Api from '../lib/api';
import Headers from '../components/layout/Headers';
import Ogp from '../components/molecules/Ogp';
import { videoDescription } from '../config/constantes';

const Video = ({ videos }) => {
  return (
    <Layout>
      <Headers pageTitle={'VIDEO'} pageDescription={videoDescription} />
      <Ogp title={'VIDEO'} description={videoDescription} />
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
};

Video.getInitialProps = async function() {
  const api = new Api();
  const videos = await api.videos().perPage(10).orderby('date').order('desc');
  return { videos: videoFormater(videos) };
}

export default Video;
