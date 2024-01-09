import Like from "./components/Like";
import { useState } from "react";

const App = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    console.log("Heart clicked!");
  };

  return (
    <div>
      <Like onClick={handleClick} clicked={clicked} />
    </div>
  );
};

export default App;
