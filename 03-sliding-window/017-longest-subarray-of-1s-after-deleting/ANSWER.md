# Solution

## Intuition

This is identical to "Max Consecutive Ones III" with `k = 1`, but since we **must** delete exactly one element, the answer is `windowSize - 1`.

## Approach

Sliding window allowing at most 1 zero. The window `[left, right]` represents the subarray before deletion. After deleting one element (the zero, or any `1` if there are no zeros), the length is `right - left`.

```ts
function solution(nums: number[]): number {
  let left = 0;
  let zeroCount = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++;
    while (zeroCount > 1) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }
    // window size is right - left + 1, but we delete one element
    maxLen = Math.max(maxLen, right - left);
  }

  return maxLen;
}
```

**Time:** O(n)
**Space:** O(1)
