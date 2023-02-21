import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Summary from "./components/Summary/Summary";
import data from "./data.json";
import GetPercentageOfPeopleBelow from "./utils/GetPercentageOfPeopleBelow";
import { getResult, getAllResults } from "./utils/getResults";

function App() {
  const [currentTest, setCurrentTest] = useState(data[0]);
  const [testResult, setTestResult] = useState(0);
  const [percentageBelow, setPercentageBelow] = useState(0);
  const allResults = useMemo(() => getAllResults(data), [data]);
  useEffect(() => {
    setTestResult(getResult(currentTest));
  }, [currentTest]);

  useEffect(() => {
    setPercentageBelow(GetPercentageOfPeopleBelow(allResults, testResult));
  }, [testResult]);
  return (
    <div className="App">
      <Summary
        result={testResult}
        memory={currentTest.memory}
        reaction={currentTest.reaction}
        verbal={currentTest.verbal}
        visual={currentTest.visual}
        percentageBelow={percentageBelow}
        setCurrentTest={setCurrentTest}
      />
    </div>
  );
}

export default App;
