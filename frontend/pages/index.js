import styled from 'styled-components';
import Layout from '../components/Layout';
import Topic from '../components/Topic';
import Movie from '../components/organisms/Movie';
import Button from '../components/atoms/Button';
import Heading from '../components/atoms/Heading';
import Lives from '../components/organisms/Lives';
import Media from '../components/organisms/Media';

import { lives, movies } from '../static/test'; 

const Hero = styled.div`
  text-align: center;
  & img {
    width: 100%;
    height: 545px;
    object-fit: cover;
  }
`

const Title = styled.h2`
  text-align: center;
`;

export default () => (
    <Layout>
      <section>
        <div className="container">
          <Hero>
            <img src="/static/top.jpg"/>
          </Hero>
        </div>
      </section>

      <section className="section">
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

      <section className="section">
        <div className="container">
          <Heading title="VIDEO" />
          <div className="columns">
            {
              movies && movies.map(movie => (
                <div className="column" >
                  <Movie movieId={movie.movieId} />
                </div>
              ))
            }
          </div>
          <div className="u-text-align">
              <Button title="Show All" />
            </div>
        </div>
      </section>

      <Media />

    </Layout>
);
