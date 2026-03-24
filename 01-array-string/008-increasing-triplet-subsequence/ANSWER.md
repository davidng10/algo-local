# Solution

## Intuition

Track two variables: `first` (smallest value seen) and `second` (smallest value seen that is greater than some prior `first`). If we ever find a number greater than `second`, a valid triplet exists.

The key insight: even if `first` gets updated to something smaller later, `second` still represents "there exists a value before it that was smaller than `second`".

## Approach

- `first = Infinity`, `second = Infinity`
- For each `num`:
  - If `num <= first`: update `first = num`
  - Else if `num <= second`: update `second = num` (we found something > first)
  - Else: return `true` (this num > second > first)

**Time:** O(n)
**Space:** O(1)

```ts
function solution(nums: number[]): boolean {
  let first = Infinity;
  let second = Infinity;

  for (const num of nums) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      return true;
    }
  }

  return false;
}
```
