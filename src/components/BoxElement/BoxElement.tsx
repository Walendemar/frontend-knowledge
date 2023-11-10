import { FC } from "react";

import styles from "./BoxElement.module.css";

type BoxElementProps = {
  id: number;
  text: string;
  onClick: (id: number) => void;
};

const BoxElement: FC<BoxElementProps> = ({ id, text, onClick }) => {
  const handleClick = () => onClick(id);

  return (
    <div className={styles.container} onClick={handleClick}>
      {text}
    </div>
  );
};

export default BoxElement;
