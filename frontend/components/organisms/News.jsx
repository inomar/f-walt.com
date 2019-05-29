
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import Topic from '../molecules/Topic';

const News = ({ news }) => {

  return (
    <section className="section is-medium">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-3">
              <Heading title="NEWS" />
            </div>
            <div className="column is-9">
              {
                news && news.map(item => (
                  <Topic topic={item} />
                ))
              }
            </div>
          </div>
          <div className="u-text-align">
            <Button title="Show All" />
          </div>
        </div>
      </section>
  )
};

export default News;