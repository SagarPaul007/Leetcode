const minimumAbsDifference = (arr) => {
  arr.sort((a, b) => a - b);
  let n = arr.length;

  let minDiff = Number.MAX_VALUE;
  for (let i = 0; i < n - 1; i++) {
    if (Math.abs(arr[i + 1] - arr[i]) < minDiff) {
      minDiff = Math.abs(arr[i + 1] - arr[i]);
    }
  }

  let pairs = [];
  for (let i = 0; i < n - 1; i++) {
    if (Math.abs(arr[i + 1] - arr[i]) === minDiff) {
      pairs.push([arr[i], arr[i + 1]]);
    }
  }

  return pairs;
};