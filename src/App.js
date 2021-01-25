import styles from "./App.module.css";
import { Layout } from "./components";

function App() {
    return (
        <div className={styles.App}>
            <Layout>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <p>Putin FM</p>
                        <span>101,2</span>
                    </li>
                    <li className={styles.listItem}>
                        <p>Dribble FM</p>
                        <span>101,2</span>
                    </li>
                </ul>
            </Layout>
        </div>
    );
}

export default App;
