import styles from './index.module.css';

const Button = ({linkLocation, imageLocation, onClick}) => {
  return (
    <a href={linkLocation} className={styles.button} onClick={onClick}>
      <img src={imageLocation} alt="Button" className={styles.buttonImage} />
    </a>
  );
};

export default Button;
