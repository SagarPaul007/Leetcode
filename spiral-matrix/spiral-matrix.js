const spiralOrder = (matrix) => {
  let output = [];
  const m = matrix.length,
    n = matrix[0].length;

  let total = m * n;
  let rowStart = 0,
    rowEnd = m - 1,
    colStart = 0,
    colEnd = n - 1;

  while (total > 0) {
    for (let i = colStart; i <= colEnd; i++) {
      if (total > 0) {
        output.push(matrix[rowStart][i]);
        --total;
      }
    }

    ++rowStart;

    for (let i = rowStart; i <= rowEnd; i++) {
      if (total > 0) {
        output.push(matrix[i][colEnd]);
        --total;
      }
    }

    --colEnd;

    for (let i = colEnd; i >= colStart; i--) {
      if (total > 0) {
        output.push(matrix[rowEnd][i]);
        --total;
      }
    }

    --rowEnd;

    for (let i = rowEnd; i >= rowStart; i--) {
      if (total > 0) {
        output.push(matrix[i][colStart]);
        --total;
      }
    }

    ++colStart;
  }

  return output;
};