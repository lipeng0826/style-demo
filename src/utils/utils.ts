export const getArray = (num: Number) => {
  const arr:Number[] = [];
  let i = 1;
  while (i <= num) {
    i++;
    arr.push(i);
  }
  return arr;
};
