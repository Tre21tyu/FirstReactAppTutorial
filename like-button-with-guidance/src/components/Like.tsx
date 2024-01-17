import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [clicks, setClicks] = useState(0);
  const colors = ["#ff6b81", "blue", "yellow", "green"];

  const addClick = () => {
    if (clicks === 3) {
      setClicks(0);
      onClick();
    } else {
      setClicks((prevClicks) => prevClicks + 1);
      onClick();
    }
    console.log(clicks);
  };

  const heartColor = colors[clicks];

  return clicks % 2 === 0 ? (
    <AiOutlineHeart color={heartColor} size={50} onClick={addClick} />
  ) : (
    <AiFillHeart color={heartColor} size={50} onClick={addClick} />
  );
};

export default Like;
