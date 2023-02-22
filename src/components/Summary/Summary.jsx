import React, { useEffect, useMemo, useState } from "react";
import { ReactComponent as IconMemory } from "../../assets/images/icon-memory.svg";
import { ReactComponent as IconReaction } from "../../assets/images/icon-reaction.svg";
import { ReactComponent as IconVerbal } from "../../assets/images/icon-verbal.svg";
import { ReactComponent as IconVisual } from "../../assets/images/icon-visual.svg";
import data from "../../data.json";
import getRandomItem from "../../utils/getRandomIndex";

import "./index.css";
import "./ResultSection.css";
import "./Body.css";
import { getAllResults, getResult } from "../../utils/getResults";
import GetPercentageOfPeopleBelow from "../../utils/GetPercentageOfPeopleBelow";

function Summary({ currentTest, setCurrentTest }) {
  const { reaction, memory, verbal, visual } = currentTest;
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
    if (percentageBelow <= 20) {
      setAssessmentMsg("Awful");
    } else if (percentageBelow > 20 && percentageBelow <= 40) {
      setAssessmentMsg("Bad");
    } else if (percentageBelow > 40 && percentageBelow <= 60) {
      setAssessmentMsg("Average");
    } else if (percentageBelow > 60 && percentageBelow <= 80) {
      setAssessmentMsg("Good");
    } else if (percentageBelow > 80) {
      setAssessmentMsg("Great");
    }

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

  const handleClick = () => {
    setCurrentTest(getRandomItem(data));
  };

  return (
    <div className="summary-component">
      <section className="result-section">
        <h2>Your Result</h2>
        <div className="result">
          <p>{testResult}</p>
          <span>of 100</span>
        </div>
        <p className="assessment">{assessmentMsg}</p>
        <p className="higher-than">
          You scored higher than {percentageBelow}% of the people who have taken
          these tests.
        </p>
      </section>
      <div className="summary-body">
        <h2>Summary</h2>
        <div>
          <div className="card">
            <div className="card-name">
              <IconReaction />
              <p>Reaction</p>
            </div>
            <p className="card-score">
              {reaction} <span>/ 100</span>{" "}
            </p>
          </div>
          <div className="card">
            <div className="card-name">
              <IconMemory />
              <p>Memory</p>
            </div>
            <p className="card-score">
              {memory} <span>/ 100</span>{" "}
            </p>
          </div>
          <div className="card">
            <div className="card-name">
              <IconVerbal />
              <p>Verbal</p>
            </div>
            <p className="card-score">
              {verbal} <span>/ 100</span>{" "}
            </p>
          </div>
          <div className="card">
            <div className="card-name">
              <IconVisual />
              <p>Visual</p>
            </div>
            <p className="card-score">
              {visual} <span>/ 100</span>{" "}
            </p>
          </div>
        </div>
        <button onClick={handleClick} className="continue-btn">
          Retry
        </button>
      </div>
    </div>
  );
}

export default Summary;
