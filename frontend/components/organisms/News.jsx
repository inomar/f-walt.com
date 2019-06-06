import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import Topic from '../molecules/Topic';
import { Container } from '../atoms/style';

const News = ({ news }) => {

  return (
    <section className="section is-medium">
        <Container className="container">
          <div className="columns is-vcentered">
            <div className="column is-3">
              <Heading title="NEWS" />
            </div>
            <div className="column is-9">
              {
                news && news.map(item => (
                  <Topic key={item.id} topic={item} />
                ))
              }
            </div>
          </div>
          <div className="u-text-align">
            <Button title="Show All" />
          </div>
        </Container>
      </section>
  )
};

export default News;
