import {useSelector} from 'react-redux';
import stations from '../../stations';
import styles from './index.module.css';

const Footer = () => {
  const station = useSelector((state) => state.station);

  return (
    <footer className={styles.footer}>
      {(station || station === 0) && (
        <>
          <p>currently playing</p>
          <span>{stations[station].name}</span>
        </>
      )}
    </footer>
  );
};

export default Footer;
