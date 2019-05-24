import styled from 'styled-components';
import Layout from '../components/Layout';
import Topic from '../components/Topic';
import Button from '../components/atoms/Button';

const Hero = styled.div`
  text-align: center;
  & img {
    width: 100%;
    height: 450px;
    object-fit: cover;
  }
`

export default () => (
    <Layout>
      <section className="section">
        <div className="container">
          <Hero>
            <img src="/static/top.jpg" />
          </Hero>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <h2 className="h3">News</h2>
            </div>
            <div className="column is-9">
              <div>
                <Topic date="2019.04.11" content="メッセージ" />
                <Topic date="2019.04.11" content="メッセージ" />
                <Topic date="2019.04.11" content="メッセージ" />
              </div>
            </div>
          </div>
          <div>
            <Button title="Show All" />
          </div>
        </div>
      </section>

    </Layout>
);
