import { useState } from "react";
import "./App.css";
import Exchange from "./features/currency/exchange";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Exchange />
    </div>
  );
}

export default App;
