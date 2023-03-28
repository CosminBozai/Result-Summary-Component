import Test from "./TestInterface";

export function getResult(test: Test): number {
  const { reaction, memory, verbal, visual } = test;
  const result = Math.round(Number(reaction + memory + verbal + visual) / 4);

  return result;
}

export function getAllResults(data: Test[]): number[] {
  const results: number[] = [];
  data.forEach((test) => {
    const { reaction, memory, verbal, visual } = test;
    const result = Math.round(Number(reaction + memory + verbal + visual) / 4);
    results.push(result);
  });
  return results.sort();
}

export function getRandomItem(arr: Test[]): Test {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function GetPercentageOfPeopleBelow(
  allResults: number[],
  result: number
): number {
  const currentTestPosition = allResults.indexOf(result) + 1;
  const resultsAbove = allResults.length - currentTestPosition;
  return 100 - Math.round((resultsAbove / allResults.length) * 100);
}
