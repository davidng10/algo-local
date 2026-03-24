# Solution

## Intuition

Fixed-size sliding window of size `k`. Compute the initial window sum, then slide by adding the new element and removing the outgoing element. Track the maximum sum.

## Approach

1. Sum first `k` elements → `windowSum`, `maxSum = windowSum`.
2. For `i` from `k` to `n-1`: `windowSum += nums[i] - nums[i-k]`, update `maxSum`.
3. Return `maxSum / k`.

**Time:** O(n)
**Space:** O(1)

```ts
function solution(nums: number[], k: number): number {
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }
  let maxSum = windowSum;
  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum / k;
}
```
