import LeftBox from "../LeftBox";
import RightBox from "../RightBox";
import styles from "./Container.module.css";

const Container = () => {
  return (
    <div className={styles.container}>
      <h3>Это независимые друг от друга контейнеры</h3>
      <div className={styles.boxContainer}>
        <LeftBox />
        <RightBox />
      </div>
    </div>
  );
};

export default Container;
