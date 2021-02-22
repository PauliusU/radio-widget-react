import styles from './index.module.css';
import {Footer, Header} from '../index';

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
