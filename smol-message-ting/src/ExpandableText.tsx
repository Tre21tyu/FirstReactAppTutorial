import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}
const ExpandableText = ({children, maxChars = 100}: Props) => {
  const [hidden, setHidden] = useState(true)
  // If the length of the text passed is less than, then return that child and no button
  if (children.length <= maxChars) return children;

  // Otherwise, return the number of characters from 0 to the maxChars within the child text
  const text = hidden ? children.substring(0, maxChars) : children
  return <p>{text}...<button onClick={() => setHidden(!hidden)}>{ hidden ? 'More' : 'Less'}</button></p> 
} 

export default ExpandableText 
