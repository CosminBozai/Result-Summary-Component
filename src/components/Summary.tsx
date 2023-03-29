import data from "../data.json";
import Test from "../utils/TestInterface";
import useTestResult from "../utils/useTestResult";
import { getRandomItem } from "../utils/utilityFunctions";
import { ReactComponent as IconMemory } from "../assets/images/icon-memory.svg";
import { ReactComponent as IconReaction } from "../assets/images/icon-reaction.svg";
import { ReactComponent as IconVerbal } from "../assets/images/icon-verbal.svg";
import { ReactComponent as IconVisual } from "../assets/images/icon-visual.svg";
import "../styles/Summary.scss";

interface Props {
  currentTest: Test;
  setCurrentTest: React.Dispatch<React.SetStateAction<Test>>;
}

function Summary({ currentTest, setCurrentTest }: Props) {
  const { reaction, memory, verbal, visual } = currentTest;
  const { testResult, percentageBelow, assessmentMsg } =
    useTestResult(currentTest);

  const getAnotherTest = () => {
    setCurrentTest(getRandomItem(data));
  };

  return (
    <div className="summary-component">
      <section className="result-section" data-testid="result-section">
        <h2>Your Result</h2>
        <div className="test-score-container">
          <p>{testResult}</p>
          <span>of 100</span>
        </div>
        <p className="assessment">{assessmentMsg}</p>
        <p className="higher-than-message">
          You scored higher than {percentageBelow}% of the people who have taken
          these tests.
        </p>
      </section>
      <section className="summary-section" data-testid="summary-section">
        <h2>Summary</h2>
        <div>
          <div className="test-criteria-card">
            <div className="criteria">
              <IconReaction />
              <p>Reaction</p>
            </div>
            <p className="card-score">
              {reaction} <span>/ 100</span>{" "}
            </p>
          </div>
          <div className="test-criteria-card">
            <div className="criteria">
              <IconMemory />
              <p>Memory</p>
            </div>
            <p className="card-score">
              {memory} <span>/ 100</span>{" "}
            </p>
          </div>
          <div className="test-criteria-card">
            <div className="criteria">
              <IconVerbal />
              <p>Verbal</p>
            </div>
            <p className="card-score">
              {verbal} <span>/ 100</span>{" "}
            </p>
          </div>
          <div className="test-criteria-card">
            <div className="criteria">
              <IconVisual />
              <p>Visual</p>
            </div>
            <p className="card-score">
              {visual} <span>/ 100</span>{" "}
            </p>
          </div>
        </div>
        <button onClick={getAnotherTest} className="retry-btn">
          Retry
        </button>
      </section>
    </div>
  );
}

export default Summary;
