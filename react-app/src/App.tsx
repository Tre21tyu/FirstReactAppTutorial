import { useState } from "react";
import Alert from "./components/Alert/Alert.tsx";
import Button from "./components/Button";
import ButtonUsage from "./MaterialUIButton";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
      <ButtonUsage/>
    </div> 
  );
}
export default App
