import Button from "../Button";
import backArrowImage from "../../assets/back-arrow.png";
import styles from "./index.module.css";
import switchImage from "../../assets/switch.png";

const Header = () => {
    return (
        <header className={styles.header}>
            <Button linkLocation="#" imageLocation={backArrowImage} />
            <p>stations</p>
            <Button linkLocation="#" imageLocation={switchImage} />
        </header>
    );
};

export default Header;
