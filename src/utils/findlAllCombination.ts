export function findAllCombinations(total: number, nums: number[]): number[][] {
  const combinations: number[][] = [];

  function backtrack(remain: number, start: number, combination: number[]) {
    if (remain < 0) return;
    if (remain === 0) {
      combinations.push([...combination]);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      combination.push(nums[i]);
      backtrack(remain - nums[i], i, combination);
      combination.pop();
    }
  }

  backtrack(total, 0, []);

  return combinations;
}
