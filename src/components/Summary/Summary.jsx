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

  useEffect(() => {
    setTestResult(getResult(currentTest));
  }, [currentTest]);

  useEffect(() => {
    setPercentageBelow(GetPercentageOfPeopleBelow(allResults, testResult));
  }, [testResult]);

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
        <p className="assessment">Great</p>
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
