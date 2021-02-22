import styles from './App.module.css';
import {Layout} from './components';
import stations from './stations';

function App() {
  return (
    <div className={styles.App}>
      <Layout>
        <ul className={styles.list}>
          {stations.map((station, index) => {
            return (
              <li className={styles.listItem} key={index}>
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
