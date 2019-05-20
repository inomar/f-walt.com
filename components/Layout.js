import '../styles/style.scss';
import Head from './Head';

export default ({ children }) => (
  <div>
    <Head />
    {children}
  </div>
);
