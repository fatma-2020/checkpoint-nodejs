const initialValue = 0;
const sumWithInitial = process.argv.slice(2, process.argv.length).reduce(
  (previousValue, currentValue) => Number(previousValue) + Number(currentValue),
  initialValue
);
console.log(sumWithInitial);
