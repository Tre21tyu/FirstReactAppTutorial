import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList/ProductList";

function App() {
  const ref = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (ref.current) ref.current.focus();
  })

  useEffect(() => {
    document.title = 'My App';
  })

  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList />
    </div>
  );
}

export default App
