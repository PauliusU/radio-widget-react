import styles from "./index.module.css";
import Button from "../Button";
import backArrowImage from "../../assets/back-arrow.png";
import switchImage from "../../assets/switch.png";

const Header = () => {
    return (
        <header className={styles.header}>
            <Button linkLocation="#" imageLocation={backArrowImage} />
            <p>Header</p>
            <Button linkLocation="#" imageLocation={switchImage} />
        </header>
    );
};

export default Header;
