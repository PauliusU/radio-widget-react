import styles from "./index.module.css";

const Footer = ({ currentStation = "" }) => {
    const testCurrentStation = currentStation || "Dribble FM";
    return (
        <footer className={styles.footer}>
            {testCurrentStation && (
                <>
                    <p>currently playing</p>
                    <span>{testCurrentStation}</span>
                </>
            )}
        </footer>
    );
};

export default Footer;
