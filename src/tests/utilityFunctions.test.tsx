import Test from "../utils/TestInterface";
import {
  getAllResults,
  GetPercentageOfPeopleBelow,
  getResult,
} from "../utils/utilityFunctions";

describe("getResult", () => {
  it("calculates the correct result", () => {
    const test: Test = {
      reaction: 100,
      memory: 80,
      verbal: 67,
      visual: 75,
    };

    expect(getResult(test)).toEqual(81);
  });

  it("calculates the correct result", () => {
    const test: Test = {
      reaction: 63,
      memory: 54,
      verbal: 40,
      visual: 20,
    };

    expect(getResult(test)).toEqual(44);
  });

  it("calculates the correct result", () => {
    const test: Test = {
      reaction: 50,
      memory: 85,
      verbal: 63,
      visual: 72,
    };

    expect(getResult(test)).toEqual(68);
  });
});

describe("getAllResults", () => {
  it("calculates the correct results for an array of tests", () => {
    const tests: Test[] = [
      { reaction: 82, memory: 46, verbal: 69, visual: 74 },
      { reaction: 55, memory: 75, verbal: 83, visual: 61 },
      { reaction: 90, memory: 80, verbal: 70, visual: 90 },
    ];

    expect(getAllResults(tests)).toEqual([68, 69, 83]);
  });
});

describe("GetPercentageOfPeopleBelow", () => {
  // This function gets a SORTED array as the first parameter
  it("calculates the correct percentage of people below a given result", () => {
    const allResults: number[] = [30, 40, 50, 60, 70];
    const result = 50;

    expect(GetPercentageOfPeopleBelow(allResults, result)).toEqual(50);
  });

  it("calculates the correct percentage of people below a given result", () => {
    const allResults: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const result = 90;

    expect(GetPercentageOfPeopleBelow(allResults, result)).toEqual(89);
  });

  it("calculates the correct percentage of people below a given result", () => {
    const allResults: number[] = [11, 12, 45, 55, 67, 69, 70];
    const result = 45;

    expect(GetPercentageOfPeopleBelow(allResults, result)).toEqual(33);
  });

  it("returns 0 if all results are above the given result", () => {
    const allResults: number[] = [70, 79, 80, 84, 90];
    const result = 70;

    expect(GetPercentageOfPeopleBelow(allResults, result)).toEqual(0);
  });

  it("returns 100 if all results are below the given result", () => {
    const allResults: number[] = [70, 76, 87, 89, 90];
    const result = 90;

    expect(GetPercentageOfPeopleBelow(allResults, result)).toEqual(100); // expected percentage is 100 since all results are below the given result
  });
});
