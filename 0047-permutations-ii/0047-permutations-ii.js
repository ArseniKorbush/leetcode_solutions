var permuteUnique = function(nums) {
  const result = [];
  const freqMap = new Map();

  // Create frequency map of nums
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const generatePermutations = (currentPerm) => {
    if (currentPerm.length === nums.length) {
      result.push([...currentPerm]);
      return;
    }

    for (const [num, freq] of freqMap) {
      if (freq > 0) {
        freqMap.set(num, freq - 1);
        currentPerm.push(num);

        generatePermutations(currentPerm);

        currentPerm.pop();
        freqMap.set(num, freq);
      }
    }
  };

  generatePermutations([]);

  return result;
};
