import styled from 'styled-components';
import Layout from '../components/Layout';
import Topic from '../components/Topic';
import Live from '../components/organisms/Live';
import Movie from '../components/organisms/Movie';
import Button from '../components/atoms/Button';
import MusicPlayer from '../components/atoms/MusicPlayer';

const Hero = styled.div`
  text-align: center;
  & img {
    width: 100%;
    height: 450px;
    object-fit: cover;
  }
`

const Title = styled.h2`
  text-align: center;
`;

export default () => (
    <Layout>
      <section className="section">
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
              <Title className="h3">News</Title>
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

      <div className="p-live">
        <section className="section p-liveWrap">
          <div className="container">
            <h2 className="u-text-align">Live</h2>
            <div className="columns">
              {
                lives && lives.map(live => (
                  <div className="column">
                    <Live live={live} />
                  </div>
                ))
              }
            </div>
            <div className="u-text-align">
              <Button title="Show All" />
            </div>
          </div>
        </section>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="u-text-align">VIDEO</h2>
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

      <section className="section">
        <div className="container">
          <MusicPlayer />
        </div>
      </section>

    </Layout>
);


const lives = [
  {
    date: '2019-05-03 18:00:00',
    live_house: 'さいたまスーパーアリーナ',
    title: 'Big4 live',
    acts: ['メタリカ', 'アンスラックス', 'スラッシュ', 'メガデス'],
    ticket: 2500,
    open: '2019-05-03 18:00:00',
    start: '2019-05-03 19:00:00'
  },
  {
    date: '2019-05-03 18:00:00',
    live_house: 'さいたまスーパーアリーナ',
    title: 'Big4 live',
    acts: ['メタリカ', 'アンスラックス', 'スラッシュ', 'メガデス'],
    ticket: 2500,
    open: '2019-05-03 18:00:00',
    start: '2019-05-03 19:00:00'
  },
  {
    date: '2019-05-03 18:00:00',
    live_house: 'さいたまスーパーアリーナ',
    title: 'Big4 live',
    acts: ['メタリカ', 'アンスラックス', 'スラッシュ', 'メガデス'],
    ticket: 2500,
    open: '2019-05-03 18:00:00',
    start: '2019-05-03 19:00:00'
  }
];

const movies = [
  {
    movieId: 'W3q8Od5qJio',
  },
  {
    movieId: 'yMMz2VwbhVI', 
  },
  {
    movieId: 'GvD3CHA48pA',
  }
]