const isMonotonic = (nums) => {
  const n = nums.length;
  if (n <= 2) return true;

  if (nums[0] > nums[n - 1]) {
    // should be decresing
    for (let i = 1; i < n; i++) {
      if (nums[i] > nums[i - 1]) return false;
    }
  } else {
    // should be increasing
    for (let i = 1; i < n; i++) {
      if (nums[i] < nums[i - 1]) return false;
    }
  }

  return true;
};