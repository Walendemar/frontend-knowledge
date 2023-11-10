import useStore from "../../store/zustand";

import BoxElement from "../BoxElement";

import styles from "./RightBox.module.css";

const RightBox = () => {
  const elemArray = useStore((state) => state.rightBoxPerson);
  const handleClick = useStore((state) => state.movePersonLeft);

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

export default RightBox;
