import {useDispatch} from 'react-redux';
import {Layout} from './components';
import {selectStation} from './actions';
import stations from './stations';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();

  return (
    <div className={styles.App}>
      <Layout>
        <ul className={styles.list}>
          {stations.map((station, index) => {
            return (
              <li
                className={styles.listItem}
                key={index}
                onClick={() => dispatch(selectStation(index))}
              >
                <p>{station.name}</p>
                <span>{station.frequency}</span>
              </li>
            );
          })}
        </ul>
      </Layout>
    </div>
  );
}

export default App;
