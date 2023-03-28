import { useState } from "react";
import "./App.css";
import Summary from "./components/Summary/Summary";
import data from "./data.json";

function App() {
  const [currentTest, setCurrentTest] = useState(data[0]);
  return (
    <div className="App">
      <Summary currentTest={currentTest} setCurrentTest={setCurrentTest} />
    </div>
  );
}

export default App;
