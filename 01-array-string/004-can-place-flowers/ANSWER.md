# Solution

## Intuition

Greedy: scan left to right, and plant a flower at position `i` whenever the current plot and both neighbors are empty. Modifying the array in-place avoids double-counting.

## Approach

For each position `i`:
- Check `flowerbed[i] === 0`
- Check left neighbor: `i === 0 || flowerbed[i-1] === 0`
- Check right neighbor: `i === last || flowerbed[i+1] === 0`
- If all true: plant (set to 1), increment counter

**Time:** O(n)
**Space:** O(1)

```ts
function solution(flowerbed: number[], n: number): boolean {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      count++;
    }
  }
  return count >= n;
}
```
