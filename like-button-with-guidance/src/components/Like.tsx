import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react';

interface Props {
  onClick: () => void
}
const Like = ({onClick}: Props) => {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setClicked(!clicked);
    onClick();
  }
  if (clicked) return <AiFillHeart color="#ff6b81" size={50} onClick={toggle} />
  return  <AiOutlineHeart color="#ff6b81" size={50} onClick={toggle}/>
}

export default Like
