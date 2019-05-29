import styled from 'styled-components';
import Layout from '../components/Layout';
import Topic from '../components/Topic';
import Movie from '../components/molecules/Video';
import Button from '../components/atoms/Button';
import Heading from '../components/atoms/Heading';
import Videos from '../components/organisms/Videos';
import Lives from '../components/organisms/Lives';
import Media from '../components/organisms/Media';

import { lives, videos } from '../static/test'; 

const Hero = styled.div`
  text-align: center;
  & img {
    width: 100%;
    height: 545px;
    object-fit: cover;
  }
`

export default () => (
    <Layout>
      <section>
        <div className="container">
          <Hero>
            <img src="/static/top.jpg"/>
          </Hero>
        </div>
      </section>

      <section className="section is-medium">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-3">
              <Heading title="NEWS" />
            </div>
            <div className="column is-9">
              <div>
                <Topic date="2019.04.11" content="メッセージ" />
                <Topic date="2019.04.11" content="メッセージ" />
                <Topic date="2019.04.11" content="メッセージ" />
              </div>
            </div>
          </div>
          <div className="u-text-align">
            <Button title="Show All" />
          </div>
        </div>
      </section>

      <Lives lives={lives} />
      <Videos videos={videos} />
      <Media />
    </Layout>
);
