# Solution

## Intuition

Find the current maximum number of candies. For each kid, check if their candies plus the extra would meet or exceed that maximum.

## Approach

1. Find `max = Math.max(...candies)`.
2. Map each `c` to `c + extraCandies >= max`.

**Time:** O(n)
**Space:** O(n) for output

```ts
function solution(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies);
  return candies.map((c) => c + extraCandies >= max);
}
```
