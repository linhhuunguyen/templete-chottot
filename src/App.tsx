import { useState } from "react";

import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
    <HomePage/>
    </div>
  );
}

export default App;
