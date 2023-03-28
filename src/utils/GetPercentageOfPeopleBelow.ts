export default function GetPercentageOfPeopleBelow(data, result) {
  const currentTestPosition = data.indexOf(result) + 1;
  const resultsAbove = data.length - currentTestPosition;
  return 100 - Math.round((resultsAbove / data.length) * 100);
}
