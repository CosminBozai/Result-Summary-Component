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

export function getRandomItem(data: Test[]): Test {
  return data[Math.floor(Math.random() * data.length)];
}

export function GetPercentageOfPeopleBelow(
  allResults: number[],
  result: number
): number {
  const index = allResults.indexOf(result);
  if (index === 0) return 0;

  return Math.round((index / (allResults.length - 1)) * 100);
}
