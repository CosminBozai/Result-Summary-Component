import { renderHook } from "@testing-library/react";
import useTestResult from "../utils/useTestResult";

describe("useTestResult", () => {
  const mockTest = {
    reaction: 71,
    memory: 80,
    verbal: 92,
    visual: 75,
  };
  const { result } = renderHook(() => useTestResult(mockTest));

  test("returns the correct test result", () => {
    expect(result.current.testResult).toBe(80);
  });

  test("returns the correct percentage below", () => {
    expect(result.current.percentageBelow).toBe(63);
  });

  test("returns the correct assessment message", () => {
    expect(result.current.assessmentMsg).toBe("Good");
  });
});
