import useStore from "../../store/zustand";

import BoxElement from "../BoxElement";

import styles from "./LeftBox.module.css";

const LeftBox = () => {
  const elemArray = useStore((state) => state.leftBoxPerson);
  const handleClick = useStore((state) => state.movePersonRight);

  return (
    <div className={styles.container}>
      <div className={styles.elementContainer}>
        {elemArray.map(({ id, name }) => (
          <BoxElement key={id} id={id} text={name} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default LeftBox;
