import styles from './index.module.css';

const Button = ({linkLocation, imageLocation}) => {
  return (
    <a href={linkLocation} className={styles.button}>
      <img src={imageLocation} alt="Button" className={styles.buttonImage} />
    </a>
  );
};

export default Button;
