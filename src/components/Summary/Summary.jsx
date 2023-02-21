import React from "react";
import { ReactComponent as IconMemory } from "../../assets/images/icon-memory.svg";
import { ReactComponent as IconReaction } from "../../assets/images/icon-reaction.svg";
import { ReactComponent as IconVerbal } from "../../assets/images/icon-verbal.svg";
import { ReactComponent as IconVisual } from "../../assets/images/icon-visual.svg";

import "./index.css";
import "./Header.css";
import "./Body.css";

function Summary() {
  return (
    <div className="summary-component">
      <div className="summary-header">
        <p className="header-p">Your Result</p>
        <div className="result">
          <p>76</p>
          <span>of 100</span>
        </div>
        <p className="assessment">Great</p>
        <p className="higher-than">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="summary-body">
        <h2>Summary</h2>
        <div className="card">
          <div className="card-name">
            <IconReaction />
            <p>Reaction</p>
          </div>
          <p className="card-score">80/100</p>
        </div>
        <div className="card">
          <div className="card-name">
            <IconMemory />
            <p>Memory</p>
          </div>
          <p className="card-score">80/100</p>
        </div>
        <div className="card">
          <div className="card-name">
            <IconVerbal />
            <p>Verbal</p>
          </div>
          <p className="card-score">80/100</p>
        </div>
        <div className="card">
          <div className="card-name">
            <IconVisual />
            <p>Visual</p>
          </div>
          <p className="card-score">80/100</p>
        </div>
        <button className="continue-btn">Continue</button>
      </div>
    </div>
  );
}

export default Summary;
