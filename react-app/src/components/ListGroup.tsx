import { useState } from "react";
import styled from 'styled-components'; 

// The return value of this will be a component with all of the styles
const List = styled.ul`
.listGroup {
  list-style: none;
  padding: 0;
}
`
// Create the interface with the active boolean
interface ListItemProps {
  active: boolean;
}

// Pass the interface to the component
const ListItem = styled.li<ListItemProps>`
padding: 5px 0;
background: ${ props => props.active ? 'blue' : "none"}
}
`
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item : string) => void;
}
function ListGroup({items, heading, onSelectItem}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(1);
  // JSX markup has NO styling at all. Components are, themselves, styled.
  return (
    <>
      <h1>{heading}</h1>
      { items.length === 0 && <p>No items found</p> } 
      <List>
        {items.map((item, index) =>
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {setSelectedIndex(index);
            onSelectItem(item)}}
          >
            {item}
          </ListItem>
        )}
      </List>
    </>
  );
}

export default ListGroup
