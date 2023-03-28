export function getResult(test) {
  const { reaction, memory, verbal, visual } = test;
  const result = Math.round(Number(reaction + memory + verbal + visual) / 4);

  return result;
}

export function getAllResults(data) {
  const results = [];
  data.forEach((test) => {
    const { reaction, memory, verbal, visual } = test;
    const result = Math.round(Number(reaction + memory + verbal + visual) / 4);
    results.push(result);
  });
  return results.sort();
}
