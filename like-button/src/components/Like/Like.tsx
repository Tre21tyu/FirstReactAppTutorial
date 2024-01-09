import { CiHeart } from "react-icons/ci";
import styles from "./Like.module.css";

interface Props {
  color?: string;
  onClick: () => void;
  clicked: boolean;
}

const Like = ({ color = 'red', onClick, clicked = false }: Props) => {
  return (
    <div className={styles.likeIcon} onClick={onClick}>
      <CiHeart
        className={`${styles.filledHeartIcon} ${clicked ? styles.clicked : ""}`}
        color={color}
      />
    </div>
  );
};

export default Like;
