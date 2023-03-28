import { useEffect, useMemo, useState } from "react";
import Test from "./TestInterface";
import {
  getAllResults,
  getResult,
  GetPercentageOfPeopleBelow,
} from "./utilityFunctions";
import data from "../data.json";

function useTestResult(currentTest: Test) {
  const [testResult, setTestResult] = useState(0);
  const allResults = useMemo(() => getAllResults(data), [data]);
  const [percentageBelow, setPercentageBelow] = useState(0);
  const [assessmentMsg, setAssessmentMsg] = useState("Awful");

  useEffect(() => {
    setTestResult(getResult(currentTest));
  }, [currentTest]);

  useEffect(() => {
    setPercentageBelow(GetPercentageOfPeopleBelow(allResults, testResult));
  }, [testResult]);

  useEffect(() => {
    switch (true) {
      case percentageBelow < 20:
        setAssessmentMsg("Awful");
        break;
      case percentageBelow >= 20 && percentageBelow < 40:
        setAssessmentMsg("Bad");
        break;
      case percentageBelow >= 40 && percentageBelow < 60:
        setAssessmentMsg("Average");
        break;
      case percentageBelow >= 60 && percentageBelow < 80:
        setAssessmentMsg("Good");
        break;
      case percentageBelow >= 80 && percentageBelow < 100:
        setAssessmentMsg("Great");
        break;
      case percentageBelow === 100:
        setAssessmentMsg("The very best");
        break;
    }
  }, [percentageBelow]);

  return { testResult, percentageBelow, assessmentMsg };
}

export default useTestResult;
