# Solution

## Intuition

Variable-size sliding window. Expand `right` freely. When the window contains more than `k` zeros, shrink from `left` until the zero count is back to `k`. Track the max window size.

## Approach

```ts
function solution(nums: number[], k: number): number {
  let left = 0;
  let zeroCount = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++;
    while (zeroCount > k) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
```

**Time:** O(n)
**Space:** O(1)
