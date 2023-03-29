import { render, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Summary from "../components/Summary";
import Test from "../utils/TestInterface";
import data from "../data.json";

describe("Summary component", () => {
  let currentTest: Test;
  let setCurrentTest = vi.fn();

  beforeEach(() => {
    currentTest = {
      reaction: 50,
      memory: 70,
      verbal: 80,
      visual: 60,
    };
    setCurrentTest;
  });

  it("displays the correct test scores and result information", () => {
    const { getByText, getByTestId } = render(
      <Summary currentTest={currentTest} setCurrentTest={setCurrentTest} />
    );

    const resultSection = getByTestId("result-section");
    const summarySection = getByTestId("summary-section");

    expect(resultSection).toBeInTheDocument();
    expect(summarySection).toBeInTheDocument();

    expect(getByText("Your Result")).toBeInTheDocument();
    expect(getByText(`${currentTest.reaction}`)).toBeInTheDocument();
    expect(getByText(`${currentTest.memory}`)).toBeInTheDocument();
    expect(getByText(`${currentTest.verbal}`)).toBeInTheDocument();
    expect(getByText(`${currentTest.visual}`)).toBeInTheDocument();

    fireEvent.click(getByText("Retry"));
    expect(setCurrentTest).toHaveBeenCalledTimes(1);
  });
});
