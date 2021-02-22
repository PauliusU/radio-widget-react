import Button from '../Button';
import styles from './index.module.css';
// Images
import backArrowImage from '../../assets/back-arrow.png';
import switchImage from '../../assets/switch.png';
// Global state
import {selectStation} from '../../actions';
import {useDispatch} from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <Button linkLocation="#" imageLocation={backArrowImage} />
      <p>stations</p>
      <Button
        linkLocation="#"
        imageLocation={switchImage}
        onClick={() => dispatch(selectStation(null))}
      />
    </header>
  );
};

export default Header;
