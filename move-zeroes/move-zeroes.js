const moveZeroes = (arr) => {
  const n = arr.length;
  let i = 0;

  for (let j = 0; j < n; j++) {
    if (arr[j] !== 0) {
      arr[i] = arr[j];
      i++;
    }
  }

  while (i < n) {
    arr[i] = 0;
    i++;
  }

  return arr;
};