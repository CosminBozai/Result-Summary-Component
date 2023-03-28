import { useState } from "react";
import "./App.css";
import Summary from "./components/Summary/Summary";
import data from "./data.json";
import Test from "./utils/TestInterface";

function App() {
  const [currentTest, setCurrentTest] = useState<Test>(data[0]);
  return (
    <div className="App">
      <Summary currentTest={currentTest} setCurrentTest={setCurrentTest} />
    </div>
  );
}

export default App;
